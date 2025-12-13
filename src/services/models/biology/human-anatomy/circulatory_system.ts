import { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";
import type { IModelData } from "@interfaces/model";
import { getGithubResource, GIT_REPOSITORIES } from "@utils/getGithubResouce";

const CirculatorySystem: IModelData = {
  topic: HUMAN_ANATOMY_TOPICS.CIRCULATORY_SYSTEM,
  // source: "/models/circulatory_system.glb",
  source: getGithubResource(GIT_REPOSITORIES.HUMAN_ANATOMY, "circulatory_system.glb"),
  name: "Sistema Circulatório",
  title: "Sistema Circulatório",

  description:
    "O sistema circulatório é responsável por transportar sangue, nutrientes, gases e hormônios por todo o corpo, garantindo o funcionamento adequado dos órgãos e tecidos.",

  text:
    "O sistema circulatório é composto pelo coração, pelo sangue e por uma vasta rede de vasos sanguíneos. Ele distribui oxigênio e nutrientes às células, remove resíduos metabólicos e contribui para a regulação da temperatura corporal e do equilíbrio químico do organismo. O coração funciona como uma bomba muscular que impulsiona o sangue por todo o corpo através das artérias, veias e capilares. Esse sistema é essencial para manter todas as funções vitais e integrar os demais sistemas do corpo humano.",

  scale: 3,
  scale_sm: 3,
  scale_md: 3,
  scale_lg: 3,
  scale_2lg: 3,

  rotation: [0, 0, 0],
  position: [0, 0, 0],

  // Nenhum destaque disponível no modelo
  node: [],

  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/circulatory-system-a46a7227a957442da30486b97547eaf5">
      Circulatory System
    </a>
    by
    <a href="https://sketchfab.com/brrianj.seely">brrianj.seely</a>
    on
    <a href="https://sketchfab.com">Sketchfab</a>,
    licensed under
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,

  wikipedia: "https://pt.wikipedia.org/wiki/Sistema_circulat%C3%B3rio",
  hasAnimation: false,
} as const;

export const CIRCULATORY_SYSTEM_MODELS: IModelData[] = [
  CirculatorySystem
];
