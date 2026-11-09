import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "A Little World of Us — For Enzey",
  description: "Our favourite moments, little letters, and adventures still to come.",
  openGraph: { title: "A Little World of Us — For Enzey", description: "A little collection, just for us.", images: [] },
  twitter: { card: "summary", title: "A Little World of Us — For Enzey", description: "A little collection, just for us.", images: [] },
};
export default function WorldLayout({ children }: { children: React.ReactNode }) { return children; }
