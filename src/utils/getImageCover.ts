
// --- Citologia (originais) ---
import EukaryoticCell from '@assets/cover/eukaryotic_cell.png'
import ProkaryoticCell from '@assets/cover/prokaryotic_cell.png'
import PlantCell from '@assets/cover/plant_cell.png'
import CytoplasmicOrganelles from '@assets/cover/cytoplasmic_organelles.jpg'
import MembraneTransport from '@assets/cover/membrane_transport.jpg'
import CellCycle from '@assets/cover/cell_cycle_mitosis.jpg'
import Citology from '@assets/cover/citology.jpg'


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

import RespiratorySystem from "@assets/cover/sistema-respiratorio.jpg";

export const Cover: Record<string, string> = {
  // Citologia
  citology: Citology,
  eukaryotic_cell: EukaryoticCell,
  prokaryotic_cell: ProkaryoticCell,
  plant_cell: PlantCell,
  cytoplasmic_organelles: CytoplasmicOrganelles,
  membrane_transport: MembraneTransport,
  cell_cycle_mitosis: CellCycle,

  // Novas imagens (zoologia / biodiversidade)
  brain_coral: BrainCoral,
  meduse_liriope: MeduseLiriope,
  jellyfish_jelly: JellyfishJelly,
  snail: Snail,
  blue_ringed_octopus: BlueRingedOctopus,
  nautilus: Nautilus,
  berbigao: Berbigao,
  pseudoscorpion: Pseudoscorpion,
  wolf_spider: WolfSpider,
  woodhouse: Woodhouse,
  crab: Crab,
  butterfly_monarca: ButterflyMonarca,
  bee: Bee,
  ant: Ant,
  centipede: Centipede,
  seastar: Seastar,
  sanddollar: Sanddollar,
  tiger_shark: TigerShark,
  ray: Ray,
  barbel_comum: BarbelComum,
  salamandra: Salamandra,
  tree_frog: TreeFrong,
  tartaruga_cabecuda: TartarugaCabecuda,
  lizard: Lizard,
  snake: Snake,
  ostrich: Ostrich,
  blue_bird: Bluebird,
  bat: Bat,
  giraffe: Giraffe,
  lion: Lion,
  blue_whale: BlueWhale,
  dolphin: Dolphin,
  red_tailed_hawk: RedTailedHawk,

  //HUMANA ANATOMY
  respiratory_system: RespiratorySystem
} as const
