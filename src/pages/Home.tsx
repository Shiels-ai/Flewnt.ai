import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";

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

const TopNav = () => (
  <div className="sticky top-12 z-40 border-b border-rose-200/70 dark:border-rose-800 backdrop-blur bg-white/80 dark:bg-rose-950/70 shadow-md">
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
);

// HERO
const Hero = () => (
  <Section
    className="relative text-center bg-gradient-to-r from-rose-50 to-slate-50 dark:from-rose-950 dark:to-slate-900 overflow-hidden"
    style={{
      backgroundImage:
        "url('./images/background_simple.png'), linear-gradient(to bottom, rgba(15,23,42,0.32), rgba(15,23,42,0.12), rgba(255,255,255,0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      backgroundSize: "100vw auto",
    }}
  >
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 animate-fade-in mb-8">
      <SmartImage
        src="./images/shielsai_logo.png"
        alt="Shiels AI Logo"
        label="Logo"
        className="h-12 sm:h-12 w-auto"
      />
    </div>
    <div></div>
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-rose-500 to-transparent animate-[pulse_10s_ease-in-out_infinite]"></div>
    <div className="container mx-auto px-4 container-wide relative z-10">
      <h1
        className="mt-3 font-lato font-extrabold text-4xl sm:text-6xl leading-tight text-rose-900 dark:text-rose-100 heading-accent animate-slide-up"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        We develop cutting-edge AI and LLM solutions for your business
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
        shiels.ai brings top academic and commercial experience to empower your SME or startup with game-changing AI technologies.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs animate-fade-in-up delay-600">
        {["LLMs & NLP", "Full-Stack Engineering", "Explainable AI", "Cloud & On-Prem"].map((c, i) => (
          <span
            key={i}
            className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors"
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
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-start relative z-10">
      <div className="space-y-6 animate-slide-left order-last lg:order-first">
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
      <div className="animate-fade-in-up delay-200">
        <div className="relative overflow-hidden rounded-2xl">
          <SmartImage
            src="./images/team_background.jpg"
            alt="About visual"
            label="About Visual"
            className="w-full h-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>
      </div>
    </div>
  </Section>
);

// SERVICES
const Services = () => (
  <Section
    id="services"
    className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
  >
    <div className="container mx-auto px-4 max-w-6xl">
      <h2
        className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 animate-slide-up"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Services
      </h2>
      <p className="mt-4 text-slate-700 dark:text-slate-300 animate-fade-in-up">
        End-to-end AI and software development: from research and prototyping to production deployment.
      </p>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Custom LLM & NLP",
            desc: "Fine-tuning, data pipelines, and applied research for domain-specific use cases.",
          },
          {
            title: "Full-Stack Apps",
            desc: "Back-end APIs, modern UIs, and cloud/on-prem production deployments.",
          },
          {
            title: "Trustworthy AI",
            desc: "Explainability methods and compliance for regulated industries.",
          },
          {
            title: "Feasibility & Scoping",
            desc: "Workshops to identify high-impact opportunities and de-risk adoption.",
          },
        ].map((x, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm float-y hover:translate-y-[-2px] transition-transform"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">{x.title}</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{x.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// KEY PROJECTS
const KeyProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      name: "Flewnt",
      src: "./images/flewnt.png",
      alt: "Flewnt Project",
      label: "Flewnt Visual",
      href: "#/projects/flewnt",
    },
    {
      name: "TRUST2",
      src: "./images/trust2.jpeg",
      alt: "TRUST2 Project",
      label: "TRUST2 Visual",
      href: "#/projects/trust2",
    },
    {
      name: "Axion",
      src: "./images/axion_hero.jpg",
      alt: "Axion Project",
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
      className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2
          className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 animate-slide-up"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Key Projects
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Flewnt",
              desc: "Transforms unstructured documents and audio into structured, searchable data.",
              href: "#/projects/flewnt",
            },
            {
              name: "TRUST2",
              desc: "Explainable AI for building management; LLM-based time series modeling.",
              href: "#/projects/trust2",
            },
            {
              name: "Axion",
              desc: "Process-oriented medical documentation system for a SA hospital.",
              href: "#/projects/axion",
            },
          ].map((p, i) => (
            <a
              key={i}
              href={p.href}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-sm hover:shadow-md transition-shadow block float-y hover:translate-y-[-2px]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{p.name}</h3>
                <span className="text-xs chip bg-rose-200 text-rose-800 dark:bg-rose-800/50 dark:text-rose-200">
                  open
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{p.desc}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 animate-fade-in-up delay-200">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative w-full h-[750px] sm:h-[750px]">
              <SmartImage
                src={projects[currentIndex].src}
                alt={projects[currentIndex].alt}
                label={projects[currentIndex].label}
                className="w-full h-full object-cover rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
              />
              <a
                href={projects[currentIndex].href}
                className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-rose-600/70 dark:bg-rose-800/70 px-3 py-1 rounded-md hover:bg-rose-700 dark:hover:bg-rose-900 transition-colors"
              >
                {projects[currentIndex].name}
              </a>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-rose-600 text-white p-2 rounded-full hover:bg-rose-700 transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-rose-600 text-white p-2 rounded-full hover:bg-rose-700 transition-colors"
              >
                →
              </button>
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-rose-600" : "bg-slate-300 dark:bg-slate-600"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
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
    className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative"
  >
    <div className="container mx-auto px-4 max-w-6xl">
      <h2
        className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 animate-slide-up"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Team
      </h2>
      <p className="mt-4 text-slate-700 dark:text-slate-200 max-w-3xl">
        shiels.ai is founded by Jack, Lude, and Sam.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
  <Section className="text-center bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
      <SmartImage
        src="./images/shielsai_logo.png"
        alt="Shiels AI Logo"
        label="Logo"
        className="h-10 w-auto mb-4"
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
      <KeyProjects />
      <About />
      <Services />
      <Team />
      <EngagementModels />
      <BackToTop />
    </main>
  </div>
);

export default Home;
