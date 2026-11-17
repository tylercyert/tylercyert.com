import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Tyler Cyert / Bloomington, Indiana</p>
          <h1 id="hero-title">I build <em>business backbones.</em></h1>
          <p className="hero-lede">
            I ship internal products, integrations, and features that turn complex operations into
            reliable tools people actually use.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore selected work <span aria-hidden="true">↗</span></a>
            <a className="button button-text" href="mailto:tyler@tylercyert.com">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hero-note">Software &amp; integration engineer at <a href="https://www.soundpro.com" target="_blank" rel="noopener noreferrer">Sound Productions ↗</a></p>
        </div>
        <div className="system-panel" aria-label="Illustration of connected business systems">
          <div className="system-panel-top">
            <span>FIELD NOTE / 001</span>
            <span className="system-panel-symbol" aria-hidden="true">✳</span>
          </div>
          <p className="system-panel-title">Make the<br />connections count.</p>
          <div className="system-flow">
            <div className="system-flow-step">
              <span className="flow-index">01 / SOURCE</span>
              <strong>ERP · CRM · EDI</strong>
            </div>
            <span className="flow-arrow" aria-hidden="true">↓</span>
            <div className="system-flow-step system-flow-step-emphasis">
              <span className="flow-index">02 / BUILD</span>
              <strong>Products + integrations</strong>
            </div>
            <span className="flow-arrow" aria-hidden="true">↓</span>
            <div className="system-flow-step">
              <span className="flow-index">03 / OUTCOME</span>
              <strong>Workflows teams trust</strong>
            </div>
          </div>
          <p className="system-panel-foot">An illustration of the work, from data to daily operations.</p>
        </div>
      </section>

      <section className="proof-band" aria-label="Selected results">
        <div className="shell proof-grid">
          <div className="proof-item">
            <span className="proof-number">20<span>+</span></span>
            <p>production integrations<br />owned and supported</p>
          </div>
          <div className="proof-item">
            <span className="proof-number">100K<span>+</span></span>
            <p>integration transactions each month<br /><small>as of October 2026</small></p>
          </div>
          <div className="proof-item">
            <span className="proof-number">150K<span>+</span></span>
            <p>catalog prices<br />maintained automatically</p>
          </div>
        </div>
      </section>

      <section className="section shell" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2 id="work-title">Systems with a job to do.</h2>
          </div>
          <p>The work is technical. The point is to make someone&apos;s day easier and the business more dependable.</p>
        </div>

        <article className="case-study case-study-first">
          <div className="case-aside">
            <span className="case-index">01</span>
            <span className="case-type">PRODUCTION INTEGRATIONS</span>
          </div>
          <div className="case-main">
            <h3>Commerce, CRM, and EDI in sync.</h3>
            <p className="case-summary">
              Pricing, customer records, and trading-partner transactions need to move reliably
              across systems. I built key connections and now own the integration portfolio behind
              those operations.
            </p>
            <div className="case-facts">
              <div><span>BUILT</span><p>Acumatica–Shopify pricing, a two-way HubSpot sync, and in-house EDI mapping.</p></div>
              <div><span>RESULT</span><p>150,000+ prices maintained, 60,000+ records synchronized, and 99% straight-through EDI processing across five partners.</p></div>
            </div>
            <p className="case-tech">Acumatica / Shopify / HubSpot / EDI / APIs</p>
          </div>
          <div className="case-visual integration-visual" aria-hidden="true">
            <div className="visual-caption">A RELIABLE FLOW</div>
            <div className="integration-node">ERP <span>source of truth</span></div>
            <svg className="integration-connectors" viewBox="0 0 300 96" preserveAspectRatio="none" focusable="false" aria-hidden="true">
              <path d="M150 0 V34 M50 34 H250 M50 34 V83 M150 34 V83 M250 34 V83" />
              <path d="M44 77 L50 85 L56 77 M144 77 L150 85 L156 77 M244 77 L250 85 L256 77" />
              <circle cx="150" cy="34" r="4" />
            </svg>
            <div className="integration-destinations">
              <div>COMMERCE <small>prices</small></div>
              <div>CRM <small>contacts</small></div>
              <div>EDI <small>orders</small></div>
            </div>
            <div className="visual-foot">Illustrative system map</div>
          </div>
        </article>

        <article className="case-study">
          <div className="case-aside">
            <span className="case-index">02</span>
            <span className="case-type">DATA FOUNDATION</span>
          </div>
          <div className="case-main">
            <h3>Reporting built from the source.</h3>
            <p className="case-summary">
              I architected a PostgreSQL data warehouse and built it with another developer,
              bringing operational data into a model teams could use. I also co-architected the
              analytics layer built on top of it.
            </p>
            <div className="case-facts">
              <div><span>BUILT</span><p>A bronze/silver model across operational systems, with nightly incremental sync and delete reconciliation.</p></div>
              <div><span>RELIABILITY</span><p>Numbered schema migrations, drift checks, encrypted backups, and automated restore tests.</p></div>
            </div>
            <p className="case-tech">PostgreSQL / SQL / Data modeling / Reliability</p>
          </div>
          <div className="case-visual warehouse-visual" aria-hidden="true">
            <div className="visual-caption">FROM SOURCE TO SIGNAL</div>
            <div className="warehouse-layers">
              <div><span>01</span> Operational systems</div>
              <div><span>02</span> Modeled data</div>
              <div><span>03</span> Useful reporting</div>
            </div>
            <div className="visual-foot">Illustrative data flow</div>
          </div>
        </article>
      </section>

      <section className="section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / PUBLIC PROJECTS</p>
              <h2 id="projects-title">Built beyond the day job.</h2>
            </div>
            <p>Working products and public code make the decisions behind the work easier to inspect.</p>
          </div>
          <div className="project-grid">
            <article className="project-card project-poko">
              <div className="project-copy">
                <span className="project-label">PUBLIC REPOSITORY / MOBILE + WEB</span>
                <h3>Poko</h3>
                <p>An adaptive learning app that turns a goal into a path of short, interactive lessons. Built with Expo and TypeScript.</p>
                <p className="project-note">Wildcard Segment winner at Indy Init 2026.</p>
                <a href="https://github.com/tylercyert/poko" target="_blank" rel="noopener noreferrer">Explore the code <span aria-hidden="true">↗</span></a>
              </div>
              <div className="poko-stage">
                <div className="phone phone-back"><Image src="/work/poko-path.png" alt="Poko skill path screen" width={390} height={844} /></div>
                <div className="phone phone-front"><Image src="/work/poko-home.png" alt="Poko home screen" width={390} height={844} /></div>
              </div>
            </article>
            <article className="project-card project-dotbox">
              <div className="project-copy">
                <span className="project-label">LIVE DEMO / UPCOMING WORKSPACE PREVIEW</span>
                <h3>DotBox</h3>
                <p>Design an AI agent team visually, then copy setup prompts and generated files into your coding agent. A redesigned workspace is in progress.</p>
                <a href="https://dotbox.zip/app" target="_blank" rel="noopener noreferrer">Try the current demo <span aria-hidden="true">↗</span></a>
              </div>
              <div className="dotbox-stage">
                <Image src="/work/dotbox-workspace-preview.png" alt="Preview of the upcoming DotBox workspace showing a product development agent graph" width={1519} height={949} />
                <span className="dotbox-preview-label">Upcoming redesign preview</span>
              </div>
            </article>
          </div>
          <p className="more-projects">Also building <a href="https://www.nitesong.io" target="_blank" rel="noopener noreferrer">nitesong ↗</a>, a songwriting tool.</p>
        </div>
      </section>

      <section className="section shell experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / EXPERIENCE</p>
            <h2 id="experience-title">A progression toward ownership.</h2>
          </div>
          <p>From supporting operations to designing and shipping the software behind them.</p>
        </div>
        <div className="role-list">
          <div className="role-row"><span>2026 — NOW</span><div><h3>Integration Engineer</h3><p>Sound Productions · Internal products, integration portfolio, and technology adoption</p></div><span className="role-arrow" aria-hidden="true">↗</span></div>
          <div className="role-row"><span>2026</span><div><h3>Systems Engineer</h3><p>Sound Productions · Pricing, CRM, EDI, automation, and reliability</p></div><span className="role-arrow" aria-hidden="true">↗</span></div>
          <div className="role-row"><span>2024 — 2026</span><div><h3>IT Support Specialist</h3><p>Sound Productions · ERP migration and operational systems</p></div><span className="role-arrow" aria-hidden="true">↗</span></div>
        </div>
        <Link href="/about#career" className="inline-link">See the full path <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="shell contact-inner">
          <div>
            <p className="eyebrow">04 / WHAT&apos;S NEXT</p>
            <h2 id="contact-title">Let&apos;s build software people rely on.</h2>
            <p>I&apos;m open to senior software, integration, and internal product roles where I can own important work from problem to production.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:tyler@tylercyert.com">Email me <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/tyler-cyert/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}
