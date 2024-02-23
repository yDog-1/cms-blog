import { Tag } from "@/types/Tag";

export class TagColor {
  readonly blackText: boolean;
  readonly hsl: string;

  constructor(
    readonly tag: Tag,
    private color: [Hue: number, Saturation: number, Lightness: number]
  ) {
    this.blackText = this.isBlack();
    this.hsl = `hsl(${this.color[0]} ${this.color[1]}% ${this.color[2]}%)`;
  }

  private isBlack(): boolean {
    return this.color[2] > 50 ? true : false;
  }
}

export const tagColors = [
  new TagColor("Next.js", [217, 33, 17]),
  new TagColor("JavaScript", [45, 93, 47]),
  new TagColor("TypeScript", [217, 91, 60]),
  new TagColor("microCMS", [215, 25, 27]),
  new TagColor("Tailwind CSS", [199, 89, 48]),
  new TagColor("SCSS", [292, 91, 73]),
  new TagColor("Notion", [222, 47, 11]),
  new TagColor("その他", [0, 0, 50]),
];
