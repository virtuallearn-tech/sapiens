import { CellCycle } from "@futures/content/biology/CellCycle";
import { Citology, } from "@futures/content/biology/Citology";
import { CytoplasmicOrganelles } from "@futures/content/biology/CytoplasmicOrganelles";
import { EukaryoticCellContent } from "@futures/content/biology/EukaryoticCell";
import { MembraneTransport } from "@futures/content/biology/MembraneTransport";
import { PlantCell } from "@futures/content/biology/PlanCell";
import { ProkaryoticCell } from "@futures/content/biology/ProkaryoticCell";
import type { IContent } from "@interfaces/content";

import { Cover } from "@utils/getImageCover";


export const CitologySummary: IContent[] = [
  {
    id: "bio-citologia-geral",
    title: "Citologia",
    discipline: "BIOLOGY",
    module: "CYTOLOGY",
    topic: "citology",
    cover: Cover.citology,
    component: Citology
  },
  {
    id: "bio-celula-eucarionte",
    title: "Célula Eucarionte",
    discipline: "BIOLOGY",
    module: "CYTOLOGY",
    topic: "eukaryotic_cell",
    cover: Cover.eukaryotic_cell,
    component: EukaryoticCellContent
  },
  {
    id: "bio-celula-procarionte",
    title: "Célula Procarionte",
    discipline: "BIOLOGY",
    module: "CYTOLOGY",
    topic: "prokaryotic_cell",
    cover: Cover.prokaryotic_cell,
    component: ProkaryoticCell
  },
  {
    id: "bio-celula-vegetal",
    title: "Célula Vegetal",
    discipline: "BIOLOGY",
    module: "CYTOLOGY",
    topic: "plant_cell",
    cover: Cover.plant_cell,
    component: PlantCell
  },
  {
    id: "bio-organelas",
    title: "Organelas Citoplasmáticas",
    discipline: "BIOLOGY",
    module: "CYTOLOGY",
    topic: "cytoplasmic_organelles",
    cover: Cover.cytoplasmic_organelles,
    component: CytoplasmicOrganelles
  },
  {
    id: "bio-membrana",
    title: "Membrana Plasmática e Transporte",
    discipline: "BIOLOGY",
    module: "CYTOLOGY",
    topic: "membrane_transport",
    cover: Cover.membrane_transport,
    component: MembraneTransport
  },
  {
    id: "bio-ciclo-mitose",
    title: "Ciclo Celular e Mitose",
    discipline: "BIOLOGY",
    module: "CYTOLOGY",
    topic: "cell_cycle_mitosis",
    cover: Cover.cell_cycle_mitosis,
    component: CellCycle
  }
];
