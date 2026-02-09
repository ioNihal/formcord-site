import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Formcord",
    template: "%s · Formcord",
  },
  description:
    "Universal Discord notifications with zero dependencies. Works in Edge, serverless, and Node runtimes using only Web APIs.",
  metadataBase: new URL("https://formcord.vercel.app"),
  keywords: [
    "discord",
    "notifications",
    "webhooks",
    "edge",
    "serverless",
    "node",
    "npm",
    "formcord",
  ],
  verification: {
    google: "nJTi0WblYTwIGSD_CRF7Gzz5CI2BhPvHV0Uq6qSYoIw"
  },
  openGraph: {
    title: "Formcord",
    description:
      "Universal Discord notifications with zero dependencies. Works in Edge, serverless, and Node runtimes using only Web APIs.",
    url: "https://formcord.vercel.app",
    siteName: "Formcord",
    images: [
      {
        url: "https://rendercard.vercel.app/api/rendercard?title=Formcord&description=Universal+Discord+notifications+with+zero+dependencies.&theme=glass&accent=%235865F2&site=formcord.vercel.app",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formcord",
    images: [
      {
        url: "https://rendercard.vercel.app/api/rendercard?title=Formcord&description=Universal+Discord+notifications+with+zero+dependencies.&theme=glass&accent=%235865F2&site=formcord.vercel.app",
      },
    ],
    description:
      "Universal Discord notifications with zero dependencies. Works in Edge, serverless, and Node runtimes using only Web APIs.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Formcord",
  description:
    "Universal Discord notifications with zero dependencies. Works in Edge, serverless, and Node runtimes using only Web APIs.",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  url: "https://formcord.vercel.app",
  license: "https://github.com/ioNihal/formcord/blob/main/LICENSE",
  author: {
    "@type": "Person",
    name: "Nihal",
    url: "https://ionihal.vercel.app",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} antialiased font-sans overflow-x-hidden`}>
        {/* jsonld schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
