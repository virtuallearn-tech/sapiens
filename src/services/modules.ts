import {DISCIPLINE_MODULE} from "@interfaces/discipline";
import { Cover } from "@utils/getImageCover";

export interface IModule{
  module: typeof DISCIPLINE_MODULE[keyof typeof DISCIPLINE_MODULE],
  title: string;
  description: string;
  cover: string;
}

export const BIOLOGY_MODULES: IModule[] = [
  {
    module: DISCIPLINE_MODULE.CYTOLOGY,
    title: 'Citologia',
    description: 'Estudo da célula: estrutura, funções e tipos celulares.',
    cover: Cover.eukaryotic_cell
  },
  {
    module: DISCIPLINE_MODULE.ANIMAL_KINGDOM,
    title: 'Reino Animal',
    description: 'Classificação, características e diversidade dos animais.',
    cover: Cover.tiger_shark
  },
  {
    module: DISCIPLINE_MODULE.HUMAN_ANATOMY,
    title: 'Anatomia Humana',
    description: 'Estruturas e sistemas do corpo humano.',
    cover: Cover.circulatory_system
  }
]
