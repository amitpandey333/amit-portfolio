import { useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, BarChart3, Layers3, Download, ExternalLink, Sparkles
} from 'lucide-react'

const projects = [
  {
    number: '01',
    category: 'DATA ANALYTICS · POWER BI',
    title: 'Sales & Revenue Dashboard',
    description: 'An interactive dashboard to explore sales performance, revenue trends, and product-level insights.',
    tags: ['Power BI', 'Excel', 'Data Visualization'],
    icon: BarChart3,
    accent: 'mint',
    link: 'https://github.com/amitpandey333',
  },
  {
    number: '02',
    category: 'MACHINE LEARNING · ANALYTICS',
    title: 'Customer Segmentation',
    description: 'A customer analysis project exploring groups and patterns to support more informed business decisions.',
    tags: ['Python', 'Pandas', 'Scikit-learn'],
    icon: Layers3,
    accent: 'lavender',
    link: 'https://github.com/amitpandey333/Customer-Segmentation-Project',
  },
  {
    number: '03',
    category: 'PREDICTIVE ANALYTICS',
    title: 'Historical Sales Forecasting',
    description: 'A practical workflow for preparing historical sales data and comparing predicted results with actual values.',
    tags: ['Python', 'Pandas', 'Data Cleaning'],
    icon: Database,
    accent: 'peach',
    link: 'https://github.com/amitpandey333',
  },
  {
    number: '04',
    category: 'CIVIC TECH · HACKATHON',
    title: 'CivicEase AI',
    description: 'A prototype concept that makes government notices, application checklists, and civic complaint workflows easier to understand.',
    tags: ['React', 'AI Concept', 'User Experience'],
    icon: Sparkles,
    accent: 'blue',
    link: 'https://github.com/amitpandey333',
  },
]

const skills = [
  { group: 'LANGUAGES', items: ['Java', 'Python', 'SQL', 'JavaScript', 'C++'] },
  { group: 'WEB', items: ['HTML', 'CSS', 'React basics', 'Responsive UI'] },
  { group: 'DATA & TOOLS', items: ['Power BI', 'Excel', 'MySQL', 'Git', 'GitHub'] },
]

function SectionHeading({ eyebrow, title, detail }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <div className="heading-row">
        <h2>{title}</h2>
        {detail && <p>{detail}</p>}
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Analytics', 'Development']
  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true
    if (filter === 'Analytics') return /ANALYTICS|MACHINE LEARNING|POWER BI/.test(project.category)
    return /CIVIC TECH/.test(project.category)
  })

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Amit Pandey home">
          <span className="brand-mark">A</span>
          <span>amit<span className="muted-word">pandey</span><i>.</i></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="availability"><span className="status-dot" /> OPEN TO INTERNSHIPS & OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I’M AMIT PANDEY</p>
            <h1>I turn ideas into <span className="serif-italic">useful</span><br className="desktop-break" /> digital experiences.</h1>
            <p className="hero-description">
              MCA student and aspiring software developer interested in building thoughtful web experiences
              and turning data into clear, useful insights.
            </p>
            <div className="hero-actions">
  <a className="button button-dark" href="#work">
    Explore my work <ArrowDownRight size={17} />
  </a>

  <a className="text-link" href="#contact">
    Get in touch <ArrowUpRight size={16} />
  </a>

  <a
    className="text-link"
    href="/Amit-Pandey-Resume.docx"
    download
  >
    Download Resume <Download size={16} />
  </a>
</div>
            <div className="hero-socials">
              <a href="https://github.com/amitpandey333" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/amit-pandey-4b158b2a/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="art-topline"><span>PORTFOLIO / 2026</span><span>BASED IN INDIA ↗</span></div>
            <div className="art-grid">
              <div className="art-circle circle-one" />
              <div className="art-circle circle-two" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="art-initials">AP<span>.</span></div>
              <div className="art-caption caption-top">CURIOUS BY NATURE</div>
              <div className="art-caption caption-bottom">BUILDING, LEARNING<br />AND ITERATING.</div>
              <div className="art-number">01—04</div>
            </div>
            <div className="art-bottomline"><span>DEVELOPMENT × ANALYTICS</span><span>SCROLL TO EXPLORE ↓</span></div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO DISCOVER</a>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curiosity first.<br /><span className="serif-italic">Always building.</span></>} />
          <div className="about-content">
            <p className="about-lead">I’m an MCA student working toward a career in software development. I enjoy breaking down problems, learning new tools, and making projects that connect technology with real-world needs.</p>
            <div className="about-side">
              <p>My interests sit at the intersection of web development, data analytics, and practical problem-solving. I’m focused on strengthening my fundamentals while building a portfolio of projects that show how I think and work.</p>
              <a className="text-link" href="#contact">A little more about my journey <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="stat-strip">
            <div><strong>04<span>+</span></strong><span>PROJECT CONCEPTS & BUILDS</span></div>
            <div><strong>03</strong><span>CORE AREAS OF INTEREST</span></div>
            <div><strong>∞</strong><span>THINGS LEFT TO LEARN</span></div>
          </div>
                  </section>

        {/* EXPERIENCE SECTION — START */}
        <section className="experience section-wrap section-pad" id="experience">
          <SectionHeading
            eyebrow="PROFESSIONAL EXPERIENCE"
            title={<>Learning through <span className="serif-italic">real projects.</span></>}
            detail="Practical experience gained through my Data Analytics internship."
          />

          <div className="experience-card">
            <div className="experience-top">
              <div>
                <span className="experience-label">INTERNSHIP</span>
                <h3>Data Analytics Intern</h3>
                <p className="experience-company">Thiranex EduTech LLP</p>
              </div>
              <span className="experience-date">
                14 July – 13 August 2026
              </span>
            </div>

            <p className="experience-description">
              Completed four practical projects focused on data visualization,
              customer analysis, predictive analytics, and reporting automation.
            </p>

            <ul className="experience-tasks">
              <li>Sales & Revenue Analysis Dashboard</li>
              <li>Customer Segmentation</li>
              <li>Predictive Analytics Using Historical Data</li>
              <li>Data Cleaning & Reporting Automation</li>
            </ul>

            <div className="experience-tools">
              {['Power BI', 'Excel', 'Python', 'Pandas', 'Scikit-learn'].map(tool => (
                <span key={tool}>{tool}</span>
              ))}
            </div>

            <div className="experience-achievement">
              <span>✓</span> All four tasks completed · Official Letter of Recommendation unlocked
            </div>
          </div>
        </section>
        <section className="work section-wrap section-pad" id="work">
          <SectionHeading eyebrow="SELECTED WORK" title={<>A few things I’ve <span className="serif-italic">worked on.</span></>} detail="A mix of data projects and ideas focused on solving practical problems." />
          <div className="project-toolbar">
            <span className="eyebrow">{String(filteredProjects.length).padStart(2, '0')} PROJECTS</span>
            <div className="filter-group" aria-label="Filter projects">
              {categories.map((category) => (
                <button key={category} className={filter === category ? 'filter-chip active' : 'filter-chip'} onClick={() => setFilter(category)}>{category}</button>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.article
                  className={`project-card ${project.accent}`}
                  key={project.number}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                >
                  <div className="project-card-top"><span>{project.number} / 04</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={18} /></a></div>
                  <div className="project-visual"><div className="visual-ring ring-a" /><div className="visual-ring ring-b" /><div className="visual-icon"><Icon size={30} strokeWidth={1.5} /></div><span className="visual-label">SELECTED PROJECT</span></div>
                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View project <ExternalLink size={14} /></a>
                  </div>
                </motion.article>
              )
            })}
          </div>
          <div className="github-note"><Github size={20} /><p>More experiments and code live on GitHub.</p><a href="https://github.com/amitpandey333" target="_blank" rel="noreferrer">Visit my GitHub <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="skills section-wrap section-pad" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title={<>Tools I use to <span className="serif-italic">make things.</span></>} detail="A growing toolkit. I’m always learning and improving through practice." />
          <div className="skills-layout">
            <div className="skills-intro"><Code2 size={25} strokeWidth={1.4} /><p>Strong fundamentals matter. These are the technologies and tools I’m learning and using in projects.</p></div>
            <div className="skill-groups">
              {skills.map((skill) => <div className="skill-row" key={skill.group}><span className="skill-group-label">{skill.group}</span><div className="skill-pills">{skill.items.map(item => <span key={item}>{item}</span>)}</div></div>)}
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-decoration">LET’S MAKE<br /><span>IT MATTER.</span></div>
            <div className="contact-copy">
              <span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span>
              <h2>Good things start with a <span className="serif-italic">conversation.</span></h2>
              <p>I’m open to internships, entry-level opportunities, and collaborations where I can learn, contribute, and grow.</p>
              <a className="button button-light" href="mailto:amit300w@gmail.com">Say hello <Mail size={16} /></a>
             <span className="email-hint">
  Usually available for opportunities and collaborations.
</span>
            </div>
            <div className="contact-corner">AP. / 2026</div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark" href="#home"><span className="brand-mark">A</span><span>amit<span className="muted-word">pandey</span><i>.</i></span></a>
        <span className="footer-note">DESIGNED WITH INTENTION · BUILT TO KEEP LEARNING</span>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Amit Pandey</span>
      </footer>
    </div>
  )
}

export default App
