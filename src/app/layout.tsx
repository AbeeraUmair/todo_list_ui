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
          {children}
        </Providers>
      </body>
    </html>
  );
}
