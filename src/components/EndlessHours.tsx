export default function EndlessHours() {
  return (
    <div className="endless-hours-content">

      {/* Project Hero */}
      <section className="project-hero">

        <div className="project-intro">
          <h1 className="project-section">
            // Endless Hours - GMTK Game Jam 2026
          </h1>

          <p>
            A fast-paced survival game created for GMTK Game Jam 2026,
            where players control a rabbit battling endless waves of
            an angry card army.
          </p>
        </div>

        <div className="project-image">
          <img
            src="../endlesshoursmain.png"
            alt="Endless Hours Main"
          />
        </div>

      </section>


      {/* Project Details */}
      <section className="project-details">

        <h2>Details</h2>

        <div className="details-grid">

          <div className="detail-item">
            <span>Role</span>
            <strong>Programmer</strong>
          </div>

          <div className="detail-item">
            <span>Development Time</span>
            <strong>96 Hours</strong>
          </div>

          <div className="detail-item">
            <span>Team Size</span>
            <strong>5</strong>
          </div>

          <div className="detail-item">
            <span>Engine</span>
            <strong>Unity</strong>
          </div>

          <div className="detail-item">
            <span>Language</span>
            <strong>C#</strong>
          </div>

        </div>

      </section>


      {/* Contributions */}
      <section className="project-contributions">

        <h2>// My Contributions</h2>

        <p className="contributions-intro">
          During the 96-hour game jam, I was responsible for
          implementing several of the game's core gameplay systems.
        </p>

        <div className="contribution-grid">

          {/* Contribution 1 */}
          <article className="contribution-card">

            <div className="contribution-video">
              <video controls>
                <source
                  src="../videos/endless-hours-ai.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="contribution-content">
              <h3>Dynamic Clock Platform</h3>

              <p>
                Implemented the clock as a functional platform where:
              </p>
              <ul className="list-disc pl-5">
                <li>Clock hands constantly move</li>
                <li>Hands define a dynamic gameplay zone</li>
                <li>Changing zones directly affect where gameplay takes place</li>
              </ul>

              <span className="contribution-tech">
                C# · Unity · AI
              </span>
            </div>

          </article>


          {/* Contribution 2 */}
          <article className="contribution-card">

            <div className="contribution-video">
              <video controls>
                <source
                  src="../videos/endless-hours-zones.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="contribution-content">
              <h3>Dynamic Zones</h3>

              <p>
                Developed the system responsible for dynamically
                selecting gameplay zones during the card selection
                phase.
              </p>

              <span className="contribution-tech">
                C# · Unity · Gameplay Systems
              </span>
            </div>

          </article>


          {/* Contribution 3 */}
          <article className="contribution-card">

            <div className="contribution-video">
              <video controls>
                <source
                  src="../videos/endless-hours-player.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="contribution-content">
              <h3>Player Gameplay</h3>

              <p>
                Implemented the player gameplay systems used to
                control movement, combat and interaction with
                the game's survival mechanics.
              </p>

              <span className="contribution-tech">
                C# · Unity · Gameplay Programming
              </span>
            </div>

          </article>

        </div>

      </section>

    </div>
  )
}