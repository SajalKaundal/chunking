export function extractValues(node: any): string {
  if (node.value) {
    return node.value;
  }
  if (node.children) {
    return node.children.map((child: any) => extractValues(child)).join("");
  }

  return "";
}
