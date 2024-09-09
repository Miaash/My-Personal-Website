import "./globals.css";
import "../styles/pixel.css";
import NavBar from "./layout/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miasoft Windows 99",
  description: "hongseonga's website",
  icons: {
    icon: "/images/w95-icons-windows.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-secondary overflow-hidden">
        {children}
        <NavBar />
      </body>
    </html>
  );
}
