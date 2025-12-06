import type { IModel } from "@interfaces/model";

import { CYTOLOGY_MODELS } from "./cytology";
import { ANIMAL_KINGGOM } from "./animal_kingdom";
import { DISCIPLINE_MODULE } from "@interfaces/discipline";

export const BIOLOGY_MODELS:IModel[] = [
  {
    module: DISCIPLINE_MODULE.CYTOLOGY,
    data: CYTOLOGY_MODELS
  },
  {
    module: DISCIPLINE_MODULE.ANIMAL_KINGDOM,
    data: ANIMAL_KINGGOM
  }
]