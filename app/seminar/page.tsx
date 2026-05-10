export default function Seminar() {
  // Upcoming seminar data
  const upcomingSeminar = {
    title: "Example",
    speaker: "Dr. Example",
    affiliation: "some XFEL",
    date: "sometime",
    time: "4:00 PM CET / 10:00 AM EST",
    zoomLink: "link",
    abstract: `XFEL science.`,
  };

  // Seminar schedule data
  const seminars = [
    {
      date: "June 15, 2026",
      speaker: "Example",
      affiliation: "European XFEL",
      topic: "Ultrafast Dynamics in Proteins Revealed by XFEL Serial Crystallography",
      status: "upcoming",
    },
    {
      date: "June 22, 2026",
      speaker: "Example",
      affiliation: "SLAC / Stanford",
      topic: "Single Particle Imaging at LCLS-II",
      status: "upcoming",
    },
    {
      date: "June 29, 2026",
      speaker: "Example",
      affiliation: "SACLA / RIKEN",
      topic: "Coherent Diffractive Imaging of Nanocrystals",
      status: "upcoming",
    },
    {
      date: "July 6, 2026",
      speaker: "Example",
      affiliation: "Elettra / FERMI",
      topic: "Seeded FEL Spectroscopy of Quantum Materials",
      status: "upcoming",
    },
    {
      date: "June 8, 2026",
      speaker: "Example",
      affiliation: "PAL-XFEL",
      topic: "Time-Resolved XFEL Studies of Chemical Reactions",
      status: "past",
    },
    {
      date: "June 1, 2026",
      speaker: "Example",
      affiliation: "SwissFEL / PSI",
      topic: "Attosecond X-ray Pulses for Electron Dynamics",
      status: "past",
    },
  ];

  const upcomingSeminars = seminars.filter(s => s.status === "upcoming");
  const pastSeminars = seminars.filter(s => s.status === "past");

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
        Seminar Series
      </h1>

      {/* Description */}
      <p style={{
        fontSize: "clamp(14px, 2vw, 18px)",
        lineHeight: "1.8",
        color: "#555",
        maxWidth: "800px",
        marginBottom: "40px",
      }}>
        To increase accessibility of XFEL science topics, we have started this weekly 
        remote seminar series, inviting leading scientists from around the globe to share 
        their research and ideas.
      </p>

      {/* ============ NEXT UPCOMING SEMINAR ============ */}
      <h2 style={{
        fontSize: "clamp(18px, 2.5vw, 26px)",
        fontWeight: "bold",
        color: "#ea5078",
        marginBottom: "20px",
      }}>
        📢 Next Seminar
      </h2>

      <div style={{
        backgroundColor: "white",
        border: "2px solid #ea5078",
        borderRadius: "12px",
        padding: "30px",
        maxWidth: "900px",
        width: "100%",
        marginBottom: "50px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}>
        {/* Seminar Title */}
        <h3 style={{
          fontSize: "clamp(16px, 2vw, 22px)",
          fontWeight: "bold",
          color: "#333",
          marginTop: 0,
          marginBottom: "12px",
        }}>
          {upcomingSeminar.title}
        </h3>

        {/* Speaker Info */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          marginBottom: "20px",
          fontSize: "clamp(13px, 1.5vw, 16px)",
          color: "#555",
        }}>
          <p style={{ margin: 0 }}>
            🎤 <strong>{upcomingSeminar.speaker}</strong> — {upcomingSeminar.affiliation}
          </p>
          <p style={{ margin: 0 }}>
            📅 {upcomingSeminar.date}
          </p>
          <p style={{ margin: 0 }}>
            🕓 {upcomingSeminar.time}
          </p>
        </div>

        {/* Zoom Link */}
        <a
          href={upcomingSeminar.zoomLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#ea5078",
            color: "white",
            padding: "10px 24px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          Join via Zoom →
        </a>

        {/* Abstract */}
        <div style={{
          borderTop: "1px solid #e5e5e5",
          paddingTop: "16px",
        }}>
          <p style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "8px",
          }}>
            Abstract:
          </p>
          <p style={{
            fontSize: "clamp(13px, 1.5vw, 15px)",
            lineHeight: "1.8",
            color: "#555",
            margin: 0,
          }}>
            {upcomingSeminar.abstract}
          </p>
        </div>
      </div>

      {/* ============ UPCOMING SEMINARS TABLE ============ */}
      <h2 style={{
        fontSize: "clamp(18px, 2.5vw, 26px)",
        fontWeight: "bold",
        color: "#519d6f",
        marginBottom: "20px",
      }}>
        Upcoming Seminars
      </h2>

      <div style={{
        width: "100%",
        maxWidth: "900px",
        overflowX: "auto",
        marginBottom: "50px",
      }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "clamp(12px, 1.5vw, 15px)",
        }}>
          <thead>
            <tr style={{
              backgroundColor: "#519d6f",
              color: "white",
            }}>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Date</th>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Speaker</th>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Affiliation</th>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Topic</th>
            </tr>
          </thead>
          <tbody>
            {upcomingSeminars.map((seminar, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "white" : "#f9f9f9",
                  borderBottom: "1px solid #e5e5e5",
                }}
              >
                <td style={{ padding: "12px 16px", whiteSpace: "nowrap" }}>{seminar.date}</td>
                <td style={{ padding: "12px 16px" }}>{seminar.speaker}</td>
                <td style={{ padding: "12px 16px" }}>{seminar.affiliation}</td>
                <td style={{ padding: "12px 16px" }}>{seminar.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ============ PAST SEMINARS TABLE ============ */}
      <h2 style={{
        fontSize: "clamp(18px, 2.5vw, 26px)",
        fontWeight: "bold",
        color: "#005ba5",
        marginBottom: "20px",
      }}>
        Past Seminars
      </h2>

      <div style={{
        width: "100%",
        maxWidth: "900px",
        overflowX: "auto",
        marginBottom: "50px",
      }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "clamp(12px, 1.5vw, 15px)",
        }}>
          <thead>
            <tr style={{
              backgroundColor: "#005ba5",
              color: "white",
            }}>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Date</th>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Speaker</th>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Affiliation</th>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Topic</th>
            </tr>
          </thead>
          <tbody>
            {pastSeminars.map((seminar, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "white" : "#f9f9f9",
                  borderBottom: "1px solid #e5e5e5",
                }}
              >
                <td style={{ padding: "12px 16px", whiteSpace: "nowrap" }}>{seminar.date}</td>
                <td style={{ padding: "12px 16px" }}>{seminar.speaker}</td>
                <td style={{ padding: "12px 16px" }}>{seminar.affiliation}</td>
                <td style={{ padding: "12px 16px" }}>{seminar.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}