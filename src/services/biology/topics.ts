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
        },
        {
          topic: 'mollusca_class_bivalvia',
          cover: PlantCellCover,
          description: "Molusco bivalve marinho da família Cardiidae. Possui concha espessa com costelas radiais e vive enterrado em substratos arenosos.",
          title: 'Cardium costatum',
        },
        {
          topic: 'arthropoda_class_arachnida_pseudoscorpion',
          cover: PlantCellCover,
          description: "Aracnídeo de pequeno porte, semelhante a um escorpião, mas sem cauda nem ferrão. Vive em ambientes úmidos e controla pequenos invertebrados.",
          title: 'Pseudoscorpion',
        },
        {
          topic: 'arthropoda_class_arachnida_solifugae',
          cover: PlantCellCover,
          description: "Aracnídeo da ordem Solifugae, conhecido como aranha-escorpião. Possui grandes quelíceras e é extremamente ágil, mas não venenoso.",
          title: 'Aranha-escorpião (Solifugae)',
        },
        {
          topic: 'arthropoda_class_crustacea_woodlouse',
          cover: PlantCellCover,
          description: "Crustáceo terrestre da ordem Isopoda. Vive em ambientes úmidos e se enrola como defesa. Importante na decomposição da matéria orgânica.",
          title: 'Tatuzinho-de-jardim',
        },
        {
          topic: 'arthropoda_class_crustacea_crab',
          cover: PlantCellCover,
          description: "Crustáceo da ordem Decapoda, com corpo achatado e pinças desenvolvidas. Vive em ambientes marinhos e costeiros.",
          title: 'Caranguejo',
        },
        {
          topic: 'arthropoda_class_insecta_butterfly',
          cover: PlantCellCover,
          description: "Inseto da ordem Lepidoptera, com asas laranja e pretas. Passa por metamorfose completa e atua como polinizador.",
          title: 'Borboleta',
        },
        {
          topic: 'arthropoda_class_insecta_bombus_dahlbomii',
          cover: PlantCellCover,
          description: "Abelha sul-americana de grande porte e pelagem avermelhada. Polinizadora essencial de plantas nativas, ameaçada por espécies exóticas.",
          title: 'Bombus dahlbomii',
        },
        {
          topic: 'arthropoda_class_insecta_ant',
          cover: PlantCellCover,
          description: "Inseto social da ordem Hymenoptera, com organização em castas e comportamento cooperativo. Vive em colônias e tem papel ecológico essencial.",
          title: 'Formiga',
        },
        {
          topic: 'arthropoda_class_chilopoda_centipede',
          cover: PlantCellCover,
          description: "Artrópode predador da classe Chilopoda, com corpo segmentado e ferrões venenosos. Vive em ambientes úmidos e sombreados.",
          title: 'Centopeia',
        },
        {
          topic: 'echinodermata_class_asteroidea_starfish',
          cover: PlantCellCover,
          description: "Equinodermo marinho com corpo em forma de estrela e simetria radial. Possui sistema ambulacrário e capacidade de regeneração.",
          title: 'Estrela-do-mar',
        },
        {
          topic: 'echinodermata_class_echinoidea_sanddollar',
          cover: PlantCellCover,
          description: "Equinodermo da classe Echinoidea, com corpo discoide e espinhos curtos. Vive enterrado na areia e possui canais em forma de flor.",
          title: 'Bolacha-de-praia',
        }
      ]
    }
  ]
}


