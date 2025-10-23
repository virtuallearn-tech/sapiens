import type { IModelData } from "@interfaces/model";


const Scyphozoa: IModelData = {
  topic: "cnidarians_class_scyphozoa",
  source: "/cnidarians_class_scyphozoa.glb",
  name: "Água-viva mosaico (Catostylus mosaicus)",
  title: "Água-viva Blubber Jelly",
  description: "As águas-vivas da classe Scyphozoa são conhecidas como as 'verdadeiras águas-vivas'. Elas possuem corpo gelatinoso em forma de sino, vivem principalmente em ambientes marinhos costeiros e desempenham papel importante no equilíbrio ecológico dos oceanos.",
  text: "A classe Scyphozoa reúne as chamadas 'verdadeiras águas-vivas', animais marinhos do filo Cnidaria. Seu corpo é formado por uma mesogleia gelatinosa, com tentáculos que contêm cnidócitos — células especializadas na captura de presas e defesa. O ciclo de vida é marcado pela predominância da fase medusoide, que nada livremente e se alimenta de plâncton, pequenos peixes e outros organismos. A Blubber Jelly (*Catostylus mosaicus*) é um representante típico dessa classe, encontrada em águas costeiras da região do Indo-Pacífico. Ela possui coloração azulada ou amarronzada e pode formar grandes agregações. Além de sua importância ecológica como predadora e presa em cadeias alimentares marinhas, destaca-se como exemplo da necessidade de conservar a biodiversidade oceânica, já que mudanças ambientais e poluição podem afetar diretamente suas populações e o equilíbrio dos ecossistemas.",
  scale: 1,
  scale_sm: 1,
  scale_md: 1,
  scale_lg: 1,
  scale_2lg: 1,
  rotation: [0, 0, 0],
  position: [0, 0, 0],
  node: [
    {
      name: "Estrutura corporal",
      node: null,
      description: "Corpo em forma de sino, composto por mesogleia gelatinosa.",
      text: "A Blubber Jelly apresenta corpo mole e translúcido, sustentado por uma mesogleia espessa. Essa estrutura permite flutuar e se locomover lentamente no ambiente marinho."
    },
    {
      name: "Tentáculos e alimentação",
      node: null,
      description: "Tentáculos com cnidócitos para captura de presas.",
      text: "Os tentáculos da Blubber Jelly possuem cnidócitos, células urticantes que liberam toxinas para imobilizar presas. Alimenta-se de plâncton, pequenos crustáceos e peixes."
    },
    {
      name: "Habitat",
      node: null,
      description: "Ambientes marinhos costeiros do Indo-Pacífico.",
      text: "A Blubber Jelly é encontrada em águas costeiras, geralmente em estuários e baías, onde pode formar grandes grupos. Prefere águas mornas e ricas em nutrientes."
    },
    {
      name: "Importância ecológica",
      node: null,
      description: "Papel no equilíbrio dos ecossistemas marinhos.",
      text: "Como predadora de plâncton e presa de tartarugas marinhas e peixes, a Blubber Jelly participa ativamente das cadeias alimentares. Sua conservação é essencial para manter o equilíbrio ecológico dos oceanos."
    }
  ],
  attribuition: "Conteúdo adaptado para fins educativos - App Sapiens",
  wikipedia: "https://pt.wikipedia.org/wiki/Catostylus_mosaicus"
};

export const CNIDARIAN_MODELS: IModelData[] = [
  Scyphozoa
]
