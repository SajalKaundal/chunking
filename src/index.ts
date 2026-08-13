import fs from "node:fs";
import { chunkText } from "./chunker.js";

const document = fs.readFileSync("./data/document.txt", "utf-8");

const chunks = chunkText(
  document,
  40, // chunk size
  10, // overlap
);

console.log(chunks);
