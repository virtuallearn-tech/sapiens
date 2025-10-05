// Metadata da resposta

export type EnemAreas = 'ciencias-humanas' | 'ciencias-natureza' | 'linguagens' | 'matematica';

export interface Metadata {
  limit: number
  offset: number
  total: number
  hasMore: boolean
}

// Alternativa de cada questão
export interface Alternative {
  letter: string
  text: string
  file: string
  isCorrect: boolean
}

// Questão ENEM
export interface Question {
  title: string
  index: number
  discipline: string
  language: string
  year: number
  context: string
  files: string[]
  correctAlternative: string
  alternativesIntroduction: string
  alternatives: Alternative[]
}

// Resposta completa da API
export interface EnemApiResponse {
  metadata: Metadata
  questions: Question[]
}
