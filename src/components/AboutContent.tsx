import { useState, useEffect, useRef } from 'react'
import { SKILLS } from '../data/portfolio'

export default function AboutContent() {
  const [barsVisible, setBarsVisible] = useState(false)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = skillsRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setBarsVisible(true)
      },
      { threshold: 0.2 }
    )

    obs.observe(el)

    return () => obs.disconnect()
  }, [])

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '100px 32px 80px',
      }}
    >

      {/* intro + image section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 360px)',
          gap: 64,
          alignItems: 'start',
          marginBottom: 72,
        }}
      >

        {/* left side - About me intro */}
        <div>
          <div
            className="section-label"
            style={{ marginBottom: 16 }}
          >
            // about me
          </div>

          <h2
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.6rem)',
              margin: '0 0 24px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Building systems,
            <br />
            <span style={{ color: '#00e5c0' }}>
              creating experiences
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#9aa3b5',
              lineHeight: 1.8,
              maxWidth: 560,
              margin: 0,
            }}
          >
          I’m a passionate game programmer who enjoys turning ideas into interactive experiences. 
          I’m particularly interested in gameplay programming, systems design, and creating mechanics that make games feel fun and responsive. I enjoy working with Unity and C#, and I’m always looking for opportunities to learn new techniques and challenge myself with new projects. Through my personal and academic projects, I’ve developed experience in multiple areas, mainly focusing on AI, player controllers and physics.
          For me, programming isn’t just about making things work, it’s about creating experiences that players remember. I’m currently looking to continue developing my skills and contribute to a team where I can learn, create, and grow as a game programmer.
          </p>
        </div>


        {/* right side (image) */}
        <div
          style={{
            width: '100%',
          }}
        >
          <img
            src="/images/me.jpg"
            alt="Me"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>

      </div>


      {/* skills + contant section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 48,
        }}
      >

        {/* left */}
        <div>

          {/* technical skills */}
          <div
            ref={skillsRef}
            style={{
              marginBottom: 56,
            }}
          >
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#6b7380',
                marginBottom: 24,
              }}
            >
              Technical Skills
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              {SKILLS.map((s) => (
                <div key={s.name}>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.78rem',
                        color: '#dde2eb',
                      }}
                    >
                      {s.name}
                    </span>

                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.7rem',
                        color: '#6b7380',
                      }}
                    >
                      {s.level}%
                    </span>
                  </div>

                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: barsVisible
                          ? `${s.level}%`
                          : '0%',
                      }}
                    />
                  </div>

                </div>
              ))}
            </div>
          </div>


          {/* focus areas */}
          <div>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#6b7380',
                marginBottom: 20,
              }}
            >
              Focus Areas
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
              }}
            >
              {[
                'Unity Developer',
                'Gameplay Programming',
                'Game AI & Machine Learning',
                'Software Engineer',
                'Full-stack Developer',
                'Game Physics/Systems Programmer',
              ].map((tag) => (
                <span
                  key={tag}
                  className="tag"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>


        {/* right side (contacts) */}
        <div>

          <div
            style={{
              borderTop: '1px solid #1a1d2e',
              paddingTop: 32,
            }}
          >
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#6b7380',
                marginBottom: 16,
              }}
            >
              Contact
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >

              {/* Email */}
              <div
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.68rem',
                    color: '#6b7380',
                    letterSpacing: '0.08em',
                    width: 60,
                  }}
                >
                  email
                </span>

                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.8rem',
                    color: '#00e5c0',
                  }}
                >
                  preetkanwalatwal@gmail.com
                </span>
              </div>


              {/* GitHub */}
              <div
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.68rem',
                    color: '#6b7380',
                    letterSpacing: '0.08em',
                    width: 60,
                  }}
                >
                  github
                </span>

                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.8rem',
                    color: '#00e5c0',
                  }}
                >
                  https://github.com/preetatwal04
                </span>
              </div>


              {/* LinkedIn */}
              <div
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.68rem',
                    color: '#6b7380',
                    letterSpacing: '0.08em',
                    width: 60,
                  }}
                >
                  linkedin
                </span>

                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.8rem',
                    color: '#00e5c0',
                  }}
                >
                  https://www.linkedin.com/in/preetkanwal-atwal-b301172b9/
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}