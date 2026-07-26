import "./globals.css";

export const metadata = {
  title: "Mohammad & Manar Wedding",
  description: "Wedding Invitation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
