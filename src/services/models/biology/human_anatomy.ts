import type { IModelData } from "@interfaces/model";
import { RESPIRATORY_SYSTEM_MODELS } from "./human-anatomy/respiratory_system";
import { DIGESTIVE_SYSTEM_MODELS } from "./human-anatomy/digestive_system";
import { CIRCULATORY_SYSTEM_MODELS } from "./human-anatomy/circulatory_system";
import { ENDOCRINE_SYSTEM_MODELS } from "./human-anatomy/endocrine_system";
import { NERVOUS_SYSTEM_MODELS } from "./human-anatomy/nervous_system";
import { LYMPHATIC_SYSTEM_MODELS } from "./human-anatomy/lymphatic_system";
import { URINARY_SYSTEM_MODELS } from "./human-anatomy/urinary_system";
import { SKELETAL_SYSTEM_MODELS } from "./human-anatomy/skeletal_system";
import { MUSCULAR_SYSTEM_MODELS } from "./human-anatomy/muscular_system";

export const HUMAN_ANATOMY:IModelData[] = [
  ...RESPIRATORY_SYSTEM_MODELS,
  ...DIGESTIVE_SYSTEM_MODELS,
  ...CIRCULATORY_SYSTEM_MODELS,
  ...ENDOCRINE_SYSTEM_MODELS,
  ...NERVOUS_SYSTEM_MODELS,
  ...LYMPHATIC_SYSTEM_MODELS,
  ...URINARY_SYSTEM_MODELS,
  ...SKELETAL_SYSTEM_MODELS,
  ...MUSCULAR_SYSTEM_MODELS
]