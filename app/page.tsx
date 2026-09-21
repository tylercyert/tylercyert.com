import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <h1>tyler cyert</h1>
        <p>
          Integration &amp; AI platform engineer based in Bloomington, IN. I build the automation
          and agent tooling that business operations run on — MCP servers that give LLMs safe access
          to internal systems, production agents with human-in-the-loop approval, the data warehouse
          the company reports on, and the ERP and e-commerce integrations underneath. I also ship
          software on the side.
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          Currently at{" "}
          <a href="https://soundpro.com" target="_blank" rel="noopener noreferrer">
            SoundPro.com
          </a>
          {" "}— open to remote-first engineering roles where integration, internal tooling, or
          applied AI are central to the work.
        </p>
      </section>

      <hr />

      <section>
        <h2>experience</h2>

        <div className="exp-entry">
          <div className="exp-header">
            <span className="exp-title">Integration Engineer</span>
            <span className="exp-dates">May 2026 — present</span>
          </div>
          <div className="exp-company">Sound Productions · Irving, TX (Remote)</div>
          <ul className="exp-bullets">
            <li>Built <strong>Model Context Protocol (MCP) servers</strong> that expose Acumatica ERP, HubSpot CRM, and EDI transaction data to agents and Claude-based tooling.</li>
            <li>Design, ship, and operate <strong>production AI agents</strong> for internal operations workflows, with human-in-the-loop approval, audit logging, and per-run cost tracking.</li>
            <li>Established AI governance and observability: model and tool access controls, usage policies, run tracing, token spend reporting, and failure-mode review.</li>
            <li>Building an internal knowledge assistant in Microsoft Teams backed by a VitePress/GitHub knowledge base, pgvector retrieval, n8n orchestration, and Azure Bot Service.</li>
            <li>Designed and built the company&apos;s <strong>data warehouse</strong> from nothing — a bronze/silver Postgres model over Acumatica, HubSpot, RingCentral and Freshservice covering <strong>111 entities across 9 schemas</strong>, with schema managed as <strong>198 numbered forward migrations</strong>, drift detection, and a restore test that runs before any risky change.</li>
            <li>Built <strong>Dash</strong>, a self-hosted analytics platform serving <strong>156 pages</strong> — per-person, per-department and executive — generated from the warehouse and republished hourly behind Cloudflare Access.</li>
            <li>Own the production integration portfolio and automation roadmap end to end — prioritization with executive, sales, and finance stakeholders, delivery, and on-call support.</li>
          </ul>
        </div>

        <div className="exp-entry">
          <div className="exp-header">
            <span className="exp-title">Systems Engineer</span>
            <span className="exp-dates">Jan 2026 — May 2026</span>
          </div>
          <div className="exp-company">Sound Productions · Irving, TX</div>
          <ul className="exp-bullets">
            <li>Built Acumatica–Shopify pricing integration generating <strong>150,000+ item prices</strong> via custom formulas.</li>
            <li>Designed bidirectional HubSpot–Acumatica contact sync managing <strong>60,000+ records</strong> in near real time.</li>
            <li>Built in-house EDI transaction mapping in Acumatica; <strong>10,000+ transactions</strong> processed to date.</li>
            <li>Shipped <strong>30+ automation workflows</strong> across order processing, fulfillment, and finance, letting operations absorb growth with flat headcount.</li>
            <li>Built observability dashboards and alerting for integration health and automated transactions.</li>
          </ul>
        </div>

        <div className="exp-entry">
          <div className="exp-header">
            <span className="exp-title">IT Support Specialist</span>
            <span className="exp-dates">Aug 2024 — Jan 2026</span>
          </div>
          <div className="exp-company">Sound Productions · Irving, TX</div>
          <ul className="exp-bullets">
            <li>Project-managed the Sage 100 → Acumatica Cloud ERP migration across 3 departments — zero downtime, no order-processing outages.</li>
            <li>Migrated a vendor-locked knowledge base to an open platform via API extraction and data transformation scripts.</li>
            <li>Managed and hardened Azure VMs, servers, and endpoints to PCI-DSS standards.</li>
            <li>Led a VoIP provider migration for a 40-person team with zero downtime.</li>
          </ul>
        </div>

        <div className="exp-entry">
          <div className="exp-header">
            <span className="exp-title">IT Support Specialist</span>
            <span className="exp-dates">2022 — 2024</span>
          </div>
          <div className="exp-company">Alpha Orthopedics &amp; Sports Medicine · McKinney, TX</div>
          <ul className="exp-bullets">
            <li>Sole IT owner across 4 clinical locations — 50+ endpoints for doctors, nurses, and executive staff.</li>
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
          <h3>soundpro_reporting</h3>
          <p>Bronze/silver Postgres warehouse over Acumatica, HubSpot, RingCentral and Freshservice. Nightly incremental sync with a delete-reconcile pass, schema as numbered forward migrations, and self-updating ER and integration-status pages read live from the Postgres catalog.</p>
          <p className="tech">PostgreSQL · n8n · SQL · Docker</p>
        </div>
        <div className="project">
          <h3>
            <Link href="https://www.nitesong.io">nitesong</Link>
          </h3>
          <p>Songwriting SaaS built for writers who want to stay in the creative flow.</p>
          <p className="tech">Next.js · TypeScript · Supabase · PostgreSQL · Prisma · Vercel</p>
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
