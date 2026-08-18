import { useState, useEffect } from "react"
import type { CSSProperties } from "react"
import { STATS } from "../data/portfolio"

function useTyping(text: string, speed = 45, delay = 400) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)
  useEffect(() => {
    setDisplayed("")
    setDone(false)
    const t0 = setTimeout(() => {
      let i = 0
      const id = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(id)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(id)
    }, delay)
    return () => clearTimeout(t0)
  }, [text, speed, delay])
  return { displayed, done }
}

export default function Hero() {
  const line1 = useTyping("Preet Atwal", 55, 300)
  const line2 = useTyping("Gameplay Programmer", 40, 1200)
  const line3 = useTyping(
    "I enjoy building gameplay systems, AI behaviours and tools in Unity using C#. —",
    28,
    2200,
  )
  const line4 = useTyping("renderers, physics, netcode, tooling.", 28, 4600)

  const corner: CSSProperties = {
    position: "absolute",
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "0.65rem",
    color: "#1a1d2e",
    letterSpacing: "0.1em",
    lineHeight: 2,
  }

  return (
    <div
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 32px 60px",
        position: "relative",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div style={{ ...corner, top: 96, left: 32 }}>
        {["SYS::PORTFOLIO", "VER 3.1.0", "STATUS OK"].map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
      <div style={{ ...corner, top: 96, right: 32, textAlign: "right" }}>
        {["2026-08-10", "00:00:00 UTC", "NODE::MAIN"].map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>

      <div style={{ maxWidth: 760 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div style={{ width: 32, height: 1, background: "#00e5c0" }} />
          <span className="section-label">Game Systems Engineer</span>
        </div>

        <h1
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 6vw, 5.2rem)",
            lineHeight: 1.05,
            margin: "0 0 16px",
            color: "#dde2eb",
            letterSpacing: "-0.02em",
          }}
        >
          {line1.displayed}
          {!line1.done && (
            <span className="cursor-blink" style={{ color: "#00e5c0" }}>
              █
            </span>
          )}
        </h1>

        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: 500,
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            color: "#00e5c0",
            marginBottom: 36,
            minHeight: "1.6em",
          }}
        >
          {line2.displayed}
          {line1.done && !line2.done && (
            <span className="cursor-blink" style={{ color: "#00e5c0" }}>
              █
            </span>
          )}
        </div>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.1rem",
            color: "#9aa3b5",
            lineHeight: 1.75,
            marginBottom: 0,
            maxWidth: 580,
            minHeight: "3.5em",
          }}
        >
          {line3.displayed}
          {line2.done && !line3.done && (
            <span className="cursor-blink" style={{ color: "#00e5c0" }}>
              █
            </span>
          )}
          {line3.done && (
            <>
              {" "}
              {line4.displayed}
              {!line4.done && (
                <span className="cursor-blink" style={{ color: "#00e5c0" }}>
                  █
                </span>
              )}
            </>
          )}
        </p>

        {line4.done && (
          <>
            <div
              className="fade-up"
              style={{
                display: "flex",
                gap: 16,
                marginTop: 48,
                flexWrap: "wrap",
              }}
            >
              <a
                href="/projects"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "#00e5c0",
                  color: "#07070d",
                  border: "none",
                  padding: "14px 28px",
                  cursor: "pointer",
                  borderRadius: 2,
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View Projects →
              </a>
              <a
                href="/about"
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "transparent",
                  color: "#9aa3b5",
                  border: "1px solid #1a1d2e",
                  padding: "14px 28px",
                  cursor: "pointer",
                  borderRadius: 2,
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "border-color 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00e5c0"
                  e.currentTarget.style.color = "#00e5c0"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1a1d2e"
                  e.currentTarget.style.color = "#9aa3b5"
                }}
              >
                About Me
              </a>
            </div>

            <div
              className="fade-up"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                marginTop: 28,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    position: "relative",
                    width: 10,
                    height: 10,
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background: "#22c55e",
                      opacity: 0.35,
                      animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background: "#22c55e",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.73rem",
                    color: "#22c55e",
                    letterSpacing: "0.06em",
                  }}
                >
                  Open to junior / entry-level roles
                </span>
              </div>
              <div
                style={{
                  width: 1,
                  height: 16,
                  background: "#1a1d2e",
                  flexShrink: 0,
                }}
              />
              <a
                href="/resume.pdf"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "0.73rem",
                  color: "#9aa3b5",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00e5c0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9aa3b5")}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume (PDF)
              </a>
            </div>
          </>
        )}
      </div>

      {line4.done && (
        <div
          className="fade-up"
          style={{
            position: "absolute",
            bottom: 48,
            left: 32,
            right: 32,
            display: "flex",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.value}</div>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "0.65rem",
                  color: "#6b7380",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
