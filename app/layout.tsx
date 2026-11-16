import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tyler Cyert — Software & Integration Engineer",
    template: "%s — Tyler Cyert",
  },
  description:
    "Tyler Cyert builds and ships internal software products, integrations, and the systems behind business operations. Selected work, public projects, and experience.",
  metadataBase: new URL("https://tylercyert.com"),
  alternates: { canonical: "https://tylercyert.com" },
  openGraph: {
    type: "website",
    url: "https://tylercyert.com",
    title: "Tyler Cyert — Software & Integration Engineer",
    description:
      "I build business backbones. Explore selected integrations, internal products, and public projects.",
    siteName: "Tyler Cyert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Cyert — Software & Integration Engineer",
    description: "I build business backbones.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable + " " + geistMono.variable}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
