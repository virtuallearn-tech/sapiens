import type { IModel } from "@interfaces/model";

import { CYTOLOGY_MODELS } from "./cytology";
import { ANIMAL_KINGGOM } from "./animal_kingdom";

export const BIOLOGY_MODELS:IModel[] = [
  {
    module: 'CYTOLOGY',
    data: CYTOLOGY_MODELS
  },
  {
    module: 'ANIMAL_KINGDOM',
    data: ANIMAL_KINGGOM
  }
]