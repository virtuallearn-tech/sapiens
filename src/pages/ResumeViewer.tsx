import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { useGetAbstract } from "@hooks/useGetAbstract";
import { useParams } from "react-router-dom";
import { GIT_REPOSITORIES } from "@utils/getGithubResouce";

const ResumeViewer = () => {
  const { discipline, file } = useParams<{discipline: string, file: string}>()
  // console.log('DATA R', discipline, file)
  const { content, loading, error } = useGetAbstract({ discipline: discipline || "", file: file || "" });
  //  const processedContent = content.replace(/\\\[(.+?)\\\]/gs, "$$$1$$");

  if (loading) return <p>Carregando resumo...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="resumo">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          img: ({ src = "", alt }) => {
            let finalSrc = src;

            // resolve caminhos relativos do Markdown
            if (src.startsWith("..")) {
              finalSrc = `${GIT_REPOSITORIES.GITHUB_RAW_BASE}${src.replace("..", "")}`;
            }

            return (
              <img
                src={finalSrc}
                alt={alt}
                style={{ maxWidth: "100%", display: "block", margin: "16px auto" }}
              />
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default ResumeViewer