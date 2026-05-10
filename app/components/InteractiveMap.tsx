"use client";

import Image from "next/image";
import { useState } from "react";

const xfelLocations = [
  {
    id: 1,
    name: "European XFEL",
    city: "Hamburg, Germany",
    description: "The largest X-ray laser in the world. 27,000 flashes per second.",
    image: "/EuropeanXFEL.jpeg",
    top: "19.75%",
    left: "49.25%",
    color: "#ea5078",
    tooltipPosition: "center",
  },
  {
    id: 2,
    name: "LCLS",
    city: "Stanford, USA",
    description: "The world's first hard X-ray free-electron laser.",
    image: "/lcls.jpg",
    top: "32.5%",
    left: "7%",
    color: "#005ba5",
    tooltipPosition: "right",
  },
  {
    id: 3,
    name: "SACLA",
    city: "Hyogo, Japan",
    description: "A compact XFEL facility producing powerful X-ray pulses.",
    image: "/sacla.jpg",
    top: "31%",
    left: "91%",
    color: "#519d6f",
    tooltipPosition: "left",
  },
  {
    id: 4,
    name: "SwissFEL",
    city: "Villigen, Switzerland",
    description: "Compact free-electron laser at the Paul Scherrer Institute.",
    image: "/swissfel.jpg",
    top: "23.5%",
    left: "51.5%",
    color: "#f59e0b",
    tooltipPosition: "center",
  },
  {
    id: 5,
    name: "PAL-XFEL",
    city: "Pohang, South Korea",
    description: "South Korea's hard X-ray free-electron laser facility.",
    image: "/pal.jpg",
    top: "29.5%",
    left: "87%",
    color: "#8b5cf6",
    tooltipPosition: "left",
  },
  {
    id: 6,
    name: "FERMI FEL",
    city: "Trieste, Italy",
    description: "Seeded EUV to soft x-ray free-electron laser",
    image: "/fermi.jpg",
    top: "26%",
    left: "51.5%",
    color: "#5bb1c9",
    tooltipPosition: "center",
  },
];

function getTooltipStyle(position: string) {
  switch (position) {
    case "right":
      return {
        bottom: "30px",
        left: "0",
        transform: "translateX(0)",
      };
    case "left":
      return {
        bottom: "30px",
        right: "0",
        transform: "translateX(0)",
      };
    default:
      return {
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
      };
  }
}

export default function InteractiveMap() {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  // Generate keyframes for each location
  const keyframes = xfelLocations
    .map((location) => {
      const rgbColor = location.color;
      return `
        @keyframes pulsate-${location.id} {
          0% {
            box-shadow: 0 0 0 0 ${rgbColor}b3;
          }
          50% {
            box-shadow: 0 0 0 10px ${rgbColor}00;
          }
          100% {
            box-shadow: 0 0 0 0 ${rgbColor}b3;
          }
        }
      `;
    })
    .join("");

  return (
    <>
      {/* Pulsate Animation Keyframes */}
      <style>{`
        ${keyframes}
        .pulsating-dot-1 { animation: pulsate-1 2s infinite; }
        .pulsating-dot-2 { animation: pulsate-2 2s infinite; }
        .pulsating-dot-3 { animation: pulsate-3 2s infinite; }
        .pulsating-dot-4 { animation: pulsate-4 2s infinite; }
        .pulsating-dot-5 { animation: pulsate-5 2s infinite; }
        .pulsating-dot-6 { animation: pulsate-6 2s infinite; }
      `}</style>

      <div style={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "0 20px",
      }}>
        {/* Map Image */}
        <Image
          src="/worldmap.png"
          alt="World Map"
          width={1200}
          height={600}
          priority
          style={{
            width: "100%",
            height: "auto",
          }}
        />

        {/* Hover Points */}
        {xfelLocations.map((location) => (
          <div
            key={location.id}
            onMouseEnter={() => setActivePoint(location.id)}
            onMouseLeave={() => setActivePoint(null)}
            style={{
              position: "absolute",
              top: location.top,
              left: location.left,
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          >
            {/* Dot */}
            <div
              className={activePoint === null ? `pulsating-dot-${location.id}` : ""}
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: location.color,
                borderRadius: "50%",
                border: "2px solid white",
                boxShadow: `0 0 0 ${activePoint === location.id ? "8px" : "0px"} ${location.color}40`,
                transition: "box-shadow 0.3s ease",
              }}
            />

            {/* Tooltip with Image */}
            {activePoint === location.id && (
              <div style={{
                position: "absolute",
                ...getTooltipStyle(location.tooltipPosition),
                backgroundColor: "#faf8f5",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                overflow: "hidden",
                zIndex: 1001,
                borderTop: `3px solid ${location.color}`,
                width: "280px",
                whiteSpace: "normal",
              }}>
                {/* Image */}
                {location.image && (
                  <div style={{
                    width: "100%",
                    height: "150px",
                    position: "relative",
                  }}>
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}

                {/* Text Content */}
                <div style={{
                  padding: "12px 16px",
                }}>
                  <p style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: location.color,
                    margin: "0 0 4px 0",
                  }}>
                    {location.name}
                  </p>
                  <p style={{
                    fontSize: "13px",
                    color: "#666",
                    margin: "0 0 4px 0",
                  }}>
                    📍 {location.city}
                  </p>
                  <p style={{
                    fontSize: "13px",
                    color: "#333",
                    margin: 0,
                    lineHeight: "1.4",
                  }}>
                    {location.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}