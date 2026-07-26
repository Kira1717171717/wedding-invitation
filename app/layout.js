import { Cinzel, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";


const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const arabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});


export const metadata = {
  title: "Mohammad & Manar Wedding",
  description: "Wedding Invitation",
};


export default function RootLayout({ children }) {

  return (

    <html lang="ar">

      <body className={`${cinzel.className} ${arabic.className}`}>

        {children}

      </body>

    </html>

  );
}
