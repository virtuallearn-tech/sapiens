import { useEffect, useState } from "react";
import axios from "axios";
import { GIT_REPOSITORIES } from "@utils/getGithubResouce";

interface UseGetAbstractParams {
  discipline: string;
  file: string;
}

export function useGetAbstract({ discipline, file }: UseGetAbstractParams) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!discipline || !file) return;

    const controller = new AbortController();

    async function fetchAbstract() {
      try {
        setLoading(true);
        setError(null);

        const url = `${GIT_REPOSITORIES.GITHUB_RAW_BASE}/${discipline}/${file}.md`;

        const response = await axios.get<string>(url, {
          signal: controller.signal,
        });

        setContent(response.data);
      } catch (err: any) {
        if (axios.isCancel(err)) return;

        setError("Erro ao carregar o resumo.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAbstract();

    return () => controller.abort();
  }, [discipline, file]);

  return {
    content,
    loading,
    error,
  };
}
