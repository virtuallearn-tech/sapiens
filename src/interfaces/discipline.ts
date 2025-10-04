export type DISCIPLINE = 'BIOLOGY' | 'PHYSICS' | 'CHEMISTRY' | 'MATH'

export type BIOLOGY_TOPICS = 'CITOLOGY'
export type PHYSICS_TOPICS = never;
export type CHEMISTRY_TOPICS = never;
export type MATH_TOPICS = never;

export type CITOLOGY_TOPICS = 'citology' | 
                              'eukaryotic_cell' | 
                              'prokaryotic_cell' | 
                              'plant_cell' |
                              'cytoplasmic_organelles' |
                              'membrane_transport' |
                              'cell_cycle_mitosis'

export type DISCIPLINE_TOPICS = BIOLOGY_TOPICS 
export type DISCIPLINE_SUBTOPICS = CITOLOGY_TOPICS