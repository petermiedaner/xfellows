import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
        <GoogleAnalytics gaId="G-XDJJJ0MBH7" />
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