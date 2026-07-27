"use client";

export default function Conferences() {

  const resources = [

    {
      name: "PSI User Office Conference Calendar",
      category: "Synchrotron & Neutron Facilities",
      description:
        "A curated calendar of conferences, workshops and schools relevant to large-scale research facilities.",
      color: "#005ba5",
      link: "https://www.psi.ch/en/useroffice/conference-calendar",
    },

    {
      name: "ESRF Conferences & Workshops",
      category: "Synchrotron Radiation",
      description:
        "Upcoming conferences, workshops and scientific meetings hosted by the European Synchrotron Radiation Facility.",
      color: "#ea5078",
      link: "https://www.esrf.fr/events/conferences",
    },

    {
      name: "European XFEL Workshops & Conferences",
      category: "X-ray Free Electron Lasers",
      description:
        "Meetings, workshops and user events covering XFEL science, instrumentation and data analysis.",
      color: "#519d6f",
      link: "https://www.xfel.eu/news_and_events/events/workshops_and_conferences/index_eng.html",
    },

    {
      name: "IUCr Meetings Calendar",
      category: "Crystallography & Diffraction",
      description:
        "International meetings covering crystallography, structural science and diffraction.",
      color: "#f59e0b",
      link: "https://www.iucr.org/calendar/calendar-of-events",
    },

    {
      name: "APS Meetings & Events",
      category: "Physics & Materials Science",
      description:
        "Physics conferences and meetings including condensed matter, materials and scattering communities.",
      color: "#8b5cf6",
      link: "https://www.aps.org/events",
    },

    {
      name: "SPIE Conferences",
      category: "Optics, Lasers & Imaging",
      description:
        "International conferences covering optics, photonics, imaging and ultrafast science.",
      color: "#5bb1c9",
      link: "https://spie.org/conferences",
    },

    {
      name: "Materials Research Society Meetings",
      category: "Materials Science",
      description:
        "Major international meetings covering materials research, nanotechnology and emerging materials.",
      color: "#dc2626",
      link: "https://www.mrs.org/meetings-events",
    },

  ];


  return (

    <main className="page-shell">

      <h1
        style={{
          fontSize: "clamp(20px, 3vw, 32px)",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Conference Resources
      </h1>


      <p
        style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.8",
          color: "#555",
          maxWidth: "800px",
          marginBottom: "30px",
        }}
      >
        A collection of conference calendars and meeting resources relevant
        to diffraction, crystallography, ultrafast science, synchrotron
        radiation, X-ray science and advanced imaging.
        Please visit the official websites for the latest conference dates,
        abstract deadlines and registration information.
      </p>



      <div className="page-table-container">

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "clamp(12px, 1.5vw, 15px)",
          }}
        >

          <thead>

            <tr
              style={{
                backgroundColor:"#333",
                color:"white",
              }}
            >

              <th style={{padding:"14px 16px", textAlign:"left"}}>
                Resource
              </th>

              <th style={{padding:"14px 16px", textAlign:"left"}}>
                Category
              </th>

              <th style={{padding:"14px 16px", textAlign:"left"}}>
                Description
              </th>

              <th style={{padding:"14px 16px", textAlign:"center"}}>
                Website
              </th>

            </tr>

          </thead>



          <tbody>

            {resources.map((item,index)=>(

              <tr
                key={item.name}
                style={{
                  backgroundColor:
                    index % 2 === 0
                    ? "white"
                    : "#f9f9f9",
                  borderBottom:"1px solid #e5e5e5",
                }}
              >


                <td
                  style={{
                    padding:"14px 16px",
                    fontWeight:"bold",
                  }}
                >

                  <span
                    style={{
                      display:"inline-flex",
                      alignItems:"center",
                      gap:"8px",
                    }}
                  >

                    <span
                      style={{
                        width:"10px",
                        height:"10px",
                        borderRadius:"50%",
                        backgroundColor:item.color,
                        display:"inline-block",
                      }}
                    />

                    {item.name}

                  </span>

                </td>



                <td style={{padding:"14px 16px"}}>
                  {item.category}
                </td>



                <td
                  style={{
                    padding:"14px 16px",
                    color:"#555",
                    lineHeight:"1.6",
                  }}
                >
                  {item.description}
                </td>



                <td
                  style={{
                    padding:"14px 16px",
                    textAlign:"center",
                  }}
                >

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color:item.color,
                      textDecoration:"none",
                      fontWeight:"bold",
                    }}
                  >
                    Visit →
                  </a>

                </td>


              </tr>

            ))}

          </tbody>


        </table>


      </div>



      <p
        style={{
          fontSize:"13px",
          color:"#999",
          maxWidth:"800px",
          lineHeight:"1.6",
          marginTop:"20px",
        }}
      >
        ⓘ Conference information is maintained by the respective
        organisations. Always check the official event pages for the
        latest updates.
      </p>


    </main>

  );
}