import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <h1>tyler cyert</h1>
        <p>
          Systems &amp; Integration Engineer based in Dallas, TX. I build API-driven integrations,
          ERP automation, and cloud infrastructure for growing companies. I also ship software on the side.
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          Currently at{" "}
          <a href="https://soundpro.com" target="_blank" rel="noopener noreferrer">
            SoundPro.com
          </a>
          {" "}— open to remote-first engineering roles at B2B SaaS companies.
        </p>
      </section>

      <hr />

      <section>
        <h2>experience</h2>

        <div className="exp-entry">
          <div className="exp-header">
            <span className="exp-title">Systems Engineer</span>
            <span className="exp-dates">2024 — present</span>
          </div>
          <div className="exp-company">Sound Productions · Irving, TX</div>
          <ul className="exp-bullets">
            <li>Built Acumatica–Shopify pricing integration generating <strong>150,000+ item prices</strong> via custom formulas.</li>
            <li>Designed bidirectional HubSpot–Acumatica contact sync managing <strong>60,000+ records</strong> in real time.</li>
            <li>Built EDI transaction mapping system; processed <strong>10,000+ transactions</strong> to date.</li>
            <li>Developed <strong>30+ automation workflows</strong> enabling revenue growth without headcount growth.</li>
            <li>Led Sage 100 → Acumatica ERP migration across 3 departments — zero downtime, no order outages.</li>
            <li>Migrated vendor-locked knowledge base to open platform via API and data transformation tooling.</li>
            <li>Led VOIP migration for 40-person team with zero downtime.</li>
          </ul>
        </div>

        <div className="exp-entry">
          <div className="exp-header">
            <span className="exp-title">IT Support Specialist</span>
            <span className="exp-dates">2022 — 2024</span>
          </div>
          <div className="exp-company">Alpha Orthopedics &amp; Sports Medicine · McKinney, TX</div>
          <ul className="exp-bullets">
            <li>On-site IT SME across 3 clinical locations — 50+ endpoints, doctors, nurses, and executive staff.</li>
            <li>Supported company growth from 1 to 4 locations, provisioning infrastructure for each expansion.</li>
            <li>Completed PCI Level 2 audit; maintained HIPAA compliance across all sites.</li>
          </ul>
        </div>

        <div className="exp-entry">
          <div className="exp-header">
            <span className="exp-title">Partner / IT Consultant</span>
            <span className="exp-dates">2020 — 2022</span>
          </div>
          <div className="exp-company">ThumBrand · Allen, TX</div>
          <ul className="exp-bullets">
            <li>Grew client portfolio from 30 to 50 annual clients through technical project delivery.</li>
            <li>Scaled service catalog to recurring revenue models — increased recurring revenue by 20%+.</li>
          </ul>
        </div>
      </section>

      <hr />

      <section>
        <h2>projects</h2>
        <div className="project">
          <h3>
            <Link href="https://dotbox.zip">DotBox</Link>
          </h3>
          <p>Visual builder for agentic systems. Design agent directories, roles, and configs — deploy to any machine with a single command.</p>
        </div>
        <div className="project">
          <h3>
            <Link href="https://www.nitesong.io">nitesong</Link>
          </h3>
          <p>Songwriting SaaS built for writers who want to stay in the creative flow.</p>
          <p className="tech">Node.js · React · Tailwind · PostgreSQL</p>
        </div>
        <div className="project">
          <h3>
            <Link href="https://bored.tyl.sh">are you bored?</Link>
          </h3>
          <p>A boredom coach that helps you figure out what to do — part to-do app, part motivation engine.</p>
        </div>
      </section>

      <hr />

      <section>
        <h2>certifications</h2>
        <ul className="cert-list">
          <li>Microsoft Certified: Azure Administrator Associate (AZ-104)</li>
          <li>AWS Certified Solutions Architect – Associate (SAA-C03)</li>
          <li>AWS Certified Cloud Practitioner (CLF-C02)</li>
          <li>CompTIA Security+ · Network+ · Cloud+ · A+ · Project+</li>
          <li>ITIL V4 Foundation</li>
          <li>Linux Professional Institute: Linux Essentials</li>
        </ul>
      </section>
    </>
  );
}
