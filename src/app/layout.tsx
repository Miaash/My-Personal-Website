import "./globals.css";
import "../styles/pixel.css";
import NavBar from "./layout/NavBar";

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
