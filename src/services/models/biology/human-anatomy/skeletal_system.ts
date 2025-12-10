import { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";
import type { IModelData } from "@interfaces/model";

const SkeletalSystem: IModelData = {
  topic: HUMAN_ANATOMY_TOPICS.SKELETAL_SYSTEM,
  source: "/models/skeletal_system.glb",

  name: "Sistema Esquelético",
  title: "Sistema Esquelético",

  description:
    "Sustenta o corpo, protege órgãos vitais e permite os movimentos em conjunto com os músculos.",

  text:
    "O sistema esquelético é formado pelos ossos, cartilagens e articulações que sustentam o corpo humano e protegem órgãos internos importantes, como o cérebro e os pulmões. Ele também permite os movimentos corporais ao atuar em conjunto com o sistema muscular. Além disso, os ossos armazenam minerais, como cálcio e fósforo, e abrigam a medula óssea, responsável pela produção de células sanguíneas. Esse sistema é essencial para o suporte estrutural, a proteção, o movimento e a homeostase mineral do organismo.",

  scale: 3,
  scale_sm: 3,
  scale_md: 3,
  scale_lg: 3,
  scale_2lg: 3,

  rotation: [0, 0, 0],
  position: [0, 0, 0],

  node: [],

  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/skeletal-system-a16faac00e9944f7a80ed390844e221f">
      Skeletal System
    </a>
    by
    <a href="https://sketchfab.com/brrianj.seely">brrianj.seely</a>
    on
    <a href="https://sketchfab.com">Sketchfab</a>,
    licensed under
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,

  wikipedia: "https://pt.wikipedia.org/wiki/Sistema_esquel%C3%A9tico",

  // hasAnimation: true,
  // animation: "Take 001",
  sceneBg: '#000'
} as const;

export const SKELETAL_SYSTEM_MODELS: IModelData[] = [
  SkeletalSystem
];
