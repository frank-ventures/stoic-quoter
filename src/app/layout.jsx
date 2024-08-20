import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Stoic Quoter",
  description: "Control what you can control.",
};

const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={garamond.className}>{children}</body>
    </html>
  );
}
