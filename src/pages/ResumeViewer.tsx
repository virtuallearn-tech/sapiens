import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { useGetAbstract } from "@hooks/useGetAbstract";

// interface ResumoMarkdownProps {
//   discipline: "biology" | "physics" | "math";
//   file: string;
// }

const discipline="physics";
const  file="dynamics";

//{ discipline="biology", file="cytology" }
//: ResumoMarkdownProps
const ResumeViewer = () =>{
 
  const { content, loading, error } = useGetAbstract({ discipline, file });

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
              finalSrc = `${GITHUB_RAW_BASE}${src.replace("..", "")}`;
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