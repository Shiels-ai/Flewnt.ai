import React from "react";
import { Button } from "../../components/ui/button";
import useFixedOffset from "../../hooks/useFixedOffset";

// Reusable components from your template
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
      className={`${className} shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 rounded-2xl`}
    />
  );
};

// Navigation specific to the Axion project page
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
            { id: "overview", label: "Overview" },
            { id: "features", label: "Key Features" },
            { id: "technology", label: "Technology" },
            { id: "workflow", label: "Workflow" },
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
        Axion — Technical Overview
      </p>
      <h1 className="mt-3 font-lato font-extrabold text-4xl sm:text-6xl leading-tight text-rose-900 dark:text-rose-100 heading-accent animate-slide-up" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Axion: Medical Notation System
      </h1>
      <ul className="mt-6 text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed list-disc pl-5 text-center">
        A secure, web-based platform for the capture, management, and export of patient data and assessments, built on the Azure Cloud platform.
      </ul>
      <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs animate-fade-in-up delay-400">
        <span className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors" style={{ animationDelay: '0ms' }}>ASP.Net</span>
        <span className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors" style={{ animationDelay: '200ms' }}>C#</span>
        <span className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors" style={{ animationDelay: '400ms' }}>Azure</span>
      </div>
      <div className="mt-12 animate-fade-in-up delay-600">
        <div className="relative overflow-hidden rounded-2xl tilt hover:rotate-1 transition-transform duration-300">
          <img
            src="./images/axion_hero.jpg"
            alt="Flewnt architecture overview"
            className="w-full max-w-[100vw] h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  </Section>
);

// OVERVIEW
const Overview = () => (
  <Section id="overview" className="bg-gradient-to-b from-white to-rose-50 dark:from-slate-900 dark:to-rose-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
    <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-rose-300/20 dark:bg-rose-700/20 blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>
    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <div className="space-y-6 animate-slide-left order-last lg:order-first">
        <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100">
          Project Overview
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-left">
          Axion is a medical notation system designed for the capture, storage, and processing of patient data in real-world healthcare environments. Its core value is the ability to dynamically construct PDF and Excel files from custom-made patient assessments.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-left">
          The system allows for on-the-go data capture compatible with both desktop and tablet devices, and supports multiple installations on a single cloud instance, enabling cost-saving optimizations for healthcare providers.
        </p>
      </div>
    </div>
  </Section>
);

// KEY FEATURES
const KeyFeatures = () => (
  <Section id="features" className="bg-slate-50 dark:bg-rose-900/20 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-rose-100/30 to-transparent dark:from-rose-900/30"></div>
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-6 animate-slide-left order-last lg:order-first">
        <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100">Key Features</h2>
        <ul className="text-slate-700 dark:text-slate-300 leading-relaxed list-disc pl-5 space-y-2 text-left">
          <li><strong>Patient Records Management:</strong> Comprehensive tools to view, add, edit, and delete patient records and associated files.</li>
          <li><strong>Custom Assessments & Templates:</strong> Ability to create and manage dynamic assessment templates that form the basis of patient evaluations.</li>
          <li><strong>Dynamic Reporting:</strong> Export single assessments or combined summaries to PDF and Excel formats, based on custom report templates.</li>
          <li><strong>Role-Based Access Control:</strong> Granular user permissions for Super Admins, Administrators, Doctors, and Data Capturers.</li>
          <li><strong>Multi-Installation Architecture:</strong> Supports multiple, distinct installations on a single cloud instance for operational efficiency and cost savings.</li>
          <li><strong>Auditing and Logging:</strong> A detailed event log tracks all noteworthy system events for security and administrative oversight.</li>
        </ul>
      </div>
      <div className="animate-fade-in-up delay-200">
        <SmartImage
            className={"w-full h-auto"}
            src="./images/axion_app.png" // Corresponds to Figure 8 from the manual
            alt="Axion Patient List Screen"
            label="Axion Patient List UI"
          />
      </div>
    </div>
  </Section>
);

// TECHNOLOGY
const Technology = () => (
  <Section id="technology" className="bg-white dark:bg-slate-900 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
    <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-rose-200/25 dark:bg-rose-800/20 blur-3xl animate-[pulse_12s_ease-in-out_infinite]"></div>
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in-up delay-200">
            <SmartImage
                className={"w-full h-auto"}
                src="./images/axion_architecture.jpg" // Corresponds to Figure 5 from the manual
                alt="Axion Installations Screen"
                label="Axion Multi-Installation UI"
            />
        </div>
        <div className="space-y-6 animate-slide-right order-first lg:order-last">
            <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100">
            Technology & Architecture
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-left">
            Axion is engineered as a robust, web-based software-as-a-service (SaaS) application hosted on the Microsoft Azure cloud platform. This architecture ensures high availability, scalability, and security for sensitive medical data.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-left">
            A key architectural feature is its support for a multi-installation environment. This allows a single deployment to serve multiple distinct groups or clinics, each with its own users, patients, and data, optimizing resource usage and reducing operational overhead. The responsive front-end is built to be fully functional on both desktop and tablet devices, providing flexibility for clinical staff.
            </p>
        </div>
    </div>
  </Section>
);

// WORKFLOW
const CoreWorkflow = () => (
  <Section id="workflow" className="bg-gradient-to-r from-rose-50 to-white dark:from-rose-950 dark:to-slate-900 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
    <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwTTEwIDYwIEwgMCA1ME0wIDYwIEwgNTAgME0wIDYwIEwgNjAgNjBNMCA2MCBMIDYwIDAiIHN0cm9rZT0iI2ZhZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSI2Ij48L3BhdGg+PC9zdmc+')]"></div>
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-6 animate-slide-left order-last lg:order-first">
        <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100">
          Core User Workflow
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-left">
          The setup and operation of Axion follow a logical, administrator-led process designed for ease of use and powerful customization:
        </p>
        <ol className="text-slate-700 dark:text-slate-300 leading-relaxed list-decimal pl-5 space-y-2 text-left">
            <li><strong>Create Installation:</strong> An administrator first sets up a new, sandboxed installation for a specific clinic or department.</li>
            <li><strong>Define Templates:</strong> The administrator creates a roster of custom Assessment Templates, which define the structure and data points for patient evaluations. PDF Report and Summary templates are also configured for standardized exports.</li>
            <li><strong>Manage Users:</strong> Users such as doctors and data analysts are added to the installation and granted appropriate access rights.</li>
            <li><strong>Manage Patients:</strong> Authorized users can then manage patient records, perform assessments using the predefined templates, and securely export reports as needed for analysis or record-keeping.</li>
        </ol>
      </div>
      <div className="animate-fade-in-up delay-200">
          <SmartImage
            className={"w-full h-auto"}
            src="./images/axion_workflow.png" // Corresponds to Figure 28 from the manual
            alt="Axion Assessment Template Builder"
            label="Axion Template Builder UI"
          />
      </div>
    </div>
  </Section>
);

// FOOTER CTA
const FooterCTA = () => (
  <Section className="text-center bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 animate-slide-up">
        Explore the Axion System
      </h2>
      <p className="mt-4 text-slate-700 dark:text-slate-300 animate-fade-in-up delay-200 leading-relaxed max-w-2xl mx-auto">
        Discover how the Axion system provides a flexible and powerful solution for modern patient data management. View the detailed documentation to see its full capabilities.
      </p>
      <div className="mt-8 flex justify-center gap-4 animate-fade-in-up delay-400">
        <Button className="rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-xl transition-shadow px-8 py-3 text-lg font-semibold">
          View User Manual
        </Button>
        <Button
          variant="outline"
          className="rounded-full border-rose-600 text-rose-600 hover:bg-rose-100 dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-900/50 shadow-md hover:shadow-xl transition-shadow px-8 py-3 text-lg font-semibold"
        >
          Contact Us
        </Button>
      </div>
    </div>
  </Section>
);

const Axion = () => (
  <div className="flex flex-col bg-slate-900 min-h-screen">
    <TopNav />
    <main>
      <Hero />
      <Overview />
      <KeyFeatures />
      <Technology />
      <CoreWorkflow />
    </main>
  </div>
);

export default Axion;
