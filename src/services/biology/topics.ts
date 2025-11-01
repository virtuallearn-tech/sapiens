import type { Itopic } from "interfaces/topic"

import EukaryoticCellCover from '@assets/cover/eukaryotic_cell.jpg'
import ProkaryoticCellCover from '@assets/cover/prokaryotic_cell.jpg'
import PlantCellCover from '@assets/cover/plant_cell.jpg'

export const BIOLOGY_TOPICS: Itopic = {
  discipline: "BIOLOGY",
  data: [
    {
      module: "CYTOLOGY",
      data: [
        {
          topic: 'eukaryotic_cell',
          cover: EukaryoticCellCover,
          description: "Células com núcleo definido e organelas membranosas.",
          title: 'Célula Eucarionte',
        },
        {
          topic: 'prokaryotic_cell',
          cover: ProkaryoticCellCover,
          description: "Células simples, sem núcleo definido, típicas de bactérias.",
          title: 'Célula Procarionte',
        },
        {
          topic: 'plant_cell',
          cover: PlantCellCover,
          description: "Células com parede celular, cloroplastos e vacúolos.",
          title: 'Célula Vegetal',
        }
      ]
    },
    {
      module: 'ANIMAL_KINGDOM',
      data: [
        {
          topic: 'cnidarians_class_anthozoa',
          cover: PlantCellCover,
          description: "Cnidário fixo, construtor de recifes. Encontrado em águas tropicais rasas, com colônias maciças que lembram os sulcos de um cérebro humano.",
          title: "Coral-Cérebro"
        },
        {
          topic: 'cnidarians_class_hydrozoa',
          cover: PlantCellCover,
          description: "Pequena medusa transparente da ordem Trachymedusae, encontrada em águas tropicais e temperadas.",
          title: 'Liriope Jellyfish',
        },
        {
          topic: 'cnidarians_class_scyphozoa',
          cover: PlantCellCover,
          description: "Cnidários flutuantes. Encontrada no litoral brasileiro. Possui coloração rosada",
          title: 'Água viva Geléia',
        },
        {
          topic: 'mollusca_class_gastropoda',
          cover: PlantCellCover,
          description: "Molusco gastrópode terrestre, possui concha espiralada e respira por pulmões adaptados à vida terrestre.",
          title: 'Euhadra herklotsi',
        },
        // {
        //   topic: 'mollusca_class_cephalopoda_bobtail_squid',
        //   cover: PlantCellCover,
        //   description: "Cefalópode de pequeno porte da família Sepiolidae. Possui corpo arredondado, vive enterrado na areia durante o dia e apresenta bioluminescência simbiótica.",
        //   title: 'Lula Bobtail Squid',
        // },
        {
          topic: 'mollusca_class_cephalopoda_octopus',
          cover: PlantCellCover,
          description: "Pequeno cefalópode do Indo-Pacífico, famoso por seus anéis azuis fluorescentes e por ser um dos animais mais venenosos do mundo.",
          title: 'Blue-ringed Octopus',
        },
        {
          topic: 'mollusca_class_cephalopoda_nautilus',
          cover: PlantCellCover,
          description: "Cefalópode marinho com concha espiralada e câmaras internas que regulam a flutuabilidade. Considerado um 'fóssil vivo'.",
          title: 'Nautilus pompilius',
        }

      ]
    }
  ]
}


