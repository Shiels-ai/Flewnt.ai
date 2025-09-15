
import React from "react";
import { Button } from "./components/ui/button";

const Section = ({ children, className = "" }) => (
  <section className={`py-16 sm:py-20 ${className}`}>{children}</section>
);

// --- HERO ---
const Hero = () => (
  <Section className="text-center bg-white dark:bg-slate-900">
    <div className="container mx-auto px-4 max-w-5xl">
      <h1 className="font-lato font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-gray-100">
        Turn Raw Text into <span className="rainbow-text">Requirements</span>
      </h1>
      <p className="mt-4 text-lg sm:text-xl font-lato font-semibold text-blue-600 dark:text-cyan-400">
        AI-powered Entity & Relationship Extraction
      </p>
      <p className="mt-6 text-lg font-lato text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        <span className="font-onest">Flewnt.ai</span> transforms documents, conversations, and notes into clean, structured specifications and diagrams.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Button variant="outline">Learn More</Button>
      </div>
      <div className="mt-12">
        <img
          src="./images/flewnt.png"
          alt="Flewnt demo screenshot"
          className="w-full h-auto rounded-md border border-gray-200 dark:border-slate-700 shadow-md"
        />
      </div>
    </div>
  </Section>
);

// --- PROBLEM & SOLUTION ---
const ProblemSolution = () => (
  <Section className="bg-gray-50 dark:bg-slate-800">
    <div className="container mx-auto px-4 max-w-5xl grid gap-12 lg:grid-cols-2 items-center">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold font-lato text-gray-900 dark:text-gray-100">
          The Problem
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
          <li>Requirements gathering is slow and costly</li>
          <li>Analysis delays projects for weeks or months</li>
          <li>Errors lead to expensive rework</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold font-lato text-gray-900 dark:text-gray-100">
          The Flewnt Solution
        </h2>
        <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
          <li>AI generates specifications in minutes</li>
          <li>Supports documents, audio, and live meetings</li>
          <li>Outputs UML, client reports, and developer-ready specs</li>
        </ul>
      </div>
    </div>
  </Section>
);

// --- FEATURES ---
const Features = () => (
  <Section>
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold font-lato text-gray-900 dark:text-gray-100 mb-10">
        What Flewnt Can Do
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Upload Documents",
            desc: "Analyze PDFs, Word, and text to extract entities and relationships.",
            img: "./images/doc_upload.png",
          },
          {
            title: "Live Meeting Transcription",
            desc: "Turn client conversations into diagrams and specs in real time.",
            img: "./images/transcription.png",
          },
          {
            title: "Export Diagrams",
            desc: "Generate UML, client reports, or developer-ready markdown.",
            img: "./images/export.png",
          },
        ].map((f, idx) => (
          <div
            key={idx}
            className="p-6 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-900"
          >
            <img src={f.img} alt="" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-bold font-lato text-lg text-gray-900 dark:text-gray-100">
              {f.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// --- DATA LABELING ---
const DataLabeling = () => (
  <Section className="bg-blue-50 dark:bg-slate-900">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <h2 className="text-2xl sm:text-3xl font-bold font-lato text-gray-900 dark:text-gray-100">
        Training Our Own Model
      </h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Flewnt.ai isn't an AI wrapper. We're building a <strong>specialized model</strong> for
        entity and relationship extraction, powered by curated <strong>data labeling pipelines</strong> with over <strong>75,000 data entries</strong>.
        Analysts tag documents with requirements, relationships, and domain-specific entities —
        creating a dataset that gives Flewnt superior accuracy over generic LLMs.
      </p>
    </div>
  </Section>
);

// --- SECURITY ---
const Security = () => (
  <Section>
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <h2 className="text-2xl sm:text-3xl font-bold font-lato text-gray-900 dark:text-gray-100">
        Built with Security First
      </h2>
      <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5 text-left inline-block">
        <li>Confidential terms scrubbed automatically</li>
        <li>Models don’t retain user data</li>
      </ul>
    </div>
  </Section>
);

// --- TEAM ---
const Team = () => (
  <Section className="bg-gray-50 dark:bg-slate-800">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <h2 className="text-2xl sm:text-3xl font-bold font-lato text-gray-900 dark:text-gray-100 mb-10">
        Meet the Team
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Jack Shiels",
            role: "AI & Consulting",
            desc: "Ex-Accenture consultant, fintech developer, UCL AI Fellow.",
            img: "./images/jack.png",
          },
          {
            name: "Sam Shiels",
            role: "Full Stack & Graphics",
            desc: "Engineer with React/.NET enterprise experience",
            img: "./images/sam.png",
          },
          {
            name: "Lude Tang",
            role: "Business & Legal",
            desc: "Legal & business admin background, multilingual, Malaysia-based expertise.",
            img: "./images/lude.png",
          },
        ].map((m, idx) => (
          <div
            key={idx}
            className="p-6 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-900"
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-24 h-24 mx-auto mb-4 rounded-full border"
            />
            <h3 className="font-bold font-lato text-lg text-gray-900 dark:text-gray-100">
              {m.name}
            </h3>
            <p className="text-sm text-blue-600 dark:text-cyan-400 font-semibold">{m.role}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// --- COMPETITIVE EDGE ---
const CompetitiveEdge = () => (
  <Section>
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <h2 className="text-2xl sm:text-3xl font-bold font-lato text-gray-900 dark:text-gray-100 mb-8">
        Why Flewnt Stands Out
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Unlike Lucidchart AI, Miro AI, or Visio Copilot, Flewnt processes <strong>full documents and real-time speech</strong> into UML & requirements in seconds — with integrated exports for developers and LLMs.
      </p>
    </div>
  </Section>
);

// --- FINAL CTA ---
const FinalCTA = () => (
  <Section className="relative bg-white dark:bg-slate-900">
    <div className="relative z-10 py-12 text-center container mx-auto px-4 max-w-3xl">
      <h2 className="text-2xl sm:text-3xl font-bold font-lato text-gray-900 dark:text-gray-100 leading-tight">
        Interested in AI-powered Business Analysis?
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Explore the repo or reach out to us for more information.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button variant="outline">Contact Us</Button>
      </div>
    </div>
  </Section>
);

// --- MAIN LANDING ---
const Landing = () => (
  <div className="flex flex-col bg-white dark:bg-slate-900 min-h-screen">
    <main>
      <Hero />
      <ProblemSolution />
      <Features />
      <DataLabeling />
      <Security />
      <Team />
      <CompetitiveEdge />
      <FinalCTA />
    </main>
  </div>
);

export default Landing;

