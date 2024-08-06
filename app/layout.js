import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "Kangoo Xpress",
  description: "Creamos soluciones, unimos posibilidades",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={comfortaa.className}>{children}</body>
    </html>
  );
}
