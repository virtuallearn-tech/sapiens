import { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";
import type { IModelData } from "@interfaces/model";

const DigestiveSystem: IModelData = {
  topic: HUMAN_ANATOMY_TOPICS.DIGESTIVE_SYSTEM,
  source: "/models/digestive_system.glb",
  name: "Sistema Digestório",
  title: "Sistema Digestório",

  description:
    "Sistema responsável pela digestão e absorção de nutrientes essenciais ao corpo.",

  text:
    "O sistema digestório é o conjunto de órgãos que transforma os alimentos em moléculas menores capazes de serem absorvidas pelo corpo. Ele inclui estruturas como boca, esôfago, estômago, intestinos, fígado e pâncreas. Durante o processo digestivo, o alimento é triturado, quebrado por enzimas, absorvido pelas paredes intestinais e distribuído para as células através da corrente sanguínea. O bom funcionamento desse sistema é fundamental para fornecer energia, reparar tecidos e manter o metabolismo ativo — conhecimentos muito cobrados no ensino médio e no ENEM.",

  // Como solicitado, node vazio
  node: [],

  scale: 2,
  scale_sm: 2,
  scale_md: 2,
  scale_lg: 2,
  scale_2lg: 2,

  rotation: [0, 0, 0],
  position: [0, 0, 0],

  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/digestive-system-e05132b0e33b41ad87eefcc59579d873">
      Digestive System
    </a>
    by 
    <a href="https://sketchfab.com/jrdnether">jrdnether</a>
    on 
    <a href="https://sketchfab.com">Sketchfab</a>, 
    licensed under 
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,

  wikipedia: "https://pt.wikipedia.org/wiki/Sistema_digestório",

  hasAnimation: false
};

export const DIGESTIVE_SYSTEM_MODELS: IModelData[] = [
  DigestiveSystem
];
