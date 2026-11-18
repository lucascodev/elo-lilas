// next/image does not prefix basePath on string sources, so public assets need it explicitly.
export function toPublicAssetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
