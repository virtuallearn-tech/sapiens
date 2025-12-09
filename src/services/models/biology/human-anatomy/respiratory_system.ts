import { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";
import type { IModelData } from "@interfaces/model";

const RespiratorySystem: IModelData = {
  topic: HUMAN_ANATOMY_TOPICS.RESPIRATORY_SYSTEM,
  source: "/models/respiratory_system.glb",
  // source:"/models/tiger.glb",
  name: "Respiratory System",
  title: "Sistema Respiratório",
  description: "Sistema responsável pelas trocas gasosas, permitindo a entrada de oxigênio e a eliminação de dióxido de carbono.",
  text:
    "O sistema respiratório é o conjunto de órgãos que garante as trocas gasosas entre o corpo humano e o ambiente. Ele permite que o oxigênio — essencial para a produção de energia nas células — entre no organismo, ao mesmo tempo em que remove o dióxido de carbono, um gás residual do metabolismo celular. É composto pelas vias aéreas (nariz, faringe, laringe, traqueia e brônquios) e pelos pulmões, onde ocorre a hematose. O bom funcionamento desse sistema é fundamental para a sobrevivência, o equilíbrio do pH sanguíneo e o suporte às atividades físicas e cognitivas.",
  scale: 20,
  scale_sm: 1,
  scale_md: 1,
  scale_lg: 1,
  scale_2lg: 1,
  rotation: [0, 0, 0],
  position: [0, 0.3, 0],

  // Será preenchido futuramente
  node: [],

  attribuition: `<div>
    <a href="https://sketchfab.com/3d-models/sistema-respiratorio-52edcdc21ad04b99a48baf0cb6e99ab6">
      Sistema Respiratório
    </a> 
    by 
    <a href="https://sketchfab.com/galves2024">galves2024</a> 
    on 
    <a href="https://sketchfab.com">Sketchfab</a>, 
    licensed under 
    <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
  </div>`,

  wikipedia: "https://pt.wikipedia.org/wiki/Sistema_respirat%C3%B3rio",
  // sceneBg: "#000",
  hasAnimation: true,
  animation: "Take 001"
} as const;

export const RESPIRATORY_SYSTEM_MODELS: IModelData[] = [
  RespiratorySystem
]