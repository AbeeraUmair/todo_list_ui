import Footer from "../app/components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import Providers from "./provider"; 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
