import { HUMAN_ANATOMY_TOPICS } from "@interfaces/disciplines/biology-topics/human-anatomy";
import type { IModelData } from "@interfaces/model";
import { getGithubResource, GIT_REPOSITORIES } from "@utils/getGithubResouce";

const RespiratorySystem: IModelData = {
  topic: HUMAN_ANATOMY_TOPICS.RESPIRATORY_SYSTEM,
  // source: "/models/respiratory_system.glb",
  source: getGithubResource(GIT_REPOSITORIES.HUMAN_ANATOMY, "respiratory_system.glb"),
  // source:"/models/tiger.glb",
  name: "Sistema Respiratório",
  title: "Sistema Respiratório",
  description: "Sistema responsável pelas trocas gasosas, permitindo a entrada de oxigênio e a eliminação de dióxido de carbono.",
  text:
    "O sistema respiratório é o conjunto de órgãos que garante as trocas gasosas entre o corpo humano e o ambiente. Ele permite que o oxigênio — essencial para a produção de energia nas células — entre no organismo, ao mesmo tempo em que remove o dióxido de carbono, um gás residual do metabolismo celular. É composto pelas vias aéreas (nariz, faringe, laringe, traqueia e brônquios) e pelos pulmões, onde ocorre a hematose. O bom funcionamento desse sistema é fundamental para a sobrevivência, o equilíbrio do pH sanguíneo e o suporte às atividades físicas e cognitivas.",
  scale: 20,
  scale_sm: 22,
  scale_md: 22,
  scale_lg: 23,
  scale_2lg: 23,
  rotation: [0, 0, 0],
  position: [0, 0.3, 0],

 node: [
  { 
    name: "Pulmões",
    description: "Órgãos responsáveis pelas trocas gasosas.",
    node: ["mesh_4", "mesh_17"],
    text: "Os pulmões realizam as trocas de oxigênio e gás carbônico com o sangue. Cada pulmão é dividido em lobos e contém milhões de alvéolos, onde ocorre a respiração celular.",
  },
  { 
    name: "Veias pulmonares",
    description: "Transportam sangue oxigenado dos pulmões ao coração.",
    node: ["Object_34", "Object_36"],
    text: "As veias pulmonares levam o sangue rico em oxigênio dos pulmões para o átrio esquerdo do coração, completando o ciclo da oxigenação durante a respiração.",
  },
  { 
    name: "Arterias pulmonares",
    description: "Levam sangue pobre em oxigênio do coração aos pulmões.",
    node: ["Object_19"],
    text: "As artérias pulmonares conduzem o sangue venoso do ventrículo direito até os pulmões, onde ele será oxigenado nos alvéolos.",
  },
  { 
    name: "Diafragma",
    description: "Músculo principal da respiração.",
    node: ["mesh_16"],
    text: "O diafragma se contrai e desce para permitir a entrada de ar nos pulmões, e relaxa para expulsar o ar. Ele funciona como um pistão que controla a ventilação pulmonar.",
  },
  { 
    name: "Traquéia",
    description: "Canal que conduz o ar até os pulmões.",
    node: ["Object_31"],
    text: "A traquéia é um tubo formado por anéis cartilaginosos que mantém sua abertura. Ela conduz o ar da laringe até os brônquios, iniciando o caminho para dentro dos pulmões.",
  },
  { 
    name: "Coração",
    description: "Bombeia sangue para todo o corpo, incluindo os pulmões.",
    node: [
      "mesh_10", "mesh_11", "mesh_12", 
      "mesh_13", "mesh_14", "mesh_15"
    ],
    text: "O coração trabalha junto com o sistema respiratório. Ele envia sangue para os pulmões através das artérias pulmonares e recebe o sangue oxigenado pelas veias pulmonares, distribuindo-o ao resto do corpo.",
  },
],
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