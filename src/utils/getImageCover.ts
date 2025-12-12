
// // --- Citologia (originais) ---
// // import EukaryoticCell from '@assets/cover/eukaryotic_cell.png'
// import ProkaryoticCell from '@assets/cover/prokaryotic_cell.png'
// import PlantCell from '@assets/cover/plant_cell.png'
// import CytoplasmicOrganelles from '@assets/cover/cytoplasmic_organelles.jpg'
// import MembraneTransport from '@assets/cover/membrane_transport.jpg'
// import CellCycle from '@assets/cover/cell_cycle_mitosis.jpg'
// // import Citology from '@assets/cover/citology.jpg'


// import BrainCoral from '@assets/cover/brain-coral.jpg'
// import MeduseLiriope from '@assets/cover/medusa-liriope.jpg'
// import JellyfishJelly from '@assets/cover/jellyfish-jelly.jpg'
// import Snail from '@assets/cover/snail.jpg'
// import BlueRingedOctopus from '@assets/cover/blue-ringed-octopus.jpg'
// import Nautilus from '@assets/cover/nautilus.jpg'
// import Berbigao from '@assets/cover/berbigao.jpg'
// import Pseudoscorpion from '@assets/cover/pseudoscorpion.jpg'
// import WolfSpider from '@assets/cover/wolf-spider.jpg'
// import Woodhouse from '@assets/cover/woodhouse.jpg'
// import Crab from '@assets/cover/crab.jpg'
// import ButterflyMonarca from '@assets/cover/butterfly-monarca.jpg'
// import Bee from '@assets/cover/bee.jpg'
// import Ant from '@assets/cover/ant.jpg'
// import Centipede from '@assets/cover/centipede.jpg'
// import Seastar from '@assets/cover/seastar.jpg'
// import Sanddollar from '@assets/cover/sanddollar.jpg'
// import TigerShark from '@assets/cover/tiger-shark.jpg'
// import Ray from '@assets/cover/ray.jpg'
// import BarbelComum from '@assets/cover/barbel-comum.jpg'
// import Salamandra from '@assets/cover/salamandra.jpg'
// import TreeFrong from '@assets/cover/tree-frog.jpg'
// import TartarugaCabecuda from '@assets/cover/tartaruga-cabecuda.jpg'
// import Lizard from '@assets/cover/lizard.jpg'
// import Snake from '@assets/cover/snake.jpg'
// import Ostrich from '@assets/cover/ostrich.jpg'
// import Bluebird from '@assets/cover/bluebird.jpg'
// import Bat from '@assets/cover/bat.jpg'
// import Giraffe from '@assets/cover/giraffe.jpg'
// import Lion from '@assets/cover/lion.jpg'
// import BlueWhale from '@assets/cover/blue-whale.jpg'
// import Dolphin from '@assets/cover/dolphin.jpg'
// import RedTailedHawk from '@assets/cover/red-tailed-hawk.jpg'

// import RespiratorySystem from "@assets/cover/sistema-respiratorio.jpg";
// import { getGithubResource, GIT_REPOSITORIES } from './getGithubResouce'

// export const Cover: Record<string, string> = {
//   // Citologia
//   // citology: Citology,
//   citology: getGithubResource(GIT_REPOSITORIES.IMAGES, "citology.jpg"),
//   // eukaryotic_cell: EukaryoticCell,
//   eukaryotic_cell: getGithubResource(GIT_REPOSITORIES.IMAGES, "eukaryotic_cell.png"),
//   prokaryotic_cell: ProkaryoticCell,
//   plant_cell: PlantCell,
//   cytoplasmic_organelles: CytoplasmicOrganelles,
//   membrane_transport: MembraneTransport,
//   cell_cycle_mitosis: CellCycle,

//   // Novas imagens (zoologia / biodiversidade)
//   brain_coral: BrainCoral,
//   meduse_liriope: MeduseLiriope,
//   jellyfish_jelly: JellyfishJelly,
//   snail: Snail,
//   blue_ringed_octopus: BlueRingedOctopus,
//   nautilus: Nautilus,
//   berbigao: Berbigao,
//   pseudoscorpion: Pseudoscorpion,
//   wolf_spider: WolfSpider,
//   woodhouse: Woodhouse,
//   crab: Crab,
//   butterfly_monarca: ButterflyMonarca,
//   bee: Bee,
//   ant: Ant,
//   centipede: Centipede,
//   seastar: Seastar,
//   sanddollar: Sanddollar,
//   tiger_shark: TigerShark,
//   ray: Ray,
//   barbel_comum: BarbelComum,
//   salamandra: Salamandra,
//   tree_frog: TreeFrong,
//   tartaruga_cabecuda: TartarugaCabecuda,
//   lizard: Lizard,
//   snake: Snake,
//   ostrich: Ostrich,
//   blue_bird: Bluebird,
//   bat: Bat,
//   giraffe: Giraffe,
//   lion: Lion,
//   blue_whale: BlueWhale,
//   dolphin: Dolphin,
//   red_tailed_hawk: RedTailedHawk,

//   //HUMANA ANATOMY
//   respiratory_system: RespiratorySystem
// } as const

import { getGithubResource, GIT_REPOSITORIES } from './getGithubResouce'

export const Cover: Record<string, string> = {
  // Citologia
  citology: getGithubResource(GIT_REPOSITORIES.IMAGES, "citology.jpg"),
  eukaryotic_cell: getGithubResource(GIT_REPOSITORIES.IMAGES, "eukaryotic_cell.png"),
  prokaryotic_cell: getGithubResource(GIT_REPOSITORIES.IMAGES, "prokaryotic_cell.png"),
  plant_cell: getGithubResource(GIT_REPOSITORIES.IMAGES, "plant_cell.png"),
  cytoplasmic_organelles: getGithubResource(GIT_REPOSITORIES.IMAGES, "cytoplasmic_organelles.jpg"),
  membrane_transport: getGithubResource(GIT_REPOSITORIES.IMAGES, "membrane_transport.jpg"),
  cell_cycle_mitosis: getGithubResource(GIT_REPOSITORIES.IMAGES, "cell_cycle_mitosis.jpg"),

  // Novas imagens (zoologia / biodiversidade)
  brain_coral: getGithubResource(GIT_REPOSITORIES.IMAGES, "brain-coral.jpg"),
  meduse_liriope: getGithubResource(GIT_REPOSITORIES.IMAGES, "medusa-liriope.jpg"),
  jellyfish_jelly: getGithubResource(GIT_REPOSITORIES.IMAGES, "jellyfish-jelly.jpg"),
  snail: getGithubResource(GIT_REPOSITORIES.IMAGES, "snail.jpg"),
  blue_ringed_octopus: getGithubResource(GIT_REPOSITORIES.IMAGES, "blue-ringed-octopus.jpg"),
  nautilus: getGithubResource(GIT_REPOSITORIES.IMAGES, "nautilus.jpg"),
  berbigao: getGithubResource(GIT_REPOSITORIES.IMAGES, "berbigao.jpg"),
  pseudoscorpion: getGithubResource(GIT_REPOSITORIES.IMAGES, "pseudoscorpion.jpg"),
  wolf_spider: getGithubResource(GIT_REPOSITORIES.IMAGES, "wolf-spider.jpg"),
  woodhouse: getGithubResource(GIT_REPOSITORIES.IMAGES, "woodhouse.jpg"),
  crab: getGithubResource(GIT_REPOSITORIES.IMAGES, "crab.jpg"),
  butterfly_monarca: getGithubResource(GIT_REPOSITORIES.IMAGES, "butterfly-monarca.jpg"),
  bee: getGithubResource(GIT_REPOSITORIES.IMAGES, "Bee.jpg"),
  ant: getGithubResource(GIT_REPOSITORIES.IMAGES, "ant.jpg"),
  centipede: getGithubResource(GIT_REPOSITORIES.IMAGES, "centipede.jpg"),
  seastar: getGithubResource(GIT_REPOSITORIES.IMAGES, "seastar.jpg"),
  sanddollar: getGithubResource(GIT_REPOSITORIES.IMAGES, "sanddollar.jpg"),
  tiger_shark: getGithubResource(GIT_REPOSITORIES.IMAGES, "tiger-shark.jpg"),
  ray: getGithubResource(GIT_REPOSITORIES.IMAGES, "ray.jpg"),
  barbel_comum: getGithubResource(GIT_REPOSITORIES.IMAGES, "barbel-comum.jpg"),
  salamandra: getGithubResource(GIT_REPOSITORIES.IMAGES, "salamandra.jpg"),
  tree_frog: getGithubResource(GIT_REPOSITORIES.IMAGES, "tree-frog.jpg"),
  tartaruga_cabecuda: getGithubResource(GIT_REPOSITORIES.IMAGES, "tartaruga-cabecuda.jpg"),
  lizard: getGithubResource(GIT_REPOSITORIES.IMAGES, "lizard.jpg"),
  snake: getGithubResource(GIT_REPOSITORIES.IMAGES, "snake.jpg"),
  ostrich: getGithubResource(GIT_REPOSITORIES.IMAGES, "ostrich.jpg"),
  blue_bird: getGithubResource(GIT_REPOSITORIES.IMAGES, "bluebird.jpg"),
  bat: getGithubResource(GIT_REPOSITORIES.IMAGES, "bat.jpg"),
  giraffe: getGithubResource(GIT_REPOSITORIES.IMAGES, "giraffe.jpg"),
  lion: getGithubResource(GIT_REPOSITORIES.IMAGES, "lion.jpg"),
  blue_whale: getGithubResource(GIT_REPOSITORIES.IMAGES, "blue-whale.jpg"),
  dolphin: getGithubResource(GIT_REPOSITORIES.IMAGES, "dolphin.jpg"),
  red_tailed_hawk: getGithubResource(GIT_REPOSITORIES.IMAGES, "red-tailed-hawk.jpg"),

  // Humana Anatomy
  endocrine_system: getGithubResource(GIT_REPOSITORIES.IMAGES, "endocrine-system.png"),
  lymphatic_system: getGithubResource(GIT_REPOSITORIES.IMAGES, "lymphatic-system.png"),
  muscular_system: getGithubResource(GIT_REPOSITORIES.IMAGES, "muscular-system.png"),
  nervous_system: getGithubResource(GIT_REPOSITORIES.IMAGES, "nervous-system.png"),
  respiratory_system: getGithubResource(GIT_REPOSITORIES.IMAGES, "respiratory-system.png"),
  skeletal_system: getGithubResource(GIT_REPOSITORIES.IMAGES, "skeletal-system.png"),
  urinary_system: getGithubResource(GIT_REPOSITORIES.IMAGES, "urinary-system.png"),
  circulatory_system: getGithubResource(GIT_REPOSITORIES.IMAGES, "circulatory-system.png"),
  digestive_system: getGithubResource(GIT_REPOSITORIES.IMAGES, "digestive-system.png"),
  
  
} as const
