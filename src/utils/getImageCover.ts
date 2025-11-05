import EukaryoticCell from '@assets/cover/eukaryotic_cell.png';
import ProkaryoticCell from '@assets/cover/prokaryotic_cell.png';
import PlantCell from '@assets/cover/plant_cell.png';
import CytoplasmicOrganelles from '@assets/cover/cytoplasmic_organelles.jpg';
import MembraneTransport from '@assets/cover/membrane_transport.jpg';
import CellCycle from '@assets/cover/cell_cycle_mitosis.jpg';
import Citology from '@assets/cover/citology.jpg';

export const Cover: Record<string, string> = {
  citology: Citology,
  eukaryotic_cell: EukaryoticCell,
  prokaryotic_cell: ProkaryoticCell,
  plant_cell: PlantCell,
  cytoplasmic_organelles: CytoplasmicOrganelles,
  membrane_transport: MembraneTransport,
  cell_cycle_mitosis: CellCycle
};
