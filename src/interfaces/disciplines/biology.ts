
export type BIOLOGY_MODULE = 'CYTOLOGY' | 'ANIMAL_KINGDOM'

type CYTOLOGY_TOPICS = 'eukaryotic_cell' |
                        'prokaryotic_cell' |
                        'plant_cell' |
                        'cytoplasmic_organelles' |
                        'membrane_transport' |
                        'cell_cycle_mitosis'

type ANIMAL_KINGDOM_TOPICS = 'cnidarians' | 
'cnidarians_class_scyphozoa' | 
'cnidarians_class_anthozoa' | 
'cnidarians_class_hydrozoa' | 
'mollusca_class_gastropoda' | 
'mollusca_class_cephalopoda' | 
'mollusca_class_cephalopoda_bobtail_squid' |
'mollusca_class_cephalopoda_octopus' | 
'mollusca_class_cephalopoda_nautilus' | 
'mollusca_class_bivalvia' |
'arthropoda_class_arachnida_pseudoscorpion' | 
'arthropoda_class_arachnida_solifugae' | 
'arthropoda_class_crustacea_woodlouse' | 
'arthropoda_class_crustacea_crab'| 'arthropoda_class_insecta_butterfly' | 
'arthropoda_class_insecta_bombus_dahlbomii' | 'arthropoda_class_insecta_ant' | 
'arthropoda_class_chilopoda_centipede' |
'echinodermata_class_asteroidea_starfish' |
'echinodermata_class_echinoidea_sanddollar'



export type BIOLOGY_TOPICS = CYTOLOGY_TOPICS | ANIMAL_KINGDOM_TOPICS
