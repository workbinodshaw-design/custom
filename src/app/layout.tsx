import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat, Pinyon_Script, Tangerine, Imperial_Script } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cursive = Pinyon_Script({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: ["400"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const imperial = Imperial_Script({
  variable: "--font-imperial",
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata: Metadata = {
  title: "TailorFind | Exceptional Tailors. Everywhere.",
  description: "Find the perfect custom tailor near you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${bodoni.variable} ${cursive.variable} ${tangerine.variable} ${imperial.variable} antialiased bg-[#F5F4F0] text-[#1C1A17]`}
      >
        {children}
      </body>
    </html>
  );
}
