"use client";

export default function Deadlines() {
  const deadlines = [
    {
      facility: "LCLS / LCLS-II",
      location: "Stanford, USA",
      nextDeadline: "March 10, 2026",
      time: "17:00",
      timezone: "America/Los_Angeles",
      tzAbbr: "PT",
      color: "#005ba5",
      link: "https://lcls.slac.stanford.edu/proposals",
    },
    {
      facility: "European XFEL",
      location: "Hamburg, Germany",
      nextDeadline: "May 7, 2026",
      time: "16:00",
      timezone: "Europe/Berlin",
      tzAbbr: "CEST",
      color: "#ea5078",
      link: "https://www.xfel.eu/users/beamtime/call_for_proposals/",
    },
    {
      facility: "SACLA",
      location: "Hyogo, Japan",
      nextDeadline: "May 25, 2026",
      time: "10:00",
      timezone: "Asia/Tokyo",
      tzAbbr: "JST",
      color: "#519d6f",
      link: "https://sacla.xfel.jp/?p=10944&lang=en",
    },
    {
      facility: "SwissFEL",
      location: "Villigen, Switzerland",
      nextDeadline: "March 16, 2026",
      time: "17:00",
      timezone: "Europe/Zurich",
      tzAbbr: "CET",
      color: "#f59e0b",
      link: "https://www.psi.ch/en/swissfel/calls",
    },
    {
      facility: "PAL-XFEL",
      location: "Pohang, South Korea",
      nextDeadline: "April 24, 2026",
      time: "17:00",
      timezone: "Asia/Seoul",
      tzAbbr: "KST",
      color: "#8b5cf6",
      link: "https://pal.postech.ac.kr/en/intro/greeting.do",
    },
    {
      facility: "FERMI",
      location: "Trieste, Italy",
      nextDeadline: "June 3rd, 2026",
      time: "23:59",
      timezone: "Europe/Rome",
      tzAbbr: "CET",
      color: "#5bb1c9",
      link: "https://www.elettra.eu/userarea/fermielettra-call-for-proposals.html",
    },
  ];

  function isDeadlinePassed(dateString: string): boolean {
    if (dateString === "TBA" || dateString === "CLOSED") return false;
    const deadline = new Date(dateString);
    const today = new Date();
    // Set to start of day for fair comparison
    today.setHours(0, 0, 0, 0);
    deadline.setHours(0, 0, 0, 0);
    return deadline < today;
  }

  function isDeadlineSoon(dateString: string): boolean {
    if (dateString === "TBA" || dateString === "CLOSED") return false;
    if (isDeadlinePassed(dateString)) return false;
    const deadline = new Date(dateString);
    const today = new Date();
    const diffDays = (deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= 15;
  }

  const sortedDeadlines = [...deadlines].sort((a, b) => {
    const aPassed = isDeadlinePassed(a.nextDeadline);
    const bPassed = isDeadlinePassed(b.nextDeadline);
    
    // Open deadlines come first, closed deadlines come last
    if (aPassed !== bPassed) {
      return aPassed ? 1 : -1;
    }
    
    // Within each group, sort by date
    return new Date(a.nextDeadline).getTime() - new Date(b.nextDeadline).getTime();
  });

  // Format a Date + time string as ICS datetime: YYYYMMDDTHHMMSS
  function formatICSDateTime(date: Date, time: string): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    const [hours, minutes] = time.split(":");
    return `${y}${m}${d}T${hours}${minutes}00`;
  }

  // Generate and download a .ics file with time and timezone
  function downloadICS(
    facility: string,
    dateString: string,
    time: string,
    timezone: string,
    proposalUrl: string
  ) {
    const date = new Date(dateString);
    const now = new Date();
    const timestamp = now.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const uid = `${date.toISOString().split("T")[0]}-${facility.replace(/\s/g, "")}@xfellows`;

    // End time is 1 hour after start
    const [h, min] = time.split(":").map(Number);
    const endHour = String(h + 1).padStart(2, "0");
    const endTime = `${endHour}:${String(min).padStart(2, "0")}`;

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//XFELLOWs//Deadlines//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${timestamp}`,
      `DTSTART;TZID=${timezone}:${formatICSDateTime(date, time)}`,
      `DTEND;TZID=${timezone}:${formatICSDateTime(date, endTime)}`,
      `SUMMARY:${facility} Proposal Deadline`,
      `DESCRIPTION:Submit your proposal before the deadline.\\nSubmission page: ${proposalUrl}`,
      `URL:${proposalUrl}`,
      "STATUS:CONFIRMED",
      "BEGIN:VALARM",
      "TRIGGER:-P7D",
      "ACTION:DISPLAY",
      "DESCRIPTION:Proposal deadline in 7 days",
      "END:VALARM",
      "BEGIN:VALARM",
      "TRIGGER:-P1D",
      "ACTION:DISPLAY",
      "DESCRIPTION:Proposal deadline tomorrow",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${facility.replace(/[^a-zA-Z0-9]/g, "_")}_deadline.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <main className="page-shell">
      <h1 style={{
        fontSize: "clamp(20px, 3vw, 32px)",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "20px",
      }}>
        Proposal Deadlines
      </h1>

      <p style={{
        fontSize: "clamp(14px, 2vw, 18px)",
        lineHeight: "1.8",
        color: "#555",
        maxWidth: "800px",
        marginBottom: "10px",
      }}>
        Keep track of proposal deadlines at XFELs around the globe. Click on a
        facility name to visit their proposal submission page.
      </p>

      <div style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
        fontSize: "14px",
        color: "#555",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{
            width: "14px",
            height: "14px",
            backgroundColor: "#fef2f2",
            border: "1px solid #ef4444",
            borderRadius: "3px",
          }} />
          <span>Deadline within 15 days</span>
        </div>
      </div>

      <div className="page-table-container">
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "clamp(12px, 1.5vw, 15px)",
        }}>
          <thead>
            <tr style={{ backgroundColor: "#333", color: "white" }}>
              <th style={{ padding: "14px 16px", textAlign: "left" }}>Facility</th>
              <th style={{ padding: "14px 16px", textAlign: "left" }}>Location</th>
              <th style={{ padding: "14px 16px", textAlign: "left" }}>Next Deadline</th>
              <th style={{ padding: "14px 16px", textAlign: "center" }}>Calendar Link</th>
              <th style={{ padding: "14px 16px", textAlign: "center" }}>Application page</th>
            </tr>
          </thead>
          <tbody>
            {sortedDeadlines.map((item, index) => {
              const passed = isDeadlinePassed(item.nextDeadline);
              const soon = isDeadlineSoon(item.nextDeadline);
              return (
                <tr
                  key={index}
                  style={{
                    backgroundColor: passed
                      ? "#f5f5f5"
                      : soon
                        ? "#fef2f2"
                        : index % 2 === 0
                          ? "white"
                          : "#f9f9f9",
                    borderBottom: "1px solid #e5e5e5",
                    opacity: passed ? 0.7 : 1,
                  }}
                >
                  <td style={{ padding: "14px 16px", fontWeight: "bold" }}>
                    <span style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}>
                      <span style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: item.color,
                        display: "inline-block",
                      }} />
                      {item.facility}
                    </span>
                  </td>

                  <td style={{ padding: "14px 16px" }}>
                    {item.location}
                  </td>

                  {/* Deadline with time and timezone */}
                  <td style={{
                    padding: "14px 16px",
                    whiteSpace: "nowrap",
                    color: passed ? "#999" : soon ? "#ef4444" : "#333",
                    fontWeight: passed ? "normal" : soon ? "bold" : "normal",
                  }}>
                    {passed && "🔒 "}
                    {soon && !passed && "⚠️ "}
                    {passed ? "CLOSED" : item.nextDeadline}
                    {item.nextDeadline !== "TBA" && !passed && (
                      <span style={{
                        color: soon ? "#ef4444" : "#888",
                        fontSize: "0.85em",
                        marginLeft: "6px",
                      }}>
                        {item.time} {item.tzAbbr}
                      </span>
                    )}
                  </td>

                  {/* Calendar Download */}
                  <td style={{ padding: "14px 16px", textAlign: "center" }}>
                    {item.nextDeadline !== "TBA" && !passed ? (
                      <button
                        onClick={() => downloadICS(
                          item.facility,
                          item.nextDeadline,
                          item.time,
                          item.timezone,
                          item.link
                        )}
                        title={`Download ${item.facility} deadline as calendar event`}
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: "20px",
                          cursor: "pointer",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                      >
                        📅
                      </button>
                    ) : (
                      <span style={{ color: "#ccc" }}>—</span>
                    )}
                  </td>

                  <td style={{ padding: "14px 16px", textAlign: "center" }}>
                    {!passed ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: item.color,
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                      >
                        Apply →
                      </a>
                    ) : (
                      <span style={{ color: "#ccc" }}>—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p style={{
        fontSize: "13px",
        color: "#999",
        maxWidth: "800px",
        lineHeight: "1.6",
      }}>
        ⓘ Deadlines are updated periodically and may not reflect the most current
        information. Always check the official facility website for confirmed dates
        and submission requirements.
      </p>
    </main>
  );
}