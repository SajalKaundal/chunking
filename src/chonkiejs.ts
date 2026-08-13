import { RecursiveChunker } from "@chonkiejs/core";
import fs from "node:fs"


// Create a chunker
const chunker = await RecursiveChunker.create({
  chunkSize: 512, // max tokens per chunk (default: 512)
  tokenizer: "character", // tokenizer model name or Tokenizer instance (default: 'character')
  minCharactersPerChunk: 24, // min characters when merging splits (default: 24)
  // rules: RecursiveRules,    // custom split hierarchy (optional)
});


const text = fs.readFileSync("./docs/01-app/01-getting-started/01-installation.mdx","utf-8")
// Chunk your text
const chunks = await chunker.chunk(text);

// Use the chunks
console.log(chunks);
// for (const chunk of chunks) {
//   console.log(chunk.text);
//   console.log(`Tokens: ${chunk.tokenCount}`);
// }
