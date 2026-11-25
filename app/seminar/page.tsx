function calendarDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function calendarText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\r\n|\r|\n/g, "\\n").replace(/[;,]/g, "\\$&");
}

export default function Seminar() {
  // Upcoming seminar data
  const upcomingSeminar = {
    title: "Serial diffractive imaging at high-repetition-rate XFELs",
    speaker: "Kartik Ayyer",
    affiliation: "Group Leader - Max Plank Institute",
    startsAt: "2026-12-02T16:00:00Z",
    durationMinutes: 60,
    zoomLink: "https://ethz.zoom.us/meeting/register/QFdZL_FcRUmOvTAMf9rYzg",
    abstract: `Pump–probe diffraction and scattering at X-ray free-electron lasers (XFELs) are well-established methods for studying ultrafast structural dynamics at high spatial resolution. In this talk, I will focus on how high repetition rates extend these capabilities by enabling serial measurements of large numbers of individual particles. I will describe how machine learning can be used to analyse the resulting diffraction patterns and infer structural variation within an ensemble, as well as changes in the distribution of structures during a dynamical process.

    Building on our proof-of-concept studies of the structural landscape of gold nanoparticles [1,2], I will discuss three applications of this approach: large polaron formation in CsPbBr₃ quantum dots [3], dehydration dynamics of MS2 bacteriophage capsids using deep learning [4], and plasmon-induced structural deformations of gold nanoparticles. I will also discuss how the rapidly evolving capabilities of AI tools are changing how we develop and test analysis methods for these experiments. Finally, I will consider the possibility of using these methods to study ultrafast dynamics in systems where precise optical triggering is not possible.

    [1] Ayyer, et al, Optica 8(1), 15-23 (2021)
    [2] Shen, et al, ACS Nano 18, 24, 15576-15589 (2024)
    [3] Shen, et al, ACS Nano 19, 31, 28372-28382 (2025)
    [4] Mall, et al, Light Sci Appl 15, 280 (2026)`,
  };

  const startsAt = new Date(upcomingSeminar.startsAt);
  const endsAt = new Date(startsAt.getTime() + upcomingSeminar.durationMinutes * 60_000);
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "Europe/Zurich",
  }).format(startsAt);
  const time = [
    ["America/Los_Angeles", "Pacific"],
    ["America/New_York", "Eastern"],
    ["Europe/Zurich", "Central Europe"],
  ].map(([timeZone, label]) => {
    const localTime = new Intl.DateTimeFormat("en-US", { timeStyle: "short", timeZone });
    return `${localTime.format(startsAt)} ${label}`;
  }).join(" / ");

  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//XFELLOWs//Seminar Series//EN",
    "BEGIN:VEVENT",
    `UID:${calendarDate(startsAt)}@x-fellows.com`,
    `DTSTAMP:${calendarDate(new Date())}`,
    `DTSTART:${calendarDate(startsAt)}`,
    `DTEND:${calendarDate(endsAt)}`,
    `SUMMARY:${calendarText(upcomingSeminar.title)}`,
    `DESCRIPTION:${calendarText(`XFELLOWs seminar with ${upcomingSeminar.speaker}.`)}`,
    `URL:${upcomingSeminar.zoomLink}`,
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");

  // Seminar schedule data
  const seminars = [
    {
      date: "June 18, 2026",
      speaker: "Chi-Chang Kao",
      affiliation: "Professor of Photon Science - Stanford University & Emeritus Director - SLAC",
      topic: "Inelastic X-ray Scattering Using High Repetition Rate X-ray FEL ",
      status: "past",
    },
    {
      date: "July 1, 2026",
      speaker: "Claudio Masciovecchio",
      affiliation: "Director - FERMI FEL",
      topic: "Exploring the Nanoscale with Free Electron Lasers: Current Advances and Future Prospects",
      status: "past",
    },
    {
      date: "July 22, 2026",
      speaker: "Chris Milne",
      affiliation: "Group Leader - Femtosecond X-ray Experiements EuXFEL",
      topic: "Probing ultrafast structural and electronic dynamics in advanced materials using X-ray free electron lasers",
      status: "past",
    },
    {
      date: "August 5, 2026",
      speaker: "Ben Ofori-Okai",
      affiliation: "Assistant Professor of Photon Science - Stanford Pulse Institute",
      topic: "Applications of XFELs for High Energy Density Science",
      status: "past",
    },
    {
      date: "January 20, 2027",
      speaker: "Kelly Gaffney",
      affiliation: "Professor of Photon Science - Stanford University & Director - LCLS",
      topic: "TBA",
      status: "upcoming",
    },
    {
      date: "TBA",
      speaker: "Laura Foglia",
      affiliation: "Research Scientist - FERMI FEL",
      topic: "TBA",
      status: "upcoming",
    },
    {
      date: "September 9, 2026",
      speaker: "Martin Beye",
      affiliation: "Professor - Stockholm Universitet, Department of Physics",
      topic: "Towards femtochemistry X-ray studies of catalysis on surfaces under operando",
      status: "past",
    },
    {
      date,
      speaker: "Kartik Ayyer",
      affiliation: "Group Leader - Max Plank Institute for the Structure and Dynamics of Matter, Hamburg DE",
      topic: "Serial diffractive imaging at high-repetition-rate XFELs",
      status: "upcoming",
    },
    {
      date: "December 9, 2026",
      speaker: "Simon Wall",
      affiliation: "Professor - Aarhus University, Department of Physcis",
      topic: "TBA",
      status: "upcoming",
    },
    // {
    //   date: "June 1, 2026",
    //   speaker: "Example",
    //   affiliation: "SwissFEL / PSI",
    //   topic: "Attosecond X-ray Pulses for Electron Dynamics",
    //   status: "past",
    // },
  ];

  const upcomingSeminars = seminars.filter(s => s.status === "upcoming");
  const pastSeminars = seminars.filter(s => s.status === "past");

  return (
    <main className="page-shell">
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
        Next Seminar
      </h2>

      <div className="seminar-card">
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
            <strong>{upcomingSeminar.speaker}</strong> — {upcomingSeminar.affiliation}
          </p>
          <p style={{ margin: 0 }}>
            {date}
          </p>
          <p style={{ margin: 0 }}>
            {time}
          </p>
        </div>

        <div className="seminar-actions">
          <a
            className="seminar-register-link"
            href={upcomingSeminar.zoomLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register →
          </a>
          <a
            className="seminar-calendar-link"
            href={`data:text/calendar;charset=utf-8,${encodeURIComponent(calendar)}`}
            download="xfellows-seminar.ics"
          >
            Add to calendar
          </a>
        </div>

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

      <div className="seminar-table-container">
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

      <div className="seminar-table-container">
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
