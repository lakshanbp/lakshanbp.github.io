import { useState } from "react";
import BrandMark from "./BrandMark";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  Server,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const skills = [
  { name: "HTML & CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Git & GitHub", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "Cloud fundamentals", category: "cloud" },
  { name: "CI/CD fundamentals", category: "cloud" },
];

const projects = [
  {
    number: "01",
    type: "FULL-STACK · E-COMMERCE",
    title: "Handmade Hub",
    description:
      "A digital marketplace concept that helps local artisans showcase handmade products, manage listings, and connect with customers.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/lakshanbp",
    demo: "",
    accent: "mint",
  },
  {
    number: "02",
    type: "WEB APPLICATION",
    title: "Job Matching Platform",
    description:
      "A job discovery application concept designed to bring job listings and candidate opportunities into one searchable experience.",
    stack: ["React", "Node.js", "MongoDB", "REST API"],
    github: "https://github.com/lakshanbp",
    demo: "",
    accent: "violet",
  },
  {
    number: "03",
    type: "CLOUD · DEVOPS",
    title: "Cloud Deployment Lab",
    description:
      "A portfolio lab to document deployment experiments, infrastructure learning, automation, and cloud engineering notes.",
    stack: ["Linux", "Git", "CI/CD", "Cloud"],
    github: "https://github.com/lakshanbp",
    demo: "",
    accent: "blue",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState("all");

  const filteredSkills =
    skillFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === skillFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Lakshan home">
          <BrandMark />
          <span className="brand-name">LAKSHAN<span>PERERA</span></span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#github" onClick={closeMenu}>GitHub</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>
              Turning ideas
              <br />
              into <span className="gradient-text">digital</span>
              <br />
              experiences<span className="accent-dot">.</span>
            </h1>
            <p className="hero-description">
              Hey, I&apos;m <strong>Lakshan Perera</strong> — a developer focused on
              building useful web applications and growing into cloud engineering.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span><Code2 size={15} /> Full-Stack Development</span>
              <span><Cloud size={15} /> Cloud &amp; DevOps</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Decorative developer code card">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-card">
              <div className="code-card-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>developer.ts</span>
                <span className="code-lock">TS</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="line-number">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</div>
                <div className="code-line"><span className="line-number">02</span>&nbsp;&nbsp;name: <span className="code-green">&quot;Lakshan&quot;</span>,</div>
                <div className="code-line"><span className="line-number">03</span>&nbsp;&nbsp;focus: [</div>
                <div className="code-line"><span className="line-number">04</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">&quot;Web Development&quot;</span>,</div>
                <div className="code-line"><span className="line-number">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">&quot;Cloud Engineering&quot;</span></div>
                <div className="code-line"><span className="line-number">06</span>&nbsp;&nbsp;],</div>
                <div className="code-line"><span className="line-number">07</span>&nbsp;&nbsp;mindset: <span className="code-green">&quot;Always learning&quot;</span>,</div>
                <div className="code-line"><span className="line-number">08</span>&nbsp;&nbsp;build: <span className="code-orange">()</span> <span className="code-purple">=&gt;</span> <span className="code-green">&quot;Make it useful&quot;</span></div>
                <div className="code-line"><span className="line-number">09</span>{"};"}<span className="cursor-blink">▍</span></div>
              </div>
              <div className="code-card-bottom">
                <span><span className="status-dot" /> Ready to build</span>
                <span>UTF-8&nbsp; · &nbsp;TypeScript</span>
              </div>
            </div>
            <div className="floating-chip chip-code"><Terminal size={16} /> Clean code</div>
            <div className="floating-chip chip-cloud"><Cloud size={17} /> Cloud-minded</div>
            <div className="visual-caption">DESIGN. DEVELOP. DEPLOY.</div>
          </div>

          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>A little about <span className="gradient-text">me.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-lead">
              <Sparkles className="about-spark" size={25} />
              <h3>Curious by nature.<br />Builder by choice.</h3>
            </div>
            <div className="about-body">
              <p>
                I enjoy turning real-world problems into straightforward digital
                solutions. My interests sit at the intersection of frontend
                experiences, backend systems, and the cloud infrastructure that
                brings products to life.
              </p>
              <p>
                I&apos;m continuing to strengthen my development fundamentals through
                hands-on projects, experimentation, and learning how to build,
                test, and deploy software responsibly.
              </p>
              <div className="value-list">
                <div><span>01</span><strong>Keep learning</strong><small>Stay curious and keep improving.</small></div>
                <div><span>02</span><strong>Build with purpose</strong><small>Focus on useful, clear experiences.</small></div>
                <div><span>03</span><strong>Think end-to-end</strong><small>From interface to deployment.</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading">
            <span className="section-index">02 / TOOLKIT</span>
            <h2>Tools of the <span className="gradient-text">trade.</span></h2>
            <p className="section-intro">Technologies I use, practice, or am actively exploring. Update this list as your skills grow.</p>
          </div>
          <div className="skill-filters" role="group" aria-label="Filter skills">
            {[
              ["all", "All skills"],
              ["frontend", "Frontend"],
              ["backend", "Backend"],
              ["cloud", "Cloud & DevOps"],
              ["tools", "Tools"],
            ].map(([value, label]) => (
              <button
                key={value}
                className={skillFilter === value ? "filter-pill active" : "filter-pill"}
                onClick={() => setSkillFilter(value)}
                aria-pressed={skillFilter === value}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="skills-grid">
            {filteredSkills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <span className={`skill-icon ${skill.category}`}>
                  {skill.category === "cloud" ? <Cloud size={19} /> :
                   skill.category === "backend" ? <Server size={19} /> :
                   skill.category === "tools" ? <Terminal size={19} /> :
                   <Code2 size={19} />}
                </span>
                <span>{skill.name}</span>
                <ArrowUpRight className="skill-arrow" size={15} />
              </div>
            ))}
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-heading heading-row">
            <div>
              <span className="section-index">03 / SELECTED WORK</span>
              <h2>Things I&apos;ve <span className="gradient-text">built.</span></h2>
            </div>
            <a className="text-link" href="https://github.com/lakshanbp?tab=repositories" target="_blank" rel="noreferrer">
              All repositories <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                  <div className="project-art" aria-hidden="true">
                    {project.accent === "mint" ? <Monitor size={39} strokeWidth={1.2} /> :
                     project.accent === "violet" ? <Code2 size={39} strokeWidth={1.2} /> :
                     <Cloud size={39} strokeWidth={1.2} />}
                    <span className="art-orbit" />
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}
                </div>
              </article>
            ))}
          </div>
          <p className="project-note">Project cards are starter examples. Replace their links and descriptions with your actual repositories before publishing.</p>
        </section>

        <section className="github-section section-wrap section-block" id="github">
          <div className="section-heading">
            <span className="section-index">04 / OPEN SOURCE</span>
            <h2>My coding <span className="gradient-text">activity.</span></h2>
            <p className="section-intro">Explore my repositories and follow along as I learn, build, and share more projects.</p>
          </div>
          <div className="github-panel">
            <div className="github-panel-icon"><Github size={28} /></div>
            <div className="github-panel-copy">
              <span className="eyebrow">GITHUB PROFILE</span>
              <h3>@lakshanbp</h3>
              <p>Projects, experiments, and code in progress.</p>
            </div>
            <a className="button button-primary" href="https://github.com/lakshanbp" target="_blank" rel="noreferrer">
              Visit GitHub <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="github-stats">
            <div className="stats-heading"><span>PROFILE SNAPSHOT</span><span>LIVE DATA MAY VARY</span></div>
            <div className="stats-embed">
              <img src="https://github-readme-stats.vercel.app/api?username=lakshanbp&show_icons=true&hide_border=true&bg_color=0d1117&title_color=91f5c8&text_color=e7eaf0&icon_color=91f5c8" alt="GitHub statistics for lakshanbp" loading="lazy" />
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lakshanbp&layout=compact&hide_border=true&bg_color=0d1117&title_color=91f5c8&text_color=e7eaf0" alt="Most used languages on GitHub" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="contact-card">
            <div className="contact-glow" />
            <span className="section-index">05 / WHAT&apos;S NEXT?</span>
            <h2>Have an idea?<br /><span className="gradient-text">Let&apos;s build it.</span></h2>
            <p>I&apos;m always happy to connect with developers, learn from others, and explore interesting opportunities.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:lakshanbuddhika@outlook.com">
                <Mail size={17} /> Email me <ArrowUpRight size={16} />
              </a>
              <a className="button button-secondary" href="https://www.linkedin.com/in/lakshan-perera-62b53b214" target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="contact-decoration" aria-hidden="true"><ArrowRight size={28} /></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><BrandMark /><span className="brand-name">LAKSHAN<span>BP</span></span></a>
        <p> <span></span></p>
        <a className="back-top" href="#home">Back to top ↑</a>
        <small>© {new Date().getFullYear()} Lakshan Perera</small>
      </footer>
    </div>
  );
}

export default App;