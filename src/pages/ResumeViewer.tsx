import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

interface ResumoMarkdownProps {
  discipline: "biology" | "physics" | "math";
  file: string;
}
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/virtuallearn-tech/sapiens-science-abstracts/master"

const discipline="physics";
const  file="dynamics";

//{ discipline="biology", file="cytology" }
//: ResumoMarkdownProps
const ResumeViewer = () =>{
  const [content, setContent] = useState("");

  useEffect(() => {
    // const url = `https://raw.githubusercontent.com/virtuallearn-tech/sapiens-science-abstracts/master/${discipline}/${file}.md`;
    const url = `${GITHUB_RAW_BASE}/${discipline}/${file}.md`

    fetch(url)
      .then(res => res.text())
      .then(setContent)
      .catch(console.error);
  }, [discipline, file]);

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