import React from "react";
import { Button } from "../../components/ui/button";

const Section = ({ children, className = "", id = undefined, style = {} }) => (
  <section
    id={id}
    className={`py-16 sm:py-24 ${className} transition-all duration-500 ease-in-out`}
    style={style}
  >
    {children}
  </section>
);

const ImagePlaceholder = ({ label = "Image Placeholder" }) => (
  <div className="relative overflow-hidden rounded-3xl shine-border tilt animate-zoom-in hover:shadow-2xl transition-shadow duration-300">
    <div className="aspect-[16/9] w-full rounded-3xl placeholder-hero bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900 dark:to-rose-800 border border-rose-200 dark:border-rose-700">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-rose-400 dark:text-rose-500 text-sm sm:text-base tracking-wide font-medium">
          {label}
        </span>
      </div>
    </div>
  </div>
);

const SmartImage = ({ src, alt, label, className }) => {
  const [error, setError] = React.useState(false);
  if (error) return <ImagePlaceholder label={label} />;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={`${className} shadow-lg hover:shadow-2xl transition-shadow duration-300`} // Added shadow classes
    />
  );
};

const TopNav = () => (
  <div className="sticky top-12 z-40 border-b border-rose-200/70 dark:border-rose-800 backdrop-blur bg-white/80 dark:bg-rose-950/70 shadow-md">
    <div className="container mx-auto px-4 container-wide py-3 flex items-center gap-4 text-sm overflow-x-auto">
      {[
        { id: "aim", label: "Aim" },
        { id: "goals", label: "Goals" },
        { id: "project-summary", label: "Project Summary" },
      ].map((s) => (
        <a
          key={s.id}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(s.id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="text-rose-600 hover:text-rose-900 dark:text-rose-300 dark:hover:text-rose-100 whitespace-nowrap transition-colors duration-200 font-medium"
        >
          {s.label}
        </a>
      ))}
    </div>
  </div>
);

// HERO
const Hero = () => (
  <Section
    className="relative text-center bg-gradient-to-r from-rose-50 to-slate-50 dark:from-rose-950 dark:to-slate-900 overflow-hidden"
    style={{
      backgroundImage:
        "url('./images/background.png'), linear-gradient(to bottom, rgba(15,23,42,0.32), rgba(15,23,42,0.12), rgba(255,255,255,0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      backgroundSize: "100vw auto",
    }}
  >
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-rose-500 to-transparent animate-[pulse_10s_ease-in-out_infinite]"></div>
    <div className="container mx-auto px-4 container-wide relative z-10">
      <p className="uppercase tracking-widest text-xs sm:text-sm text-rose-600 dark:text-rose-400 font-bold animate-fade-in">
        TRUST Phase 2: Explainable LLMs for Human-in-the-Loop Building Management
      </p>
      <h1 className="mt-3 font-lato font-extrabold text-4xl sm:text-6xl leading-tight text-rose-900 dark:text-rose-100 heading-accent animate-slide-up" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Advancing Explainable AI for Modular Buildings
      </h1>
      <ul className="mt-6 text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed list-disc pl-5 text-center">
        Leveraging AI/ML to optimize energy use, indoor air quality, and occupancy management in modular buildings.
      </ul>
      <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs animate-fade-in-up delay-400">
        <span className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors" style={{ animationDelay: '0ms' }}>LLMs for Time Series</span>
        <span className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors" style={{ animationDelay: '200ms' }}>Fine-Tuning</span>
        <span className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors" style={{ animationDelay: '400ms' }}>AI Agents</span>
        <span className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors" style={{ animationDelay: '400ms' }}>Human-in-the-Loop</span>
      </div>
      <div className="mt-12 animate-fade-in-up delay-600">
        <div className="relative overflow-hidden rounded-2xl tilt hover:rotate-1 transition-transform duration-300">
          <img
            src="./images/trust2.jpeg"
            alt="Flewnt architecture overview"
            className="w-full max-w-[100vw] h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  </Section>
);

// AIM
const Aim = () => (
  <Section id="aim" className="bg-gradient-to-b from-white to-rose-50 dark:from-slate-900 dark:to-rose-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
    <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-rose-300/20 dark:bg-rose-700/20 blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>
    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <div className="space-y-6 animate-slide-left order-last lg:order-first">
        <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100">
          Aim
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-left">
          TRUST2 was a collaborative R&D project developing an AI-driven system to optimize energy use and indoor air quality in modular buildings, leveraging explainable machine learning models for real-time building management. The project was developed around an agentic LLM engine that can consider occupancy, air quality, and energy data to make real-time decisions on heating and cooling, improving efficiency and reducing building carbon footprints.
        </p>
      </div>
    </div>
  </Section>
);

// GOALS
const Goals = () => (
  <Section id="goals" className="bg-slate-50 dark:bg-rose-900/20 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-rose-100/30 to-transparent dark:from-rose-900/30"></div>
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-start relative z-10">
      <div className="space-y-6 animate-slide-left order-last lg:order-first">
        <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100">Project Goals</h2>
        <ul className="text-slate-700 dark:text-slate-300 leading-relaxed list-disc pl-5 text-left">
          <li>Compare the efficacy of multiple time series LLMs, Monte Carlo simulations and Bayesian approaches.</li>
          <li>Develop a human-in-the-loop AI agent for occupant comfort and feedback.</li>
          <li>Deploy to real-world settings for validation and testing.</li>
        </ul>
      </div>
      <div className="space-y-6 animate-slide-left order-last lg:order-first">
        <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100">ESG Goals</h2>
        <ul className="text-slate-700 dark:text-slate-300 leading-relaxed list-disc pl-5 text-left">
          <li>ESG reporting: energy consumption data and scope 3 emissions.</li>
          <li>Inform building design: IAQ, occupancy, and energy operational insights.</li>
          <li>Improve operational efficiency: reduce carbon footprint.</li>
        </ul>
      </div>
    </div>
  </Section>
);

// MOTIVATION
const Motivation = () => (
  <Section id="motivation" className="bg-white dark:bg-slate-900 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
    <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-rose-200/25 dark:bg-rose-800/20 blur-3xl animate-[pulse_12s_ease-in-out_infinite]"></div>
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-start relative z-10">
      <div className="space-y-6 animate-slide-right order-first lg:order-last">
        <h2
          className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Motivation
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-left">
          AI and ML promise to transform the built environment — from construction to operations — with cost savings, energy optimization, and new revenue. Yet adoption remains limited and often siloed. Fault detection and edge vision are exceptions; broader occupancy-driven control to reduce carbon remains underused. Truly “smart buildings” with integrated real-time AI remain rare.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-left">
          This project targets a best-in-class, turnkey solution for mass-market adoption in modular buildings — prefabricated structures with long operational lifespans. Energy use is frequently overlooked, with heating/cooling left running. Remote/automated controls guided by explainable AI can cut costs and emissions.
        </p>
      </div>
      <div className="animate-fade-in-up delay-200">
        <div className="relative overflow-hidden rounded-2xl">
          <SmartImage
            src="./images/trust2_architecture.png" // Swapped image with Goals
            alt="Motivation visual"
            label="Motivation Visual"
            className="w-full h-auto rounded-2xl border border-slate-200 dark:border-slate-700"
          />
        </div>
      </div>
    </div>
  </Section>
);

// PROJECT SUMMARY
const ProjectSummary = () => (
  <Section id="project-summary" className="bg-gradient-to-r from-rose-50 to-white dark:from-rose-950 dark:to-slate-900 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
    <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwTTEwIDYwIEwgMCA1ME0wIDYwIEwgNTAgME0wIDYwIEwgNjAgNjBNMCA2MCBMIDYwIDAiIHN0cm9rZT0iI2ZhZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSI2Ij48L3BhdGg+PC9zdmc+')]"></div>
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-start relative z-10">
      <div className="space-y-6 animate-slide-left order-last lg:order-first">
        <h2
          className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Project Outcomes
        </h2>
        <div className="space-y-6 animate-slide-left order-last lg:order-first">
        <ul className="text-slate-700 dark:text-slate-300 leading-relaxed list-disc pl-5 text-left">
          <li>Live installation and deployent of an IoT-enabled sensing, acting agent with human-in-the-loop capabilities at a site in the UK.</li>
          <li>Research report on the efficacy of time-series LLMs across GPT and T5 architectures.</li>
          <li>Development of software and orchestration across UCL CASA's GPU cluster.</li>
          <li>Novel insights into the competitivity of LLMs for building management: the agent outperformed traditional statistical approaches in terms of energy savings, and communicated intent clearly to stakeholders.</li>
        </ul>
      </div>
      </div>
      <div className="animate-fade-in-up delay-200">
        <div className="relative overflow-hidden rounded-2xl">
          <SmartImage
            src="./images/rag.jpg"
            alt="Project summary visual"
            label="Project Summary Visual"
            className="w-full h-auto rounded-2xl border border-slate-200 dark:border-slate-700"
          />
        </div>
      </div>
    </div>
  </Section>
);

// FOOTER CTA
const FooterCTA = () => (
  <Section className="text-center bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2
        className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 animate-slide-up"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Explore TRUST Phase 2
      </h2>
      <p className="mt-4 text-slate-700 dark:text-slate-300 animate-fade-in-up delay-200 leading-relaxed max-w-2xl mx-auto">
        Discover how TRUST Phase 2 leverages explainable AI to revolutionize modular building management. Dive into the architecture and see the future of smart buildings.
      </p>
      <div className="mt-8 flex justify-center gap-4 animate-fade-in-up delay-400">
        <Button className="rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-xl transition-shadow px-8 py-3 text-lg font-semibold">
          View Documentation
        </Button>
        <Button
          variant="outline"
          className="rounded-full border-rose-600 text-rose-600 hover:bg-rose-100 dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-900/50 shadow-md hover:shadow-xl transition-shadow px-8 py-3 text-lg font-semibold"
        >
          Contact
        </Button>
      </div>
    </div>
  </Section>
);

const Trust2 = () => (
  <div className="flex flex-col bg-white dark:bg-slate-900 min-h-screen">
    <TopNav />
    <main>
      <Hero />
      <Aim />
      <Goals />
      <ProjectSummary />
    </main>
  </div>
);

export default Trust2;
