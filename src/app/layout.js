import { Inter } from "next/font/google";
import "@/app/globals.css";
import Bottombar from "@/app/Components/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wayang Kaca",
  description: "Website Wayang Kaca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Bottombar/>
        {children}
      </body>
    </html>
  );
}
