import React from "react";
import { Button } from "../../components/ui/button";

const Section = ({ children, className = "", id = undefined, style = {} }) => (
  <section id={id} className={`py-16 sm:py-24 ${className} transition-all duration-500 ease-in-out`} style={style}>
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

const SmartImage: React.FC<{ src: string; alt: string; label: string; className?: string }> = ({ src, alt, label, className }) => {
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

const CirclePlaceholder: React.FC<{ label?: string; className?: string }> = ({ label = "Photo", className = "" }) => (
  <div className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-300 text-sm font-medium ${className}`}>
    {label}
  </div>
);

const ProfileCard: React.FC<{ name: string; role: string; bio: string; img?: string }> = ({ name, role, bio, img }) => (
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
        Flewnt — Technical Overview
      </p>
      <h1 className="mt-3 font-lato font-extrabold text-4xl sm:text-6xl leading-tight text-rose-900 dark:text-rose-100 heading-accent animate-slide-up" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Flewnt - Multipass Data Extraction Engine
      </h1>
      <ul className="mt-6 text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed list-disc pl-5 text-center">
        <li>A .NET 8 Web API for processing documents and live audio, extracting domain concepts and data, and generating structured outputs.</li>
      </ul>
      <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs animate-fade-in-up delay-400">
        <span className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors" style={{ animationDelay: '0ms' }}>Dockerized</span>
        <span className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors" style={{ animationDelay: '200ms' }}>LLMs + Local NLP</span>
        <span className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors" style={{ animationDelay: '400ms' }}>Firestore</span>
        <span className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors" style={{ animationDelay: '600ms' }}>Nginx + TLS</span>
      </div>
      <div className="mt-12 animate-fade-in-up delay-600">
        <div className="relative overflow-hidden rounded-2xl tilt hover:rotate-1 transition-transform duration-300">
          <img
            src="./images/flewnt.png"
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
  <Section id="overview" className="bg-gradient-to-b from-white to-rose-50 dark:from-slate-900 dark:to-rose-950 relative">
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-start relative z-10">
      <div className="space-y-6 animate-slide-left order-last lg:order-first">
        <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Overview</h2>
        <ul className="text-slate-700 dark:text-slate-300 leading-relaxed list-disc pl-5 text-left">
          <li>The backend is implemented using .NET 8 Web API, supporting WebSockets and Firestore for data persistence.</li>
          <li>NLP processing is handled by a Python/Flask engine utilizing spaCy and fastcoref for data extraction.</li>
          <li>LLMs including Gemini and Groq are integrated for data enrichment and transcription. The system runs in Docker containers, proxied by Nginx with Let's Encrypt for TLS.</li>
        </ul>
      </div>
      <div className="animate-fade-in-up delay-200">
        <div className="relative overflow-hidden rounded-2xl">
          <SmartImage
            src="./images/overview.png"
            alt="Overview visual"
            label="Overview Visual"
            className="w-full h-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>
      </div>
    </div>
  </Section>
);

// REPO LAYOUT
const RepoLayout = () => (
  <Section id="repo" className="bg-slate-50 dark:bg-rose-900/20 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwTTEwIDYwIEwgMCA1ME0wIDYwIEwgNTAgME0wIDYwIEwgNjAgNjBNMCA2MCBMIDYwIDAiIHN0cm9rZT0iI2ZhZmZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSI2Ij48L3BhdGg+PC9zdmc+')]"></div>
    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 animate-slide-up" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Repository Layout</h2>
      <ul className="mt-6 text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed list-disc pl-5 text-left">
        <li>The repository is structured into components for the server, AI services, domain models, and deployment configurations.</li>
      </ul>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Zhaopian.Server", desc: "ASP.NET Core Web API containing business logic, persistence, and WebSockets." },
          { name: "Zhaopian.Server.Ai", desc: "AI service clients, prompts, serializers, and configuration contracts." },
          { name: "Zhaopian.Server.Domain", desc: "Core domain models shared by the server." },
          { name: "Zhaopian.Engine.Ai", desc: "Python Flask NLP engine for data extraction." },
          { name: "Zhaopian.Jupyter", desc: "Jupyter notebooks for prototyping and evaluation." },
          { name: "docker-compose.yml", desc: "Docker Compose for local setup of server and NLP engine." },
          { name: "Zhaopian.Server/Hosting", desc: "Production Docker Compose, Nginx configuration, deployment script, and production environment." },
        ].map((r, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm p-5 float-y hover:translate-y-[-2px] transition-transform duration-300"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{r.name}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full chip bg-rose-200 text-rose-800 dark:bg-rose-800/50 dark:text-rose-200">dir</span>
            </div>
            <p className="mt-2 text-sm text-slate-800 dark:text-slate-300 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// INFRASTRUCTURE
const Infrastructure = () => (
  <Section id="infra" className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
      <div className="animate-slide-right order-first lg:order-last">
        <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Infrastructure</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">Containers</h3>
            <ul className="mt-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed list-disc pl-5 text-left">
              <li>NLP Engine: Based on <code>python:3.9-slim</code>, includes spaCy and fastcoref, served with gunicorn on port 5001.</li>
              <li>Server: Multi-stage build with .NET 8, runs on port 5002.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">Local Development</h3>
            <ul className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed list-disc pl-5 text-left">
              <li>Docker Compose launches the NLP engine on 5001 and server on 5002, configured via .env file.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">Production</h3>
            <ul className="mt-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed list-disc pl-5 text-left">
              <li>Images pulled from GHCR. Nginx handles TLS on 443 and ACME on 80. Services connected via shared bridge network, proxying to server on 5002.</li>
              <li>Environment variables from <code>/srv/flewnt/prod.env</code>. Updates managed by <code>pull_and_refresh.sh</code> for rolling deployments.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">Nginx</h3>
            <ul className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed list-disc pl-5 text-left">
              <li>Configured with <code>server_name</code> for flewnt.ai, includes HSTS, security headers, ACME webroot, and proxy to backend server.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="animate-fade-in-up delay-200">
        <div className="relative overflow-hidden rounded-2xl">
          <SmartImage
            src="./images/infrastructure.png"
            alt="Infrastructure visual"
            label="Infrastructure Visual"
            className="w-full h-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>
      </div>
    </div>
  </Section>
);

// AI ARCHITECTURE
const AiArchitecture = () => (
  <Section id="ai" className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
      <div className="animate-slide-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>AI Architecture</h2>
        <div className="mt-6 space-y-6 text-slate-700 dark:text-slate-300">
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">NLP Engine APIs</h3>
            <ul className="mt-2 text-sm leading-relaxed list-disc pl-5 text-left">
              <li>Endpoints for structured text processing and data extraction, supporting downstream enrichment.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">Pipeline</h3>
            <ul className="mt-2 text-sm leading-relaxed list-disc pl-5 text-left">
              <li>Utilizes spaCy <code>en_core_web_trf</code> and <code>fastcoref</code> for text cleanup and speaker canonicalization. Applies layered rule-based and heuristic processing over sentence structures, with late filtering and de-duplication based on detected objects.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">LLM Integration</h3>
            <ul className="mt-2 text-sm leading-relaxed list-disc pl-5 text-left">
              <li>Gemini 2.5 Flash for data enrichment. Groq LLaMA 3.3 70B with Whisper Large V3 Turbo for transcription of text and audio.</li>
              <li>Server-side orchestrators manage the flow for extraction, enrichment, and real-time transcription.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="animate-fade-in-up delay-200">
        <div className="relative overflow-hidden rounded-2xl">
          <SmartImage
            src="./images/ai_architecture.png"
            alt="AI architecture visual"
            label="AI Architecture Visual"
            className="w-full h-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>
      </div>
    </div>
  </Section>
);

// RENDERING
const Rendering = () => (
  <Section id="rendering" className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
      <div className="animate-slide-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Rendering</h2>
        <div className="mt-6 space-y-6 text-slate-700 dark:text-slate-300">
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">Powerful Rendering Engine</h3>
            <ul className="mt-2 text-sm leading-relaxed list-disc pl-5 text-left">
              <li>Hyper-fast, optimized rendering of components that can generate 1000's of entities in sub-second timings.</li>
              <li>Robust pathfinding and visualization capabilities, driven by the Flewnt diagram engine.</li>
              <li>Multiple specification sets, with support for custom themes.</li>
              <li>Export to a variety of formats and data structures.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="animate-fade-in-up delay-200">
        <div className="relative overflow-hidden rounded-2xl">
          <SmartImage
            src="./images/flewnt_diagrams.png"
            alt="AI architecture visual"
            label="AI Architecture Visual"
            className="w-full h-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>
      </div>
    </div>
  </Section>
);

// LABELING & TRAINING
const LabelingTraining = () => (
  <Section id="labeling" className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
      <div className="animate-slide-right order-last lg:order-first">
        <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Labeling & Model Training</h2>
        <div className="mt-6 space-y-6 text-slate-700 dark:text-slate-300">
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">Data & Annotation</h3>
            <ul className="text-sm leading-relaxed list-disc pl-5 text-left">
              <li>Over 75k labeled samples using Label Studio, including structured labels with spans and indices.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">Training Strategy</h3>
            <ul className="text-sm leading-relaxed list-disc pl-5 text-left">
              <li>Baseline uses rule-based extractor with fastcoref. Evaluating span-classification and seq2seq models with constrained decoding.</li>
              <li>Evaluation metrics include exact/fuzzy match F1 on structured outputs, with error analysis for coreference and list handling.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">Serving Plan</h3>
            <ul className="text-sm leading-relaxed list-disc pl-5 text-left">
              <li>Models serve as drop-in replacements behind Flask interface, with A/B testing via <code>AICONFIGURATION__NLP_ENGINE_API_URL</code>.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="animate-fade-in-up delay-200">
        <div className="relative overflow-hidden rounded-2xl">
          <SmartImage
            src="./images/label_studio.png"
            alt="Label Studio visual"
            label="Labeling / Training Visual"
            className="w-full h-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>
      </div>
    </div>
  </Section>
);

// CONFIGURATION & OPERATIONS
const ConfigOperations = () => (
  <Section id="config-operations" className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
      <div className="animate-slide-right">
        <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Configuration & Operations</h2>
        <div className="mt-6 space-y-6 text-slate-700 dark:text-slate-300">
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">Run Locally</h3>
            <ul className="text-sm leading-relaxed list-disc pl-5 text-left">
              <li>Using Docker Compose: Set .env and run <code>docker compose up --build</code>.</li>
              <li>Manual: Start NLP engine with Flask/gunicorn, then <code>dotnet run</code> for server, ensuring correct API URL.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">Operational Notes</h3>
            <ul className="text-sm leading-relaxed list-disc pl-5 text-left">
              <li>Security features include TLS via Nginx, HSTS, CSP, Firebase JWT verification, and WebSocket origin restrictions.</li>
              <li>Observability through ASP.NET logging and structured stdout logs from NLP engine.</li>
              <li>Performance managed with chunking and throttling via <code>NLP_ENGINE_CALL_INTERVAL</code> and <code>LLM_CALL_INTERVAL</code>.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-rose-900 dark:text-rose-100">CI/CD</h3>
            <ul className="text-sm leading-relaxed list-disc pl-5 text-left">
              <li>GitHub Actions automates building and testing for pushes/PRs to 'release' and 'main' branches.</li>
              <li>Publishes Zhaopian.Server and Zhaopian.Engine.Ai images to GHCR with latest tags.</li>
              <li>.NET tests run for Zhaopian.Server.Tests using .NET 8 SDK, with NuGet caching.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="animate-fade-in-up delay-200">
        <div className="relative overflow-hidden rounded-2xl">
          <SmartImage
            src="./images/nginx.png"
            alt="Nginx operations visual"
            label="Operations Visual"
            className="w-full h-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
          />
        </div>
      </div>
    </div>
  </Section>
);

// APPENDIX
const Appendix = () => (
  <Section id="appendix" className="bg-slate-900 text-slate-100 border-t border-slate-800">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold animate-slide-up" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Appendix: Key Files & Paths</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {[
          { k: "Compose (local)", v: "docker-compose.yml" },
          { k: "Compose (prod)", v: "Zhaopian.Server/Hosting/docker-compose.prod.yml" },
          { k: "Nginx config", v: "Zhaopian.Server/Hosting/nginx/nginx.conf" },
          { k: "Server entry", v: "Zhaopian.Server/Program.cs" },
          { k: "NLP engine", v: "Zhaopian.Engine.Ai/app.py" },
          { k: "AI services", v: "Zhaopian.Server.Ai/AiService/*" },
          { k: "Domain models", v: "Zhaopian.Server.Domain/Models/*" },
        ].map((row, i) => (
          <div key={i} className="rounded-2xl border border-slate-700 p-5 bg-slate-800 hover:bg-slate-700 transition-colors duration-300 float-y" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="text-xs uppercase tracking-wider text-slate-300">{row.k}</div>
            <div className="mt-1 font-mono text-sm text-slate-100">{row.v}</div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// FOOTER CTA
const FooterCTA = () => (
  <Section className="text-center bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 animate-slide-up" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Explore the Flewnt Architecture</h2>
      <p className="mt-4 text-slate-700 dark:text-slate-300 animate-fade-in-up delay-200 leading-relaxed max-w-2xl mx-auto">
        Dive into the elegance of Flewnt's design. Replace placeholders with detailed architecture visuals and screenshots to showcase its innovative structure.
      </p>
      <div className="mt-8 flex justify-center gap-4 animate-fade-in-up delay-400">
        <Button className="rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-xl transition-shadow px-8 py-3 text-lg font-semibold">
          View Documentation
        </Button>
        <Button variant="outline" className="rounded-full border-rose-600 text-rose-600 hover:bg-rose-100 dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-900/50 shadow-md hover:shadow-xl transition-shadow px-8 py-3 text-lg font-semibold">
          Contact
        </Button>
      </div>
      <div className="mt-12 text-sm text-slate-500 dark:text-slate-400">
        <p>Designed with precision by the Flewnt Team © 2025</p>
      </div>
    </div>
  </Section>
);

const TopNav = () => (
  <div className="sticky top-12 z-40 border-b border-rose-200/70 dark:border-rose-800 backdrop-blur bg-white/80 dark:bg-rose-950/70 shadow-md">
    <div className="container mx-auto px-4 max-w-6xl py-3 flex items-center gap-4 text-sm overflow-x-auto">
      {[
        { id: "overview", label: "Overview" },
        { id: "team", label: "Team" },
        { id: "repo", label: "Repository" },
        { id: "infra", label: "Infrastructure" },
        { id: "ai", label: "AI" },
        { id: "rendering", label: "Rendering" },
        { id: "labeling", label: "Labeling" },
        { id: "config-operations", label: "Config & Ops" },
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

// TEAM
const Team = () => (
  <Section
    id="team"
    className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden"
    style={{
      backgroundImage:
        "linear-gradient(to bottom, rgba(2,6,23,0.55), rgba(2,6,23,0.35), rgba(2,6,23,0.55)), url('./images/team_background.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100">Team</h2>
      <p className="mt-4 text-white/90 dark:text-slate-200 max-w-3xl">
        People building Flewnt.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            name: "Jack Shiels",
            role: "AI Technologist & Founder",
            bio: "Founder at shiels.ai. Builds end‑to‑end LLM/NLP systems; UCL research on time‑series LLMs; ex Trayport & Accenture.",
            img: "./images/jack.jpeg",
          },
          {
            name: "Lude Tang",
            role: "Legal & Founder",
            bio: "UK‑trained legal/admin background; led operations across Malaysian SMEs and construction projects.",
            img: "./images/lude.jpeg",
          },
          {
            name: "Sam Shiels",
            role: "Software Engineer & Founder",
            bio: "Full‑stack engineer (React, Docker, C#, WebGL). SPAN Digital; ex Derivco & FundStream (Cape Town).",
            img: "./images/sam.jpeg",
          },
          {
            name: "Tiga Chotisorayuth",
            role: "Advisor — Brand & Marketing",
            bio: "MBA, Led Agoda’s global brand guidelines; multi‑country campaigns (11M+ impressions); advising GTM & branding.",
            img: "./images/tiga.jpeg",
          },
        ].map((m, i) => (
          <ProfileCard key={i} name={m.name} role={m.role} bio={m.bio} img={m.img} />
        ))}
      </div>
    </div>
  </Section>
);

const Flewnt: React.FC = () => (
  <div className="flex flex-col bg-slate-900 min-h-screen">
    <TopNav />
    <main>
      <Hero />
      <Overview />
      <Team />
      <RepoLayout />
      <Infrastructure />
      <AiArchitecture />
      <Rendering />
      <LabelingTraining />
      <ConfigOperations />
    </main>
  </div>
);

export default Flewnt;
