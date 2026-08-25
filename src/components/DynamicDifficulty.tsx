export default function DynamicDifficulty(){
    return(
        <div className="endless-hours-content">
            {/* Project Hero */}
            <section className="project-hero">
                <div className="project-intro">
                    <h1 className="project-section">
                        // Dynamic Difficulty Adjustemnt System
                    </h1>

                    <p>
                        An ML-powered Unity game prototype that dynamically 
                        adapts gameplay difficulty to each player's skill level. 
                        A Random Forest model analyses player performance data 
                        to predict skill, while a Unity–Python client-server 
                        architecture uses those predictions to adjust enemy 
                        behaviour, health, damage, spawn rates, 
                        and player assistance in real time.
                    </p>

                    <div className="project-links">
                        <a
                            href="https://preetkanwalatwal.itch.io/ai-battleroyale"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link play-link"
                        >
                            ▶ Play Here
                        </a>

                        <a
                            href="https://github.com/preetstudent4/ai-dda-br"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            ◇ GitHub Repository
                        </a>
                    </div>
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
                            src="/videos/dynamicdifficultygameplay.mp4"
                            type="video/mp4"
                        />
                        Your Browser does not support this video tag
                    </video>
                   
                </div>
            </section>

            {/* Project Details */}
            <section className="project-details">
                <h2>Technologies</h2>

                <div className="technology-groups">

                    <div className="technology-group">
                        <h3>Game Development</h3>
                        <div className="technology-list">
                            <span>Unity</span>
                            <span>C#</span>
                        </div>
                    </div>

                    <div className="technology-group">
                        <h3>Machine Learning</h3>
                        <div className="technology-list">
                            <span>Python</span>
                            <span>Scikit-learn</span>
                            <span>Random Forest</span>
                        </div>
                    </div>

                    <div className="technology-group">
                        <h3>Backend</h3>
                        <div className="technology-list">
                            <span>Flask</span>
                            <span>REST API</span>
                        </div>
                    </div>

                </div>
            </section>

            <section className="project-details">
                <h2>Project Overview</h2>

                <div className="problem-goal">
                    <div className="overview-content">
                        <h3>Problem</h3>
                        <p>
                            Fixed difficulty systems don't account for differences in
                            player skill, potentially making gameplay too easy or too
                            difficult.
                        </p>
                    </div>

                    <div className="overview-arrow">
                        →
                    </div>

                    <div className="overview-content">
                        <h3>Goal</h3>
                        <p>
                            Develop a system that uses player performance and machine
                            learning to dynamically adapt gameplay difficulty.
                        </p>
                    </div>
                </div>
            </section>

            <section className="project-details">
                <h2>System Architecture</h2>
                <img 
                    src="../images/dda_architecture.png" 
                    alt="System Architecture"
                    className="architecture-image"
                />

                <div className="overview-content">
                    
                    <strong>The Unity client tracks player performance and sends gameplay statistics to a Flask API. After feature processing, a Random Forest model predicts an appropriate difficulty level. The prediction is returned to Unity, where the DifficultyManager dynamically adjusts enemy behaviour and gameplay parameters. </strong>

                    

                </div>
            </section>

            <section className="project-details">
                <h2>Machine Learning Pipeline</h2>
            </section>

            <section className="project-details">
                <h2>Unity Implementation</h2>
            </section>            

            <section className="project-details">
                <h2>Client-Server Integration</h2>
            </section>

            <section className="project-details">
                <h2>Dynamic Difficulty System</h2>
            </section>

            <section className="project-details">
                <h2>Gameplay Demo</h2>
            </section>

            <section className="project-details">
                <h2>Technical Breakdown</h2>
            </section>

            <section className="project-details">
                <h2>Testing & Results</h2>
            </section>

            <section className="project-details">
                <h2>Challenges & Solution</h2>
            </section>

            <section className="project-details">
                <h2>What I learned</h2>
            </section>

            <section className="project-details">
                <h2>Final Links</h2>
            </section>
        </div>
    )
}