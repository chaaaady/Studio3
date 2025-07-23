import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio EMARA - Studio d'enregistrement professionnel à Paris",
  description:
    "Studio d'enregistrement professionnel à Paris 13e. Équipements de qualité et ingénieurs expérimentés pour tous vos projets musicaux.",
  keywords: [
    "Studio d'enregistrement",
    "Studio Paris",
    "Enregistrement professionnel",
    "Ingénieur du son",
    "Studio musique",
    "Studio EMARA",
    "Paris 13e",
    "Enregistrement studio",
    "Mixage mastering",
    "Podcast studio",
  ],
  openGraph: {
    type: "website",
    siteName: "Studio EMARA",
    locale: "fr_FR",
    url: "https://studioemara.fr",
    title: "Studio EMARA - Studio d'enregistrement professionnel à Paris",
    description:
      "Studio d'enregistrement professionnel à Paris 13e. Équipements de qualité et ingénieurs expérimentés pour tous vos projets musicaux.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Studio EMARA - Studio d'enregistrement professionnel",
      },
    ],
  },
  authors: [
    {
      name: "Studio EMARA",
      url: "https://studioemara.fr",
    },
  ],
  creator: "Studio EMARA",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
