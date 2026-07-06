function parseInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

export function parseMarkdownSections(source = "") {
  const sectionRegex =
    /<!--\s*section:([a-z0-9-]+)\s*-->\s*([\s\S]*?)(?=(?:\n<!--\s*section:[a-z0-9-]+\s*-->)|$)/gi;

  const sections = {};

  for (const match of source.replace(/\r\n/g, "\n").matchAll(sectionRegex)) {
    const [, name, content] = match;
    sections[name] = content.trim();
  }

  return sections;
}

export function renderMarkdown(source = "") {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const output = [];
  let paragraph = [];
  let listItems = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    output.push(`<p>${parseInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (!listItems.length) return;
    output.push(`<ul>${listItems.join("")}</ul>`);
    listItems = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("#### ")) {
      flushParagraph();
      flushList();
      output.push(`<h4>${parseInline(line.slice(5))}</h4>`);
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      output.push(`<h3>${parseInline(line.slice(4))}</h3>`);
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(`<li>${parseInline(line.slice(2))}</li>`);
      continue;
    }

    if (line.startsWith("<") && line.endsWith(">")) {
      flushParagraph();
      flushList();
      output.push(line);
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return output.join("");
}
