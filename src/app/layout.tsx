import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import StickyMobileBar from "@/components/conversion/StickyMobileBar";
import ExitIntentPopup from "@/components/conversion/ExitIntentPopup";
import WhatsAppBubble from "@/components/conversion/WhatsAppBubble";
import SocialProofToast from "@/components/conversion/SocialProofToast";
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Little Stars Academy | Best Preschool in Jubilee Hills, Hyderabad",
  description: "Nurturing minds, sparking curiosity, and building friendships at Little Stars Academy. Enroll your child in our award-winning preschool programs for ages 2 to 6.",
  keywords: "preschool Hyderabad, best kindergarten Jubilee Hills, Little Stars Academy, early childhood education",
  metadataBase: new URL("https://littlestarsacademy.in"),
  openGraph: {
    title: "Little Stars Academy | Where Every Child's Journey Begins",
    description: "Nurturing minds and sparking curiosity in Jubilee Hills, Hyderabad.",
    url: "/",
    siteName: "Little Stars Academy",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body className={`${nunito.variable} ${inter.variable} font-inter antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <StickyMobileBar />
        <ExitIntentPopup />
        <WhatsAppBubble />
        <SocialProofToast />
      </body>
    </html>
  );
}
