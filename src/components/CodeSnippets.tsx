import { useState } from "react";

interface CodeSnippetProps {
  code: string;
  language: string;
  filename: string;
  description: string;
}

function normalizeCode(code: string) {
  const lines = code.replace(/^\n/, "").split("\n");

  const indentation = Math.min(
    ...lines
      .filter(line => line.trim().length > 0)
      .map(line => line.match(/^\s*/)?.[0].length ?? 0)
  );

  return lines
    .map(line => line.slice(indentation))
    .join("\n")
    .trim();
}

export default function CodeSnippet({
  code,
  language,
  filename,
  description,
}: CodeSnippetProps) {

  const [expanded, setExpanded] = useState(false);

  const formattedCode = normalizeCode(code);

  return (
    <div className="code-snippet">

      {/* Header */}
      <div className="code-header">

        <div className="code-file">
          <span className="code-dot"></span>
          <span>{filename}</span>
        </div>

        <div className="code-header-right">
          <span className="code-language">
            {language}
          </span>

          <button
            className="code-expand"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            {expanded ? "Collapse" : "Expand"}
          </button>
        </div>

      </div>


      {/* Code */}
      {expanded && (
        <div className="code-body">
          <pre>
            <code>{formattedCode}</code>
          </pre>
        </div>
      )}


      {/* Description */}
      <div className="code-description">
        <p>{description}</p>
      </div>

    </div>
  );
}
