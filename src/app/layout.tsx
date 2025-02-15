import NavBar from "./components/NavBar";
import "./globals.css";
import Providers from "./provider"; // ✅ Import Redux wrapper

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers> {/* ✅ Wrap everything inside Providers */}
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
