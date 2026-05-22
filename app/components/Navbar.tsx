"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
      if (window.innerWidth > 768) setMenuOpen(false);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={{
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
      padding: "0px 20px",
      backgroundColor: "#faf8f5",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "20px",
      fontWeight: "bold",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      boxSizing: "border-box",
      zIndex: 1000,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      height: isTablet ? "70px" : isMobile ? "60px" : "80px",
    }}>

      {/* Logo */}
      <Link href="/" style={{ padding: isMobile ? "0px 0" : isTablet ? "8px 0" : "50px 0", display: "flex" }}>
        <img
          src="/xfellas_logo.png"
          alt="My Logo"
          style={{
            width: isMobile ? "150px" : isTablet ? "150px" : "250px",
            height: "auto",
          }}
        />
      </Link>

      {/* Spacer - pushes hamburger to right on mobile */}
      {isMobile && (
        <div style={{ flexGrow: 1 }}></div>
      )}

      {/* Hamburger Button */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            fontSize: "30px",
            cursor: "pointer",
            color: "#374151",
            padding: "5px",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      )}

      {/* Links */}
      {(!isMobile || menuOpen) && (
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isTablet ? "10px" : "20px",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "left",
          flexGrow: 1,
          width: isMobile ? "100%" : "auto",
          padding: isMobile ? "15px 20px" : isTablet ? "20px" : "50px",
          fontSize: isTablet ? "14px" : "20px",
          position: isMobile ? "absolute" : "relative",
          top: isMobile ? "100%" : "auto",
          left: isMobile ? "0" : "auto",
          right: isMobile ? "0" : "auto",
          backgroundColor: isMobile ? "#faf8f5" : "transparent",
          boxShadow: isMobile ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        }}>
          <Link 
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{ 
              color: "#ea5078", 
              textDecoration: "none",
              borderBottom: pathname === "/" ? "3px solid #ea5078" : "3px solid transparent",
              paddingBottom: "4px",
            }}
            onMouseLeave={(e) => e.currentTarget.style.color = "#ea5078"}
            onMouseEnter={(e) => e.currentTarget.style.color = "#374151"}
          >
            Home
          </Link>
          <Link 
            href="/seminar"
            onClick={() => setMenuOpen(false)}
            style={{ 
              color: "#519d6f", 
              textDecoration: "none",
              borderBottom: pathname === "/seminar" ? "3px solid #519d6f" : "3px solid transparent",
              paddingBottom: "4px",
            }}
            onMouseLeave={(e) => e.currentTarget.style.color = "#519d6f"}
            onMouseEnter={(e) => e.currentTarget.style.color = "#374151"}
          >
            Seminar
          </Link>
          <Link 
            href="/deadlines"
            onClick={() => setMenuOpen(false)}
            style={{ 
              color: "#5bb1c9", 
              textDecoration: "none",
              borderBottom: pathname === "/deadlines" ? "3px solid #5bb1c9" : "3px solid transparent",
              paddingBottom: "4px",
            }}
            onMouseLeave={(e) => e.currentTarget.style.color = "#5bb1c9"}
            onMouseEnter={(e) => e.currentTarget.style.color = "#374151"}
          >
            Proposal deadlines
          </Link>
          <Link 
            href="/about"
            onClick={() => setMenuOpen(false)}
            style={{ 
              color: "#005ba5", 
              textDecoration: "none",
              borderBottom: pathname === "/about" ? "3px solid #005ba5" : "3px solid transparent",
              paddingBottom: "4px",
            }}
            onMouseLeave={(e) => e.currentTarget.style.color = "#005ba5"}
            onMouseEnter={(e) => e.currentTarget.style.color = "#374151"}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}