import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alekh.vercel.app"),
  title: "Hey Maya ❤️ — A little apology",
  description: "A sincere little apology, made with love, regret, and a bit of coding.",
  openGraph: {
    title: "Hey Maya ❤️",
    description: "A little apology, made with love.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hey Maya — a little apology, made with love." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hey Maya ❤️",
    description: "A little apology, made with love.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
