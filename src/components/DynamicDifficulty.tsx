import { useState } from "react";
import CodeSnippets from "./CodeSnippets"

interface PipelineStage {
  number: string;
  title: string;
  description: string;
  items: string[];
  technology?: string;
}

const stages: PipelineStage[] = [
  {
    number: "01",
    title: "Gameplay Data",
    description:
      "Player performance data is collected during gameplay and used as input for the machine learning model.",
    items: [
      "Kills",
      "Damage Dealt",
      "Boosts",
      "Headshot Kills",
      "Wins",
      "Losses",
      "Total Matches",
      "Win Rate",
    ],
  },
  {
    number: "02",
    title: "Data Processing",
    description:
      "The dataset is prepared before training by selecting relevant features and scaling the input values.",
    items: [
      "Data Cleaning",
      "Feature Selection",
      "Feature Scaling",
      "Train / Test Split",
    ],
    technology: "Python · Pandas · Scikit-learn",
  },
  {
    number: "03",
    title: "Machine Learning Model",
    description:
      "A Random Forest regression model is trained to predict player performance from gameplay statistics.",
    items: [
      "Random Forest Regression",
      "PUBG Dataset",
      "Target: winPlacePerc",
      "Model Evaluation",
    ],
    technology: "Scikit-learn",
  },
  {
    number: "04",
    title: "Prediction API",
    description:
      "The trained model is exposed through a Flask REST API, allowing the Unity game to request predictions.",
    items: [
      "UnityWebRequest",
      "POST /predict",
      "JSON Request",
      "JSON Response",
    ],
    technology: "Flask · Python · REST API",
  },
  {
    number: "05",
    title: "Difficulty Adjustment",
    description:
      "The prediction is passed to the Unity Difficulty Manager, which adjusts gameplay parameters dynamically.",
    items: [
      "Enemy Accuracy",
      "Enemy Health",
      "Enemy Damage",
      "Enemy Count",
      "Aim Assist",
      "Player Damage",
    ],
    technology: "Unity · C#",
  },
];

export default function DynamicDifficulty(){

    const [zoomed, setZoomed] = useState(false);

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
                <div className="section-header">
                    <span className="section-label">01 / Technologies</span>
                    <h2>Technologies</h2>
                </div>
                

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
                <div className="section-header">
                    <span className="section-label">02 / Project Overview</span>
                    <h2>Project Overview</h2>
                </div>
               

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
                <div className="section-header">
                    <span className="section-label"> 03 / SYSTEM ARCHITECTURE   </span>
                    <h2>System Architecture</h2>
                </div>
                
                <img 
                    src="../images/dda_architecture.png" 
                    alt="System Architecture"
                    className="architecture-image"
                />

                <div className="overview-content">
                    
                    <p>The Unity client tracks player performance and 
                        sends gameplay statistics to a Flask API. 
                        After feature processing, a Random Forest model 
                        predicts an appropriate difficulty level. The prediction 
                        is returned to Unity, where the DifficultyManager 
                        dynamically adjusts enemy behaviour and gameplay parameters. 
                    </p>

                    

                </div>
            </section>

             <section className="project-details">
                <div className="section-header">
                    <span className="section-label">04 / MACHINE LEARNING</span>

                    <h2>Machine Learning Pipeline</h2>

                    <p>
                    Gameplay statistics are transformed into a machine learning
                    prediction, which is then used by Unity to dynamically adjust
                    gameplay difficulty.
                    </p>
                </div>

                <div className="pipeline">
                    {stages.map((stage, index) => (
                    <div className="pipeline-wrapper" key={stage.number}>

                        <article className="pipeline-stage">

                        <div className="stage-number">
                            {stage.number}
                        </div>

                        <div className="stage-content">

                            <h3>{stage.title}</h3>

                            <p className="stage-description">
                            {stage.description}
                            </p>

                            <div className="stage-items">
                            {stage.items.map((item) => (
                                <span className="stage-item" key={item}>
                                {item}
                                </span>
                            ))}
                            </div>

                            {stage.technology && (
                            <div className="stage-technology">
                                {stage.technology}
                            </div>
                            )}

                        </div>

                        </article>

                        {index < stages.length - 1 && (
                        <div className="pipeline-arrow">
                            ↓
                        </div>
                        )}

                    </div>
                    ))}
                </div>

                <div className="pipeline-summary">

                    <div className="summary-flow">
                    <span>Player Behaviour</span>
                    <span>→</span>
                    <span>ML Prediction</span>
                    <span>→</span>
                    <span>Difficulty Decision</span>
                    <span>→</span>
                    <span>Gameplay Adaptation</span>
                    </div>

                </div>
                </section>

           <section className="project-details">

                <div className="section-header">
                    <span className="section-label">
                        05 / Unity Implementation
                    </span>

                    <h2>Unity Implementation</h2>
                </div>


                {/* Overview */}

                <div className="overview-content">
                    <img
                        src="../images/unityclientarchitecture.png"
                        alt="Unity Client Architecture"
                        className="architecture-image2"
                        onClick={() => {
                            setZoomed(true);
                        }}
                    />
                    <p  style={{ paddingBottom: 20 }}>
                        Unity acts as the client-side layer of the DDA system.
                        It tracks player performance, communicates with the
                        machine learning API, and applies the predicted
                        difficulty to gameplay systems in real time.
                    </p>

                </div>

                {/* Image Modal */}
                {zoomed && (

                <div
                    className="image-modal"
                    onClick={() => setZoomed(false)}
                >

                    <img
                    src="/images/unityclientarchitecture.png"
                    alt="Unity Client Architecture enlarged"
                    className="image-modal-content"
                    onClick={(event) => event.stopPropagation()}
                    />

                    <button
                    type="button"
                    className="image-modal-close"
                    onClick={() => setZoomed(false)}
                    aria-label="Close image"
                    >
                    ×
                    </button>

                </div>

                )}
  


                {/* Implementation Stages */}

                <div className="pipeline-wrapper">


                    {/* Player Statistics */}

                    <div className="pipeline-stage">

                        <div className="stage-number">
                            01
                        </div>

                        <div className="stage-content">

                            <h3>Player Statistics Tracking</h3>

                            <p className="stage-description">
                                Player performance is continuously tracked during
                                gameplay. These statistics are collected by
                                <strong> PlayerStatsTracker</strong> and prepared
                                for the machine learning prediction request.
                            </p>

                            <CodeSnippets
  code={`
[System.Serializable]
public class PlayerStats
{
    public int kills;
    public int assists;
    public int boosts;
    public float damageDealt;
    public int headshotKills;

    public int wins;
    public int losses;
    public int totalMatches;

    public float winPlacePerc;

    public string ToJson()
    {
        return JsonUtility.ToJson(this);
    }
}
`.trim()}
  language="C#"
  filename="PlayerStats.cs"
  description="PlayerStats defines the gameplay metrics collected by Unity and provides JSON serialization for communication with the ML API."
/>

                            <div className="pipeline-arrow2">
                                ↓
                            </div>

                            <CodeSnippets
                                code={`
public class PlayerStatsTracker : MonoBehaviour
{
    public PlayerStats currentStats = new PlayerStats();

    public void OnKill(bool headshot)
    {
        currentStats.kills++;

        if (headshot)
            currentStats.headshotKills++;
    }

    public void OnDamageDealt(float damage)
    {
        currentStats.damageDealt += damage;
    }

    public void OnAssist() => currentStats.assists++;
    public void OnBoostUsed() => currentStats.boosts++;
    public void OnWin() => currentStats.wins++;
}
                                    `.trim()}
                                    language="C#"
                                    filename="PlayerStatsTracker.cs"
                                    description="Tracks gameplay events and updates the player's performance statistics throughout the match."
                            />

                            <div className="pipeline-arrow2">
                                ↓
                            </div>

                            <CodeSnippets
                                code={`
[System.Serializable]
public class DDAApiClient : Monobehaviour
{
    public void RequestDifficultyAdjustment(PlayerStats stats)
    {
        StartCoroutine(SendPredictionRequest(stats));
    }

    private IEnumerator SendPredictionRequest(PlayerStats stats)
    {
        string jsonData = stats.ToJson();

        using var request = new UnityWebRequest(
            $"{apiUrl}/predict", "POST");

        request.uploadHandler =
            new UploadHandlerRaw(Encoding.UTF8.GetBytes(jsonData));

        request.downloadHandler =
            new DownloadHandlerBuffer();

        request.SetRequestHeader(
            "Content-Type", "application/json");

        yield return request.SendWebRequest();

        if (request.result == UnityWebRequest.Result.Success)
        {
            DDAResponse response =
                JsonUtility.FromJson<DDAResponse>(
                    request.downloadHandler.text);

            OnDifficultyAdjustmentReceived?.Invoke(response);
        }
    }
}        
                                `.trim()}
                                language="C#"
                                filename="DDAApiClient.cs"
                                description="Serializes the collected statistics into JSON, sends them to the Flask prediction API, and converts the returned JSON into a DDAResponse object."
                            />


                            <div className="stage-items">

                                <span className="stage-item">
                                    Kills
                                </span>

                                <span className="stage-item">
                                    Damage Dealt
                                </span>

                                <span className="stage-item">
                                    Headshots
                                </span>

                                <span className="stage-item">
                                    Win Rate
                                </span>

                                <span className="stage-item">
                                    Total Matches
                                </span>

                                <span className="stage-item">
                                    Boosts
                                </span>

                            </div>


                            <div className="stage-technology">

                                PlayerStatsTracker • Unity Cloud Save

                            </div>

                        </div>

                    </div>


                    <div className="pipeline-arrow">↓</div>


                    {/* API Integration */}

                    <div className="pipeline-stage">

                        <div className="stage-number">
                            02
                        </div>

                        <div className="stage-content">

                            <h3>ML API Integration</h3>

                            <p className="stage-description">

                                The DDAApiClient sends player statistics to the
                                Flask API using UnityWebRequest. The API returns
                                a predicted difficulty value which is parsed and
                                passed to the game.

                            </p>

                            
                            <h4 className="h4"> Request/Response Flow</h4>

                            <img 
                                src="../images/backenddesign.png"
                                alt="Backend Design"
                                className="architecture-image3"
                            />

                            <CodeSnippets 
                                code={`
{
  "kills": 4,
  "damageDealt": 512,
  "boosts": 3,
  "headshotKills": 1,
  "wins": 2,
  "winRate": 0.20
}
                                    `.trim()}
                                    language="JSON"
                                    filename="POST /predict"
                                    description="This is how data is sent to the backend"
                            />

                            <CodeSnippets 
                                code={`
{
    "difficulty": 0.68
}
                                    `.trim()}
                                language="JSON"
                                filename="GET /response"
                                description="This is what the backend sends back to the Unity Client."
                            />

                            <strong>How it works:</strong>
                            <ul className="stage-description">
                                <li>1. Player performance is tracked during gameplay.</li>
                                <li>2. Unity sends the current statistics to the Flask API.</li>
                                <li>3. The trained Random Forest predicts player difficulty.</li>
                                <li>4. The prediction is returned as JSON.</li>
                                <li>5. Unity converts the prediction into gameplay adjustments.</li>

                            </ul>

                            <div className="stage-items">

                                <span className="stage-item">
                                    JSON Requests
                                </span>

                                <span className="stage-item">
                                    UnityWebRequest
                                </span>

                                <span className="stage-item">
                                    REST API
                                </span>

                                <span className="stage-item">
                                    Error Handling
                                </span>

                            </div>


                            <div className="stage-technology">

                                DDAApiClient • Flask REST API

                            </div>

                        </div>

                    </div>


                    <div className="pipeline-arrow">↓</div>


                    {/* Difficulty Manager */}

                    <div className="pipeline-stage">

                        <div className="stage-number">
                            03
                        </div>

                        <div className="stage-content">

                            <h3>Applying Dynamic Difficulty</h3>

                            <p className="stage-description">

                                The DifficultyManager converts the machine learning
                                prediction into gameplay parameters that dynamically
                                adjust the player's experience.

                            </p>


                            <div className="stage-items">

                                <span className="stage-item">
                                    Enemy Accuracy
                                </span>

                                <span className="stage-item">
                                    Enemy Health
                                </span>

                                <span className="stage-item">
                                    Enemy Damage
                                </span>

                                <span className="stage-item">
                                    Enemy Count
                                </span>

                                <span className="stage-item">
                                    Aim Assist
                                </span>

                                <span className="stage-item">
                                    Respawn Time
                                </span>

                            </div>


                            <div className="stage-technology">

                                DifficultyManager • Gameplay Systems

                            </div>

                        </div>

                    </div>


                    <div className="pipeline-arrow">↓</div>


                    {/* Gameplay Outcome */}

                    <div className="pipeline-stage">

                        <div className="stage-number">
                            04
                        </div>

                        <div className="stage-content">

                            <h3>Dynamic Gameplay</h3>

                            <p className="stage-description">

                                The predicted difficulty directly influences enemy
                                behaviour and player assistance, allowing the game
                                to adapt as player performance changes.

                            </p>


                            <div className="details-grid">

                                <div>

                                    <span>
                                        Lower Difficulty
                                    </span>

                                    <strong>
                                        Fewer enemies, lower accuracy and increased
                                        player assistance.
                                    </strong>

                                </div>


                                <div>

                                    <span>
                                        Higher Difficulty
                                    </span>

                                    <strong>
                                        Stronger enemies, increased accuracy and
                                        greater combat challenge.
                                    </strong>

                                </div>

                            </div>


                        </div>

                    </div>


                </div>


                {/* Summary */}

                <div className="pipeline-summary">

                    <div className="summary-flow">

                        <span>Player Gameplay</span>

                        →

                        <span>Statistics Tracking</span>

                        →

                        <span>ML Prediction</span>

                        →

                        <span>Difficulty Manager</span>

                        →

                        <span>Adaptive Gameplay</span>

                    </div>

                </div>


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