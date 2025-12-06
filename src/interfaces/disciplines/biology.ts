export const BIOLOGY_MODULE = {
  CYTOLOGY: "citologia",
  ANIMAL_KINGDOM: "reino-animal"
} as const;

export const CYTOLOGY_TOPICS = {
  CITOLOGY: "citologia",
  EUKARYOTIC_CELL: "celula-eucarionte",
  PROKARYOTIC_CELL: "celula-procarionte",
  PLANT_CELL: "celula-vegetal",
  CYTOPLASMIC_ORGANELLES: "organelas-citoplasmaticas",
  MEMBRANE_TRANSPORT: "transporte-de-membrana",
  CELL_CYCLE_MITOSIS: "ciclo-celular-mitose"
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

  CNIDARIA_CLASS_SCYPHOZOA: "cnidaria-classe-scyphozoa",
  CNIDARIA_CLASS_ANTHOZOA: "cnidaria-classe-anthozoa",
  CNIDARIA_CLASS_HYDROZOA: "cnidaria-classe-hydrozoa",

  MOLLUSCA_CLASS_GASTROPODA: "mollusca-classe-gastropoda",
  MOLLUSCA_CLASS_CEPHALOPODA: "mollusca-classe-cephalopoda",
  MOLLUSCA_CLASS_CEPHALOPODA_BOBTAIL_SQUID: "mollusca-classe-cephalopoda-lula-rabo-de-porco",
  MOLLUSCA_CLASS_CEPHALOPODA_OCTOPUS: "mollusca-classe-cephalopoda-polvo",
  MOLLUSCA_CLASS_CEPHALOPODA_NAUTILUS: "mollusca-classe-cephalopoda-nautilus",
  MOLLUSCA_CLASS_BIVALVIA: "mollusca-classe-bivalvia",

  ARTHROPODA_CLASS_ARACHNIDA_PSEUDOSCORPION: "arthropoda-classe-arachnida-pseudoescorpiao",
  ARTHROPODA_CLASS_ARACHNIDA_SOLIFUGAE: "arthropoda-classe-arachnida-solifugae",
  ARTHROPODA_CLASS_CRUSTACEA_WOODLOUSE: "arthropoda-classe-crustacea-tatuzinho",
  ARTHROPODA_CLASS_CRUSTACEA_CRAB: "arthropoda-classe-crustacea-caranguejo",
  ARTHROPODA_CLASS_INSECTA_BUTTERFLY: "arthropoda-classe-insecta-borboleta",
  ARTHROPODA_CLASS_INSECTA_BOMBUS_DAHLBOMII: "arthropoda-classe-insecta-mamangava-gigante",
  ARTHROPODA_CLASS_INSECTA_ANT: "arthropoda-classe-insecta-formiga",
  ARTHROPODA_CLASS_CHILOPODA_CENTIPEDE: "arthropoda-classe-chilopoda-centopeia",

  ECHINODERMATA_CLASS_ASTEROIDEA_STARFISH: "echinodermata-classe-asteroidea-estrela-do-mar",
  ECHINODERMATA_CLASS_ECHINOIDEA_SANDDOLLAR: "echinodermata-classe-echinoidea-dolar-de-areia",

  CHORDATA_CLASS_CHONDRICHTHYES_TIGER_SHARK: "chordata-classe-chondrichthyes-tubarao-tigre",
  CHORDATA_CLASS_CHONDRICHTHYES_COWNOSE_RAY: "chordata-classe-chondrichthyes-raiha-marfim",
  CHORDATA_CLASS_OSTEICHTHYES_BARREL_STEED: "chordata-classe-osteichthyes-barrel-steed", // espécie rara, sem nome PT

  CHORDATA_CLASS_AMPHIBIA_URODELA_CYNOPS_PYRRHOGASTER:
    "chordata-classe-amphibia-urodela-cynops-pyrrhogaster",
  CHORDATA_CLASS_AMPHIBIA_ANURA_RHACOPHORUS_SCHLEGELII:
    "chordata-classe-amphibia-anura-rhacophorus-schlegelii",

  CHORDATA_CLASS_REPTILIA_CHELONIA_LOGGERHEAD: "chordata-classe-reptilia-chelonia-tartaruga-cabeçuda",
  CHORDATA_CLASS_REPTILIA_SQUAMATA_LIZARD: "chordata-classe-reptilia-squamata-lagarto",
  CHORDATA_CLASS_REPTILIA_SQUAMATA_SNAKE: "chordata-classe-reptilia-squamata-cobra",
  CHORDATA_CLASS_REPTILIA_CROCODYLIA_CROCODILE: "chordata-classe-reptilia-crocodylia-crocodilo",

  CHORDATA_CLASS_AVES_ACCIPITRIFORMES_BALD_EAGLE: "chordata-classe-aves-accipitriformes-aguia-careca",
  CHORDATA_CLASS_AVES_STRUTHIONIFORMES_OSTRICH: "chordata-classe-aves-struthioniformes-avestruz",
  CHORDATA_CLASS_AVES_PASSERIFORMES_EASTERN_BLUEBIRD:
    "chordata-classe-aves-passeriformes-azulinho-do-leste",
  CHORDATA_CLASS_AVES_ACCIPITRIFORMES_RED_TAILED_HAWK:
    "chordata-classe-aves-accipitriformes-falcao-rabo-vermelho",

  CHORDATA_CLASS_MAMMALIA_CHIROPTERA_BAT: "chordata-classe-mammalia-chiroptera-morcego",
  CHORDATA_CLASS_MAMMALIA_ARTIODACTYLA_GIRAFFE: "chordata-classe-mammalia-artiodactyla-girafa",
  CHORDATA_CLASS_MAMMALIA_CARNIVORA_LION: "chordata-classe-mammalia-carnivora-leao",
  CHORDATA_CLASS_MAMMALIA_CETACEA_BLUE_WHALE: "chordata-classe-mammalia-cetacea-baleia-azul",
  CHORDATA_CLASS_MAMMALIA_CETACEA_HUMPBACK_DOLPHIN:
    "chordata-classe-mammalia-cetacea-golfinho-jubarte",

  ARTHROPODA_CLASS_ARACHNIDA_ARANEAE_WOLF_SPIDER:
    "arthropoda-classe-arachnida-araneae-aranha-lobo"
} as const;


export const BIOLOGY_TOPICS = {
  ...CYTOLOGY_TOPICS,
  ...ANIMAL_KINGDOM_TOPICS
} as const;


