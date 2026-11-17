import { ArrowUpRight } from "@/components/DecorativeIcons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "How Tyler Cyert approaches internal software, integrations, and the work of making systems useful.",
  alternates: { canonical: "https://tylercyert.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero shell">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> ABOUT / TYLER CYERT</p>
          <h1>I care what happens <em>after the software ships.</em></h1>
        </div>
        <div className="about-intro">
          <p>I&apos;m a software and integration engineer in Bloomington, Indiana. At Sound Productions, I build and manage internal products, ship integrations and features, and help teams bring new technology into daily work.</p>
          <p>My favorite problems sit between people and systems. A price updated automatically, a customer record that stays in sync, or a report someone can find without asking for it: each is a small piece of software that gives someone their time back.</p>
          <a className="inline-link" href="mailto:tyler@tylercyert.com">Start a conversation <ArrowUpRight /></a>
        </div>
      </section>

      <section className="section about-principles">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / APPROACH</p>
              <h2>Useful first. Reliable always.</h2>
            </div>
            <p>The through-line in my work is making complicated systems feel simple to the teams using them.</p>
          </div>
          <div className="principle-grid">
            <div className="principle"><span>01</span><h3>Understand the work</h3><p>Talk to the people doing it, map what moves between systems, and find the friction worth removing.</p></div>
            <div className="principle"><span>02</span><h3>Ship the change</h3><p>Build products, features, and integrations that fit the real workflow, then help teams adopt them.</p></div>
            <div className="principle"><span>03</span><h3>Own the outcome</h3><p>Keep the software observable, maintainable, and dependable after the first release.</p></div>
          </div>
        </div>
      </section>

      <section className="section shell about-career" id="career">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / THE PATH</p>
            <h2>From support to systems ownership.</h2>
          </div>
          <p>Each role moved closer to the software and decisions that run the business.</p>
        </div>
        <div className="career-list">
          <article className="career-row">
            <div className="career-date">MAY 2026 — NOW</div>
            <div><h3>Integration Engineer</h3><p className="career-company">Sound Productions · Remote</p><p>Build and manage internal software products; own 20+ production integrations and their roadmap, reliability, and support. The portfolio processed over 100,000 transactions per month as of October 2026.</p></div>
          </article>
          <article className="career-row">
            <div className="career-date">JAN — MAY 2026</div>
            <div><h3>Systems Engineer</h3><p className="career-company">Sound Productions · Remote</p><p>Built a pricing engine maintaining 150,000+ catalog prices, a two-way CRM sync across 60,000+ records, and in-house EDI mapping for five trading partners.</p></div>
          </article>
          <article className="career-row">
            <div className="career-date">2024 — 2026</div>
            <div><h3>IT Support Specialist</h3><p className="career-company">Sound Productions · Remote</p><p>Led the Sage 100-to-Acumatica migration across three departments, rebuilt critical workflows without an order-processing outage, and helped move identity and device management to the cloud.</p></div>
          </article>
          <article className="career-row">
            <div className="career-date">2022 — 2024</div>
            <div><h3>IT Support Specialist</h3><p className="career-company">Alpha Orthopedics &amp; Sports Medicine</p><p>Owned IT across four medical offices as the organization expanded from one location, supporting 50+ endpoints and clinical teams.</p></div>
          </article>
          <article className="career-row">
            <div className="career-date">2020 — 2022</div>
            <div><h3>Partner / IT Consultant</h3><p className="career-company">ThumBrand</p><p>Delivered client websites, integrations, and automations; grew annual clients from 30 to 50 and recurring revenue by 20%+.</p></div>
          </article>
          <article className="career-row">
            <div className="career-date">2018 — 2019</div>
            <div><h3>Lead Student Technology and Resource Specialist</h3><p className="career-company">Winona State University</p><p>Ran device provisioning sessions and maintained a 1,500+ article knowledge base for students and faculty.</p></div>
          </article>
        </div>
        <a className="inline-link" href="https://www.linkedin.com/in/tyler-cyert/" target="_blank" rel="noopener noreferrer">Full experience on LinkedIn <ArrowUpRight /></a>
      </section>

      <section className="section about-background">
        <div className="shell background-grid">
          <div>
            <p className="eyebrow">03 / FOUNDATION</p>
            <h2>A practical base for complex work.</h2>
            <p>I hold a B.S. in Cloud Computing from Western Governors University. Current certifications include AWS Solutions Architect – Associate, CompTIA Cloud+, and ITIL 4 Foundation.</p>
          </div>
          <div className="background-aside">
            <span>OUTSIDE WORK</span>
            <p>I build products like <a href="https://github.com/tylercyert/poko" target="_blank" rel="noopener noreferrer">Poko <ArrowUpRight /></a> and <a href="https://dotbox.zip" target="_blank" rel="noopener noreferrer">DotBox <ArrowUpRight /></a> to explore new ways of learning and working.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="about-contact-title">
        <div className="shell contact-inner">
          <div>
            <p className="eyebrow">04 / CONNECT</p>
            <h2 id="about-contact-title">Let&apos;s build something that lasts.</h2>
            <p>I&apos;m interested in senior software, integration, and internal product roles where ownership and reliable delivery matter.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:tyler@tylercyert.com">Email me <ArrowUpRight /></a>
            <Link href="/#work">Explore selected work <ArrowUpRight /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
