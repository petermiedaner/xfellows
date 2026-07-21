export default function Seminar() {
  // Upcoming seminar data
  const upcomingSeminar = {
    title: "Probing ultrafast structural and electronic dynamics in advanced materials using X-ray free electron lasers",
    speaker: "Dr. Chris Milne",
    affiliation: "Group Leader - Femtosecond X-ray Experiements EuXFEL",
    date: "July 22, 2026",
    time: "8:00 AM Pacific / 11:00 AM Eastern / 5:00 PM Europe",
    zoomLink: "https://mit.zoom.us/meeting/register/iUa0MO9oTj2MkOny_NJDfg",
    abstract: `X-ray spectroscopy and scattering allow a unique combination of electronic and structural information to be obtained from a variety of different types of samples in many different forms (solid, liquid, gas). The extension of these methods into the time domain has allowed measurement of dynamic processes, for example following charge transfer in molecular photocatalysts[1] or probing non-equilibrium melting in metals[2]. In recent years X-rays have started to become routinely used to measure light-activated processes using a pump-probe scheme, where the sample is photoexcited with light and then probed after a variable time delay using an X-ray pulse. With the recent development of X-ray free electron lasers (XFELs), time-resolved X-ray techniques have moved into the ultrafast regime, where the timescales of electron and nuclear motion can be accessed using the femtosecond X-ray pulses available from these facilities.
    This talk will present an overview of how X-ray techniques are being used at XFELs to probe advanced materials and the type of information the measurements can provide[3]. The talk will introduce the European XFEL, a high-repetition rate XFEL facility located in northern Germany[4], and will show some examples of the types of measurements XFELs can perform and the scientific questions that can be answered using ultrafast X-ray techniques.

1. Nowakowski, M. et al. Ultrafast Two‐Color X‐Ray Emission Spectroscopy Reveals Excited State Landscape in a Base Metal Dyad. Adv. Sci. 11, 2404348 (2024).

2. Antonowicz, J. et al. Structural pathways for ultrafast melting of optically excited thin polycrystalline Palladium films. Acta Mater. 276, 120043 (2024).

3. Seddon, E. A. et al. Short-wavelength free-electron laser sources and science: a review*. Rep Prog Phys 80, 115901 (2017). 

4. Tschentscher, T. et al. Photon Beam Transport and Scientific Instruments at the European XFEL. Appl. Sci. 7, 592 (2017).

    `,
  };

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
      status: "upcoming",
    },
    {
      date: "August 5, 2026",
      speaker: "Ben Ofori-Okai",
      affiliation: "Assistant Professor of Photon Science - Stanford Pulse Institute",
      topic: "TBD",
      status: "upcoming",
    },
    {
      date: "TBD",
      speaker: "Kelly Gaffney",
      affiliation: "Professor of Photon Science - Stanford University & Director - LCLS",
      topic: "TBD",
      status: "upcoming",
    },
    {
      date: "TBD",
      speaker: "Dr. Laura Foglia",
      affiliation: "Research Scientist - FERMI FEL",
      topic: "TBD",
      status: "upcoming",
    },
    {
      date: "September 2, 2026",
      speaker: "Dr. Martin Beye",
      affiliation: "Professor - Stockholm Universitet, Department of Physics",
      topic: "TBD",
      status: "upcoming",
    },
    {
      date: "TBD",
      speaker: "Dr. Kartik Ayyer",
      affiliation: "Group Leader - Max Plank Institute for the Structure and Dynamics of Matter, Hamburg DE",
      topic: "TBD",
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
            {upcomingSeminar.date}
          </p>
          <p style={{ margin: 0 }}>
            {upcomingSeminar.time}
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
          Register →
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