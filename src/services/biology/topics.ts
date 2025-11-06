import type { Itopic } from "interfaces/topic"

import EukaryoticCellCover from '@assets/cover/eukaryotic_cell.png'
import ProkaryoticCellCover from '@assets/cover/prokaryotic_cell.png'
import PlantCellCover from '@assets/cover/plant_cell.png'
import BrainCoral from '@assets/cover/brain-coral.jpg'
import MeduseLiriope from '@assets/cover/medusa-liriope.jpg'
import JellyfishJelly from '@assets/cover/jellyfish-jelly.jpg'
import Snail from '@assets/cover/snail.jpg'
import BlueRingedOctopus from '@assets/cover/blue-ringed-octopus.jpg'
import Nautilus from '@assets/cover/nautilus.jpg'
import Berbigao from '@assets/cover/berbigao.jpg'
import Pseudoscorpion from '@assets/cover/pseudoscorpion.jpg'
import WolfSpider from '@assets/cover/wolf-spider.jpg'
import Woodhouse from '@assets/cover/woodhouse.jpg'
import Crab from '@assets/cover/crab.jpg'
import ButterflyMonarca from '@assets/cover/butterfly-monarca.jpg'
import Bee from '@assets/cover/bee.jpg'
import Ant from '@assets/cover/ant.jpg'
import Centipede from '@assets/cover/centipede.jpg'
import Seastar from '@assets/cover/seastar.jpg'
import Sanddollar from '@assets/cover/sanddollar.jpg'
import TigerShark from '@assets/cover/tiger-shark.jpg'
import Ray from '@assets/cover/ray.jpg'
import BarbelComum from '@assets/cover/barbel-comum.jpg'
import Salamandra from '@assets/cover/salamandra.jpg'
import TreeFrong from '@assets/cover/tree-frog.jpg'
import TartarugaCabecuda from '@assets/cover/tartaruga-cabecuda.jpg'
import Lizard from '@assets/cover/lizard.jpg'
import Snake from '@assets/cover/snake.jpg'
import Ostrich from '@assets/cover/ostrich.jpg'
import Bluebird from '@assets/cover/bluebird.jpg'
import Bat from '@assets/cover/bat.jpg'
import Giraffe from '@assets/cover/giraffe.jpg'
import Lion from '@assets/cover/lion.jpg'
import BlueWhale from '@assets/cover/blue-whale.jpg'
import Dolphin from '@assets/cover/dolphin.jpg'
import RedTailedHawk from '@assets/cover/red-tailed-hawk.jpg'


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
          topic: 'cnidaria_class_anthozoa',
          cover: BrainCoral,
          title: "Coral-cérebro (Cnidaria)",
          description: "Cnidário fixo que constrói recifes em águas tropicais rasas."
        },
        {
          topic: 'cnidaria_class_hydrozoa',
          cover: MeduseLiriope,
          title: "Medusa-líriope (Cnidaria)",
          description: "Pequena medusa transparente de mares tropicais e temperados."
        },
        {
          topic: 'cnidaria_class_scyphozoa',
          cover: JellyfishJelly,
          title: "Água-viva-geléia (Cnidaria)",
          description: "Medusa rosada flutuante comum no litoral brasileiro."
        },
        {
          topic: 'mollusca_class_gastropoda',
          cover: Snail,
          title: "Euhadra herklotsi (Mollusca)",
          description: "Caracol terrestre com concha espiralada e respiração pulmonar."
        },
        {
          topic: 'mollusca_class_cephalopoda_octopus',
          cover: BlueRingedOctopus,
          title: "Polvo-de-anéis-azuis (Mollusca)",
          description: "Pequeno cefalópode venenoso do Indo-Pacífico."
        },
        {
          topic: 'mollusca_class_cephalopoda_nautilus',
          cover: Nautilus,
          title: "Nautilus (Mollusca)",
          description: "Cefalópode com concha espiralada e câmaras internas."
        },
        {
          topic: 'mollusca_class_bivalvia',
          cover: Berbigao,
          title: "Berbigão (Mollusca)",
          description: "Molusco bivalve marinho que vive enterrado na areia."
        },
        {
          topic: 'arthropoda_class_arachnida_pseudoscorpion',
          cover: Pseudoscorpion,
          title: "Pseudoescorpião (Arthropoda)",
          description: "Aracnídeo minúsculo sem cauda, predador de pequenos insetos."
        },
        {
          topic: 'arthropoda_class_arachnida_araneae_wolf_spider',
          cover: WolfSpider,
          title: "Aranha-lobo (Arthropoda)",
          description: "Aracnídeo caçador que carrega os filhotes nas costas."
        },
        {
          topic: 'arthropoda_class_crustacea_woodlouse',
          cover: Woodhouse,
          title: "Tatuzinho-de-jardim (Arthropoda)",
          description: "Crustáceo terrestre que se enrola como defesa."
        },
        {
          topic: 'arthropoda_class_crustacea_crab',
          cover: Crab,
          title: "Caranguejo (Arthropoda)",
          description: "Crustáceo de pinças fortes que habita áreas costeiras."
        },
        {
          topic: 'arthropoda_class_insecta_butterfly',
          cover: ButterflyMonarca,
          title: "Borboleta-monarca (Arthropoda)",
          description: "Inseto polinizador com asas alaranjadas e pretas."
        },
        {
          topic: 'arthropoda_class_insecta_bombus_dahlbomii',
          cover: Bee,
          title: "Bombus dahlbomii (Arthropoda)",
          description: "Abelha nativa de grande porte e pelagem avermelhada."
        },
        {
          topic: 'arthropoda_class_insecta_ant',
          cover: Ant,
          title: "Formiga (Arthropoda)",
          description: "Inseto social que vive em colônias organizadas."
        },
        {
          topic: 'arthropoda_class_chilopoda_centipede',
          cover: Centipede,
          title: "Centopeia (Arthropoda)",
          description: "Artrópode terrestre com corpo segmentado e ferrões."
        },
        {
          topic: 'echinodermata_class_asteroidea_starfish',
          cover: Seastar,
          title: "Estrela-do-mar (Echinodermata)",
          description: "Equinodermo com braços regenerativos e simetria radial."
        },
        {
          topic: 'echinodermata_class_echinoidea_sanddollar',
          cover: Sanddollar,
          title: "Bolacha-de-praia (Echinodermata)",
          description: "Equinodermo discoide que vive enterrado na areia."
        },
        {
          topic: 'chordata_class_chondrichthyes_tiger_shark',
          cover: TigerShark,
          title: "Tubarão-tigre (Chordata)",
          description: "Peixe cartilaginoso com listras e dentes serrilhados."
        },
        {
          topic: 'chordata_class_chondrichthyes_cownose_ray',
          cover: Ray,
          title: "Raia-cownose (Chordata)",
          description: "Peixe cartilaginoso de corpo achatado e natação ondulante."
        },
        {
          topic: 'chordata_class_osteichthyes_barbel_steed',
          cover: BarbelComum,
          title: "Barbo-comum (Chordata)",
          description: "Peixe ósseo de água doce com escamas visíveis."
        },
        {
          topic: 'chordata_class_amphibia_urodela_cynops_pyrrhogaster',
          cover: Salamandra,
          title: "Salamandra-de-barriga-de-fogo (Chordata)",
          description: "Anfíbio japonês com coloração aposemática vermelha."
        },
        {
          topic: 'chordata_class_amphibia_anura_rhacophorus_schlegelii',
          cover: TreeFrong,
          title: "Perereca-de-Schlegel (Chordata)",
          description: "Anuro arborícola com discos adesivos e coloração verde."
        },
        {
          topic: 'chordata_class_reptilia_chelonia_loggerhead',
          cover: TartarugaCabecuda,
          title: "Tartaruga-cabeçuda (Chordata)",
          description: "Réptil marinho migratório de cabeça grande."
        },
        {
          topic: 'chordata_class_reptilia_squamata_lizard',
          cover: Lizard,
          title: "Lagarto (Chordata)",
          description: "Réptil de corpo alongado e cauda longa, típico dos Squamata."
        },
        {
          topic: 'chordata_class_reptilia_squamata_snake',
          cover: Snake,
          title: "Serpente (Chordata)",
          description: "Réptil alongado sem membros e com mandíbula flexível."
        },
        {
          topic: 'chordata_class_aves_accipitriformes_red_tailed_hawk',
          cover: RedTailedHawk,
          title: "Gavião-de-cauda-vermelha (Aves)",
          description: "Ave de rapina norte-americana de cauda avermelhada."
        },
        {
          topic: 'chordata_class_aves_struthioniformes_ostrich',
          cover: Ostrich,
          title: "Avestruz-africano (Aves)",
          description: "Maior ave viva, adaptada à corrida em savanas."
        },
        {
          topic: 'chordata_class_aves_passeriformes_eastern_bluebird',
          cover: Bluebird,
          title: "Pássaro-azul-oriental (Aves)",
          description: "Ave canora de plumagem azul e peito alaranjado."
        },
        {
          topic: 'chordata_class_mammalia_chiroptera_bat',
          cover: Bat,
          title: "Morcego (Mammalia)",
          description: "Único mamífero capaz de voo ativo e ecolocalização."
        },
        {
          topic: 'chordata_class_mammalia_artiodactyla_giraffe',
          cover: Giraffe,
          title: "Girafa (Mammalia)",
          description: "Mamífero terrestre mais alto, com pescoço e pernas longas."
        },
        {
          topic: 'chordata_class_mammalia_carnivora_lion',
          cover: Lion,
          title: "Leão (Mammalia)",
          description: "Grande felino social, com machos de juba e fêmeas caçadoras."
        },
        {
          topic: 'chordata_class_mammalia_cetacea_blue_whale',
          cover: BlueWhale,
          title: "Baleia-azul (Mammalia)",
          description: "Maior animal do planeta, alimenta-se de krill por filtração."
        },
        {
          topic: 'chordata_class_mammalia_cetacea_humpback_dolphin',
          cover: Dolphin,
          title: "Golfinho-corcunda (Mammalia)",
          description: "Golfinho costeiro com nadadeira dorsal em forma de corcova."
        }
      ]
    }
  ]
}

// {
//   topic: 'mollusca_class_cephalopoda_bobtail_squid',
//   cover: PlantCellCover,
//   description: "Cefalópode de pequeno porte da família Sepiolidae. Possui corpo arredondado, vive enterrado na areia durante o dia e apresenta bioluminescência simbiótica.",
//   title: 'Lula Bobtail Squid',
// },
