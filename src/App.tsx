import { useState, useEffect, useRef } from 'react'

type Page = 'home' | 'about' | 'projects'

const PROJECTS = [
  {
    id: 'voxel-engine',
    title: 'Voxel Engine',
    year: '2024',
    tags: ['C++', 'OpenGL', 'Perlin Noise'],
    desc: 'A custom voxel renderer built from scratch with chunk streaming, LOD terrain generation, and a deferred lighting pipeline. Handles 512² worlds at 120fps on mid-range hardware.',
    lines: '41,200',
    lang: 'C++',
    color: '#00e5c0',
    img: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=700&h=420&fit=crop&auto=format',
  },
  {
    id: 'ecs-framework',
    title: 'Entity Component System',
    year: '2024',
    tags: ['C++17', 'Templates', 'Cache Optimization'],
    desc: 'A data-oriented ECS framework with archetype storage, system scheduling, and zero-allocation component queries. Benchmarks at 8× faster than OOP alternatives on dense component access.',
    lines: '8,900',
    lang: 'C++',
    color: '#7c3aed',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=420&fit=crop&auto=format',
  },
  {
    id: 'shader-playground',
    title: 'GLSL Shader Playground',
    year: '2023',
    tags: ['GLSL', 'WebGL', 'React'],
    desc: 'A browser-based shader editor with live preview, uniform sliders, and a timeline for animated effects. Includes a library of 40+ commented procedural techniques.',
    lines: '12,600',
    lang: 'GLSL',
    color: '#f59e0b',
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=700&h=420&fit=crop&auto=format',
  },
  {
    id: 'netcode',
    title: 'Deterministic Netcode',
    year: '2023',
    tags: ['Rust', 'UDP', 'Rollback'],
    desc: 'A rollback-based networking library for real-time games with input prediction, lag compensation, and replay validation. Achieves sub-8-frame desync recovery at 200ms simulated latency.',
    lines: '19,300',
    lang: 'Rust',
    color: '#e55a00',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=420&fit=crop&auto=format',
  },
  {
    id: 'pathfinding',
    title: 'GPU Pathfinding',
    year: '2022',
    tags: ['HLSL', 'Compute Shaders', 'Unity'],
    desc: 'A compute-shader implementation of JPS+ on dynamic navmeshes. Finds paths for 4,096 agents simultaneously at 60fps by parallelizing jump point expansion across thread groups.',
    lines: '6,100',
    lang: 'HLSL',
    color: '#06b6d4',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&h=420&fit=crop&auto=format',
  },
  {
    id: 'procedural-city',
    title: 'Procedural City Generator',
    year: '2022',
    tags: ['Python', 'Blender API', 'L-Systems'],
    desc: 'A grammar-driven city layout generator using L-systems for road networks and WFC for building façades. Produces varied, walkable city blocks with configurable density profiles.',
    lines: '7,800',
    lang: 'Python',
    color: '#10b981',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=420&fit=crop&auto=format',
  },
]

const SKILLS = [
  { name: 'C++ / C', level: 95 },
  { name: 'GLSL / HLSL', level: 88 },
  { name: 'Rust', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'OpenGL / Vulkan', level: 82 },
  { name: 'Unity / Unreal', level: 72 },
]

const TIMELINE = [
  { year: '2024', role: 'Senior Engine Programmer', company: 'Void Arc Studios', note: 'Custom C++ engine, PS5 optimization' },
  { year: '2022', role: 'Graphics Programmer', company: 'Parallax Interactive', note: 'Deferred shading pipeline, raytraced AO' },
  { year: '2020', role: 'Gameplay Programmer', company: 'Meridian Games', note: 'AI systems, network architecture' },
  { year: '2018', role: 'BS Computer Science', company: 'MIT', note: 'Graduated with Honors, thesis on GPU simulation' },
]

// ──────────────────────────────────────────────
// Typing animation hook
// ──────────────────────────────────────────────
function useTyping(text: string, speed = 45, delay = 400) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  useEffect(() => {
    setDisplayed('')
    setDone(false)
    const t0 = setTimeout(() => {
      let i = 0
      const id = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) { clearInterval(id); setDone(true) }
      }, speed)
      return () => clearInterval(id)
    }, delay)
    return () => clearTimeout(t0)
  }, [text, speed, delay])
  return { displayed, done }
}

// ──────────────────────────────────────────────
// Nav
// ──────────────────────────────────────────────
function Nav({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: '1px solid #1a1d2e',
        background: 'rgba(7,7,13,0.88)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
        <button
          onClick={() => setPage('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.9rem', color: '#00e5c0', letterSpacing: '0.04em' }}>
            {'<AL />'}
          </span>
        </button>
        <nav style={{ display: 'flex', gap: 32 }}>
          {(['home', 'about', 'projects'] as Page[]).map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`nav-link${page === p ? ' active' : ''}`}
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              {p === 'home' ? '// home' : p === 'about' ? '// about' : '// projects'}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

// ──────────────────────────────────────────────
// Home page
// ──────────────────────────────────────────────
function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const line1 = useTyping('Alex Lindqvist', 55, 300)
  const line2 = useTyping('Game & Engine Programmer', 40, 1200)
  const line3 = useTyping('I build the systems that make games possible —', 28, 2200)
  const line4 = useTyping('renderers, physics, netcode, tooling.', 28, 4600)

  return (
    <div className="grid-bg" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 32px 60px', position: 'relative', maxWidth: 1200, margin: '0 auto' }}>

      {/* Corner decorations */}
      <div style={{ position: 'absolute', top: 96, left: 32, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#1a1d2e', letterSpacing: '0.1em', lineHeight: 2 }}>
        {['SYS::PORTFOLIO', 'VER 3.1.0', 'STATUS OK'].map(l => <div key={l}>{l}</div>)}
      </div>
      <div style={{ position: 'absolute', top: 96, right: 32, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#1a1d2e', letterSpacing: '0.1em', lineHeight: 2, textAlign: 'right' }}>
        {['2026-08-09', '00:00:00 UTC', 'NODE::MAIN'].map(l => <div key={l}>{l}</div>)}
      </div>

      <div style={{ maxWidth: 760 }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ width: 32, height: 1, background: '#00e5c0' }} />
          <span className="section-label">Game Systems Engineer</span>
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 800, fontSize: 'clamp(2.4rem, 6vw, 5.2rem)', lineHeight: 1.05, margin: '0 0 16px', color: '#dde2eb', letterSpacing: '-0.02em' }}>
          {line1.displayed}
          {!line1.done && <span className="cursor-blink" style={{ color: '#00e5c0' }}>█</span>}
        </h1>

        {/* Subheading */}
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: '#00e5c0', marginBottom: 36, minHeight: '1.6em' }}>
          {line2.displayed}
          {line1.done && !line2.done && <span className="cursor-blink" style={{ color: '#00e5c0' }}>█</span>}
        </div>

        {/* Bio */}
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: '#9aa3b5', lineHeight: 1.75, marginBottom: 0, maxWidth: 580, minHeight: '3.5em' }}>
          {line3.displayed}
          {line2.done && !line3.done && <span className="cursor-blink" style={{ color: '#00e5c0' }}>█</span>}
          {line3.done && (
            <>
              {' '}
              {line4.displayed}
              {!line4.done && <span className="cursor-blink" style={{ color: '#00e5c0' }}>█</span>}
            </>
          )}
        </p>

        {/* CTAs */}
        {line4.done && (
          <>
            <div className="fade-up" style={{ display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
              <button
                onClick={() => setPage('projects')}
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  background: '#00e5c0', color: '#07070d',
                  border: 'none', padding: '14px 28px', cursor: 'pointer',
                  borderRadius: 2, transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                View Projects →
              </button>
              <button
                onClick={() => setPage('about')}
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  background: 'transparent', color: '#9aa3b5',
                  border: '1px solid #1a1d2e', padding: '14px 28px', cursor: 'pointer',
                  borderRadius: 2, transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#00e5c0'; e.currentTarget.style.color = '#00e5c0' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a1d2e'; e.currentTarget.style.color = '#9aa3b5' }}
              >
                About Me
              </button>
            </div>

            {/* Availability + Resume */}
            <div className="fade-up" style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 28, flexWrap: 'wrap' }}>
              {/* Open to work badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ position: 'relative', width: 10, height: 10, flexShrink: 0 }}>
                  <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#22c55e', opacity: 0.35, animation: 'ping 1.8s cubic-bezier(0,0,0.2,1) infinite' }} />
                  <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.73rem', color: '#22c55e', letterSpacing: '0.06em' }}>
                  Open to junior / entry-level roles
                </span>
              </div>

              {/* Divider */}
              <div style={{ width: 1, height: 16, background: '#1a1d2e', flexShrink: 0 }} />

              {/* Resume download */}
              <a
                href="#"
                onClick={e => e.preventDefault()}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.73rem',
                  color: '#9aa3b5', textDecoration: 'none', letterSpacing: '0.06em',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00e5c0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9aa3b5')}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

      {/* Bottom stats bar */}
      {line4.done && (
        <div className="fade-up" style={{ position: 'absolute', bottom: 48, left: 32, right: 32, display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {[
            { label: 'Years exp', value: '8+' },
            { label: 'Projects shipped', value: '23' },
            { label: 'Lines of C++', value: '400K+' },
            { label: 'Open source repos', value: '17' },
          ].map(s => (
            <div key={s.label}>
              <div className="stat-num" style={{ fontSize: '1.8rem' }}>{s.value}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#6b7380', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ──────────────────────────────────────────────
// About page
// ──────────────────────────────────────────────
function AboutPage() {
  const [barsVisible, setBarsVisible] = useState(false)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = skillsRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setBarsVisible(true) }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 32px 80px' }}>
      {/* Header */}
      <div style={{ marginBottom: 72 }}>
        <div className="section-label" style={{ marginBottom: 16 }}>// about me</div>
        <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.6rem)', margin: '0 0 24px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Systems thinking,<br />
          <span style={{ color: '#00e5c0' }}>pixel-level</span> precision.
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#9aa3b5', lineHeight: 1.8, maxWidth: 560, margin: 0 }}>
          I'm Alex Lindqvist — a game engine programmer with 8 years building the invisible infrastructure that makes interactive worlds run. My work lives below the gameplay layer: rendering systems, memory allocators, job schedulers, and the dark art of making code fast enough to ship.
        </p>
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48 }}>
        {/* Left column */}
        <div>
          {/* Skills */}
          <div ref={skillsRef} style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7380', marginBottom: 24 }}>
              Technical Skills
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {SKILLS.map(s => (
                <div key={s.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#dde2eb' }}>{s.name}</span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#6b7380' }}>{s.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: barsVisible ? `${s.level}%` : '0%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Focus areas */}
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7380', marginBottom: 20 }}>
              Focus Areas
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Rendering Pipelines', 'ECS Architecture', 'GPGPU / Compute', 'Netcode & Lockstep', 'Memory Systems', 'Build Tooling', 'Performance Profiling', 'Asset Pipelines', 'Physics Simulation'].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — timeline */}
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7380', marginBottom: 24 }}>
            Experience
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {TIMELINE.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 24, paddingBottom: 32, position: 'relative' }}>
                {/* Timeline line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00e5c0', flexShrink: 0, marginTop: 4 }} />
                  {i < TIMELINE.length - 1 && <div style={{ width: 1, flex: 1, background: '#1a1d2e', marginTop: 6 }} />}
                </div>
                <div style={{ paddingBottom: 8 }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#00e5c0', letterSpacing: '0.1em', marginBottom: 4 }}>{item.year}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, fontSize: '0.9rem', color: '#dde2eb', marginBottom: 2 }}>{item.role}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#9aa3b5', marginBottom: 6 }}>{item.company}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#6b7380', lineHeight: 1.5 }}>{item.note}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{ marginTop: 16, borderTop: '1px solid #1a1d2e', paddingTop: 32 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7380', marginBottom: 16 }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'email', value: 'alex@lindqvist.dev' },
                { label: 'github', value: 'github.com/alexlq' },
                { label: 'linkedin', value: 'linkedin.com/in/alexlq' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#6b7380', letterSpacing: '0.08em', width: 60 }}>{c.label}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#00e5c0' }}>{c.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────
// Projects page
// ──────────────────────────────────────────────
function ProjectCard({ project, onClick }: { project: typeof PROJECTS[0]; onClick: () => void }) {
  return (
    <div className="project-card" style={{ borderRadius: 4, overflow: 'hidden', cursor: 'pointer' }} onClick={onClick}>
      {/* Image */}
      <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: '#0e0f18' }}>
        <img
          src={project.img}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, transition: 'opacity 0.3s, transform 0.3s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0.85'; (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0.6'; (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, #0e0f18 10%, transparent 60%)` }} />
        <div style={{ position: 'absolute', top: 12, right: 12 }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', background: 'rgba(7,7,13,0.8)', color: project.color, padding: '3px 8px', borderRadius: 2, letterSpacing: '0.08em' }}>
            {project.lang}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 24px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '1rem', color: '#dde2eb', margin: 0, lineHeight: 1.3 }}>{project.title}</h3>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#6b7380', flexShrink: 0, marginLeft: 12 }}>{project.year}</span>
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.83rem', color: '#9aa3b5', lineHeight: 1.65, margin: '0 0 16px' }}>{project.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#6b7380', letterSpacing: '0.06em' }}>
          ~{project.lines} lines
        </div>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(7,7,13,0.9)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
      onClick={onClose}
    >
      <div
        style={{ background: '#0e0f18', border: '1px solid #1a1d2e', borderRadius: 4, maxWidth: 680, width: '100%', overflow: 'hidden', maxHeight: '90vh', overflowY: 'auto' }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ position: 'relative', height: 280 }}>
          <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0e0f18 15%, transparent 60%)' }} />
          <button
            onClick={onClose}
            style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(7,7,13,0.7)', border: '1px solid #1a1d2e', color: '#9aa3b5', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', padding: '6px 12px', cursor: 'pointer', borderRadius: 2, letterSpacing: '0.06em' }}
          >
            [ESC]
          </button>
        </div>
        <div style={{ padding: '28px 32px 36px' }}>
          <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
            {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 800, fontSize: '1.6rem', color: '#dde2eb', margin: '0 0 12px' }}>{project.title}</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#9aa3b5', lineHeight: 1.8, margin: '0 0 28px' }}>{project.desc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, borderTop: '1px solid #1a1d2e', paddingTop: 24 }}>
            {[{ label: 'Language', value: project.lang }, { label: 'Year', value: project.year }, { label: 'Scale', value: `~${project.lines} loc` }].map(m => (
              <div key={m.label}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#6b7380', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{m.label}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, fontSize: '0.9rem', color: project.color }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null)
  const [selected, setSelected] = useState<typeof PROJECTS[0] | null>(null)

  const allLangs = [...new Set(PROJECTS.map(p => p.lang))]
  const visible = filter ? PROJECTS.filter(p => p.lang === filter) : PROJECTS

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 32px 80px' }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <div className="section-label" style={{ marginBottom: 16 }}>// projects</div>
        <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Selected Work
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#9aa3b5', margin: 0 }}>
          Personal projects, open-source libraries, and research prototypes.
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
        <button
          onClick={() => setFilter(null)}
          style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.08em',
            textTransform: 'uppercase', background: filter === null ? '#00e5c0' : 'transparent',
            color: filter === null ? '#07070d' : '#6b7380', border: '1px solid',
            borderColor: filter === null ? '#00e5c0' : '#1a1d2e', padding: '6px 14px', cursor: 'pointer', borderRadius: 2, transition: 'all 0.15s',
          }}
        >
          All
        </button>
        {allLangs.map(lang => (
          <button
            key={lang}
            onClick={() => setFilter(lang === filter ? null : lang)}
            style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.08em',
              textTransform: 'uppercase', background: filter === lang ? '#00e5c0' : 'transparent',
              color: filter === lang ? '#07070d' : '#6b7380', border: '1px solid',
              borderColor: filter === lang ? '#00e5c0' : '#1a1d2e', padding: '6px 14px', cursor: 'pointer', borderRadius: 2, transition: 'all 0.15s',
            }}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
        {visible.map(p => (
          <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}

// ──────────────────────────────────────────────
// Root
// ──────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>('home')

  return (
    <div className="noise-overlay" style={{ background: '#07070d', minHeight: '100vh' }}>
      <Nav page={page} setPage={setPage} />
      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'about' && <AboutPage />}
      {page === 'projects' && <ProjectsPage />}
    </div>
  )
}
