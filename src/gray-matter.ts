import matter from "gray-matter";
import fs from "node:fs";
import { getAST } from "./ast-parser.js";
import { extractSections } from "./section-extracter.js";
import { extractValues } from "./value-extracter.js";

interface ParentChunk {
  title: string;
  description: string;
  chunks: Array<{ title: string; content: Array<string> }>;
}

const data = fs.readFileSync(
  "./docs/01-app/01-getting-started/01-installation.mdx",
  "utf-8",
);

const parsedText = matter(data);

const ast = getAST(parsedText.content);

const sections = extractSections(ast);

for (const section of sections) {
  section.content = section.content.map((content, index) =>
    extractValues(content),
  );
}

//Creating a parent chunk
const parentChunk: ParentChunk = {
  title: parsedText.data.title,
  description: parsedText.data.description,
  chunks: sections.map((section, index) => {
    const title = section.title;
    const content = section.content;
    return { title, content };
  }),
};

// console.log(parentChunk)
console.dir(parentChunk, { depth: null, colors: true });


// console.log(ast);
// parsedText.content = JSON.stringify(sections);

// console.log(parsedText);
// console.log(sections);
