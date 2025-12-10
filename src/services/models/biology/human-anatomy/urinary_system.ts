import { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";
import type { IModelData } from "@interfaces/model";

const UrinarySystem: IModelData = {
  topic: HUMAN_ANATOMY_TOPICS.URINARY_SYSTEM,
  source: "/models/urinary_system.glb",

  name: "Sistema Urinário",
  title: "Sistema Urinário",

  description:
    "Responsável pela filtragem do sangue, formação da urina e regulação hídrica do corpo.",

  text:
    "O sistema urinário tem como função principal filtrar o sangue, remover substâncias tóxicas e regular o volume de água e sais minerais do corpo. É composto pelos rins, ureteres, bexiga urinária e uretra. Os rins produzem a urina ao filtrarem o plasma sanguíneo; os ureteres conduzem essa urina até a bexiga, onde ela é armazenada temporariamente; e a uretra realiza sua eliminação. Além da excreção, o sistema urinário participa da manutenção do pH sanguíneo e da pressão arterial através de mecanismos hormonais.",

  scale: 3,
  scale_sm: 3,
  scale_md: 3,
  scale_lg: 3,
  scale_2lg: 3,

  rotation: [0, 0, 0],
  position: [0, 0, 0],

  node: [],

  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/urinary-system-e400702200214c128ce25c6ea371f2b4">
      Urinary System
    </a>
    by
    <a href="https://sketchfab.com/brrianj.seely">brrianj.seely</a>
    on
    <a href="https://sketchfab.com">Sketchfab</a>,
    licensed under
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,

  wikipedia: "https://pt.wikipedia.org/wiki/Sistema_urin%C3%A1rio",

  hasAnimation: false,
  // animation: "Take 001"
} as const;

export const URINARY_SYSTEM_MODELS: IModelData[] = [
  UrinarySystem
];
