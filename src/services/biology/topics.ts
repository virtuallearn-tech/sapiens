import type { Itopic } from "interfaces/topic"

import { DISCIPLINE, DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from "@interfaces/discipline"
import { Cover } from "@utils/getImageCover"

export const BIOLOGY_TOPICS: Itopic = {
  discipline: DISCIPLINE.BIOLOGY,
  data: [
    {
      module: DISCIPLINE_MODULE.CYTOLOGY,
      data: [
        {
          topic: DISCIPLINE_TOPICS.EUKARYOTIC_CELL,
          // topic: 'eukaryotic_cell',
          cover: Cover.eukaryotic_cell,
          description: "Células com núcleo definido e organelas membranosas.",
          title: 'Célula Eucarionte',
        },
        {
          // topic: 'prokaryotic_cell',
          topic: DISCIPLINE_TOPICS.PROKARYOTIC_CELL,
          cover: Cover.prokaryotic_cell,
          description: "Células simples, sem núcleo definido, típicas de bactérias.",
          title: 'Célula Procarionte',
        },
        {
          // topic: 'plant_cell',
          topic: DISCIPLINE_TOPICS.PLANT_CELL,
          cover: Cover.plant_cell,
          description: "Células com parede celular, cloroplastos e vacúolos.",
          title: 'Célula Vegetal',
        }
      ]
    },
    {
      module: DISCIPLINE_MODULE.ANIMAL_KINGDOM,
      data: [
        {
          topic: DISCIPLINE_TOPICS.CNIDARIA_CLASS_ANTHOZOA,
          // topic: 'cnidaria_class_anthozoa',
          cover: Cover.brain_coral,
          title: "Coral-cérebro (Cnidaria)",
          description: "Cnidário fixo que constrói recifes em águas tropicais rasas."
        },
        {
          // topic: 'cnidaria_class_hydrozoa',
          topic: DISCIPLINE_TOPICS.CNIDARIA_CLASS_HYDROZOA,
          cover: Cover.meduse_liriope,
          title: "Medusa-líriope (Cnidaria)",
          description: "Pequena medusa transparente de mares tropicais e temperados."
        },
        {
          // topic: 'cnidaria_class_scyphozoa',
          topic: DISCIPLINE_TOPICS.CNIDARIA_CLASS_SCYPHOZOA,
          cover: Cover.jellyfish_jelly,
          title: "Água-viva-geléia (Cnidaria)",
          description: "Medusa rosada flutuante comum no litoral brasileiro."
        },
        {
          // topic: 'mollusca_class_gastropoda',
          topic: DISCIPLINE_TOPICS.MOLLUSCA_CLASS_GASTROPODA,
          cover: Cover.snail,
          title: "Euhadra herklotsi (Mollusca)",
          description: "Caracol terrestre com concha espiralada e respiração pulmonar."
        },
        {
          // topic: 'mollusca_class_cephalopoda_octopus',
          topic: DISCIPLINE_TOPICS.MOLLUSCA_CLASS_CEPHALOPODA_OCTOPUS,
          cover: Cover.blue_ringed_octopus,
          title: "Polvo-de-anéis-azuis (Mollusca)",
          description: "Pequeno cefalópode venenoso do Indo-Pacífico."
        },
        {
          // topic: 'mollusca_class_cephalopoda_nautilus',
          topic: DISCIPLINE_TOPICS.MOLLUSCA_CLASS_CEPHALOPODA_NAUTILUS,
          cover: Cover.nautilus,
          title: "Nautilus (Mollusca)",
          description: "Cefalópode com concha espiralada e câmaras internas."
        },
        {
          // topic: 'mollusca_class_bivalvia',
          topic: DISCIPLINE_TOPICS.MOLLUSCA_CLASS_BIVALVIA,
          cover: Cover.berbigao,
          title: "Berbigão (Mollusca)",
          description: "Molusco bivalve marinho que vive enterrado na areia."
        },
        {
          // topic: 'arthropoda_class_arachnida_pseudoscorpion',
          topic: DISCIPLINE_TOPICS.ARTHROPODA_CLASS_ARACHNIDA_PSEUDOSCORPION,
          cover: Cover.pseudoscorpion,
          title: "Pseudoescorpião (Arthropoda)",
          description: "Aracnídeo minúsculo sem cauda, predador de pequenos insetos."
        },
        {
          // topic: 'arthropoda_class_arachnida_araneae_wolf_spider',
          topic: DISCIPLINE_TOPICS.ARTHROPODA_CLASS_ARACHNIDA_ARANEAE_WOLF_SPIDER,
          cover: Cover.wolf_spider,
          title: "Aranha-lobo (Arthropoda)",
          description: "Aracnídeo caçador que carrega os filhotes nas costas."
        },
        {
          // topic: 'arthropoda_class_crustacea_woodlouse',
          topic: DISCIPLINE_TOPICS.ARTHROPODA_CLASS_CRUSTACEA_WOODLOUSE,
          cover: Cover.woodhouse,
          title: "Tatuzinho-de-jardim (Arthropoda)",
          description: "Crustáceo terrestre que se enrola como defesa."
        },
        {
          // topic: 'arthropoda_class_crustacea_crab',
          topic: DISCIPLINE_TOPICS.ARTHROPODA_CLASS_CRUSTACEA_CRAB,
          cover: Cover.crab,
          title: "Caranguejo (Arthropoda)",
          description: "Crustáceo de pinças fortes que habita áreas costeiras."
        },
        {
          // topic: 'arthropoda_class_insecta_butterfly',
          topic: DISCIPLINE_TOPICS.ARTHROPODA_CLASS_INSECTA_BUTTERFLY,
          cover: Cover.butterfly_monarca,
          title: "Borboleta-monarca (Arthropoda)",
          description: "Inseto polinizador com asas alaranjadas e pretas."
        },
        {
          // topic: 'arthropoda_class_insecta_bombus_dahlbomii',
          topic: DISCIPLINE_TOPICS.ARTHROPODA_CLASS_INSECTA_BOMBUS_DAHLBOMII,
          cover: Cover.bee,
          title: "Bombus dahlbomii (Arthropoda)",
          description: "Abelha nativa de grande porte e pelagem avermelhada."
        },
        {
          // topic: 'arthropoda_class_insecta_ant',
          topic: DISCIPLINE_TOPICS.ARTHROPODA_CLASS_INSECTA_ANT,
          cover: Cover.ant,
          title: "Formiga (Arthropoda)",
          description: "Inseto social que vive em colônias organizadas."
        },
        {
          // topic: 'arthropoda_class_chilopoda_centipede',
          topic: DISCIPLINE_TOPICS.ARTHROPODA_CLASS_CHILOPODA_CENTIPEDE,
          cover: Cover.centipede,
          title: "Centopeia (Arthropoda)",
          description: "Artrópode terrestre com corpo segmentado e ferrões."
        },
        {
          // topic: 'echinodermata_class_asteroidea_starfish',
          topic: DISCIPLINE_TOPICS.ECHINODERMATA_CLASS_ASTEROIDEA_STARFISH,
          cover: Cover.seastar,
          title: "Estrela-do-mar (Echinodermata)",
          description: "Equinodermo com braços regenerativos e simetria radial."
        },
        {
          // topic: 'echinodermata_class_echinoidea_sanddollar',
          topic: DISCIPLINE_TOPICS.ECHINODERMATA_CLASS_ECHINOIDEA_SANDDOLLAR,
          cover: Cover.sanddollar,
          title: "Bolacha-de-praia (Echinodermata)",
          description: "Equinodermo discoide que vive enterrado na areia."
        },
        {
          // topic: 'chordata_class_chondrichthyes_tiger_shark',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_CHONDRICHTHYES_TIGER_SHARK,
          cover: Cover.tiger_shark,
          title: "Tubarão-tigre (Chordata)",
          description: "Peixe cartilaginoso com listras e dentes serrilhados."
        },
        {
          // topic: 'chordata_class_chondrichthyes_cownose_ray',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_CHONDRICHTHYES_COWNOSE_RAY,
          cover: Cover.ray,
          title: "Raia-cownose (Chordata)",
          description: "Peixe cartilaginoso de corpo achatado e natação ondulante."
        },
        {
          // topic: 'chordata_class_osteichthyes_barbel_steed',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_OSTEICHTHYES_BARREL_STEED,
          cover: Cover.barbel_comum,
          title: "Barbo-comum (Chordata)",
          description: "Peixe ósseo de água doce com escamas visíveis."
        },
        {
          // topic: 'chordata_class_amphibia_urodela_cynops_pyrrhogaster',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_AMPHIBIA_URODELA_CYNOPS_PYRRHOGASTER,
          cover: Cover.salamandra,
          title: "Salamandra-de-barriga-de-fogo (Chordata)",
          description: "Anfíbio japonês com coloração aposemática vermelha."
        },
        {
          // topic: 'chordata_class_amphibia_anura_rhacophorus_schlegelii',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_AMPHIBIA_ANURA_RHACOPHORUS_SCHLEGELII,
          cover: Cover.tree_frog,
          title: "Perereca-de-Schlegel (Chordata)",
          description: "Anuro arborícola com discos adesivos e coloração verde."
        },
        {
          // topic: 'chordata_class_reptilia_chelonia_loggerhead',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_REPTILIA_CHELONIA_LOGGERHEAD,
          cover: Cover.tartaruga_cabecuda,
          title: "Tartaruga-cabeçuda (Chordata)",
          description: "Réptil marinho migratório de cabeça grande."
        },
        {
          // topic: 'chordata_class_reptilia_squamata_lizard',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_REPTILIA_SQUAMATA_LIZARD,
          cover: Cover.lizard,
          title: "Lagarto (Chordata)",
          description: "Réptil de corpo alongado e cauda longa, típico dos Squamata."
        },
        {
          // topic: 'chordata_class_reptilia_squamata_snake',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_REPTILIA_SQUAMATA_SNAKE,
          cover: Cover.snake,
          title: "Serpente (Chordata)",
          description: "Réptil alongado sem membros e com mandíbula flexível."
        },
        {
          // topic: 'chordata_class_aves_accipitriformes_red_tailed_hawk',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_AVES_ACCIPITRIFORMES_RED_TAILED_HAWK,
          cover: Cover.red_tailed_hawk,
          title: "Gavião-de-cauda-vermelha (Aves)",
          description: "Ave de rapina norte-americana de cauda avermelhada."
        },
        {
          // topic: 'chordata_class_aves_struthioniformes_ostrich',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_AVES_STRUTHIONIFORMES_OSTRICH,
          cover: Cover.ostrich,
          title: "Avestruz-africano (Aves)",
          description: "Maior ave viva, adaptada à corrida em savanas."
        },
        {
          // topic: 'chordata_class_aves_passeriformes_eastern_bluebird',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_AVES_PASSERIFORMES_EASTERN_BLUEBIRD,
          cover: Cover.blue_bird,
          title: "Pássaro-azul-oriental (Aves)",
          description: "Ave canora de plumagem azul e peito alaranjado."
        },
        {
          // topic: 'chordata_class_mammalia_chiroptera_bat',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_MAMMALIA_CHIROPTERA_BAT,
          cover: Cover.bat,
          title: "Morcego (Mammalia)",
          description: "Único mamífero capaz de voo ativo e ecolocalização."
        },
        {
          // topic: 'chordata_class_mammalia_artiodactyla_giraffe',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_MAMMALIA_ARTIODACTYLA_GIRAFFE,
          cover: Cover.giraffe,
          title: "Girafa (Mammalia)",
          description: "Mamífero terrestre mais alto, com pescoço e pernas longas."
        },
        {
          // topic: 'chordata_class_mammalia_carnivora_lion',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_MAMMALIA_CARNIVORA_LION,
          cover: Cover.lion,
          title: "Leão (Mammalia)",
          description: "Grande felino social, com machos de juba e fêmeas caçadoras."
        },
        {
          // topic: 'chordata_class_mammalia_cetacea_blue_whale',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_MAMMALIA_CETACEA_BLUE_WHALE,
          cover: Cover.blue_whale,
          title: "Baleia-azul (Mammalia)",
          description: "Maior animal do planeta, alimenta-se de krill por filtração."
        },
        {
          // topic: 'chordata_class_mammalia_cetacea_humpback_dolphin',
          topic: DISCIPLINE_TOPICS.CHORDATA_CLASS_MAMMALIA_CETACEA_HUMPBACK_DOLPHIN,
          cover: Cover.dolphin,
          title: "Golfinho-corcunda (Mammalia)",
          description: "Golfinho costeiro com nadadeira dorsal em forma de corcova."
        }
      ]
    },
    {
      module: DISCIPLINE_MODULE.HUMAN_ANATOMY,
      data: [
        {
          topic: DISCIPLINE_TOPICS.RESPIRATORY_SYSTEM,
          cover: Cover.respiratory_system,
          description: "Responsável pelas trocas gasosas do corpo.",
          title: "Sistema Respiratório",
        },
        {
          topic: DISCIPLINE_TOPICS.CIRCULATORY_SYSTEM,
          cover: Cover.circulatory_system,
          description: "Transporta sangue, gases e nutrientes.",
          title: "Sistema Circulatório",
        },
        {
          topic: DISCIPLINE_TOPICS.DIGESTIVE_SYSTEM,
          cover: Cover.digestive_system,
          description: "Realiza a digestão e absorção de nutrientes.",
          title: "Sistema Digestório",
        },
        {
          topic: DISCIPLINE_TOPICS.NERVOUS_SYSTEM,
          cover: Cover.nervous_system,
          description: "Coordena as funções do corpo e respostas.",
          title: "Sistema Nervoso",
        },
        {
          topic: DISCIPLINE_TOPICS.ENDOCRINE_SYSTEM,
          cover: Cover.endocrine_system,
          description: "Produz hormônios que regulam o organismo.",
          title: "Sistema Endócrino",
        },
        {
          topic: DISCIPLINE_TOPICS.MUSCULAR_SYSTEM,
          cover: Cover.muscular_system,
          description: "Permite os movimentos do corpo.",
          title: "Sistema Muscular",
        },
        {
          topic: DISCIPLINE_TOPICS.SKELETAL_SYSTEM,
          cover: Cover.skeletal_system,
          description: "Sustenta e protege o corpo.",
          title: "Sistema Esquelético",
        },
        {
          topic: DISCIPLINE_TOPICS.URINARY_SYSTEM,
          cover: Cover.urinary_system,
          description: "Filtra o sangue e elimina resíduos.",
          title: "Sistema Urinário",
        },
        // {
        //   topic: DISCIPLINE_TOPICS.REPRODUCTIVE_SYSTEM,
        //   cover: Cover.reproductive_system,
        //   description: "Responsável pela reprodução humana.",
        //   title: "Sistema Reprodutor",
        // },
        {
          topic: DISCIPLINE_TOPICS.LYMPHATIC_SYSTEM,
          cover: Cover.lymphatic_system,
          description: "Defende o corpo e transporta linfa.",
          title: "Sistema Linfático",
        },
        {
          topic: DISCIPLINE_TOPICS.INTEGUMENTARY_SYSTEM,
          cover: Cover.integumentary_system,
          description: "Protege o corpo e regula temperatura.",
          title: "Sistema Tegumentar",
        }
      ]
    }
  ]
}
