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

        <div className="project-video">
          <video
            controls
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src={`${import.meta.env.BASE_URL}video/endlesshoursgameplay.mp4`}
              type="video/mp4"
            /> 
              Your Browser does not support the video tag
            
           
          </video>
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

        <h2 
          className="contribution-title" 
          style={{fontSize: '1.2rem',}}
        > // My Contributions</h2>

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
                  src="../videos/endlesshours1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="contribution-content">
              <h3 className="contribution-title">Dynamic Clock Platform</h3>

              <p>
                Implemented the clock as a functional platform where:
              </p>
              <ul className="list-disc pl-5">
                <li>Clock hands constantly move</li>
                <li>Hands define a dynamic gameplay zone</li>
                <li>Changing zones directly affect where gameplay takes place</li>
              </ul>
              <br />
              <span className="contribution-tech">
                Rotation System
              </span>
            </div>

          </article>


          {/* Contribution 2 */}
          <article className="contribution-card">

            <div className="contribution-video">
              <video controls>
                <source
                  src="../videos/endlesshours2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="contribution-content">
              <h3 className="contribution-title">Dynamic Zones</h3>

              <p>
                Developed a two-zone system to manage zones where:
              </p>

              <ul className="list-disc pl-5">
                <li>All entities are tracked on zone they occupy</li>
                <li>Choice-based effects change entity behaviour based on player's location</li>
                <li>Zone rotation based on player's card choices, with a randomly selected starting zone</li>
              </ul>

              <span className="contribution-tech">
                Raycasting · Ground Tracking
              </span>
            </div>

          </article>


          {/* Contribution 3 */}
          <article className="contribution-card">

            <div className="contribution-video">
              <video controls>
                <source
                  src="../videos/endlesshours3.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="contribution-content">
              <h3 className="contribution-title">Card Selection System</h3>

              <p>
                Implemented a card selection system where:
              </p>

              <ul className="list-disc pl-5">
                <li>Game is paused when two clock hands meet</li>
                <li>Player selects a card from the UI panel</li>
                <li>The selected card determines the zone rotation, and the game resumes</li>
              </ul>

              <span className="contribution-tech">
                UI Systems · Game State Management · Input Handling
              </span>
            </div>

          </article>

          {/* Contribution 4 */}
          <article className="contribution-card">
            <div className="contribution-video">
              <video controls>
                <source 
                  src="../videos/endlesshours4.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="contribution-content">
              <h3 className="contribution-title">Game Start & End Screen Implementation</h3>
              <p>
                Implemented the game start and end screen systems where:
              </p>
              <ul className="list-disc pl-5">
                <li>Game begins from the start screen after player input</li>
                <li>End screen is triggered when the game reaches its ending condition</li>
                <li>UI buttons allows player to restart the game</li>
              </ul>

              <span className="contribution-tech">
                  UI Systems · Game State Management
              </span>
            </div>
          </article>
        </div>

      </section>

    </div>
  )
}