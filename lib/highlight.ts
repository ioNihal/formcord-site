import { createHighlighter } from "shiki";

const highlighterPromise = createHighlighter({
  themes: ["github-dark"],
  langs: ["ts", "bash"],
});

export async function highlight(code: string, lang = "ts") {
  const highlighter = await highlighterPromise;

  return highlighter.codeToHtml(code, {
    lang,
    theme: "github-dark",
  });
}
