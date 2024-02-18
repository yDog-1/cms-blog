import { Metadata } from "next";

export const siteName = "yDog Tech Blog";

const constantMetadata: Metadata = {
  openGraph: {
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@yDog_1",
  },
};

export default constantMetadata;
