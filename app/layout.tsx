import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
        <Navbar />

        {/* Main content grows to push footer down */}
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}