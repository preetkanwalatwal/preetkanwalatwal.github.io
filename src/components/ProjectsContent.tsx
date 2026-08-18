import { useState, useEffect } from 'react'
import { PROJECTS } from '../data/portfolio'

type Project = typeof PROJECTS[0]

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handler)

    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(7,7,13,0.9)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#0e0f18',
          border: '1px solid #1a1d2e',
          borderRadius: 4,
          maxWidth: 680,
          width: '100%',
          overflow: 'hidden',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div
          style={{
            position: 'relative',
            height: 280,
          }}
        >
          <img
            src={project.img}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.7,
            }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, #0e0f18 15%, transparent 60%)',
            }}
          />

          <button
            type="button"
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'rgba(7,7,13,0.7)',
              border: '1px solid #1a1d2e',
              color: '#9aa3b5',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              padding: '6px 12px',
              cursor: 'pointer',
              borderRadius: 2,
            }}
          >
            [ESC]
          </button>
        </div>

        <div style={{ padding: '28px 32px 36px' }}>
          <div
            style={{
              display: 'flex',
              gap: 10,
              marginBottom: 16,
              flexWrap: 'wrap',
            }}
          >
            {project.tags.map(tag => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <h2
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 800,
              fontSize: '1.6rem',
              color: '#dde2eb',
              margin: '0 0 12px',
            }}
          >
            {project.title}
          </h2>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.95rem',
              color: '#9aa3b5',
              lineHeight: 1.8,
              margin: '0 0 28px',
            }}
          >
            {project.desc}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 24,
              borderTop: '1px solid #1a1d2e',
              paddingTop: 24,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.65rem',
                  color: '#6b7380',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 6,
                }}
              >
                Language
              </div>

              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: project.color,
                }}
              >
                {project.lang}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.65rem',
                  color: '#6b7380',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 6,
                }}
              >
                Year
              </div>

              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: project.color,
                }}
              >
                {project.year}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.65rem',
                  color: '#6b7380',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 6,
                }}
              >
                Scale
              </div>

              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: project.color,
                }}
              >
                ~{project.lines} loc
              </div>

              <div>
                <a
                href={`/projects/${project.slug}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project
  onClick: () => void
}) {
  return (
    <div
      className="project-card"
      style={{
        borderRadius: 4,
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <div
        style={{
          position: 'relative',
          height: 200,
          overflow: 'hidden',
          background: '#0e0f18',
        }}
      >
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.6,
            transition: 'opacity 0.3s, transform 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.85'
            e.currentTarget.style.transform = 'scale(1.04)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '0.6'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, #0e0f18 10%, transparent 60%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
          }}
        >
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              background: 'rgba(7,7,13,0.8)',
              color: project.color,
              padding: '3px 8px',
              borderRadius: 2,
              letterSpacing: '0.08em',
            }}
          >
            {project.lang}
          </span>
        </div>
      </div>

      <div style={{ padding: '20px 24px 24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 10,
          }}
        >
          <h3
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 700,
              fontSize: '1rem',
              color: '#dde2eb',
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>

          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              color: '#6b7380',
              flexShrink: 0,
              marginLeft: 12,
            }}
          >
            {project.year}
          </span>
        </div>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.83rem',
            color: '#9aa3b5',
            lineHeight: 1.65,
            margin: '0 0 16px',
          }}
        >
          {project.desc}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            marginBottom: 16,
          }}
        >
          {project.tags.map(tag => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.68rem',
            color: '#6b7380',
          }}
        >
          ~{project.lines} lines
        </div>
      </div>
    </div>
  )
}

export default function ProjectsContent() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '100px 32px 80px',
      }}
    >
      <div style={{ marginBottom: 48 }}>
        <div className="section-label" style={{ marginBottom: 16 }}>
          // projects
        </div>

        <h2
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            margin: '0 0 16px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Selected Work
        </h2>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            color: '#9aa3b5',
            margin: 0,
          }}
        >
          Personal projects, open-source libraries, and research prototypes.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24,
        }}
      >
        {PROJECTS.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}