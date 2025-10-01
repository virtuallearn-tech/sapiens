import type { Itopic } from "interfaces/topic";

import EukaryoticCellCover from '@assets/cover/eukaryotic_cell.jpg'
import ProkaryoticCellCover from '@assets/cover/prokaryotic_cell.jpg'
import PlantCellCover from '@assets/cover/plant_cell.jpg'

export const BIOLOGY_TOPICS: Itopic[] = [
  {
    discipline: "BIOLOGY",
    topic: "CITOLOGY",
    data: [
      {
        code: 'eukaryotic_cell',
        cover: EukaryoticCellCover,
        description: "Células com núcleo definido e organelas membranosas.",
        title: 'Célula Eucarionte',
      },
      {
        code: 'prokaryotic_cell',
        cover: ProkaryoticCellCover,
        description: "Células simples, sem núcleo definido, típicas de bactérias.",
        title: 'Célula Procarionte',
      },
      {
        code: 'plant_cell',
        cover: PlantCellCover,
        description: "Células com parede celular, cloroplastos e vacúolos.",
        title: 'Célula Vegetal',
      }
    ]
  }
]
