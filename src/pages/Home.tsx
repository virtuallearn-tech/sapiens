import { useEffect, useState } from "react"

import { CardContent } from "@components/cards/CardContent"
import { SearchBar } from "@components/common/SearchBar"

import { ROUTES_NAME } from "@routes/routesName"
import { BIOLOGY_MODULES, type IModule } from "@services/modules"
import { getAllTopics } from "@services/content"

import type { ITopicCode } from "@interfaces/topic"
import { includesNormalized } from "@utils/string"

// 🔹 Lista GLOBAL e constante (todos os tópicos)
const allTopics: ITopicCode[] = getAllTopics()

export const Home = () => {
  // 🔹 Lista de módulos (modo padrão)
  const [moduleList, setModuleList] = useState<IModule[]>([])

  // 🔹 Termo de busca
  const [search, setSearch] = useState<string>("")

  // 🔹 Carrega módulos apenas uma vez
  useEffect(() => {
    setModuleList([...BIOLOGY_MODULES])
  }, [])

  // 🔹 Determina modo da página
  const isSearching = search.trim().length > 0

  // 🔹 Resultado da busca (valor derivado, NÃO state)
  const searchedTopics: ITopicCode[] = isSearching
    ? allTopics.filter(topic =>
        includesNormalized(topic.title, search) ||
        includesNormalized(topic.description, search) ||
        includesNormalized(topic.module!, search)
      )
    : []

  return (
    <div className="p-home">
      {/* Título */}
      <h1 className="p-home__title">
        Transforme o estudo em descoberta.
      </h1>

      {/* SearchBar */}
      <div className="p-home__searchbar">
        <SearchBar
          search={search}
          setSearch={setSearch}
          placeholder="Buscar modelo 3D"
          showBtn={false}
        />
      </div>

      {/* Lista (única estrutura visual) className="p-home__list"*/}
      <div className={`p-home__list ${!isSearching ? 'p-home__list--module' : ''}`}>
        {isSearching
          ? searchedTopics.map(topic => (
              <CardContent
                key={`${topic.module}-${topic.topic}`}
                title={topic.title}
                description={topic.description}
                cover={topic.cover}
                link={`${ROUTES_NAME.TOPIC_OPTIONS}/${topic.discipline}/${topic.module}/${topic.topic}`}
                modifier="module"
              />
            ))
          : moduleList.map(module => (
              <CardContent
                key={module.module}
                title={module.title}
                description={module.description}
                cover={module.cover}
                link={`${ROUTES_NAME.MODULE}/${module.module}`}
                modifier="module"
              />
            ))
        }
      </div>
    </div>
  )
}
