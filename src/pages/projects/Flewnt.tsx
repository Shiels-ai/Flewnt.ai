import React from "react";
import ContactModal from "../../components/ContactModal";
import useFixedOffset from "../../hooks/useFixedOffset";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
  style = {},
}) => (
  <section
    id={id}
    className={`relative overflow-hidden py-16 sm:py-24 ${className}`}
    style={style}
  >
    {children}
  </section>
);

type ConnectorLineConfig = {
  orientation: "horizontal" | "vertical";
  top: string;
  left: string;
  length: string;
  delay: number;
  hue?: "primary" | "secondary";
  thickness?: string;
};

type ConnectorNodeConfig = {
  top: string;
  left: string;
  size?: string;
  hue?: "primary" | "secondary";
};

type ConnectorPattern = {
  lines: ConnectorLineConfig[];
  nodes: ConnectorNodeConfig[];
};

const CONNECTOR_PATTERNS: Record<string, ConnectorPattern> = {
  problem: {
    lines: [
      {
        orientation: "horizontal",
        top: "18%",
        left: "6%",
        length: "60%",
        delay: 0,
        hue: "primary",
      },
      {
        orientation: "horizontal",
        top: "32%",
        left: "22%",
        length: "48%",
        delay: 350,
        hue: "secondary",
        thickness: "3px",
      },
      {
        orientation: "horizontal",
        top: "58%",
        left: "12%",
        length: "54%",
        delay: 900,
        hue: "primary",
      },
      {
        orientation: "vertical",
        top: "18%",
        left: "66%",
        length: "44%",
        delay: 600,
        hue: "secondary",
      },
      {
        orientation: "vertical",
        top: "32%",
        left: "28%",
        length: "42%",
        delay: 1200,
        hue: "primary",
      },
    ],
    nodes: [
      { top: "18%", left: "6%" },
      { top: "18%", left: "66%" },
      { top: "58%", left: "12%" },
      { top: "32%", left: "22%", size: "12px" },
      { top: "76%", left: "28%", size: "14px", hue: "secondary" },
      { top: "50%", left: "66%", size: "10px" },
    ],
  },
  overview: {
    lines: [
      {
        orientation: "horizontal",
        top: "20%",
        left: "8%",
        length: "58%",
        delay: 0,
        hue: "primary",
      },
      {
        orientation: "horizontal",
        top: "46%",
        left: "18%",
        length: "52%",
        delay: 500,
        hue: "secondary",
      },
      {
        orientation: "horizontal",
        top: "68%",
        left: "30%",
        length: "40%",
        delay: 1100,
        hue: "primary",
        thickness: "3px",
      },
      {
        orientation: "vertical",
        top: "20%",
        left: "30%",
        length: "46%",
        delay: 800,
        hue: "secondary",
      },
      {
        orientation: "vertical",
        top: "28%",
        left: "70%",
        length: "48%",
        delay: 1400,
        hue: "primary",
      },
    ],
    nodes: [
      { top: "20%", left: "8%" },
      { top: "20%", left: "70%" },
      { top: "46%", left: "18%", size: "12px" },
      { top: "68%", left: "30%", size: "14px", hue: "secondary" },
      { top: "74%", left: "70%" },
      { top: "34%", left: "30%", size: "10px" },
      { top: "54%", left: "70%", size: "12px", hue: "secondary" },
    ],
  },
  requirements: {
    lines: [
      {
        orientation: "horizontal",
        top: "16%",
        left: "12%",
        length: "62%",
        delay: 0,
        hue: "primary",
        thickness: "3px",
      },
      {
        orientation: "horizontal",
        top: "34%",
        left: "24%",
        length: "52%",
        delay: 400,
        hue: "secondary",
      },
      {
        orientation: "horizontal",
        top: "56%",
        left: "18%",
        length: "48%",
        delay: 900,
        hue: "primary",
      },
      {
        orientation: "horizontal",
        top: "78%",
        left: "8%",
        length: "58%",
        delay: 1300,
        hue: "secondary",
      },
      {
        orientation: "vertical",
        top: "16%",
        left: "32%",
        length: "54%",
        delay: 700,
        hue: "primary",
      },
      {
        orientation: "vertical",
        top: "34%",
        left: "70%",
        length: "52%",
        delay: 1500,
        hue: "secondary",
      },
    ],
    nodes: [
      { top: "16%", left: "12%" },
      { top: "16%", left: "74%", size: "12px", hue: "secondary" },
      { top: "34%", left: "24%", size: "10px" },
      { top: "56%", left: "18%", size: "12px" },
      { top: "78%", left: "8%", size: "14px", hue: "secondary" },
      { top: "78%", left: "66%", size: "12px" },
      { top: "52%", left: "32%", size: "10px", hue: "secondary" },
      { top: "40%", left: "70%", size: "12px" },
    ],
  },
  agents: {
    lines: [
      {
        orientation: "horizontal",
        top: "18%",
        left: "10%",
        length: "60%",
        delay: 0,
        hue: "primary",
        thickness: "3px",
      },
      {
        orientation: "horizontal",
        top: "36%",
        left: "22%",
        length: "50%",
        delay: 380,
        hue: "secondary",
      },
      {
        orientation: "horizontal",
        top: "60%",
        left: "18%",
        length: "56%",
        delay: 820,
        hue: "primary",
      },
      {
        orientation: "horizontal",
        top: "78%",
        left: "32%",
        length: "40%",
        delay: 1180,
        hue: "secondary",
      },
      {
        orientation: "vertical",
        top: "18%",
        left: "68%",
        length: "52%",
        delay: 620,
        hue: "primary",
      },
      {
        orientation: "vertical",
        top: "26%",
        left: "30%",
        length: "56%",
        delay: 1450,
        hue: "secondary",
      },
    ],
    nodes: [
      { top: "18%", left: "10%", size: "14px" },
      { top: "18%", left: "70%", size: "16px", hue: "secondary" },
      { top: "36%", left: "22%", size: "12px" },
      { top: "60%", left: "18%", size: "14px", hue: "secondary" },
      { top: "78%", left: "32%", size: "16px" },
      { top: "64%", left: "70%", size: "12px", hue: "secondary" },
      { top: "46%", left: "44%", size: "12px" },
    ],
  },
  ai: {
    lines: [
      {
        orientation: "horizontal",
        top: "18%",
        left: "14%",
        length: "60%",
        delay: 0,
        hue: "primary",
      },
      {
        orientation: "horizontal",
        top: "30%",
        left: "28%",
        length: "50%",
        delay: 350,
        hue: "secondary",
      },
      {
        orientation: "horizontal",
        top: "48%",
        left: "20%",
        length: "58%",
        delay: 700,
        hue: "primary",
      },
      {
        orientation: "horizontal",
        top: "68%",
        left: "36%",
        length: "42%",
        delay: 1100,
        hue: "secondary",
        thickness: "3px",
      },
      {
        orientation: "vertical",
        top: "18%",
        left: "62%",
        length: "54%",
        delay: 900,
        hue: "primary",
      },
      {
        orientation: "vertical",
        top: "24%",
        left: "30%",
        length: "56%",
        delay: 1400,
        hue: "secondary",
      },
      {
        orientation: "vertical",
        top: "30%",
        left: "48%",
        length: "52%",
        delay: 1700,
        hue: "primary",
      },
    ],
    nodes: [
      { top: "18%", left: "14%" },
      { top: "18%", left: "74%", size: "12px" },
      { top: "30%", left: "28%", size: "10px", hue: "secondary" },
      { top: "48%", left: "20%", size: "12px" },
      { top: "68%", left: "36%", size: "14px", hue: "secondary" },
      { top: "68%", left: "62%", size: "12px" },
      { top: "42%", left: "48%", size: "11px", hue: "secondary" },
      { top: "58%", left: "74%", size: "10px" },
    ],
  },
  contact: {
    lines: [
      {
        orientation: "horizontal",
        top: "24%",
        left: "12%",
        length: "64%",
        delay: 0,
        hue: "primary",
      },
      {
        orientation: "horizontal",
        top: "40%",
        left: "18%",
        length: "56%",
        delay: 400,
        hue: "secondary",
        thickness: "3px",
      },
      {
        orientation: "horizontal",
        top: "60%",
        left: "30%",
        length: "46%",
        delay: 900,
        hue: "primary",
      },
      {
        orientation: "vertical",
        top: "24%",
        left: "24%",
        length: "50%",
        delay: 650,
        hue: "secondary",
      },
      {
        orientation: "vertical",
        top: "28%",
        left: "70%",
        length: "48%",
        delay: 1200,
        hue: "primary",
      },
    ],
    nodes: [
      { top: "24%", left: "12%" },
      { top: "24%", left: "76%", size: "12px" },
      { top: "40%", left: "18%", size: "14px", hue: "secondary" },
      { top: "60%", left: "30%", size: "12px" },
      { top: "70%", left: "76%", size: "10px" },
      { top: "52%", left: "24%", size: "10px", hue: "secondary" },
    ],
  },
  team: {
    lines: [
      {
        orientation: "horizontal",
        top: "16%",
        left: "10%",
        length: "60%",
        delay: 0,
        hue: "primary",
      },
      {
        orientation: "horizontal",
        top: "34%",
        left: "24%",
        length: "52%",
        delay: 350,
        hue: "secondary",
      },
      {
        orientation: "horizontal",
        top: "52%",
        left: "18%",
        length: "50%",
        delay: 800,
        hue: "primary",
      },
      {
        orientation: "horizontal",
        top: "72%",
        left: "32%",
        length: "44%",
        delay: 1200,
        hue: "secondary",
        thickness: "3px",
      },
      {
        orientation: "vertical",
        top: "16%",
        left: "60%",
        length: "54%",
        delay: 600,
        hue: "primary",
      },
      {
        orientation: "vertical",
        top: "24%",
        left: "28%",
        length: "52%",
        delay: 1400,
        hue: "secondary",
      },
    ],
    nodes: [
      { top: "16%", left: "10%" },
      { top: "16%", left: "70%", size: "12px", hue: "secondary" },
      { top: "34%", left: "24%", size: "10px" },
      { top: "52%", left: "18%", size: "12px" },
      { top: "72%", left: "32%", size: "14px", hue: "secondary" },
      { top: "70%", left: "70%", size: "12px" },
      { top: "46%", left: "60%", size: "10px", hue: "secondary" },
    ],
  },
  default: {
    lines: [
      {
        orientation: "horizontal",
        top: "20%",
        left: "12%",
        length: "56%",
        delay: 0,
      },
      {
        orientation: "horizontal",
        top: "40%",
        left: "24%",
        length: "48%",
        delay: 500,
        hue: "secondary",
      },
      {
        orientation: "vertical",
        top: "20%",
        left: "64%",
        length: "46%",
        delay: 900,
      },
    ],
    nodes: [
      { top: "20%", left: "12%" },
      { top: "20%", left: "64%" },
      { top: "40%", left: "24%", size: "12px" },
      { top: "64%", left: "24%" },
    ],
  },
};

const AnimatedConnectors: React.FC<{
  variant?: "light" | "dark";
  className?: string;
  pattern?: string;
}> = ({ variant = "light", className = "", pattern = "default" }) => {
  const palette =
    variant === "dark"
      ? {
          primary: "rgba(244,114,182,0.35)",
          secondary: "rgba(148,163,184,0.35)",
          node: "rgba(255,255,255,0.4)",
        }
      : {
          primary: "rgba(244,114,182,0.3)",
          secondary: "rgba(148,163,184,0.35)",
          node: "rgba(244,114,182,0.35)",
        };

  const config = CONNECTOR_PATTERNS[pattern] ?? CONNECTOR_PATTERNS.default;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {config.lines.map((line, index) => {
        const hue = line.hue ?? (index % 2 === 0 ? "primary" : "secondary");
        const style: React.CSSProperties = {
          top: line.top,
          left: line.left,
          animationDelay: `${line.delay}ms`,
        };

        if (line.orientation === "horizontal") {
          style.width = line.length;
          style.height = line.thickness ?? "2px";
          style.backgroundImage = `linear-gradient(90deg, transparent, ${palette[hue]}, transparent)`;
        } else {
          style.height = line.length;
          style.width = line.thickness ?? "2px";
          style.backgroundImage = `linear-gradient(180deg, transparent, ${palette[hue]}, transparent)`;
        }

        return (
          <span
            key={`line-${pattern}-${index}`}
            className={`connector-line ${
              line.orientation === "vertical" ? "connector-line-vertical" : ""
            }`}
            style={style}
          />
        );
      })}
      {config.nodes.map((node, index) => (
        <span
          key={`node-${pattern}-${index}`}
          className="connector-node"
          style={{
            top: node.top,
            left: node.left,
            width: node.size ?? "10px",
            height: node.size ?? "10px",
            background:
              node.hue === "secondary" ? palette.secondary : palette.node,
          }}
        />
      ))}
    </div>
  );
};

const ScrollReveal: React.FC<{
  className?: string;
  delay?: number;
  children: React.ReactNode;
}> = ({ className = "", delay = 0, children }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
};

const ImagePlaceholder = ({ label = "Image Placeholder" }) => (
  <div className="relative overflow-hidden border border-rose-200/60 bg-rose-50/70 dark:border-rose-900/40 dark:bg-rose-950/50 shadow-[0_20px_60px_rgba(244,114,182,0.2)]">
    <div className="aspect-[16/9] w-full bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900 dark:to-rose-800">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-rose-500 dark:text-rose-200 text-sm sm:text-base tracking-wide font-medium uppercase">
          {label}
        </span>
      </div>
    </div>
  </div>
);

const SmartImage: React.FC<{
  src: string;
  alt: string;
  label: string;
  className?: string;
}> = ({ src, alt, label, className }) => {
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

const CirclePlaceholder: React.FC<{ label?: string; className?: string }> = ({
  label = "Photo",
  className = "",
}) => (
  <div
    className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-300 text-sm font-medium ${className}`}
  >
    {label}
  </div>
);

const ProfileCard: React.FC<{
  name: string;
  role: string;
  bio: string;
  img?: string;
}> = ({ name, role, bio, img }) => (
  <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 text-center shadow-sm hover:shadow-md transition-shadow">
    {img ? (
      <SmartImage
        src={img}
        alt={`${name} profile`}
        label="Profile"
        className="w-20 h-20 sm:w-20 sm:h-20 rounded-full object-cover mx-auto border border-slate-200 dark:border-slate-600"
      />
    ) : (
      <CirclePlaceholder />
    )}
    <h3 className="mt-4 font-semibold text-slate-900 dark:text-slate-100">
      {name}
    </h3>
    <p className="text-xs uppercase tracking-wide text-rose-600 dark:text-rose-300 font-semibold">
      {role}
    </p>
    <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
      {bio}
    </p>
  </div>
);

// HERO
const Hero = () => (
  <Section
    className="relative text-center bg-gradient-to-r from-rose-50 to-slate-50 dark:from-rose-950 dark:to-slate-900 overflow-hidden"
    style={{
      backgroundColor: "#0f1729",
      backgroundImage:
        "url('./images/background.png'), linear-gradient(to bottom, rgba(15,23,42,0.32), rgba(15,23,42,0.12), rgba(255,255,255,0))",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      backgroundSize: "100vw auto",
    }}
  >
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-rose-500 to-transparent animate-[pulse_10s_ease-in-out_infinite]"></div>
    <div className="container mx-auto px-4 container-wide relative z-10">
      <p className="uppercase tracking-widest text-xl sm:text-xl text-rose-600 dark:text-rose-400 font-bold animate-fade-in">
        Flewnt.ai
      </p>
      <h1
        className="mt-3 font-lato font-extrabold text-4xl sm:text-6xl leading-tight text-rose-900 dark:text-rose-100 heading-accent animate-slide-up"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Use AI to Create Software Requirements in an Instant, <em>Flewntly</em>
      </h1>
      <ul className="mt-6 text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up delay-200 leading-relaxed list-disc pl-5 text-center">
        <li>
          Flewnt turns unstructured data into beautiful requirements
          specifications and agentic coding instructions. Turn your data into
          apps in minutes.
        </li>
      </ul>
      <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs animate-fade-in-up delay-400">
        <span
          className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors"
          style={{ animationDelay: "0ms" }}
        >
          UML
        </span>
        <span
          className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors"
          style={{ animationDelay: "200ms" }}
        >
          Specifications
        </span>
        <span
          className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors"
          style={{ animationDelay: "400ms" }}
        >
          Codegen
        </span>
        <span
          className="chip float-y bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-800 transition-colors"
          style={{ animationDelay: "600ms" }}
        >
          Agentic Output
        </span>
      </div>
      <div className="mt-12 animate-fade-in-up delay-600">
        <img
          src="./images/flewnt.png"
          alt="Flewnt architecture overview"
          className="w-full max-w-[100vw] h-auto"
        />
      </div>
    </div>
  </Section>
);

// PROBLEM
const Problem = () => (
  <Section
    id="problem"
    className="bg-gradient-to-br border-b border-slate-500 from-rose-100 via-white to-rose-50 dark:from-slate-950 dark:via-rose-950/40 dark:to-slate-900"
  >
    <AnimatedConnectors className="hidden md:block" pattern="problem" />
    <div className="container mx-auto px-5 sm:px-8 max-w-6xl relative">
      <ScrollReveal className="relative space-y-5 rounded-3xl border border-rose-200/70 bg-white/85 px-6 sm:px-10 py-10 shadow-[0_22px_60px_rgba(244,114,182,0.18)] backdrop-blur-md dark:border-rose-900/50 dark:bg-rose-950/70">
        <h2 className="flex items-center gap-3 text-3xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 drop-shadow-[0_6px_18px_rgba(244,114,182,0.28)]">
          <span aria-hidden className="mr-2">
            ⚠️
          </span>
          <span>The problem with vibe coding</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-rose-100/85 leading-relaxed">
          Modern software teams can’t rely on guesswork. Shipping
          enterprise-grade features demands shared requirements, engaged
          clients, and a discovery process that captures every nuance. "Prompt
          it and hope" delivers spectacle—not systems.
        </p>
        <ul className="space-y-3 text-sm text-slate-700 dark:text-rose-100/80 leading-relaxed">
          {[
            "Vibe coding skips validated requirements, so delivery drifts from what stakeholders actually need.",
            "Without structured client engagement, engineering wastes sprints clarifying scope that should have been settled during discovery.",
            "Manual note taking leaves discovery slow, error-prone, and disconnected from the teams tasked with building the outcome.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span aria-hidden className="mt-0.5 mr-2">
                🚫
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </div>
  </Section>
);

// OVERVIEW
const Overview = () => (
  <Section
    id="overview"
    className="bg-gradient-to-br border-b border-t border-slate-500 from-white via-rose-50 to-white dark:from-blue-950 dark:via-rose-950/35 dark:to-slate-900"
  >
    <AnimatedConnectors className="hidden md:block" pattern="overview" />
    <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative">
      <div className="relative grid gap-12 lg:grid-cols-2 items-center">
        <ScrollReveal
          delay={120}
          className="relative order-last lg:order-first space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-300/60 bg-rose-100/70 px-4 py-1 text-xs uppercase tracking-[0.25em] text-rose-600 shadow-[0_12px_28px_rgba(244,114,182,0.22)] dark:border-rose-700/60 dark:bg-rose-950/50 dark:text-rose-200">
            <span aria-hidden className="mr-2">
              ✨
            </span>
            Why Flewnt
          </div>
          <h2 className="flex items-start gap-3 text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 drop-shadow-[0_10px_26px_rgba(244,114,182,0.32)]">
            <span aria-hidden className="mr-2">
              📋
            </span>
            <span>Flewnt is your AI business analyst and project manager</span>
          </h2>
          <ul className="space-y-5 text-slate-700 dark:text-rose-100/85 leading-relaxed">
            {[
              "Flewnt turns raw discovery into structured requirement packs in seconds, cutting weeks of back-and-forth from your roadmap.",
              "Upload documents, audio, and even live-transcribed video calls to create a single source of truth for your project.",
              "Every requirement flows straight into build agents that produce code, documentation, and handover assets without breaking context.",
              "The orchestration layer keeps stakeholders aligned so what ships mirrors the vision your clients actually signed off.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden className="mt-1 mr-2">
                  🌐
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal className="relative order-first lg:order-none" delay={40}>
          <SmartImage
            src="./images/overview.png"
            alt="Overview visual"
            label="Overview Visual"
            className="h-full w-full object-cover"
          />
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

// REQUIREMENTS
const Requirements = () => (
  <Section
    id="requirements"
    className="border-t border-slate-200/40 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-slate-100"
  >
    <AnimatedConnectors
      variant="dark"
      className="hidden md:block"
      pattern="requirements"
    />
    <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative">
      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start">
        <ScrollReveal className="space-y-6 lg:order-last">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/40 bg-rose-500/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-rose-200">
            <span aria-hidden className="mr-2">
              🧩
            </span>
            Requirements engine
          </div>
          <h2 className="flex items-start gap-3 text-3xl sm:text-4xl font-extrabold heading-accent text-rose-100 drop-shadow-[0_10px_26px_rgba(244,114,182,0.32)]">
            <span aria-hidden className="mr-2">
              🚀
            </span>
            <span>Specifications that keep pace with your imagination</span>
          </h2>
          <ul className="space-y-5 text-sm sm:text-base text-rose-50/90 leading-relaxed">
            {[
              "Generate domain, class, and ERD diagrams, plus use case journeys and detailed requirements documents—straight from a single conversation.",
              "Render thousands of nodes in sub-seconds with Flewnt’s GPU-friendly diagram engine, keeping workshops live and interactive.",
              "Switch between themes, export formats, and stakeholder-ready storyboards without rebuilding the underlying requirements.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden className="mt-1 mr-2">
                  ⚙️
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="grid gap-4 sm:grid-cols-2 max-w-xl text-sm text-rose-100/85">
            <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 shadow-[0_18px_40px_rgba(244,114,182,0.22)] backdrop-blur">
              <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-rose-200/80">
                Supports
              </span>
              <p className="mt-2 font-semibold leading-snug">
                Domain, class, ERD, use case, and requirements detail documents
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 shadow-[0_18px_40px_rgba(244,114,182,0.22)] backdrop-blur">
              <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-rose-200/80">
                Performance
              </span>
              <p className="mt-2 font-semibold leading-snug">
                10k+ entities rendered in under 300ms with live diagram updates
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal
          delay={140}
          className="relative order-first lg:order-first"
        >
          <SmartImage
            src="./images/flewnt_diagrams.png"
            alt="Diagram rendering visual"
            label="Requirements visual"
            className="h-full w-full object-cover"
          />
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

// AGENT ORCHESTRATION
const AgentOrchestration = () => (
  <Section
    id="agents"
    className="border-t border-slate-200/40 bg-gradient-to-br from-rose-50 via-white to-rose-100 dark:from-slate-950 dark:via-rose-950/35 dark:to-slate-900"
  >
    <AnimatedConnectors className="hidden md:block" pattern="agents" />
    <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative">
      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
        <ScrollReveal className="space-y-6 order-last lg:order-first">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-300/60 bg-rose-100/70 px-4 py-1 text-xs uppercase tracking-[0.25em] text-rose-600 shadow-[0_12px_28px_rgba(244,114,182,0.22)] dark:border-rose-700/60 dark:bg-rose-950/50 dark:text-rose-200">
            <span aria-hidden className="mr-2">
              🤖
            </span>
            Agent orchestration
          </div>
          <h2 className="flex items-start gap-3 text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 drop-shadow-[0_10px_26px_rgba(244,114,182,0.32)]">
            <span aria-hidden className="mr-2">
              🛠️
            </span>
            <span>
              Turn specifications into accurate, intentional code in seconds
            </span>
          </h2>
          <ul className="space-y-4 text-slate-700 dark:text-rose-100/85 leading-relaxed">
            {[
              "Flewnt orchestrates agents with structured, accurate instructions derived from specifications, just like a real teachnical analyst.",
              "Export AGENTS.md or CLAUDE.md files that ensure adherence to software development best practices.",
              "Initiate codegen from the Flewnt app, via the FlewntCLI.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden className="mt-1 mr-2">
                  🧭
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal
          delay={140}
          className="relative order-first lg:order-none"
        >
          <SmartImage
            src="./images/flewnt.png"
            alt="Agent orchestration visual"
            label="Agent orchestration visual"
            className="h-full w-full object-cover"
          />
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

// AI ARCHITECTURE
const AiArchitecture = () => (
  <Section
    id="ai"
    className="border-t border-slate-200/40 bg-gradient-to-br from-blue-950 via-slate-900 to-rose-950 text-rose-50"
  >
    <div
      className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-rose-950/45 to-slate-900/65"
      aria-hidden
    />
    <AnimatedConnectors
      variant="dark"
      className="hidden md:block"
      pattern="ai"
    />
    <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative">
      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start">
        <ScrollReveal delay={120} className="space-y-6 lg:order-last">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/40 bg-rose-500/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-rose-100">
            <span aria-hidden className="mr-2">
              🧠
            </span>
            AI engine
          </div>
          <h2 className="flex items-start gap-3 text-3xl sm:text-4xl font-extrabold heading-accent text-rose-50 drop-shadow-[0_14px_32px_rgba(244,114,182,0.45)]">
            <span aria-hidden className="mr-2">
              🎙️
            </span>
            <span>Proprietary NLP that keeps pace with live interviews</span>
          </h2>
          <p className="text-sm sm:text-base text-rose-50/85 leading-relaxed">
            Flewnt pairs a bespoke NLP stack with orchestration-grade LLMs so
            every nuance of a stakeholder interview is captured, clarified, and
            turned into build-ready requirements—all while the conversation is
            still happening.
          </p>
          <ul className="space-y-4 text-sm leading-relaxed text-rose-50/85">
            {[
              {
                title: "On-device transcription.",
                body: "Secure, ultra-low-latency transcription runs on customer hardware, so teams capture every correction, acronym, and decision without shipping audio to the cloud.",
                icon: "🔐",
              },
              {
                title: "Dual-layer understanding.",
                body: "Domain-tuned NLP parses vocabulary, roles, and intents while supervisory LLMs validate traceability, highlight contradictions, and suggest clarifying follow-ups.",
                icon: "🧬",
              },
              {
                title: "Live requirement diffs.",
                body: "Each utterance updates the requirement pack in real time, letting interviewers confirm scope, log changes, and hand approved stories straight to build agents.",
                icon: "⚡",
              },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span aria-hidden className="mt-1 mr-2">
                  {item.icon}
                </span>
                <span>
                  <strong className="font-semibold text-rose-100">
                    {item.title}
                  </strong>{" "}
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal
          delay={60}
          className="relative order-first lg:order-first"
        >
          <SmartImage
            src="./images/ai_architecture.png"
            alt="Flewnt AI architecture"
            label="AI Architecture Visual"
            className="h-full w-full object-cover"
          />
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

const ContactCTA = () => {
  const [contactOpen, setContactOpen] = React.useState(false);

  return (
    <Section
      id="contact"
      className="bg-gradient-to-br from-blue-800 via-purple-600 to-indigo-600 text-white border-t border-sky-400/60"
    >
      <AnimatedConnectors
        variant="light"
        pattern="contact"
        className="hidden md:block opacity-50"
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 right-1/3 h-56 w-56 rounded-full bg-white/20 blur-[160px]" />
        <div className="absolute bottom-[-8rem] left-[-6rem] h-48 w-48 rounded-full bg-white/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.18),transparent_55%)] mix-blend-screen" />
      </div>
      <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        <ScrollReveal>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em]">
              <span aria-hidden className="mr-2">
                📬
              </span>
              Bring Flewnt In-House
            </div>
            <h2 className="mt-4 flex items-start justify-center gap-3 text-3xl sm:text-4xl font-extrabold heading-accent drop-shadow-[0_10px_25px_rgba(244,114,182,0.5)]">
              <span aria-hidden className="mr-2">
                🚀
              </span>
              <span>
                See how Flewnt transforms your discovery and delivery motion
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-rose-50/85 leading-relaxed max-w-3xl mx-auto">
              Invite us to your next stakeholder interview or requirements
              workshop. We’ll run Flewnt live with your teams, capture the
              nuance, and hand back a build-ready requirement pack in
              minutes—not weeks.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-white text-rose-600 font-semibold px-6 py-3 shadow-[0_18px_40px_rgba(244,114,182,0.35)] transition hover:-translate-y-0.5"
              >
                Contact us
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Section>
  );
};

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
            { id: "requirements", label: "Requirements" },
            { id: "agents", label: "Agents" },
            { id: "ai", label: "AI" },
            { id: "contact", label: "Contact" },
            { id: "team", label: "Team" },
          ].map((s) => (
            <a
              key={s.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(s.id);
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
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

// TEAM
const Team = () => (
  <Section
    id="team"
    className="border-t border-slate-200/80 text-slate-900 dark:text-rose-100 bg-black/50"
    style={{
      backgroundImage: "url('./images/code_background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <AnimatedConnectors className="hidden md:block" pattern="team" />
    <div className="container mx-auto px-4 max-w-6xl relative">
      <ScrollReveal className="text-center">
        <h2 className="flex items-center justify-center gap-3 text-3xl sm:text-4xl font-extrabold heading-accent text-rose-900 dark:text-rose-100 drop-shadow-[0_0px_6px_rgba(0,0,0,0.8)]">
          <span aria-hidden className="mr-2">
            🤝
          </span>
          The People building Flewnt
        </h2>
      </ScrollReveal>
      <ScrollReveal className="mt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
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
          ].map((m, i) => (
            <ProfileCard
              key={i}
              name={m.name}
              role={m.role}
              bio={m.bio}
              img={m.img}
            />
          ))}
        </div>
      </ScrollReveal>
    </div>
  </Section>
);

const Flewnt: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#fff0f8] via-[#f5e6fb] to-[#ffe6f1] dark:bg-gradient-to-br dark:from-[#0a0314] dark:via-[#12082b] dark:to-[#05020f]">
    <TopNav />
    <main>
      <Hero />
      <Overview />
      <Requirements />
      <AgentOrchestration />
      <AiArchitecture />
      <ContactCTA />
      <Team />
    </main>
  </div>
);

export default Flewnt;
