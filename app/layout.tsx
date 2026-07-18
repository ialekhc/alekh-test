import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Little Something, Just for You ❤️",
  description: "A tiny love letter, a very important question, and a date waiting to become a beautiful memory.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
