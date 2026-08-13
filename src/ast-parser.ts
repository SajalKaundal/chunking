import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";

export const getAST = (content: string) =>
  unified().use(remarkParse).use(remarkMdx).parse(content);
