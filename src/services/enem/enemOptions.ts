//Os intervalos são fixos de 45 em 45 (1–45, 46–90, 91–135, 136–180).
export const ENEM_ANO = [
  { label: 'Enem 2023', value: '2023' },
  { label: 'Enem 2022', value: '2022' },
  { label: 'Enem 2021', value: '2021' },
  { label: 'Enem 2020', value: '2020' },
  { label: 'Enem 2019', value: '2019' },
  { label: 'Enem 2018', value: '2018' },
]


export const ENEM_AREA = [
  {
    label: "Ciências Humanas e suas Tecnologias",
    value: "ciencias-humanas",
    start: 46
  },
  {
    label: "Ciências da Natureza e suas Tecnologias",
    value: "ciencias-natureza",
    start: 91
  },
  {
    label: "Linguagens, Códigos e suas Tecnologias",
    value: "linguagens",
    start: 1
  },
  {
    label: "Matemática e suas Tecnologias",
    value: "matematica",
    start: 136
  }
]

export const ENEM_LANGUAGE = [
  {
    label: "Espanhol",
    value: "espanhol"
  },
  {
    label: "Inglês",
    value: "ingles"
  }
]

export const ENEM_NUM_QUESTOES = [
  { label: "10", value: '10' },
  { label: "15", value: '15' },
  { label: "20", value: '30' },
  { label: "30", value: '40' },
  { label: "40", value: '50' },
  { label: "45", value: '50' },
]