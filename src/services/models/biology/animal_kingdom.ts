import type { IModel, IModelData } from "@interfaces/model";
import { CNIDARIAN_MODELS } from "./animal_kingdom/cnidarians";
import { MOLLUSCA_MODELS } from "./animal_kingdom/mollusca";
import { ARTHROPODA_MODELS } from "./animal_kingdom/arthropoda";
import { ECHINODERMATA_MODELS } from "./animal_kingdom/echinodermata";

export const ANIMAL_KINGGOM:IModelData[] = [
  ...CNIDARIAN_MODELS,
  ...MOLLUSCA_MODELS,
  ...ARTHROPODA_MODELS,
  ...ECHINODERMATA_MODELS
]