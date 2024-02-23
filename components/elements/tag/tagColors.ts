import { Tag } from "@/types/Tag";

export class TagColor {
  readonly blackText: boolean;

  constructor(readonly tag: Tag, readonly color: string) {
    this.blackText = this.isBlack();
  }

  private isBlack(): boolean {
    // RGBの加重平均による明度の計算
    const brightness =
      parseInt(this.color.substr(0, 2), 16) * 0.299 + // Red
      parseInt(this.color.substr(2, 2), 16) * 0.587 + // Green
      parseInt(this.color.substr(4, 2), 16) * 0.114; // Blue
    return brightness > 128 ? true : false;
  }
}

export const tagColors = [
  new TagColor("Next.js", "#1e293b"),
  new TagColor("JavaScript", "#eab308"),
  new TagColor("TypeScript", "#3b82f6"),
  new TagColor("microCMS", "#334155"),
  new TagColor("Tailwind CSS", "#0ea5e9"),
  new TagColor("SCSS", "#e879f9"),
  new TagColor("Notion", "#0f172a"),
  new TagColor("その他", "#5b5b5b"),
];
