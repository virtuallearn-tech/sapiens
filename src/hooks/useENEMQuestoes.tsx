import { useState, useEffect } from 'react'
import axios from 'axios'
import type { EnemApiResponse, Metadata, Question } from '@interfaces/enem'
import clientENEM from '@services/enem/enemAPI'

interface UseEnemQuestionsProps {
  year: number | null
  discipline?: string | null
  language?: 'ingles' | 'espanhol' | null
  limit?: number | null
}

interface UseEnemQuestionsResult {
  questions: Question[]
  metadata: Metadata | null
  loading: boolean
  error: string | null,
  fetchQuestions: () => Promise<void>
}

export function useEnemQuestions({
  year,
  discipline,
  language,
  limit
}: UseEnemQuestionsProps): UseEnemQuestionsResult {

  const [questions, setQuestions] = useState<Question[]>([])
  const [metadata, setMetadata] = useState<Metadata | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // useEffect(() => {


  async function fetchQuestions() {

    if (!year) return

    // const source = axios.CancelToken.source()

    //console.log('Fetching questions with params:', { year, discipline, language, limit })

    setLoading(true)
    setError(null)

    try {
      // Chamada à API: GET /exams/{year}/questions?limit&offset&language
      const response = await clientENEM.get<EnemApiResponse>(
        `/exams/${year}/questions`,
        {
          params: { limit, discipline, language },
          // cancelToken: source.token,
        }
      )
      // filtro por disciplina (API não expõe query param para discipline)
      //console.log('API response data:', response)


      let items = response.data.questions
      if (discipline) {
        items = items.filter((q: Question) => q.discipline === discipline)
      }
      //console.log('Fetched questions:', items)
      setQuestions(items)
      setMetadata(response.data.metadata)
    } catch (err: any) {
      if (!axios.isCancel(err)) {
        setError(err.message || 'Erro ao buscar questões')
      }
    } finally {
      setLoading(false)
    }
  }

  // fetchQuestions()
  // return () => {
  //   source.cancel()
  // }
  // }, [year])

  return { questions, metadata, loading, error, fetchQuestions }
}
