import "./globals.css";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "Saroj Prasad | Personal Website",
  description: "Portfolio of Saroj Prasad - Senior Software Engineer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
