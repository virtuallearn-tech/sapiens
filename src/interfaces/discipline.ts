import type { BIOLOGY_MODULE, BIOLOGY_TOPICS } from "./disciplines/biology";

export type PHYSICS_TOPICS = never;
export type CHEMISTRY_TOPICS = never;
export type MATH_TOPICS = never;

export type DISCIPLINE = 'BIOLOGY' | 'PHYSICS' | 'CHEMISTRY' | 'MATH'

export type DISCIPLINE_MODULE = BIOLOGY_MODULE 

export type DISCIPLINE_TOPICS = BIOLOGY_TOPICS