import type { Metadata } from "next";
import "./globals.css";
import { LoadingOverlay } from "@/components/LoadingOverlay";


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
        className="antialiased"
      >
        <LoadingOverlay />
        {children}
      </body>
    </html>
  );
}
