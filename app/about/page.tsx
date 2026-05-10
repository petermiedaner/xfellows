"use client";
import Image from "next/image";
import { FaEnvelope, FaGraduationCap } from "react-icons/fa";

export default function About() {
  return (
    <main style={{
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "40px 60px",
      fontFamily: "Arial, Helvetica, sans-serif",
      paddingTop: "120px",
    }}>
      {/* Title */}
      <h1 style={{
        fontSize: "clamp(20px, 3vw, 32px)",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "20px",
      }}>
        About XFELLOWs
      </h1>

      {/* Description */}
      <p style={{
        fontSize: "clamp(14px, 2vw, 18px)",
        lineHeight: "1.8",
        color: "#555",
        maxWidth: "800px",
        marginBottom: "40px",
      }}>
        XFELLOWs was created to expand access to the XFEL community for scientists around the world.
        Due to the novelty of XFEL technology, there can be a high barrier of entry for
        XFEL research. Regular opportunities to engage in the XFEL community are largely concentrated 
        around the facilities themselves. XFELLOWs aims to fill this gap by 
        providing a remote platform where scientists from anywhere can participate in XFEL research 
        discussions, learn the practical skills needed to write successful proposals, and connect with the 
        broader community. We hope to expand the diversity of thought, science, and geography that shapes
        the future of XFEL research.
      </p>

      {/* Mission Statement */}
      <div style={{
        padding: "20px 24px",
        backgroundColor: "#f8f3f6",
        borderLeft: "4px solid #ea5078",
        marginBottom: "40px",
        maxWidth: "800px",
      }}>
        <p style={{
          fontSize: "clamp(14px, 1.8vw, 17px)",
          lineHeight: "1.7",
          color: "#333",
          fontStyle: "italic",
          fontWeight: "500",
          margin: 0,
        }}>
          XFELLOWs aims to cultivate an inclusive environment that welcomes both novice and experienced 
          participants, prioritizing exploratory and diverse perspectives.
        </p>
      </div>

      {/* Team Section */}
      <h2 style={{
        fontSize: "clamp(18px, 2.5vw, 26px)",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "20px",
      }}>
        Organizers
      </h2>

      {/* Headshot Card */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}>
        {/* Circular Image with Pink Border */}
        <div style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          border: "4px solid #ea5078",
          overflow: "hidden",
          position: "relative",
        }}>
          <Image
            src="xfellows/public/peter.jpeg"
            alt="Peter Miedaner"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        {/* Name */}
        <p style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
          margin: 0,
        }}>
          Peter Miedaner
        </p>

        {/* Position */}
        <p style={{
          fontSize: "14px",
          color: "#666",
          margin: 0,
        }}>
          Ph.D. Candidate, MIT
        </p>

        {/* Contact Links */}
        <div style={{
          display: "flex",
          gap: "16px",
          marginTop: "4px",
        }}>
          <a
            href="mailto:miedaner@mit.edu"
            aria-label="Email Peter Miedaner"
            style={{
              color: "#555",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#ea5078"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#555"}
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://scholar.google.com/citations?user=-0Y0IxIAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar profile"
            style={{
              color: "#555",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#ea5078"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#555"}
          >
            <FaGraduationCap size={24} />
          </a>
        </div>
      </div>
    </main>
  );
}