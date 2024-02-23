export type Tag =
  | "Next.js"
  | "Javascript"
  | "Typescript"
  | "microCMS"
  | "tailwindcss"
  | "scss"
  | "Notion"
  | "その他";

export type TagColor = Record<Tag, { bgColor: string; blackText: boolean }>;
