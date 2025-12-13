import { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";
import type { IModelData } from "@interfaces/model";
import { getGithubResource, GIT_REPOSITORIES } from "@utils/getGithubResouce";

const NervousSystem: IModelData = {
  topic: HUMAN_ANATOMY_TOPICS.NERVOUS_SYSTEM,
  // source: "/models/nervous_system.glb",
  source: getGithubResource(GIT_REPOSITORIES.HUMAN_ANATOMY, "nervous_system.glb"),

  name: "Sistema Nervoso",
  title: "Sistema Nervoso",

  description:
    "Responsável por coordenar funções do corpo e processar informações por meio de sinais elétricos.",

  text:
    "O sistema nervoso controla e integra todas as funções do corpo humano. Ele é dividido em sistema nervoso central (SNC), formado pelo cérebro e medula espinhal, e sistema nervoso periférico (SNP), composto pelos nervos que se ramificam por todo o corpo. O cérebro interpreta estímulos, controla pensamentos, memória e coordenação, enquanto a medula espinhal transmite sinais entre o cérebro e o resto do corpo. Juntos, esses componentes permitem movimentos, percepções, emoções e respostas rápidas a estímulos do ambiente.",

  scale: 3,
  scale_sm: 3,
  scale_md: 3,
  scale_lg: 3,
  scale_2lg: 3,

  rotation: [0, 0, 0],
  position: [0, 0, 0],

  node: [],

  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/nervous-system-b4c0239fe0a34bbb92606f8a5248d0fa">
      Nervous System
    </a>
    by
    <a href="https://sketchfab.com/brrianj.seely">brrianj.seely</a>
    on
    <a href="https://sketchfab.com">Sketchfab</a>,
    licensed under
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,

  wikipedia: "https://pt.wikipedia.org/wiki/Sistema_nervoso",

  hasAnimation: false
} as const;

export const NERVOUS_SYSTEM_MODELS: IModelData[] = [
  NervousSystem
];
