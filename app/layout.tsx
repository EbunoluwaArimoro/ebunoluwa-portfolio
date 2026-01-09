import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  title: "Ebunoluwa Arimoro | Engineering Trust at Scale",
  description: "Designing systems and operational infrastructure for the African landscape.",
  
  // 1. Icons (Favicon)
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg", 
  },

  // 2. Open Graph (LinkedIn, WhatsApp, Facebook)
  openGraph: {
    title: "Ebunoluwa Arimoro | Engineering Trust at Scale",
    description: "Designing systems and operational infrastructure for the African landscape.",
    url: "https://ebunarimoro.com", // Replace with your actual live domain
    siteName: "Ebunoluwa Arimoro",
    images: [
      {
        url: "/image_0.png", // Points to public/image_0.png
        width: 1024,
        height: 1024,
        alt: "Ebunoluwa Arimoro",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 3. Twitter Preview
  twitter: {
    card: "summary_large_image",
    title: "Ebunoluwa Arimoro | Engineering Trust at Scale",
    description: "Designing systems and operational infrastructure for the African landscape.",
    images: ["/image_0.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}