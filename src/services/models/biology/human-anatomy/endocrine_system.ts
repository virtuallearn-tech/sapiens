import { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";
import type { IModelData } from "@interfaces/model";

const EndocrineSystem: IModelData = {
  topic: HUMAN_ANATOMY_TOPICS.ENDOCRINE_SYSTEM,
  source: "/models/endocrine_system.glb",

  name: "Sistema Endócrino",
  title: "Sistema Endócrino",

  description:
    "O sistema endócrino é responsável pela produção e secreção de hormônios que regulam diversas funções do organismo, como crescimento, metabolismo, reprodução e equilíbrio interno.",

  text:
    "O sistema endócrino é composto por um conjunto de glândulas distribuídas pelo corpo, incluindo a hipófise, tireoide, suprarrenais, pâncreas, glândulas sexuais e outras estruturas hormonais. Sua função principal é liberar hormônios diretamente na corrente sanguínea, permitindo a comunicação entre diferentes órgãos e o controle de processos essenciais como crescimento, metabolismo, emoções, resposta ao estresse e reprodução. Ao trabalhar em conjunto com o sistema nervoso, ele ajuda a manter a homeostase e o equilíbrio do organismo.",

  scale: 3,
  scale_sm: 3,
  scale_md: 3,
  scale_lg: 3,
  scale_2lg: 3,

  rotation: [0, 0, 0],
  position: [0, 0, 0],

  node: [],

  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/endocrine-system-b10f70cacb6946da851e5696291398a5">
      Endocrine System
    </a>
    by
    <a href="https://sketchfab.com/brrianj.seely">brrianj.seely</a>
    on
    <a href="https://sketchfab.com">Sketchfab</a>,
    licensed under
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,

  wikipedia: "https://pt.wikipedia.org/wiki/Sistema_end%C3%B3crino",

  hasAnimation: false
} as const;

export const ENDOCRINE_SYSTEM_MODELS: IModelData[] = [
  EndocrineSystem
];
