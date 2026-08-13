interface Section {
  title: string;
  level: number;
  content: string[];
}

function getText(node: any): string {
  if (node.value) {
    return node.value;
  }

  if (node.children) {
    return node.children.map((child: any) => getText(child)).join("");
  }

  return "";
}

export function extractSections(ast: any): Section[] {
  const sections: Section[] = [];

  let currentSection: Section | null = null;

  for (const node of ast.children) {
    if (node.type === "heading") {
      const title = getText(node);

      currentSection = {
        title,
        level: node.depth,
        content: [],
      };

      sections.push(currentSection);

      continue;
    }

    if (currentSection) {
      currentSection.content.push(node);
    }
  }

  return sections;
}
