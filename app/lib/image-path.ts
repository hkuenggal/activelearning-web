const PROD_BASE_PATH = "/activelearning-web";

export function imagePath(path: string): string {
  if (!path) {
    return path;
  }

  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const basePath = process.env.NODE_ENV === "production" ? PROD_BASE_PATH : "";

  return `${basePath}${normalizedPath}`;
}