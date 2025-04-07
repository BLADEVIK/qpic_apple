import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "QPIC_Apple",
  description: "next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <Footer />
      </body>

    </html>
  );
}
