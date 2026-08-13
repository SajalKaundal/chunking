export interface Chunk {
  id: number;
  text: string;
}

export function chunkText(
  text: string,
  chunkSize: number,
  overlap: number,
): Chunk[] {
  const words = text.split(/\s+/);

  const chunks: Chunk[] = [];

  let start = 0;
  let id = 0;

  while (start < words.length) {
    const end = start + chunkSize;

    const chunkWords = words.slice(start, end);

    chunks.push({
      id,
      text: chunkWords.join(" "),
    });

    id++;

    start += chunkSize - overlap;
  }

  return chunks;
}
