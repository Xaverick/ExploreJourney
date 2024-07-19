import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.scss";

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})


export const metadata: Metadata = {
  icons: {
    icon: "/assets/favicon.ico",
  },
  title: "Anubhav Bharat",
  description: "At Anubhav Bharat, we are passionate about crafting unforgettable travel experiences. As a premier traveling and tour company, we specialize in showcasing the rich heritage, diverse cultures, and breathtaking landscapes of India. Our mission is to provide travelers with authentic, immersive journeys that create lasting memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.className}`}>{children}</body>
    </html>
  );
}




