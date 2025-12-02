import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { LoadingOverlay } from "@/components/LoadingOverlay";


const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Johan RAKOTONIAINA - Portfolio",
  description: "Portfolio de Johan Rakotoniaina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} antialiased`}
      >
        <LoadingOverlay />
        {children}
      </body>
    </html>
  );
}
