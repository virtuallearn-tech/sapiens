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
          topic: 'cnidarians_class_anthozoa',
          cover: BrainCoral,
          description: "Cnidário fixo, construtor de recifes. Encontrado em águas tropicais rasas, com colônias maciças que lembram os sulcos de um cérebro humano.",
          title: "Coral-Cérebro"
        },
        {
          topic: 'cnidarians_class_hydrozoa',
          cover: MeduseLiriope,
          description: "Pequena medusa transparente da ordem Trachymedusae, encontrada em águas tropicais e temperadas.",
          title: 'Medusa Líriope',
        },
        {
          topic: 'cnidarians_class_scyphozoa',
          cover: JellyfishJelly,
          description: "Cnidários flutuantes. Encontrada no litoral brasileiro. Possui coloração rosada",
          title: 'Água viva Geléia',
        },
        {
          topic: 'mollusca_class_gastropoda',
          cover: Snail,
          description: "Molusco gastrópode terrestre, possui concha espiralada e respira por pulmões adaptados à vida terrestre.",
          title: 'Euhadra herklotsi',
        },
        {
          topic: 'mollusca_class_cephalopoda_octopus',
          cover: BlueRingedOctopus,
          description: "Pequeno cefalópode do Indo-Pacífico, famoso por seus anéis azuis fluorescentes e por ser um dos animais mais venenosos do mundo.",
          title: 'Polvo-de-anéis-azuis',
        },
        {
          topic: 'mollusca_class_cephalopoda_nautilus',
          cover: Nautilus,
          description: "Cefalópode marinho com concha espiralada e câmaras internas que regulam a flutuabilidade. Considerado um 'fóssil vivo'.",
          title: 'Nautilus',
        },
        {
          topic: 'mollusca_class_bivalvia',
          cover: Berbigao,
          description: "Molusco bivalve marinho da família Cardiidae. Possui concha espessa com costelas radiais e vive enterrado em substratos arenosos.",
          title: 'Berbigão'//'Cardium costatum',
        },
        {
          topic: 'arthropoda_class_arachnida_pseudoscorpion',
          cover: Pseudoscorpion,
          description: "Aracnídeo de pequeno porte, semelhante a um escorpião, mas sem cauda nem ferrão. Vive em ambientes úmidos e controla pequenos invertebrados.",
          title: 'Pseudoescorpião',
        },
        {
          topic: 'arthropoda_class_arachnida_solifugae',
          cover: WolfSpider,
          description: "Aracnídeo da ordem Solifugae, conhecido como aranha-escorpião. Possui grandes quelíceras e é extremamente ágil, mas não venenoso.",
          title: 'Aranha-lobo',
        },
        {
          topic: 'arthropoda_class_crustacea_woodlouse',
          cover: Woodhouse,
          description: "Crustáceo terrestre da ordem Isopoda. Vive em ambientes úmidos e se enrola como defesa. Importante na decomposição da matéria orgânica.",
          title: 'Tatuzinho-de-jardim',
        },
        {
          topic: 'arthropoda_class_crustacea_crab',
          cover: Crab,
          description: "Crustáceo da ordem Decapoda, com corpo achatado e pinças desenvolvidas. Vive em ambientes marinhos e costeiros.",
          title: 'Caranguejo',
        },
        {
          topic: 'arthropoda_class_insecta_butterfly',
          cover: ButterflyMonarca,
          description: "Inseto da ordem Lepidoptera, com asas laranja e pretas. Passa por metamorfose completa e atua como polinizador.",
          title: 'Borboleta',
        },
        {
          topic: 'arthropoda_class_insecta_bombus_dahlbomii',
          cover: Bee,
          description: "Abelha sul-americana de grande porte e pelagem avermelhada. Polinizadora essencial de plantas nativas, ameaçada por espécies exóticas.",
          title: 'Bombus dahlbomii',
        },
        {
          topic: 'arthropoda_class_insecta_ant',
          cover: Ant,
          description: "Inseto social da ordem Hymenoptera, com organização em castas e comportamento cooperativo. Vive em colônias e tem papel ecológico essencial.",
          title: 'Formiga',
        },
        {
          topic: 'arthropoda_class_chilopoda_centipede',
          cover: Centipede,
          description: "Artrópode predador da classe Chilopoda, com corpo segmentado e ferrões venenosos. Vive em ambientes úmidos e sombreados.",
          title: 'Centopeia',
        },
        {
          topic: 'echinodermata_class_asteroidea_starfish',
          cover: Seastar,
          description: "Equinodermo marinho com corpo em forma de estrela e simetria radial. Possui sistema ambulacrário e capacidade de regeneração.",
          title: 'Estrela-do-mar',
        },
        {
          topic: 'echinodermata_class_echinoidea_sanddollar',
          cover: Sanddollar,
          description: "Equinodermo da classe Echinoidea, com corpo discoide e espinhos curtos. Vive enterrado na areia e possui canais em forma de flor.",
          title: 'Bolacha-de-praia',
        },
        {
          topic: 'chordata_class_chondrichthyes_tiger_shark',
          cover: TigerShark,
          description: "Peixe cartilaginoso com listras corporais e dentes serrilhados. Predador de topo em mares tropicais e temperados.",
          title: 'Tubarão-tigre',
        },
        {
          topic: 'chordata_class_chondrichthyes_cownose_ray',
          cover: Ray,
          description: "Peixe cartilaginoso com corpo achatado e nadadeiras em forma de asas. Nada com movimentos ondulantes e se alimenta de moluscos.",
          title: 'Raia Cownose',
        },
        {
          topic: 'chordata_class_osteichthyes_barbel_steed',
          cover: BarbelComum,
          description: "Peixe ósseo de água doce com escamas visíveis, opérculo branquial e bexiga natatória. Vive em rios da Ásia.",
          title: 'Barbo-comum',
        },
        {
          topic: 'chordata_class_amphibia_urodela_cynops_pyrrhogaster',
          cover: Salamandra,
          description: "Anfíbio da ordem Caudata, com corpo alongado, cauda persistente e barriga vermelha aposemática. Vive em ambientes úmidos do Japão.",
          title: 'Salamandra-de-barriga-de-fogo',
        },
        {
          topic: 'chordata_class_amphibia_anura_rhacophorus_schlegelii',
          cover: TreeFrong,
          description: "Anuro arborícola japonês com coloração verde e discos adesivos nos dedos. Reproduz-se em ninhos de espuma sobre a água.",
          title: 'Perereca-de-Schlegel',
        },
        {
          topic: 'chordata_class_reptilia_chelonia_loggerhead',
          cover: TartarugaCabecuda,
          description: "Réptil marinho da ordem Chelonia, com cabeça grande e mandíbulas fortes. Espécie migratória vulnerável à extinção.",
          title: 'Tartaruga-cabeçuda',
        },
        {
          topic: 'chordata_class_reptilia_squamata_lizard',
          cover: Lizard,
          description: "Réptil da ordem Squamata, com corpo alongado, quatro patas e cauda longa. Modelo genérico representando os lagartos.",
          title: 'Lagarto',
        },
        {
          topic: 'chordata_class_reptilia_squamata_snake',
          cover: Snake,
          description: "Réptil da subordem Serpentes, com corpo alongado, ausência de membros e mandíbula flexível. Modelo genérico representando cobras.",
          title: 'Serpente',
        },
        // {
        //   topic: 'chordata_class_aves_accipitriformes_bald_eagle',
        //   cover: PlantCellCover,
        //   description: "Ave de rapina da América do Norte, com cabeça e cauda brancas, corpo escuro e bico amarelo. Símbolo cultural dos EUA.",
        //   title: 'Águia-careca americana',
        // },
        {
          topic: 'chordata_class_aves_accipitriformes_red_tailed_hawk',
          cover: RedTailedHawk,
          description: "Ave de rapina da América do Norte, com cauda avermelhada, corpo robusto e asas largas. Muito comum em áreas abertas e símbolo da fauna norte-americana.",
          title: 'Gavião-de-cauda-vermelha',
        },
        {
          topic: 'chordata_class_aves_struthioniformes_ostrich',
          cover: Ostrich,
          description: "Maior ave viva, não voadora, adaptada à corrida em savanas africanas. Possui pernas longas, olhos grandes e ovos gigantes.",
          title: 'Avestruz-africano',
        },
        {
          topic: 'chordata_class_aves_passeriformes_eastern_bluebird',
          cover: Bluebird,
          description: "Pequena ave canora da América do Norte, com plumagem azul vibrante e peito alaranjado. Símbolo cultural de felicidade.",
          title: 'Pássaro-azul-oriental.',
        },
        {
          topic: 'chordata_class_mammalia_chiroptera_bat',
          cover: Bat,
          description: "Mamífero da ordem Chiroptera, único capaz de voo ativo. Usa ecolocalização e possui asas membranosas.",
          title: 'Morcego',
        },
        {
          topic: 'chordata_class_mammalia_artiodactyla_giraffe',
          cover: Giraffe,
          description: "Mamífero terrestre mais alto do mundo, com pescoço longo, pernas compridas e língua preênsil para alcançar folhas.",
          title: 'Girafa',
        },
        {
          topic: 'chordata_class_mammalia_carnivora_lion',
          cover: Lion,
          description: "Grande felino social, com machos de juba imponente e fêmeas caçadoras cooperativas. Predador de topo das savanas.",
          title: 'Leão',
        },
        {
          topic: 'chordata_class_mammalia_cetacea_blue_whale',
          cover: BlueWhale,
          description: "Maior animal do planeta, mamífero marinho que pode ultrapassar 30 metros e se alimenta de krill por filtração.",
          title: 'Baleia-azul',
        },
        {
          topic: 'chordata_class_mammalia_cetacea_humpback_dolphin',
          cover: Dolphin,
          description: "Golfinho costeiro da família Delphinidae, com nadadeira dorsal em corcova e coloração variável do cinza ao rosado.",
          title: 'Golfinho-corcunda.',
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
