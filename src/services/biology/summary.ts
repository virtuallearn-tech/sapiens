import { CellCycle } from "@futures/content/biology/CellCycle";
import { Citology, } from "@futures/content/biology/Citology";
import { CytoplasmicOrganelles } from "@futures/content/biology/CytoplasmicOrganelles";
import { EukaryoticCellContent } from "@futures/content/biology/EukaryoticCell";
import { MembraneTransport } from "@futures/content/biology/MembraneTransport";
import { PlantCell } from "@futures/content/biology/PlanCell";
import { ProkaryoticCell } from "@futures/content/biology/ProkaryoticCell";
import type { IContent } from "@interfaces/content";
import { DISCIPLINE, DISCIPLINE_MODULE, DISCIPLINE_TOPICS } from "@interfaces/discipline";

import { Cover } from "@utils/getImageCover";


export const CitologySummary: IContent[] = [
  {
    id: "bio-citologia-geral",
    title: "Citologia",
    discipline: DISCIPLINE.BIOLOGY,
    module: DISCIPLINE_MODULE.CYTOLOGY,
    topic: DISCIPLINE_TOPICS.CITOLOGY,
    cover: Cover.citology,
    component: Citology
  },
  {
    id: "bio-celula-eucarionte",
    title: "Célula Eucarionte",
    discipline: DISCIPLINE.BIOLOGY,
    module: DISCIPLINE_MODULE.CYTOLOGY,
    topic: DISCIPLINE_TOPICS.EUKARYOTIC_CELL,
    cover: Cover.eukaryotic_cell,
    component: EukaryoticCellContent
  },
  {
    id: "bio-celula-procarionte",
    title: "Célula Procarionte",
    discipline: DISCIPLINE.BIOLOGY,
    module: DISCIPLINE_MODULE.CYTOLOGY,
    topic: DISCIPLINE_TOPICS.PROKARYOTIC_CELL,
    cover: Cover.prokaryotic_cell,
    component: ProkaryoticCell
  },
  {
    id: "bio-celula-vegetal",
    title: "Célula Vegetal",
    discipline: DISCIPLINE.BIOLOGY,
    module: DISCIPLINE_MODULE.CYTOLOGY,
    topic: DISCIPLINE_TOPICS.PLANT_CELL,
    cover: Cover.plant_cell,
    component: PlantCell
  },
  {
    id: "bio-organelas",
    title: "Organelas Citoplasmáticas",
    discipline: DISCIPLINE.BIOLOGY,
    module: DISCIPLINE_MODULE.CYTOLOGY,
    topic: DISCIPLINE_TOPICS.CYTOPLASMIC_ORGANELLES,
    cover: Cover.cytoplasmic_organelles,
    component: CytoplasmicOrganelles
  },
  {
    id: "bio-membrana",
    title: "Membrana Plasmática e Transporte",
    discipline: DISCIPLINE.BIOLOGY,
    module: DISCIPLINE_MODULE.CYTOLOGY,
    topic: DISCIPLINE_TOPICS.MEMBRANE_TRANSPORT,
    cover: Cover.membrane_transport,
    component: MembraneTransport
  },
  {
    id: "bio-ciclo-mitose",
    title: "Ciclo Celular e Mitose",
    discipline: DISCIPLINE.BIOLOGY,
    module: DISCIPLINE_MODULE.CYTOLOGY,
    topic: DISCIPLINE_TOPICS.CELL_CYCLE_MITOSIS,
    cover: Cover.cell_cycle_mitosis,
    component: CellCycle
  }
];
