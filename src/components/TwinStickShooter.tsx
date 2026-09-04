export default function GalacticLeap(){
    return(
        <div className="endless-hours-content">

            {/* Project Hero */}
            <section className="project-hero">
                <div className="project-intro">
                    <h1
                        className="project-section"
                        style={{ marginBottom: 16 }}
                    >
                        // 2D Twin Stick Shooter - Lost Ruines in Sanguine
                    </h1>

                    <p>
                        Project desc here.
                    </p>

                    <div className="project-links">
                    <a
                        href="https://preetkanwalatwal.itch.io/lost-ruins-of-sanguine"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link play-link"
                        >
                        ▶ Play Here
                        </a>

                        <a
                        href="https://github.com/preetkanwalatwal/2DTopdownGame"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        >
                        ◇ GitHub Repository
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}