import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tyler Cyert",
    template: "%s — Tyler Cyert",
  },
  description: "Integration and AI platform engineer. I build the tooling teams run on — MCP servers, production AI agents, the data warehouse behind the reporting, and the integrations underneath.",
  metadataBase: new URL("https://tylercyert.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body>
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
