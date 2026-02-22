import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useProgress } from '@react-three/drei';
import React, { Suspense, useEffect, useState, useCallback, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { IClass, IModelData } from '@interfaces/model';
import { getModelByTopic, setClass } from '@services/models/getModel';
import { MobileSceneLayout } from './ui/MobileSceneLayout';
import type { IActionMenuOption } from './ui/MobileActionMenu';
import { License } from '@components/layout/License';
import { useAudioPlayer } from '@hooks/useAudio';
import { useSpeech } from '@hooks/useSpeech';
//import { Model } from './Model'; // você pode manter lazy se quiser

const Model = React.lazy(() => import("./Model"));

import { ModelActionType, ModelReducer, type ModelState } from '@reducers/model.reducer'; // seu reducer
import { useModel } from '@context/ModelContext';
import { useUiScene } from '@context/UiSceneContext';

const defaultBgColor = '#CCCCCC';

// Loader do Canvas
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          color: "white",
          padding: "6px 12px",
          borderRadius: "8px",
          fontFamily: "sans-serif",
          fontSize: "0.9rem",
          display: "inline-block",
          whiteSpace: "nowrap"
        }}
      >
        {progress.toFixed(0)}% carregado
      </div>
    </Html>
  )
}

const Scene = () => {

  const navigate = useNavigate();
  const { discipline, topic, code } = useParams();
  const { state, dispatch } = useModel()
  const { state: uiState, dispatch: uiDispatch } = useUiScene()


  // ===== Reducer da Model =====
  /*const [state, dispatch] = useReducer(ModelReducer, {
    model: null,
    title: '',
    textToSpeech: '',
    explanation: '',
    focusName: null,
    menuOptions: [],
    exploreMenu: [],
    hasAnimation: false,
    isAnimating: false,
  });*/

  // ===== Estados locais UI =====
  const [bg, setBg] = useState(defaultBgColor);
  const [updateScale, setUpdateScale] = useState(false);
  const [license, setLicense] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [classRoutine, setClassRoutine] = useState<IClass[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isClassActive, setIsClassActive] = useState(false);
  const [isClassPaused, setIsClassPaused] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const { isSpeaking, isPaused, pause, resume, stop, speak } = useSpeech();
  const { play: playAudio, stop: stopAudio } = useAudioPlayer();

  // ===== Detecta online/offline =====
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, []);

  // ===== Carrega a model =====
  useEffect(() => {
    if (!isOnline) return;
    const m = getModelByTopic(code as any, discipline as any, topic as any);
    if (!m) return;
    console.log('MODEL SETADA ', m);

    // dispatch para o reducer
    dispatch({ type: ModelActionType.SET_MODEL, payload: m });
    dispatch({ type: ModelActionType.SET_TEXT_TO_SPEECH, payload: m.text ?? '' });
    dispatch({ type: ModelActionType.SET_EXPLANATION, payload: m.text ?? '' });
    dispatch({ type: ModelActionType.SET_TITLE, payload: m.name ?? '' });
    dispatch({ type: ModelActionType.SET_HAS_ANIMATION, payload: m.hasAnimation ?? false });
    dispatch({ type: ModelActionType.SET_ANIMATION, payload: m.hasAnimation ?? false });

    console.log('NOME DA MODE NO STATE ', state.title)

    if (m.sceneBg) setBg(m.sceneBg);

  }, [isOnline, code, discipline, topic]);

  useEffect(() => {
    console.log('STATE ATUALIZADO:', state);
  }, [state]);


  // ===== Atualiza menuOptions baseado na model =====
  useEffect(() => {
    if (!state.model) return;

    const nodesNames =
      state.model.node?.map(n => n.name).filter((s): s is string => typeof s === 'string') ?? [];

    const labels = [state.model.name, ...nodesNames, 'Fechar'];
    const t: IActionMenuOption[] = labels.map((d, i) => ({
      label: d,
      id: `${i + 1}`,
      onSelect: () => handleModelInfo(d)
    }));

    dispatch({ type: ModelActionType.SET_MENU_EXPLORE, payload: t });

    // ===== Menu =====
    const optionsMenu: IActionMenuOption[] = [
      { id: 'info', label: 'Informações do modelo', onSelect: () => setLicense(prev => !prev) },
      { id: 'reset', label: 'Resetar posição', onSelect: () => setUpdateScale(true) }
    ];

    dispatch({ type: ModelActionType.SET_MENU_OPTIONS, payload: optionsMenu });

  }, [state.model]);

  // ===== handleModelInfo =====
  const handleModelInfo = useCallback((name: string) => {
    if (!state.model) return;

    if (name === state.model.name || name === 'Fechar') {
      dispatch({ type: ModelActionType.SET_TEXT_TO_SPEECH, payload: state.model.text });
      dispatch({ type: ModelActionType.SET_EXPLANATION, payload: state.model.text });
      dispatch({ type: ModelActionType.SET_TITLE, payload: state.model.name });
      dispatch({ type: ModelActionType.SET_FOCUS_NAME, payload: state.model.name });
      uiDispatch({ type: 'CLOSE_AUDIO_MENU' })
    }
    else 
      {
      const findText = state.model.node?.find(n => n.name === name);
      if (findText) {
        dispatch({ type: ModelActionType.SET_TEXT_TO_SPEECH, payload: findText.text });
        dispatch({ type: ModelActionType.SET_EXPLANATION, payload: findText.text });
        dispatch({ type: ModelActionType.SET_TITLE, payload: findText.name });
        dispatch({ type: ModelActionType.SET_FOCUS_NAME, payload: findText.node });
        uiDispatch({ type: 'OPEN_AUDIO_MENU' })
      }
    }

    uiDispatch({type: 'TOGGLE_EXPLORE_MENU'})

  }, [state.model]);

  // ===== Rotina de aula =====
  useEffect(() => {
    if (!isClassActive || isClassPaused) return;
    if (classRoutine.length === 0 || currentStep >= classRoutine.length) {
      dispatch({ type: ModelActionType.SET_FOCUS_NAME, payload: null });
      setIsClassActive(false);
      return;
    }

    const current = classRoutine[currentStep];

    dispatch({ type: ModelActionType.SET_TITLE, payload: current.name });
    dispatch({ type: ModelActionType.SET_EXPLANATION, payload: current.text });
    dispatch({ type: ModelActionType.SET_TEXT_TO_SPEECH, payload: current.text });
    dispatch({ type: ModelActionType.SET_FOCUS_NAME, payload: current.node });

    speak(current.text, {
      onAllEnd: () => {
        if (!isClassPaused) setCurrentStep(prev => prev + 1);
      }
    });
  }, [currentStep, classRoutine, isClassActive, isClassPaused]);

  // ===== Canvas =====
  const SceneCanvas = () => (
    <Canvas className='m-scene__canvas' camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <OrbitControls maxDistance={10} />
      <color attach="background" args={[bg]} />
      <Suspense fallback={<Loader />}>
        <Model
          model={state.model!}
          focusNames={state.focusName}
          updateScale={updateScale}
          isAnimating={state.isAnimating}
        />
      </Suspense>
    </Canvas>
  );

  if (!isOnline) return (
    <div className="m-scene__offline">
      <h2>Conexão necessária</h2>
      <p>Você precisa estar online para acessar os modelos 3D.</p>
    </div>
  );


  return (
    <>
      <MobileSceneLayout>
        <SceneCanvas />
      </MobileSceneLayout>
      {license && <License content={state.model?.attribuition!} />}
    </>
  );
};

export default Scene;




