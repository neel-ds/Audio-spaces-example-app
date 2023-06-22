import { Inter } from "next/font/google";

// Styles
import "./globals.css";

// Components
import Navbar from "@/components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Audio Spaces Example App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen relative`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
