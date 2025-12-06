
// export type BIOLOGY_MODULE = 'CYTOLOGY' | 'ANIMAL_KINGDOM'

// export type CYTOLOGY_TOPICS =
//   'citology' |
//   'eukaryotic_cell' |
//   'prokaryotic_cell' |
//   'plant_cell' |
//   'cytoplasmic_organelles' |
//   'membrane_transport' |
//   'cell_cycle_mitosis'

// export type ANIMAL_KINGDOM_TOPICS =
//   'porifera' |
//   'platyhelminthes' |
//   'nematoda' |
//   'mollusca' |
//   'annelida' |
//   'arthropoda' |
//   'echinodermata' |
//   'chordata' |
//   'cnidaria' |
//   'cnidaria_class_scyphozoa' |
//   'cnidaria_class_anthozoa' |
//   'cnidaria_class_hydrozoa' |
//   'mollusca_class_gastropoda' |
//   'mollusca_class_cephalopoda' |
//   'mollusca_class_cephalopoda_bobtail_squid' |
//   'mollusca_class_cephalopoda_octopus' |
//   'mollusca_class_cephalopoda_nautilus' |
//   'mollusca_class_bivalvia' |
//   'arthropoda_class_arachnida_pseudoscorpion' |
//   'arthropoda_class_arachnida_solifugae' |
//   'arthropoda_class_crustacea_woodlouse' |
//   'arthropoda_class_crustacea_crab' | 'arthropoda_class_insecta_butterfly' |
//   'arthropoda_class_insecta_bombus_dahlbomii' | 'arthropoda_class_insecta_ant' |
//   'arthropoda_class_chilopoda_centipede' |
//   'echinodermata_class_asteroidea_starfish' |
//   'echinodermata_class_echinoidea_sanddollar' |
//   'chordata_class_chondrichthyes_tiger_shark' |
//   'chordata_class_chondrichthyes_cownose_ray' |
//   'chordata_class_osteichthyes_barbel_steed' |
//   'chordata_class_amphibia_urodela_cynops_pyrrhogaster' |
//   'chordata_class_amphibia_anura_rhacophorus_schlegelii' |
//   'chordata_class_reptilia_chelonia_loggerhead' |
//   'chordata_class_reptilia_squamata_lizard' |
//   'chordata_class_reptilia_squamata_snake' |
//   'chordata_class_reptilia_crocodylia_crocodile' |
//   'chordata_class_aves_accipitriformes_bald_eagle' |
//   'chordata_class_aves_struthioniformes_ostrich' |
//   'chordata_class_aves_passeriformes_eastern_bluebird' |
//   'chordata_class_mammalia_chiroptera_bat' |
//   'chordata_class_mammalia_artiodactyla_giraffe' |
//   'chordata_class_mammalia_carnivora_lion' |
//   'chordata_class_mammalia_cetacea_blue_whale' |
//   'chordata_class_mammalia_cetacea_humpback_dolphin' |
//   'chordata_class_aves_accipitriformes_red_tailed_hawk' |
//   'arthropoda_class_arachnida_araneae_wolf_spider'

// export type BIOLOGY_TOPICS = CYTOLOGY_TOPICS | ANIMAL_KINGDOM_TOPICS

export const BIOLOGY_MODULE = {
  CYTOLOGY: "cytology",
  ANIMAL_KINGDOM: "animal-kingdom"
} as const;

export const CYTOLOGY_TOPICS = {
  CITOLOGY: "citology",
  EUKARYOTIC_CELL: "eukaryotic-cell",
  PROKARYOTIC_CELL: "prokaryotic-cell",
  PLANT_CELL: "plant-cell",
  CYTOPLASMIC_ORGANELLES: "cytoplasmic-organelles",
  MEMBRANE_TRANSPORT: "membrane-transport",
  CELL_CYCLE_MITOSIS: "cell-cycle-mitosis"
} as const;

export const ANIMAL_KINGDOM_TOPICS = {
  PORIFERA: "porifera",
  PLATYHELMINTHES: "platyhelminthes",
  NEMATODA: "nematoda",
  MOLLUSCA: "mollusca",
  ANNELIDA: "annelida",
  ARTHROPODA: "arthropoda",
  ECHINODERMATA: "echinodermata",
  CHORDATA: "chordata",
  CNIDARIA: "cnidaria",

  CNIDARIA_CLASS_SCYPHOZOA: "cnidaria-class-scyphozoa",
  CNIDARIA_CLASS_ANTHOZOA: "cnidaria-class-anthozoa",
  CNIDARIA_CLASS_HYDROZOA: "cnidaria-class-hydrozoa",

  MOLLUSCA_CLASS_GASTROPODA: "mollusca-class-gastropoda",
  MOLLUSCA_CLASS_CEPHALOPODA: "mollusca-class-cephalopoda",
  MOLLUSCA_CLASS_CEPHALOPODA_BOBTAIL_SQUID: "mollusca-class-cephalopoda-bobtail-squid",
  MOLLUSCA_CLASS_CEPHALOPODA_OCTOPUS: "mollusca-class-cephalopoda-octopus",
  MOLLUSCA_CLASS_CEPHALOPODA_NAUTILUS: "mollusca-class-cephalopoda-nautilus",
  MOLLUSCA_CLASS_BIVALVIA: "mollusca-class-bivalvia",

  ARTHROPODA_CLASS_ARACHNIDA_PSEUDOSCORPION: "arthropoda-class-arachnida-pseudoscorpion",
  ARTHROPODA_CLASS_ARACHNIDA_SOLIFUGAE: "arthropoda-class-arachnida-solifugae",
  ARTHROPODA_CLASS_CRUSTACEA_WOODLOUSE: "arthropoda-class-crustacea-woodlouse",
  ARTHROPODA_CLASS_CRUSTACEA_CRAB: "arthropoda-class-crustacea-crab",
  ARTHROPODA_CLASS_INSECTA_BUTTERFLY: "arthropoda-class-insecta-butterfly",
  ARTHROPODA_CLASS_INSECTA_BOMBUS_DAHLBOMII: "arthropoda-class-insecta-bombus-dahlbomii",
  ARTHROPODA_CLASS_INSECTA_ANT: "arthropoda-class-insecta-ant",
  ARTHROPODA_CLASS_CHILOPODA_CENTIPEDE: "arthropoda-class-chilopoda-centipede",

  ECHINODERMATA_CLASS_ASTEROIDEA_STARFISH: "echinodermata-class-asteroidea-starfish",
  ECHINODERMATA_CLASS_ECHINOIDEA_SANDDOLLAR: "echinodermata-class-echinoidea-sanddollar",

  CHORDATA_CLASS_CHONDRICHTHYES_TIGER_SHARK: "chordata-class-chondrichthyes-tiger-shark",
  CHORDATA_CLASS_CHONDRICHTHYES_COWNOSE_RAY: "chordata-class-chondrichthyes-cownose-ray",
  CHORDATA_CLASS_OSTEICHTHYES_BARREL_STEED: "chordata-class-osteichthyes-barrel-steed",

  CHORDATA_CLASS_AMPHIBIA_URODELA_CYNOPS_PYRRHOGASTER: "chordata-class-amphibia-urodela-cynops-pyrrhogaster",
  CHORDATA_CLASS_AMPHIBIA_ANURA_RHACOPHORUS_SCHLEGELII: "chordata-class-amphibia-anura-rhacophorus-schlegelii",

  CHORDATA_CLASS_REPTILIA_CHELONIA_LOGGERHEAD: "chordata-class-reptilia-chelonia-loggerhead",
  CHORDATA_CLASS_REPTILIA_SQUAMATA_LIZARD: "chordata-class-reptilia-squamata-lizard",
  CHORDATA_CLASS_REPTILIA_SQUAMATA_SNAKE: "chordata-class-reptilia-squamata-snake",
  CHORDATA_CLASS_REPTILIA_CROCODYLIA_CROCODILE: "chordata-class-reptilia-crocodylia-crocodile",

  CHORDATA_CLASS_AVES_ACCIPITRIFORMES_BALD_EAGLE: "chordata-class-aves-accipitriformes-bald-eagle",
  CHORDATA_CLASS_AVES_STRUTHIONIFORMES_OSTRICH: "chordata-class-aves-struthioniformes-ostrich",
  CHORDATA_CLASS_AVES_PASSERIFORMES_EASTERN_BLUEBIRD: "chordata-class-aves-passeriformes-eastern-bluebird",
  CHORDATA_CLASS_AVES_ACCIPITRIFORMES_RED_TAILED_HAWK: "chordata-class-aves-accipitriformes-red-tailed-hawk",

  CHORDATA_CLASS_MAMMALIA_CHIROPTERA_BAT: "chordata-class-mammalia-chiroptera-bat",
  CHORDATA_CLASS_MAMMALIA_ARTIODACTYLA_GIRAFFE: "chordata-class-mammalia-artiodactyla-giraffe",
  CHORDATA_CLASS_MAMMALIA_CARNIVORA_LION: "chordata-class-mammalia-carnivora-lion",
  CHORDATA_CLASS_MAMMALIA_CETACEA_BLUE_WHALE: "chordata-class-mammalia-cetacea-blue-whale",
  CHORDATA_CLASS_MAMMALIA_CETACEA_HUMPBACK_DOLPHIN: "chordata-class-mammalia-cetacea-humpback-dolphin",

  ARTHROPODA_CLASS_ARACHNIDA_ARANEAE_WOLF_SPIDER: "arthropoda-class-arachnida-araneae-wolf-spider"
} as const;

export const BIOLOGY_TOPICS = {
  ...CYTOLOGY_TOPICS,
  ...ANIMAL_KINGDOM_TOPICS
} as const;


