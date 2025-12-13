import { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";
import type { IModelData } from "@interfaces/model";
import { getGithubResource, GIT_REPOSITORIES } from "@utils/getGithubResouce";

const MuscularSystem: IModelData = {
  topic: HUMAN_ANATOMY_TOPICS.MUSCULAR_SYSTEM,
  // source: "/models/muscular_system.glb",
  source: getGithubResource(GIT_REPOSITORIES.HUMAN_ANATOMY, "muscular_system.glb"),

  name: "Sistema Muscular",
  title: "Sistema Muscular",

  description:
    "Responsável pelos movimentos corporais, postura e produção de calor.",

  text:
    "O sistema muscular é formado por mais de 600 músculos que permitem desde movimentos voluntários, como correr e falar, até movimentos involuntários, como o batimento cardíaco e a contração dos órgãos internos. Os músculos esqueléticos atuam junto ao sistema esquelético para produzir movimento e manter a postura. Já os músculos lisos controlam funções automáticas, como o movimento do intestino, enquanto o músculo cardíaco impulsiona o sangue pelo corpo. Além disso, a contração muscular libera calor, ajudando na regulação da temperatura corporal.",

  scale: 3,
  scale_sm: 3,
  scale_md: 3,
  scale_lg: 3,
  scale_2lg: 3,

  rotation: [0, 0, 0],
  position: [0, 0, 0],

  node: [],

  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/muscle-system-d41e438f3bfa4da693ed0afda78f3631">
      Muscle System
    </a>
    by
    <a href="https://sketchfab.com/brrianj.seely">brrianj.seely</a>
    on
    <a href="https://sketchfab.com">Sketchfab</a>,
    licensed under
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,

  wikipedia: "https://pt.wikipedia.org/wiki/Sistema_muscular",
  sceneBg: '#000'

  // hasAnimation: true,
  // animation: "Take 001"
} as const;

export const MUSCULAR_SYSTEM_MODELS: IModelData[] = [
  MuscularSystem
];
