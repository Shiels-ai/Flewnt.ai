import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import useFixedOffset from "../hooks/useFixedOffset";

const Section = ({ children, className = "", id = undefined, style = {} }) => (
  <section
    id={id}
    className={`py-12 sm:py-12 ${className} transition-all duration-500 ease-in-out`}
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
      className={className}
    />
  );
};

const CirclePlaceholder = ({ label = "Photo", className = "" }) => (
  <div
    className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-300 text-sm font-medium ${className}`}
  >
    {label}
  </div>
);

const ProfileCard = ({ name, role, bio, img }) => (
  <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 text-center shadow-sm hover:shadow-md transition-shadow">
    {img ? (
      <SmartImage
        src={img}
        alt={`${name} profile`}
        label="Profile"
        className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover mx-auto border border-slate-200 dark:border-slate-600"
      />
    ) : (
      <CirclePlaceholder />
    )}
    <h3 className="mt-4 font-semibold text-slate-900 dark:text-slate-100">{name}</h3>
    <p className="text-xs uppercase tracking-wide text-rose-600 dark:text-rose-300 font-semibold">{role}</p>
    <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{bio}</p>
  </div>
);

const TopNav = () => {
  const { ref: navRef, spacerHeight } = useFixedOffset();

  return (
    <>
      <div aria-hidden style={{ height: spacerHeight }} />
      <div
        ref={navRef}
        className="fixed left-0 right-0 z-40 border-b border-rose-200/70 dark:border-rose-800 backdrop-blur bg-white/80 dark:bg-rose-950/70 shadow-md"
        style={{ top: "var(--site-nav-height, 64px)" }}
      >
        <div className="container mx-auto px-4 max-w-6xl py-3 flex items-center gap-4 text-sm overflow-x-auto">
          {[
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "services", label: "Services" },
            { id: "team", label: "Team" },
            { id: "engagement", label: "Engagement" },
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
    </>
  );
};

// HERO
const Hero = () => (
  <Section className="relative text-center bg-gradient-to-r from-rose-50 to-slate-50 dark:from-rose-950 dark:to-slate-900 overflow-hidden py-24 sm:py-24">
    <div className="absolute inset-0 z-0 overflow-hidden">
      <SmartImage
        src="./images/team_background.jpg"
        alt=""
        label="Team background"
        className="h-full w-full object-cover object-top brightness-75 md:brightness-90"
      />
    </div>
    <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/50 via-white/15 to-white/0 dark:from-slate-950/80 dark:via-slate-950/45 dark:to-slate-950/20" />
    <div className="absolute inset-0 pointer-events-none z-20 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-rose-500 to-transparent animate-[pulse_10s_ease-in-out_infinite]"></div>
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 animate-fade-in mb-8 z-30">
      <SmartImage
        src="./images/shielsai_logo.png"
        alt="Shiels AI Logo"
        label="Logo"
        className="h-16 sm:h-16 w-auto"
      />
    </div>
    <div className="container mx-auto px-4 container-wide relative z-30">
      <h1
        className="mt-6 font-lato font-extrabold text-4xl sm:text-6xl leading-tight text-rose-900 dark:text-rose-100 heading-accent animate-slide-up"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        We develop cutting-edge AI and LLM solutions for your business
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-slate-700 dark:text-white max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
        shiels.ai brings top academic and commercial experience to empower your SME or startup with game-changing AI technologies.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs animate-fade-in-up delay-600">
        {["LLMs & NLP", "Full-Stack Engineering", "Explainable AI", "Cloud & On-Prem"].map((c, i) => (
          <span
            key={i}
            className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/80 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  </Section>
);

// ABOUT
const About = () => (
  <Section
    id="about"
    className="bg-gradient-to-b from-white to-rose-50 dark:from-slate-900 dark:to-rose-950 relative"
  >
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-stretch relative z-10">
      <div className="space-y-6 animate-slide-left order-last lg:order-first h-full">
        <h2
          className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          About Us
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-left">
          shiels.ai (Shiels AI SDN BHD) is an AI research and development firm founded by Jack Shiels. Spun off from advanced AI research at University College London (UCL), we bring expertise in Natural Language Processing (NLP), Large Language Models (LLMs), and full-stack software development to deliver cutting-edge solutions across South Africa and South-East Asia.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-left">
          We focus on novel AI applications, including explainable AI, data extraction, and generative AI, alongside robust full-stack applications built with multilayer architectures and comprehensive testing.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-left">
          We are committed to becoming your trusted partner, delivering both innovative research and production-ready systems with timely, compliant project management.
        </p>
      </div>
      <div className="animate-fade-in-up delay-200 h-full">
        <div className="relative h-full min-h-[20rem] overflow-hidden rounded-2xl">
          <SmartImage
            src="./images/team_background.jpg"
            alt="About visual"
            label="About Visual"
            className="w-full h-full object-cover object-center transform scale-105 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>
      </div>
    </div>
  </Section>
);

// SERVICES
const Services = () => {
  const services = [
    {
      title: "Custom LLM & NLP",
      summary: "Tailored language systems grounded in your proprietary data.",
      detail:
        "We design bespoke language systems that blend frontier models with proprietary data, building trustworthy retrieval and evaluation layers so answers stay accurate in your context. From ingestion pipelines to guardrails, every component is tuned for production workloads across compliance-heavy sectors.",
      image: {
        src: "./images/flewnt.png",
        alt: "Diagram showcasing an LLM data pipeline",
        label: "LLM & NLP",
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5h10.5M6.75 12h10.5M6.75 16.5H12"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 5.25A1.75 1.75 0 016.25 3.5h11.5A1.75 1.75 0 0119.5 5.25v13.5a1.75 1.75 0 01-1.75 1.75H6.25a1.75 1.75 0 01-1.75-1.75V5.25z"
          />
        </svg>
      ),
    },
    {
      title: "Full-Stack Dev",
      summary: "Enterprise-grade engineering that ships resilient APIs and crafted interfaces fast.",
      detail:
        "Rapid product delivery backed by enterprise-grade engineering practices: resilient APIs, delightful interfaces, and deployment blueprints that span cloud and on-prem. We ship complete experiences, from analytics dashboards to tightly integrated mobile flows, with observability woven in from day one.",
      image: {
        src: "./images/trust2_architecture.png",
        alt: "Medical application UI screenshot",
        label: "Full-Stack Delivery",
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7.5h16M4 12h16M4 16.5h7.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.5 5.25A1.75 1.75 0 017.25 3.5h9.5a1.75 1.75 0 011.75 1.75v13a1.75 1.75 0 01-1.75 1.75h-9.5A1.75 1.75 0 015.5 18.25v-13z"
          />
        </svg>
      ),
    },
    {
      title: "Trustworthy AI",
      summary: "Explainable, observable AI workflows tuned for regulated environments.",
      detail:
        "Decision pipelines stay explainable through layered monitoring, transparent scoring, and review tooling tailored to your regulators. We embed human-in-the-loop controls, bias detection, and narrative reporting so data teams, auditors, and operators can see how every model arrives at an outcome.",
      image: {
        src: "./images/trust2.jpeg",
        alt: "Explainable AI dashboard",
        label: "Trustworthy AI",
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5c-4.97 0-9 3.281-9 7.333 0 1.97 1.018 3.753 2.672 5.042a.75.75 0 01.277.577v1.506c0 .596.66.948 1.157.63l1.9-1.211a1.5 1.5 0 01.806-.238h4.211c4.97 0 9-3.282 9-7.333C22 7.781 16.97 4.5 12 4.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12a3 3 0 016 0 3 3 0 01-6 0z"
          />
        </svg>
      ),
    },
    {
      title: "Strategy & Enablement",
      summary: "Founder-led discovery aligning business drivers with pragmatic AI roadmaps.",
      detail:
        "Work with founders and researchers who map business goals to pragmatic AI roadmaps, de-risk pilots, and upskill your teams. We facilitate collaborative discovery, quantify ROI, and hand over playbooks that let product, engineering, and leadership scale responsibly.",
      image: {
        src: "./images/team_background.jpg",
        alt: "Work session planning on whiteboard",
        label: "Strategy & Enablement",
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5c.621 0 1.125-.504 1.125-1.125S12.621 5.25 12 5.25 10.875 5.754 10.875 6.375 11.379 7.5 12 7.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 19.5l1.5-4.5H6a1.5 1.5 0 01-1.341-2.188l3.06-6.12A1.5 1.5 0 018.09 6h7.82a1.5 1.5 0 011.372.916l3.06 6.12A1.5 1.5 0 0119 15h-2.5l1.5 4.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19.5h6"
          />
        </svg>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % services.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused, services.length]);

  const activeService = services[activeIndex];

  return (
    <Section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-rose-600/25 blur-[120px]" />
        <div className="absolute bottom-[-12rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-rose-400/15 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.12),_transparent_70%)]" />
      </div>
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="space-y-10">
          <div className="space-y-6 animate-slide-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-rose-200">
              What we build
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold heading-accent text-rose-100 drop-shadow-[0_6px_18px_rgba(244,114,182,0.25)]">
                AI services engineered for momentum
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                We blend research, engineering, and delivery to help teams ship AI products that delight users and withstand real-world scale.
              </p>
            </div>
          </div>

          <div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event: React.FocusEvent<HTMLDivElement>) => {
              const next = event.relatedTarget as Node | null;
              if (!next || !event.currentTarget.contains(next)) {
                setIsPaused(false);
              }
            }}
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                onFocus={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                className={`group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 p-4 transition-all duration-300 ease-out backdrop-blur-sm ${
                  activeIndex === index
                    ? "bg-rose-500/25 shadow-[0_20px_45px_rgba(244,114,182,0.35)] ring-1 ring-rose-300/60"
                    : "bg-white/5 shadow-[0_12px_30px_rgba(15,23,42,0.45)] hover:bg-rose-500/15 hover:shadow-[0_18px_40px_rgba(244,114,182,0.25)]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                      {service.icon}
                    </span>
                    <h3 className="text-sm font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <span className={`text-[0.65rem] font-semibold uppercase tracking-wide ${
                    activeIndex === index ? "text-rose-200" : "text-slate-300"
                  }`}>
                    {activeIndex === index ? "Selected" : "View"}
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {service.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 shadow-[0_25px_80px_rgba(244,114,182,0.18)] backdrop-blur">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-rose-500/10 to-transparent opacity-60" />
            <div className="relative grid gap-8 lg:grid-cols-5 items-start">
              <div className="lg:col-span-3 space-y-4">
                <p className="text-xs uppercase tracking-[0.35em] text-rose-200/80">
                  Spotlight
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {activeService.title}
                </h3>
                <p className="text-sm sm:text-base text-rose-50/90 leading-relaxed">
                  {activeService.detail}
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_18px_40px_rgba(15,23,42,0.55)]">
                  <SmartImage
                    src={activeService.image.src}
                    alt={activeService.image.alt}
                    label={activeService.image.label}
                    className="h-64 w-full object-cover md:h-72"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// KEY PROJECTS
const KeyProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      name: "Flewnt",
      summary:
        "An extraction engine that ingests audio and documents, orchestrating LLMs and local NLP to deliver structured records ready for downstream systems.",
      spotlight:
        "Flewnt combines .NET, Python, and containerized services to handle ingestion, transcription, concept discovery, and data alignment for compliance-heavy clients.",
      src: "./images/flewnt.png",
      alt: "Flewnt project architecture diagram",
      label: "Flewnt Visual",
      href: "#/projects/flewnt",
    },
    {
      name: "TRUST2",
      summary:
        "A research partnership turning building telemetry into human-friendly insights using explainable LLMs and agentic decision support.",
      spotlight:
        "TRUST2 blends fine-tuned language models with sensor data so operations teams understand and optimise energy use, comfort, and air quality across modular buildings.",
      src: "./images/trust2.jpeg",
      alt: "TRUST2 project dashboard",
      label: "TRUST2 Visual",
      href: "#/projects/trust2",
    },
    {
      name: "Axion",
      summary:
        "A medical notation platform digitising patient assessments with secure workflows, audit trails, and automated document generation.",
      spotlight:
        "Axion’s Azure-backed stack streamlines hospital processes with adaptive forms, analytics, and robust export tooling across PDF and Excel outputs.",
      src: "./images/axion_hero.jpg",
      alt: "Axion platform interface",
      label: "Axion Visual",
      href: "#/projects/axion",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <Section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-br from-white via-rose-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 h-[22rem] w-[22rem] rounded-full bg-rose-400/20 blur-[120px]" />
        <div className="absolute bottom-[-10rem] left-[-6rem] h-[18rem] w-[18rem] rounded-full bg-rose-200/25 blur-[110px] dark:bg-rose-600/20" />
      </div>
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="space-y-10">
          <div className="space-y-3 animate-slide-left">
            <div className="flex w-fit items-center gap-2 rounded-full border border-rose-400/40 bg-rose-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-rose-500 dark:text-rose-200">
              Case studies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 drop-shadow-[0_6px_18px_rgba(244,114,182,0.25)]">
              Key Projects
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {projects.map((project, index) => (
              <button
                key={project.name}
                onClick={() => {
                  setCurrentIndex(index);
                }}
                onMouseEnter={() => setCurrentIndex(index)}
                className={`group relative overflow-hidden rounded-2xl border border-rose-300/40 bg-white/60 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(244,114,182,0.2)] dark:border-rose-700/40 dark:bg-rose-950/40 ${
                  currentIndex === index ? "ring-2 ring-rose-500" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-rose-900 dark:text-rose-100">
                    {project.name}
                  </h3>
                  <span className={`text-[0.65rem] font-semibold uppercase tracking-[0.25em] ${
                    currentIndex === index ? "text-rose-500" : "text-rose-400/60"
                  }`}>
                    {currentIndex === index ? "Active" : "View"}
                  </span>
                </div>
                <p className="mt-2 text-xs text-rose-700/90 dark:text-rose-100/80 leading-relaxed">
                  {project.summary}
                </p>
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-rose-200/60 bg-white/75 p-6 shadow-[0_25px_80px_rgba(244,114,182,0.18)] backdrop-blur dark:border-rose-900/50 dark:bg-rose-950/40">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-100/60 via-white/50 to-transparent opacity-60 dark:from-rose-900/40 dark:via-rose-950/40" />
            <div className="relative grid gap-10 lg:grid-cols-2 items-start">
              <div className="space-y-5 self-start">
                <p className="text-xs uppercase tracking-[0.35em] text-rose-500 dark:text-rose-200/80">
                  Project spotlight
                </p>
                <h3 className="text-2xl font-semibold text-rose-900 dark:text-rose-100">
                  {projects[currentIndex].name}
                </h3>
                <p className="text-sm sm:text-base text-rose-800/90 dark:text-rose-100/80 leading-relaxed">
                  {projects[currentIndex].spotlight}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={projects[currentIndex].href}
                    className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600"
                  >
                    View project
                    <span aria-hidden>→</span>
                  </a>
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-400/50 text-rose-500 transition hover:bg-rose-100"
                      aria-label="Previous project"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextSlide}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-400/50 text-rose-500 transition hover:bg-rose-100"
                      aria-label="Next project"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-rose-200/60 bg-white/70 shadow-[0_18px_40px_rgba(244,114,182,0.2)] dark:border-rose-900/50 dark:bg-rose-950/40">
                <SmartImage
                  src={projects[currentIndex].src}
                  alt={projects[currentIndex].alt}
                  label={projects[currentIndex].label}
                  className="h-80 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// TEAM
const Team = () => (
  <Section
    id="team"
    className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
  >
    <div className="absolute inset-0 z-0 overflow-hidden">
      <SmartImage
        src="./images/code_background.jpg"
        alt="Code background texture"
        label="Code background"
        className="h-full w-full object-cover object-center opacity-80"
      />
    </div>
    <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/85 via-white/70 to-white/60 dark:from-slate-950/85 dark:via-slate-950/70 dark:to-slate-950/60" />
    <div className="container mx-auto px-4 max-w-6xl relative z-20">
      <h2
        className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 animate-slide-up"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Team
      </h2>
      <p className="mt-4 text-slate-700 dark:text-slate-200 max-w-3xl">
        shiels.ai is founded by Jack, Lude, and Sam.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Jack Shiels",
            role: "Founder & CEO",
            bio: "AI technologist; UCL research; LLM/NLP & full-stack.",
            img: "./images/jack.jpeg",
          },
          {
            name: "Sam Shiels",
            role: "Founder & CTO",
            bio: "Software engineer; React, Docker, WebGL; SPAN/Derivco.",
            img: "./images/sam.jpeg",
          },
          {
            name: "Lude Tang",
            role: "Founder & CCO",
            bio: "Legal & compliance; operations across UK/Malaysia.",
            img: "./images/lude.jpeg",
          },
        ].map((m, i) => (
          <ProfileCard key={i} name={m.name} role={m.role} bio={m.bio} img={m.img} />
        ))}
      </div>
    </div>
  </Section>
);

// ENGAGEMENT MODELS
const EngagementModels = () => (
  <Section
    id="engagement"
    className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
  >
    <div className="container mx-auto px-4 max-w-6xl">
      <h2
        className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 animate-slide-up"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Engagement Models
      </h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">Deliverable-Based Projects</h3>
          <ul className="mt-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>Fixed pricing tied to milestones and outcomes.</li>
            <li>Cost predictability with flexible scope.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">Hourly Consulting</h3>
          <ul className="mt-2 text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
            <li>Flexible engagement for research or advisory.</li>
            <li>Competitive hourly rates for different expertise levels:</li>
            <ul className="ml-4 mt-1 space-y-1">
              <li>• Intermediate AI Engineer: R525/hour</li>
              <li>• Senior AI Engineer: R865/hour</li>
              <li>• Project Manager & Administrator: R385/hour</li>
            </ul>
          </ul>
        </div>
      </div>
      <div>
      <p className="mt-6 text-slate-700 dark:text-slate-300 text-center">
        Need a custom package? Chat with us to design the ideal engagement model and competitive rates tailored to your project requirements and timeline.
      </p>
    </div>
    </div>
  </Section>
);

// WHY WORK WITH US
const WhyWorkWithUs = () => (
  <Section
    id="why-us"
    className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
  >
    <div className="container mx-auto px-4 max-w-6xl">
      <h2
        className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 animate-slide-up"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Why Work With Us
      </h2>
      <ul className="mt-6 grid md:grid-cols-2 gap-3 text-slate-700 dark:text-slate-300 list-disc pl-5 text-left">
        <li>Specialist expertise in AI research and engineering.</li>
        <li>Agile founder-led team with direct senior access.</li>
        <li>Proven track record across academia, healthcare, fintech, and infrastructure.</li>
        <li>Global footprint across the UK, South Africa, and South-East Asia.</li>
      </ul>
      <div className="mt-8 animate-fade-in-up delay-200">
        <div className="relative overflow-hidden rounded-2xl">
          <SmartImage
            src="./images/why_us.png"
            alt="Why work with us visual"
            label="Why Us Visual"
            className="w-full h-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>
      </div>
    </div>
  </Section>
);

// NEXT STEPS
const NextSteps = () => (
  <Section
    id="next-steps"
    className="text-center bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
  >
    <div className="container mx-auto px-4 max-w-4xl">
      <h2
        className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 animate-slide-up"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Take the Next Step
      </h2>
      <p className="mt-4 text-slate-700 dark:text-slate-300 animate-fade-in-up delay-200 leading-relaxed max-w-2xl mx-auto">
        Partner with shiels.ai to unlock the potential of AI for your business. Contact us to explore how our expertise can drive your success.
      </p>
      <p className="mt-3 text-slate-700 dark:text-slate-300 animate-fade-in-up delay-400">
        Reach out at{" "}
        <a className="underline decoration-rose-500" href="mailto:lude@shiels.ai">
          lude@shiels.ai
        </a>{" "}
        to discuss collaboration opportunities.
      </p>
      <div className="mt-8 flex justify-center gap-4 animate-fade-in-up delay-600">
        <Button className="rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-xl transition-shadow px-8 py-3 text-lg font-semibold">
          Email Us
        </Button>
        <Button
          variant="outline"
          className="rounded-full border-rose-600 text-rose-600 hover:bg-rose-100 dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-900/50 shadow-md hover:shadow-xl transition-shadow px-8 py-3 text-lg font-semibold"
        >
          Learn More
        </Button>
      </div>
      <div className="mt-12 text-sm text-slate-500 dark:text-slate-400">
        <p>Designed with precision by shiels.ai © 2025</p>
      </div>
    </div>
  </Section>
);

// BACK TO TOP
const BackToTop = () => (
  <Section className="relative overflow-hidden text-center bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-rose-500/40 via-rose-500/10 to-transparent blur-3xl opacity-90" />
    <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center relative z-10">
      <SmartImage
        src="./images/shielsai_logo.png"
        alt="Shiels AI Logo"
        label="Logo"
        className="h-10 w-auto mb-8"
      />
      <Button
        className="rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-xl transition-shadow px-6 py-2 font-semibold"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Return to the Top
      </Button>
    </div>
  </Section>
);

const Home = () => (
  <div className="flex flex-col bg-slate-900 min-h-screen">
    <TopNav />
    <main>
      <Hero />
      <Services />
      <KeyProjects />
      <Team />
      <About />
      <EngagementModels />
      <BackToTop />
    </main>
  </div>
);

export default Home;
