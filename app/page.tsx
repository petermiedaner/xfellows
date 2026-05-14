import InteractiveMap from "./components/InteractiveMap";

export default function Home() {
  return (
    <main className="page-shell page-shell-centered">
      <h1 style={{
        fontSize: "clamp(16px, 1.5vw, 24px)",
        padding: "20px",
        textAlign: "center",
      }}>
        The eight existing X-ray Free-Electron Lasers (XFELs) are transforming 
        our understanding of physical phenomena
      </h1>

      <InteractiveMap />

      <section style={{
        maxWidth: "900px",
        padding: "40px 20px",
        lineHeight: "1.8",
        fontSize: "clamp(14px, 1vw, 16px)",
        color: "#333",
      }}>
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "clamp(18px, 1.2vw, 22px)", marginBottom: "15px", color: "#ea5078" }}>
            What is an XFEL?
          </h2>
          <p>
            An X-ray Free-Electron Laser (XFELss) is a next-generation light source that produces intense, coherent X-rays pulses of attosecond to femtosecond pulse durations.
            XFELs use relativistic electron beams accelerated in a Linac, which pass through 
            specially designed periodic magnetic structures called undulators to generate extremely bright, laser-like X-ray pulses.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "clamp(18px, 1.2vw, 22px)", marginBottom: "15px", color: "#519d6f" }}>
            How Does It Work?
          </h2>
          <p>
            XFELs accelerate electrons to nearly the speed of light using linear accelerators (linacs). These electrons then pass through 
            an undulator—a periodic magnetic structure that forces the electrons to oscillate perpendicular to their direction of motion. 
            This oscillation causes the electrons to emit X-ray photons. Crucially, the electrons interact with their own radiation field, 
            leading to <i>microbunching</i>: the electrons organize into ultra-short, micron-scale bunches that amplify the X-ray emission exponentially. 
            The result is a coherent, laser-like X-ray beam of unprecedented brightness and ultrashort pulse duration (typically femtoseconds).
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "clamp(18px, 1.2vw, 22px)", marginBottom: "15px", color: "#5bb1c9" }}>
            Key Advantages
          </h2>
          <ul style={{ marginLeft: "20px" }}>
            <li><strong>Extreme Brightness:</strong> XFELs produce X-rays billions of times brighter than synchrotron sources, enabling studies of weak effects.</li>
            <li><strong>Ultrashort Pulses:</strong> Femtosecond (and even attosecond) pulse durations allow researchers to capture atomic-scale dynamics in real-time, like chemical reactions or phase transitions.</li>
            <li><strong>Coherence:</strong> The laser-like quality of XFEL beams enables advanced imaging techniques like coherent diffractive imaging.</li>
            <li><strong>Tunable Wavelength:</strong> XFELs can operate across a broad range of X-ray wavelengths, from hard to soft X-rays, for diverse scientific applications.</li>
          </ul>
        </div>
      </section>

      <section style={{
        maxWidth: "900px",
        padding: "40px 20px",
        lineHeight: "1.8",
        fontSize: "clamp(14px, 1vw, 16px)",
        color: "#333",
        borderTop: "2px solid #e0e0e0",
      }}>
        <h2 style={{ fontSize: "clamp(20px, 1.5vw, 26px)", marginBottom: "30px", color: "#005ba5", textAlign: "center" }}>
          XFEL Components and Techniques
        </h2>

        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "clamp(16px, 1.1vw, 20px)", marginBottom: "15px", color: "#005599" }}>
            1. Linear Accelerator (Linac)
          </h3>
          <p>
            The Linac is the heart of an XFEL facility, responsible for accelerating electrons to relativistic speeds (typically 10-17 GeV). 
            Using radiofrequency cavities, the Linac imparts tremendous kinetic energy to the electron beam. Modern XFELs employ superconducting 
            Linacs that can operate at high repetition rates, enabling thousands of X-ray pulses per second. The electron bunch compression 
            system within the Linac creates extremely short, dense electron bunches required for efficient X-ray generation. Precise control 
            of beam parameters—including energy, charge, and temporal structure—is critical for producing high-quality X-ray pulses.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "clamp(16px, 1.1vw, 20px)", marginBottom: "15px", color: "#005599" }}>
            2. Undulator
          </h3>
          <p>
            The undulator is a periodic arrangement of dipole magnets that bends the electron trajectory into a sinusoidal path perpendicular 
            to the beam direction. As electrons oscillate through the undulator, they emit X-ray photons. The key innovation in XFELs is 
            the Self-Amplified Spontaneous Emission (SASE) process: electrons begin to microbunch due to interaction with their own X-ray 
            field, which dramatically amplifies X-ray emission. The undulator length and magnetic field strength determine the X-ray wavelength 
            and intensity. By adjusting these parameters, scientists can tune the X-ray energy from a few hundred eV (soft X-rays) to tens of keV 
            (hard X-rays), making XFELs versatile tools for diverse scientific disciplines.
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "clamp(16px, 1.1vw, 20px)", marginBottom: "15px", color: "#005599" }}>
            3. Beamlines and Experimental Techniques
          </h3>
          <p style={{ marginBottom: "15px" }}>
            XFEL facilities host multiple beamlines, each optimized for different scientific applications. The intense, ultrashort X-ray pulses 
            enable breakthrough experiments previously impossible at conventional light sources. The first four describe techniques available
            at synchrotron facilities, but with the additional capability of femtosecond time-resolution:
          </p>
          
          <div style={{boxShadow: "0 4px 12px rgba(0,0,0,0.08)", backgroundColor: "#e4ebf1", padding: "20px", borderRadius: "8px", marginBottom: "15px" }}>
            <h4 style={{ color: "#005599", marginBottom: "12px" }}>Key XFEL Techniques:</h4>
            <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
              <li><strong>X-ray diffraction (XRD):</strong> Nanoscale measurment of structural order in powders and crystals.</li>
              <li><strong>Resonant Inelastic X-ray Scattering (RIXS):</strong> Captures excited-state dynamics with femtosecond temporal resolution, revealing energy-dependent electronic structure evolution during chemical and physical processes.</li>
              <li><strong>X-ray Absorption Spectroscopy (XAS):</strong> Time-resolved XAS probes local electronic structure and oxidation states, enabling real-time tracking of reactions at the atomic level.</li>
              <li><strong>X-ray Photon Correlation Spectroscopy (XPCS):</strong> Exploits the coherence of XFEL beams to measure ultrafast dynamics in disordered materials, revealing atomic-scale fluctuations on femtosecond timescales.</li>
              <li><strong>Serial Crystallography:</strong> Collects thousands of diffraction patterns from micro-crystals or single-particle specimens, enabling structure determination without phase problems and capturing transient states.</li>
              <li><strong>Coherent Diffraction Imaging (CDI):</strong> Uses XFEL coherence to achieve diffraction-limited imaging of nanoscale structures without lenses, providing three-dimensional reconstructions.</li>
              <li><strong>X-ray Diffraction (XRD):</strong> Studies crystal structure and lattice dynamics with unprecedented temporal and spatial resolution, ideal for materials under extreme conditions.</li>
              <li><strong>Small-Angle X-ray Scattering (SAXS):</strong> Probes nanoscale structure and dynamics in solutions, polymers, and biological systems with picosecond time resolution.</li>
              <li><strong>X-ray Emission Spectroscopy:</strong> Complements absorption spectroscopy to provide complete electronic structure information and charge state analysis.</li>
            </ul>
          </div>

          <p>
            These beamlines are equipped with sophisticated sample environments (cryogenic, high-temperature, high-pressure, liquid jets, etc.) 
            and advanced detection systems to capture the unique signatures of ultrafast processes. The combination of extreme brightness, 
            ultrashort pulses, and high coherence makes XFELs indispensable for studying non-equilibrium phenomena in materials science, 
            chemistry, biology, and fundamental physics.
          </p>
        </div>
      </section>
    </main>
  );
}