import { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";
import type { IModelData } from "@interfaces/model";

const LymphaticSystem: IModelData = {
  topic: HUMAN_ANATOMY_TOPICS.LYMPHATIC_SYSTEM,
  source: "/models/lymphatic_system.glb",

  name: "Sistema Linfático",
  title: "Sistema Linfático",

  description:
    "Auxilia na defesa do organismo, transporte de linfa e equilíbrio de fluidos corporais.",

  text:
    "O sistema linfático é composto por vasos linfáticos, linfonodos, baço, timo e pela linfa — um fluido transparente rico em glóbulos brancos. Ele desempenha três funções essenciais: manter o equilíbrio dos líquidos corporais, transportar gorduras absorvidas no intestino e participar ativamente da defesa imunológica. Os linfonodos filtram partículas e microrganismos, enquanto órgãos como o baço e o timo ajudam na produção e maturação de células de defesa. Sem o sistema linfático, o corpo não conseguiria combater infecções de forma eficiente.",

  scale: 3,
  scale_sm: 3,
  scale_md: 3,
  scale_lg: 3,
  scale_2lg: 3,

  rotation: [0, 0, 0],
  position: [0, 0, 0],

  node: [],

  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/lymphatic-system-286b841af50143e58d4c5fcbfd41fbbe">
      Lymphatic System
    </a>
    by
    <a href="https://sketchfab.com/brrianj.seely">brrianj.seely</a>
    on
    <a href="https://sketchfab.com">Sketchfab</a>,
    licensed under
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,

  wikipedia: "https://pt.wikipedia.org/wiki/Sistema_linf%C3%A1tico",

  hasAnimation: false,
  // animation: "Take 001"
} as const;

export const LYMPHATIC_SYSTEM_MODELS: IModelData[] = [
  LymphaticSystem
];
