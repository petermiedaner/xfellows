"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "center" : "space-between",
        alignItems: "center",
        gap: isMobile ? "20px" : "0",
        padding: isMobile ? "20px" : "20px 40px",
        backgroundColor: "#faf8f5",
        borderTop: "1px solid #e5e5e5",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "14px",
        color: "#666",
      }}
    >
      {/* Left side text */}
      <div>
        <p
          style={{
            margin: 0,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          2026 XFELLOWs - Gateway to XFEL science.
        </p>
      </div>

      {/* Right side logos */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a href="https://www.mit.edu" target="_blank" rel="noopener noreferrer">
          <img
            src="/mit.png"
            alt="MIT"
            style={{
              width: isMobile ? "48px" : "64px",
              height: "auto",
            }}
          />
        </a>

        <a href="https://ethz.ch/en.html" target="_blank" rel="noopener noreferrer">
          <img
            src="/eth.png"
            alt="ETH"
            style={{
              width: isMobile ? "100px" : "160px",
              height: "auto",
            }}
          />
        </a>

        <a href="https://www.canterbury.ac.nz" target="_blank" rel="noopener noreferrer">
          <img
            src="/canterbury.png"
            alt="University of Canterbury"
            style={{
              width: isMobile ? "60px" : "100px",
              height: "auto",
            }}
          />
        </a>
      </div>
    </footer>
  );
}