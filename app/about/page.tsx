import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
  description: "About Tyler Cyert.",
};

export default function AboutPage() {
  return (
    <div className="prose">
      <h1>about</h1>
      <p>
        Hi, I&apos;m Tyler. I&apos;m an integration and AI platform engineer based in
        Bloomington, IN. My day job is building the automation and agent layer at SoundPro.com —
        MCP servers that give LLM agents safe access to Acumatica ERP and the systems around it,
        production agents that run operations workflows under human approval, the data warehouse the
        company reports on, and the integrations underneath all of it.
      </p>
      <p>
        I&apos;ve always been drawn to the seam between technical and human systems — the place
        where a well-designed workflow either removes friction from someone&apos;s day or adds it.
        That&apos;s the part I care about most. The integration that handles 150,000 prices or
        60,000 contact records isn&apos;t interesting because of the scale — it&apos;s interesting
        because someone doesn&apos;t have to do that manually anymore. Same with the warehouse: 111
        entities modeled so a salesperson opens their own numbers instead of asking someone for a
        report.
      </p>
      <p>
        Outside of work I build software. <a href="https://www.nitesong.io">nitesong</a> is a
        songwriting SaaS I&apos;m developing around creative flow. I also write at{" "}
        <a href="https://tyl.sh">tyl.sh</a> — mostly about AI, building things, and staying
        sharp while the tools keep changing.
      </p>
      <p>
        I hold a B.S. in Cloud Computing from Western Governors University and a stack of
        certifications across Azure, AWS, CompTIA, and ITIL. I&apos;m currently open to
        remote-first engineering roles where integration, internal tooling, or applied AI are
        central to the work.
      </p>
      <p>
        If that sounds like a fit —{" "}
        <a href="mailto:tyler@tylercyert.com">tyler@tylercyert.com</a>.
      </p>
    </div>
  );
}
