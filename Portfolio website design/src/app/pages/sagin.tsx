import { Github, ExternalLink, FileText, Award, Wind, Network, Cpu, Zap } from "lucide-react";
import saginPDF from "@/imports/SAGIN_Articale.pdf";

const SAGIN_BLUE = "#4338CA";
const SAGIN_BLUE_LIGHT = "#818CF8";

export default function SAGINPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f5f5" }}>

      {/* ── Hero ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.75rem",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  color: "#111111",
                }}
              >
                AI-Powered Space-Air-Ground Networks for 6G
              </h1>
              <p
                className="text-lg mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#555555" }}
              >
                A conference-style research paper in AAAI 2026 format exploring how artificial intelligence can transform Space-Air-Ground Integrated Networks (SAGIN) for next-generation wireless communication.
              </p>
              <p
                className="text-lg mb-8"
                style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#777777" }}
              >
                Developed as a 5-member group project for INFO 3180 — Wireless Networks at Kwantlen Polytechnic University. The paper proposes an AI-based SAGIN model that enables cross-layer optimisation, smart resource allocation, and autonomous network management.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={saginPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    fontSize: "1rem",
                    backgroundColor: SAGIN_BLUE,
                    color: "#ffffff",
                  }}
                >
                  <FileText className="w-5 h-5" />
                  Read the Article
                </a>
                <a
                  href="https://github.com/Akarsh7021/Research-Article-on-SAGIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    fontSize: "1rem",
                    backgroundColor: "#111111",
                    color: "#ffffff",
                  }}
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Project Highlights Card */}
            <div
              className="rounded-2xl p-8 shadow-lg border-2"
              style={{ backgroundColor: "#f9f9f9", borderColor: SAGIN_BLUE_LIGHT }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8" style={{ color: SAGIN_BLUE }} />
                <h3
                  style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: "700", color: "#111111" }}
                >
                  Project Highlights
                </h3>
              </div>
              <div className="space-y-4" style={{ fontFamily: "var(--font-body)", fontWeight: "300", color: "#555555" }}>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 flex-shrink-0" style={{ color: SAGIN_BLUE_LIGHT }} />
                  <span>AAAI 2026 Conference Paper Format</span>
                </div>
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 flex-shrink-0" style={{ color: SAGIN_BLUE_LIGHT }} />
                  <span>Deep Reinforcement Learning & Large Language Models</span>
                </div>
                <div className="flex items-center gap-3">
                  <Network className="w-5 h-5 flex-shrink-0" style={{ color: SAGIN_BLUE_LIGHT }} />
                  <span>Spectrum allocation, trajectory optimisation, beamforming</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wind className="w-5 h-5 flex-shrink-0" style={{ color: SAGIN_BLUE_LIGHT }} />
                  <span>UAV, satellite, and terrestrial network integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 flex-shrink-0" style={{ color: SAGIN_BLUE_LIGHT }} />
                  <span>Multi-agent AI · DRL · LLMs · SDN · MIMO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Abstract & Overview ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "700", color: "#111111" }}
          >
            Paper Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#f9f9f9", border: "1px solid #e8e8e8" }}>
              <h3
                className="mb-4"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: "600", color: "#111111" }}
              >
                The Problem
              </h3>
              <ul className="space-y-3" style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#555555" }}>
                {[
                  "Traditional SAGIN management uses rigid, rule-based protocols unable to adapt to dynamic conditions",
                  "Inefficient resource allocation across satellite, aerial, and ground layers",
                  "Suboptimal trajectory planning for UAVs and satellite nodes",
                  "Unreliable communication across heterogeneous network tiers in real time",
                  "Spectrum scarcity and interference between competing devices and frequency bands",
                  "Energy constraints on satellite and UAV platforms limiting onboard processing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1" style={{ color: "#333333" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8" style={{ backgroundColor: "#f9f9f9", border: "1px solid #e8e8e8" }}>
              <h3
                className="mb-4"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: "600", color: "#111111" }}
              >
                Key Contributions
              </h3>
              <ul className="space-y-3" style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#555555" }}>
                {[
                  "Comprehensive review of AI techniques applied across SAGIN functional areas",
                  "Proposed AI-based SAGIN model enabling cross-layer optimisation and adaptation",
                  "Demonstrated significant improvements in resource management and trajectory optimisation",
                  "Analysis of DRL, LLMs, and multi-agent systems for autonomous network management",
                  "Evaluation using analytical models and simulation to validate performance gains",
                  "Identification of research gaps in energy efficiency, real-world APS testing, and scalability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1" style={{ color: SAGIN_BLUE }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Four Research Areas ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="mb-4 text-center"
            style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "700", color: "#111111" }}
          >
            Research Focus Areas
          </h2>
          <p
            className="text-center mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#777777" }}
          >
            The paper analyses four core operational challenges in SAGIN, each reviewed through the lens of AI-based solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                number: "01",
                title: "Spectrum & Resource Allocation",
                body: "Traditional SAGIN relies on static rule-based protocols incapable of adapting to unpredictable spectrum conditions. Deep Reinforcement Learning (DRL) modules analyse historical and current data flows to dynamically predict and allocate spectrum, reducing interference and congestion across satellite, UAV, and terrestrial frequency bands.",
              },
              {
                number: "02",
                title: "Network Slicing & SDN",
                body: "Software-Defined Networking (SDN) centralises control and enables AI to automate the creation of network slices tailored to different service requirements — from high-reliability autonomous driving to high-density smart-city sensors. Cloud-edge synergy provides both wide-area coverage and localised computing, with AI dynamically allocating bandwidth as conditions change.",
              },
              {
                number: "03",
                title: "Trajectory Optimisation",
                body: "Nodes across space, aerial, and terrestrial layers require intelligent repositioning to maintain coverage and energy efficiency. Reinforcement learning approaches including Monte Carlo (MC) and dynamic programming (DP) are used to optimise UAV trajectory. Results show MC significantly outperforms traditional circular and linear schemes in energy efficiency, especially over longer flight durations.",
              },
              {
                number: "04",
                title: "Handoff, Beamforming & MIMO",
                body: "Multi-Agent Deep Reinforcement Learning (MADRL) coordinates satellites as collaborative AI agents to predict and optimise beam-hopping and beamforming decisions. Reconfigurable Intelligent Surfaces (RIS) on aerial platforms bypass urban dead zones. Wireless Big AI Models (wBAIM) synchronise user motion status across heterogeneous tiers, maintaining seamless handoff and robust connectivity.",
              },
            ].map(({ number, title, body }) => (
              <div
                key={number}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "#ffffff", border: "1px solid #e8e8e8" }}
              >
                <div className="flex items-start gap-5">
                  <span
                    className="flex-shrink-0"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "2rem",
                      fontWeight: "700",
                      color: SAGIN_BLUE_LIGHT,
                      lineHeight: "1",
                    }}
                  >
                    {number}
                  </span>
                  <div>
                    <h3
                      className="mb-3"
                      style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: "700", color: "#111111" }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#555555" }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Gaps & Future Directions ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "700", color: "#111111" }}
          >
            Research Gaps & Future Directions
          </h2>
          <div className="space-y-5">
            {[
              {
                title: "Energy Consumption of AI",
                body: "AI's computational demands remain a major limiting factor in non-terrestrial networks. The benefits of onboard AI processing must be carefully balanced against increased energy use on satellites and UAVs. Further research into reducing energy consumption of satellite AI is essential for SAGIN viability.",
              },
              {
                title: "Real-World Testing of Airborne Platforms",
                body: "Most existing research on UAVs and Airborne Platform Stations (APSs) — including High-Altitude Platform Stations (HAPS), drones, and balloons — relies on simulated environments. Large-scale real-world testing is needed to validate APS viability and AI compatibility in realistic network conditions.",
              },
              {
                title: "Comprehensive Cross-Layer AI Assessment",
                body: "Existing studies focus on specific applications and AI techniques in isolation, lacking a comprehensive perspective on their effectiveness across diverse SAGIN problems. A unified evaluation framework is needed to assess AI's overall impact across the full network stack.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#f9f9f9", border: `1px solid #e8e8e8`, borderLeft: `4px solid ${SAGIN_BLUE}` }}
              >
                <h3
                  className="mb-2"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: "700", color: "#111111" }}
                >
                  {title}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#555555" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technologies Used ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="mb-8"
            style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "700", color: "#111111" }}
          >
            Topics & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["SAGIN", "Deep RL (DRL)", "Large Language Models", "Multi-Agent AI", "SDN", "MIMO", "UAV / Drones", "LaTeX / AAAI Format"].map((tech) => (
              <div
                key={tech}
                className="rounded-xl p-6 border transition-all duration-300"
                style={{ backgroundColor: "#ffffff", borderColor: "#e8e8e8" }}
              >
                <p
                  className="text-lg"
                  style={{ fontFamily: "var(--font-body)", fontWeight: "500", color: "#333333" }}
                >
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "700", color: "#111111" }}
          >
            Team Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Nighel Cabanos", note: "nighel.cabanos@student.kpu.ca" },
              { name: "Chloe Chang", note: "chloe.chang@student.kpu.ca" },
              { name: "Tanner Chow", note: "tanner.chow@student.kpu.ca" },
              { name: "Alex Tran", note: "alex.tran2@student.kpu.ca" },
            ].map(({ name, note }) => (
              <div
                key={name}
                className="rounded-lg p-4"
                style={{ backgroundColor: "#f9f9f9", border: "1px solid #e8e8e8" }}
              >
                <p
                  className="mb-1"
                  style={{ fontFamily: "var(--font-body)", fontWeight: "500", fontSize: "1.1rem", color: "#111111" }}
                >
                  {name}
                </p>
                <p
                  style={{ fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "0.875rem", color: "#777777" }}
                >
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Outcome ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="mb-6"
            style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "700", color: "#111111" }}
          >
            Project Outcome
          </h2>
          <p
            className="mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", fontSize: "1.125rem", color: "#555555" }}
          >
            The paper demonstrates that AI integration — specifically DRL, LLMs, and multi-agent systems — can substantially address the limitations of traditional SAGIN architectures. By enabling autonomous, cross-layer decision-making, AI empowers SAGIN to handle the dynamic, heterogeneous conditions required for 6G networks.
          </p>
          <p
            style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", fontSize: "1.125rem", color: "#555555" }}
          >
            This research project strengthened my ability to critically review academic literature, synthesise findings across multiple studies, collaborate in a research team, and produce a formally structured conference-style paper on an advanced wireless networking topic.
          </p>
        </div>
      </section>

      {/* ── Development Disclosure ── */}
      <section className="py-12 px-6" style={{ borderTop: "1px solid #e8e8e8", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <h3
            className="mb-4"
            style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: "700", color: "#111111" }}
          >
            Development Disclosure
          </h3>
          <p
            className="mb-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#555555" }}
          >
            <strong style={{ color: "#333333" }}>No AI tools were used</strong> during the writing or research of this paper. All literature review, analysis, argumentation, and writing were performed entirely by the five team members.
          </p>
          <p
            style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#555555" }}
          >
            <em>Note: AI tools were used only for formatting and organising this portfolio presentation page to showcase the project professionally.</em>
          </p>
        </div>
      </section>
    </div>
  );
}
