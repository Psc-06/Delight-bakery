import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Delight Bakery - Freshly Baked Happiness in Jaipur",
  description:
    "Premium bakery in Jaipur offering fresh cakes, pastries, cookies, breads, and custom celebration cakes. Located in Shyam Nagar with over 410 5-star reviews.",
  keywords:
    "bakery Jaipur, cakes Jaipur, pastries, custom cakes, Delight Bakery, Shyam Nagar bakery",
  authors: [{ name: "Delight Bakery" }],
  openGraph: {
    title: "Delight Bakery - Freshly Baked Happiness in Jaipur",
    description:
      "Premium bakery in Jaipur offering fresh cakes, pastries, cookies, and breads",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
