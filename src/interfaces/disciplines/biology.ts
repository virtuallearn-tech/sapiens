
export type BIOLOGY_MODULE = 'CYTOLOGY' | 'ANIMAL_KINGDOM'

type CYTOLOGY_TOPICS = 'eukaryotic_cell' |
                        'prokaryotic_cell' |
                        'plant_cell' |
                        'cytoplasmic_organelles' |
                        'membrane_transport' |
                        'cell_cycle_mitosis'

type ANIMAL_KINGDOM_TOPICS = 'cnidarians' | 'cnidarians_class_scyphozoa'

export type BIOLOGY_TOPICS = CYTOLOGY_TOPICS | ANIMAL_KINGDOM_TOPICS
