import type { Metadata } from "next";
import {
  Great_Vibes,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Yustifan & Leta | The Wedding",
  description:
    "Undangan pernikahan digital Yustifan & Leta. Dengan penuh kebahagiaan kami mengundang Anda untuk hadir di hari istimewa kami.",
  keywords: [
    "undangan pernikahan",
    "wedding invitation",
    "Yustifan",
    "Leta",
  ],
  openGraph: {
    title: "Yustifan & Leta | The Wedding",
    description: "The Wedding of Yustifan & Leta",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${greatVibes.variable} ${playfair.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
