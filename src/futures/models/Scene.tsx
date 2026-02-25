import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useProgress } from '@react-three/drei';
import React, { Suspense, useEffect, useState, useCallback, useReducer, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { IClass, IModelData } from '@interfaces/model';
import { getModelByModule, getModelByTopic, setClass } from '@services/models/getModel';
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
import { useAudio } from '@context/AudioContext';
import { AudioActionType } from '@reducers/audio.reducer';

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

  const { discipline, topic, code } = useParams();

  const { state, dispatch } = useModel();
  const { dispatch: uiDispatch } = useUiScene();
  const { dispatch: audioDispatch, state: audioState } = useAudio();
  const {
    isPlaying: isPlayingAudio, play: playAudio,
    resume: resumeAudio, stop: stopAudio
  } = useAudioPlayer()

  const [bg, setBg] = useState(defaultBgColor);
  const [updateScale, setUpdateScale] = useState(false);
  const [license, setLicense] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // ===============================
  // ONLINE / OFFLINE
  // ===============================
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // ===============================
  // LOAD MODEL (ÚNICA FONTE DE VERDADE)
  // ===============================
  useEffect(() => {
    if (!isOnline) return;
    if (!discipline || !topic || !code) return;

    const model = getModelByTopic(code as any, discipline as any, topic as any);
    if (!model) return;

    // 🔥 RESET GLOBAL ANTES DE TROCAR MODELO
    stopAudio();
    audioDispatch({ type: AudioActionType.SET_STATUS, payload: 'idle' });
    uiDispatch({ type: 'CLOSE_AUDIO_MENU' });

    dispatch({ type: ModelActionType.SET_MODEL, payload: model });
    dispatch({ type: ModelActionType.SET_TEXT_TO_SPEECH, payload: model.text ?? '' });
    dispatch({ type: ModelActionType.SET_EXPLANATION, payload: model.text ?? '' });
    dispatch({ type: ModelActionType.SET_TITLE, payload: model.name ?? '' });
    dispatch({ type: ModelActionType.SET_FOCUS_NAME, payload: model.name ?? '' });
    dispatch({ type: ModelActionType.SET_HAS_ANIMATION, payload: model.hasAnimation ?? false });
    dispatch({ type: ModelActionType.SET_ANIMATION, payload: model.hasAnimation ?? false });
    dispatch({ type: ModelActionType.SET_SOUND, payload: model.sound ?? null });

    setBg(model.sceneBg ?? defaultBgColor);

  }, [discipline, topic, code, isOnline]);

  // ===============================
  // MENU DINÂMICO BASEADO NO MODELO
  // ===============================
  useEffect(() => {
    if (!state.model) return;

    const nodesNames =
      state.model.node?.map(n => n.name).filter(Boolean) ?? [];

    const labels = [state.model.name, ...nodesNames, 'Fechar'];

    const exploreMenu: IActionMenuOption[] = labels.map((label, index) => ({
      label,
      id: `${index + 1}`,
      onSelect: () => handleModelInfo(label)
    }));

    dispatch({ type: ModelActionType.SET_MENU_EXPLORE, payload: exploreMenu });

    const optionsMenu: IActionMenuOption[] = [
      {
        id: 'info',
        label: 'Informações do modelo',
        onSelect: () => setLicense(prev => !prev)
      },
      {
        id: 'reset',
        label: 'Resetar posição',
        onSelect: () => setUpdateScale(true)
      }
    ];

    dispatch({ type: ModelActionType.SET_MENU_OPTIONS, payload: optionsMenu });

  }, [state.model]);

  // ===============================
  // HANDLE MODEL INFO
  // ===============================
  const handleModelInfo = useCallback((name: string) => {
    if (!state.model) return;

    if (name === state.model.name || name === 'Fechar') {

      dispatch({ type: ModelActionType.SET_TEXT_TO_SPEECH, payload: state.model.text });
      dispatch({ type: ModelActionType.SET_EXPLANATION, payload: state.model.text });
      dispatch({ type: ModelActionType.SET_TITLE, payload: state.model.name });
      dispatch({ type: ModelActionType.SET_FOCUS_NAME, payload: state.model.name });

      uiDispatch({ type: 'CLOSE_AUDIO_MENU' });

    } else {

      const node = state.model.node?.find(n => n.name === name);
      if (!node) return;

      dispatch({ type: ModelActionType.SET_TEXT_TO_SPEECH, payload: node.text });
      dispatch({ type: ModelActionType.SET_EXPLANATION, payload: node.text });
      dispatch({ type: ModelActionType.SET_TITLE, payload: node.name });
      dispatch({ type: ModelActionType.SET_FOCUS_NAME, payload: node.node });

      uiDispatch({ type: 'OPEN_AUDIO_MENU' });
    }

    uiDispatch({ type: 'TOGGLE_EXPLORE_MENU' });

  }, [state.model]);

  // ===============================
  // CANVAS
  // ===============================
  const SceneCanvas = () => (
    <Canvas className='m-scene__canvas' camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <OrbitControls maxDistance={10} />
      <color attach="background" args={[bg]} />
      <Suspense fallback={<Loader />}>
        <Model updateScale={updateScale} />
      </Suspense>
    </Canvas>
  );

  if (!isOnline) {
    return (
      <div className="m-scene__offline">
        <h2>Conexão necessária</h2>
        <p>Você precisa estar online para acessar os modelos 3D.</p>
      </div>
    );
  }

  return (
    <>
      <MobileSceneLayout
        discipline={discipline!}
        topic={topic!}
        code={code!}
      >
        <SceneCanvas />
      </MobileSceneLayout>

      {license && <License content={state.model?.attribuition!} />}
    </>
  );
};

export default Scene;




