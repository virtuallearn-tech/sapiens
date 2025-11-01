import type { IModel, IModelData } from "@interfaces/model";
import { CNIDARIAN_MODELS } from "./animal_kingdom/cnidarians";
import { MOLLUSCA_MODELS } from "./animal_kingdom/mollusca";

export const ANIMAL_KINGGOM:IModelData[] = [
  ...CNIDARIAN_MODELS,
  ...MOLLUSCA_MODELS
]