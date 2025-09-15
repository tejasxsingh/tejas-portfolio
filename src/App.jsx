import React, { useEffect, useMemo, useRef, useState } from "react";

/* ===================== VISUAL PALETTE =====================
   neutral/slate base + deep indigo + cyan accents (data-y)
   ========================================================= */
const COLORS = {
  ink: "#0b1e39",        // deep navy (header text / accents)
  indigo: "#1e3a8a",     // indigo-800
  sky: "#38bdf8",        // sky-400
  cyan: "#06b6d4",       // cyan-500
  grid: "#0b1e3915",     // faint grid lines
  card: "white",
};

/* ====================== UTIL COMPONENTS ====================== */
const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
    {children}
  </span>
);

/* Reveal-on-scroll: adds .in class when visible */
function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

const Reveal = ({ children, className = "" }) => {
  const { ref, inView } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

/* ====================== BACKGROUND VIZ =======================
   Fixed parallax grid + animated bars following scroll.
   Gives a subtle motion behind sections (performance-friendly).
   ============================================================ */
function BackgroundViz() {
  const [p, setP] = useState(0); // 0..1 scroll progress
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const prog = h <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / h));
      setP(prog);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // bar heights vary with scroll; each bar has a different phase
  const bars = useMemo(() => {
    const base = [0.2, 0.45, 0.35, 0.65, 0.5, 0.3, 0.75, 0.55];
    return base.map((b, i) => {
      const phase = Math.sin((p * Math.PI * 2) + i * 0.6) * 0.15; // -0.15..0.15
      return Math.min(0.92, Math.max(0.1, b + phase));
    });
  }, [p]);

  const translate = Math.round(p * 100); // parallax shift

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        background:
          `linear-gradient(180deg, #f8fbff 0%, #f1f6fd 40%, #eefcfa 100%)`,
      }}
    >
      {/* Grid */}
      <svg
        className="absolute inset-0 w-[140%] h-[140%] -left-[20%] -top-[20%]"
        viewBox="0 0 1200 1200"
        style={{
          transform: `translateY(${translate * -0.3}px)`,
        }}
      >
        {/* vertical lines */}
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 50}
            x2={i * 50}
            y1={0}
            y2={1200}
            stroke={COLORS.grid}
            strokeWidth="1"
          />
        ))}
        {/* horizontal lines */}
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={`h-${i}`}
            y1={i * 50}
            y2={i * 50}
            x1={0}
            x2={1200}
            stroke={COLORS.grid}
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Bars (bottom right) */}
      <div
        className="absolute bottom-8 right-6 md:right-12 w-[380px] h-[160px]"
        style={{ transform: `translateY(${translate * -0.15}px)` }}
      >
        <svg viewBox="0 0 380 160" className="w-full h-full">
          {/* Axes */}
          <line x1="20" y1="140" x2="360" y2="140" stroke="#94a3b8" strokeWidth="1" />
          <line x1="20" y1="20" x2="20" y2="140" stroke="#94a3b8" strokeWidth="1" />
          {/* Animated bars */}
          {bars.map((h, i) => {
            const bw = 24;
            const gap = 18;
            const x = 30 + i * (bw + gap);
            const height = h * 110; // 0..110
            const y = 140 - height;
            const fill = i % 2 ? COLORS.cyan : COLORS.sky;
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width={bw}
                height={height}
                rx="4"
                fill={fill}
                opacity="0.85"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/* ====================== SKILL BARS ==========================
   Bars fill when section enters viewport; % values are editable.
   ============================================================ */
function SkillBars({ data }) {
  const { ref, inView } = useReveal();
  return (
    <div ref={ref} className="space-y-4">
      {data.map(({ name, pct }) => (
        <div key={name}>
          <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
            <span className="font-medium text-slate-700">{name}</span>
            <span>{pct}%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full rounded-full transition-[width] duration-[1200ms] ease-out"
              style={{
                width: inView ? `${pct}%` : "0%",
                background: `linear-gradient(90deg, ${COLORS.indigo}, ${COLORS.cyan})`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ========================= DATA ============================ */
const skillGroups = [
  {
    title: "Programming & Tools",
    chips: ["Python", "R", "SQL", "Git/GitHub", "LaTeX", "Jupyter"],
  },
  {
    title: "ML & Analytics",
    chips: ["Pandas", "NumPy", "scikit-learn", "Matplotlib", "Regression", "Classification", "Clustering", "PCA", "A/B Testing", "Statistical Inference"],
  },
  {
    title: "BI & Visualization",
    chips: ["Tableau", "Power BI", "Excel"],
  },
  {
    title: "Math & Methods",
    chips: ["Probability", "Hypothesis Testing", "Linear Algebra", "Multivariable Calculus", "Numerical Methods", "Time Series", "Econometrics"],
  },
  {
    title: "Data & Cloud",
    chips: ["ETL (SQL)", "AWS S3 (exposure)", "Vercel", "React (Vite)"],
  },
];

const percentSkills = [
  { name: "Python (Pandas/NumPy)", pct: 88 },
  { name: "scikit-learn (ML)", pct: 80 },
  { name: "R (ggplot2/stats)", pct: 74 },
  { name: "SQL / ETL", pct: 78 },
  { name: "Tableau / Power BI", pct: 82 },
];

/* ========================= APP ============================= */
export default function App() {
  const projects = [
    {
      title: "Global Financial Health Score Dashboard",
      repo: "global-financial-health-score-dashboard",
      desc:
        "Composite scoring model on country indicators; cleaned, scaled and visualized metrics for ranked comparisons and trends.",
      img: "/projects/financial-health.png",
      tags: ["Python", "Pandas", "Matplotlib", "Tableau"],
    },
    {
      title: "Ocean Depth Profile",
      repo: "ocean-depth-profile",
      desc:
        "Analyzed bathymetry profiles/gradients; scientific plots to understand seabed structure and depth transitions.",
      img: "/projects/ocean-depth.png",
      tags: ["Python", "NumPy", "Matplotlib"],
    },
    {
      title: "Orbital Flyby Simulation with Python",
      repo: "Orbital-Flyby-Simulation-with-Python",
      desc:
        "Numerically modeled gravitational flybys; modular code, trajectory plots and energy-transfer analysis (EOSC 211).",
      img: "/projects/flyby.png",
      tags: ["Python", "Simulation"],
    },
    {
      title: "Heart Disease — DSCI 100",
      repo: "heart-disease-dsci100",
      desc:
        "Built classification baselines; compared logistic regression, KNN and trees; evaluated with confusion matrix/metrics.",
      img: "/projects/heart.png",
      tags: ["R", "Classification", "Inference"],
    },
    {
      title: "Wine Quality — STAT 201",
      repo: "wine-quality-stat201",
      desc:
        "Red vs white comparison; hypothesis testing, correlation matrices and boxplots for acidity-quality relationships.",
      img: "/projects/wine.png",
      tags: ["R", "ggplot2", "Stats"],
    },
  ];

  return (
    <div className="min-h-screen text-slate-900">
      <BackgroundViz />

      {/* NAV */}
      <header className="sticky top-0 z-20 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <a href="#" className="font-semibold tracking-tight" style={{ color: COLORS.ink }}>
            Tejas Singh
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#experience" className="hover:opacity-80">Research</a>
            <a href="#work" className="hover:opacity-80">Work</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {/* HERO */}
        <section className="grid items-center gap-8 py-12 sm:py-16 md:grid-cols-[auto,1fr]">
          <Reveal>
            <img
              src="/profile.jpg"
              alt="Tejas Singh"
              className="h-36 w-36 rounded-2xl object-cover ring-2 ring-white shadow sm:h-44 sm:w-44"
            />
          </Reveal>
          <Reveal>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: COLORS.ink }}>
                Data Science & Quantitative Analysis
              </h1>
              <p className="mt-3 text-slate-700">
                UBC student blending <strong>machine learning</strong>, <strong>statistics</strong>, and{" "}
                <strong>mathematical modeling</strong> to produce clean analyses, clear visuals, and deployable data products.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Recent Trend</div>
                  <AnimatedSparkline />
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Tooling</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Pandas", "NumPy", "scikit-learn", "Matplotlib"].map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Dashboards</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Tableau", "Power BI", "Excel"].map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white" href="#projects">
                  See Projects
                </a>
                <a className="rounded-xl border px-4 py-2 text-sm font-semibold" href="#experience">
                  Research
                </a>
                <a className="rounded-xl border px-4 py-2 text-sm font-semibold" href="/resume.pdf" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a href="mailto:tejasxsingh@gmail.com" className="underline underline-offset-4">tejasxsingh@gmail.com</a>
                <span>•</span>
                <a href="https://www.linkedin.com/in/tejas-singh-5995a5301" target="_blank" rel="noreferrer" className="underline underline-offset-4">LinkedIn</a>
                <span>•</span>
                <a href="https://github.com/tejasxsingh" target="_blank" rel="noreferrer" className="underline underline-offset-4">GitHub</a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* RESEARCH */}
        <section id="experience" className="py-12">
          <h2 className="mb-6 text-2xl font-bold">Research</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Machine Learning Researcher</h3>
                <p className="italic text-slate-600">Department of Medicine — Centre for Heart Lung Innovation (HLI), UBC</p>
                <ul className="mt-3 list-inside list-disc text-sm text-slate-700 space-y-1">
                  <li>Applied ML to biomedical/clinical datasets for predictive modeling of health outcomes.</li>
                  <li>Feature engineering, statistical testing, and reproducible evaluation pipelines.</li>
                  <li>Presented insights with clear visualizations to support clinical research decisions.</li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Researcher — PDE & Data Science</h3>
                <p className="italic text-slate-600">Department of Mathematics, UBC</p>
                <ul className="mt-3 list-inside list-disc text-sm text-slate-700 space-y-1">
                  <li>PDE and data science research with applications to <strong>cancer modeling</strong> and complex systems.</li>
                  <li>Numerical methods, stability analysis, and computational simulation in biological settings.</li>
                  <li>Bridged rigorous mathematical analysis with interpretable, data-driven models.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="py-12">
          <h2 className="mb-6 text-2xl font-bold">Work Experience</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Data Science Intern</h3>
                <p className="italic text-slate-600">CanaSelect — Sep 2024 · Dec 2024</p>
                <ul className="mt-3 list-inside list-disc text-sm text-slate-700 space-y-1">
                  <li>Built SQL-based ETL pipelines to automate ingestion and improve reliability.</li>
                  <li>Analyzed operational/financial datasets using <strong>Pandas</strong>, <strong>scikit-learn</strong>, and <strong>R</strong> (regression, logistic, PCA, clustering).</li>
                  <li>Shipped dashboards in <strong>Tableau</strong> and <strong>Power BI</strong>; integrated with <strong>AWS S3</strong> sources and presented insights.</li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Analyst Intern (Real Estate)</h3>
                <p className="italic text-slate-600">M3M Properties — May 2022 · Aug 2022</p>
                <ul className="mt-3 list-inside list-disc text-sm text-slate-700 space-y-1">
                  <li>Analyzed pricing/demand trends with <strong>SQL</strong> and <strong>Excel</strong> to identify market opportunities.</li>
                  <li>Built <strong>Power BI</strong> dashboards and optimized SQL queries; reduced reporting turnaround.</li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
                <h3 className="text-lg font-semibold">General Associate</h3>
                <p className="italic text-slate-600">Aritzia — Aug 2023 · Sep 2023</p>
                <ul className="mt-3 list-inside list-disc text-sm text-slate-700 space-y-1">
                  <li>Supported inventory tracking and prepared weekly reports; improved floor readiness and operations.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="mt-2 text-slate-600">
            Selected work spanning dashboards, simulations, and statistical analysis. More on{" "}
            <a href="https://github.com/tejasxsingh" className="underline underline-offset-4" target="_blank" rel="noreferrer">
              GitHub
            </a>.
          </p>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Reveal key={p.title}>
                <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-36 w-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  ) : null}
                  <div className="p-4">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-700">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                    </div>
                    <a
                      href={`https://github.com/tejasxsingh/${p.repo}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-sm font-medium underline underline-offset-4"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-12">
          <h2 className="mb-6 text-2xl font-bold">Skills</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="mb-3 font-semibold">Proficiency</h3>
                <SkillBars data={percentSkills} />
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="mb-3 font-semibold">Stacks & Methods</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skillGroups.map((g) => (
                    <div key={g.title}>
                      <div className="text-sm font-medium text-slate-800">{g.title}</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {g.chips.map((c) => <Tag key={c}>{c}</Tag>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-10">
          <h2 className="text-2xl font-bold">Contact</h2>
          <Reveal>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6">
              <p>
                I’m seeking roles in <strong>Data Science, Analytics, and Research</strong>. Let’s connect.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="mailto:tejasxsingh@gmail.com" className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white">Email Me</a>
                <a href="https://www.linkedin.com/in/tejas-singh-5995a5301" target="_blank" rel="noreferrer" className="rounded-xl border px-4 py-2 text-sm font-semibold">LinkedIn</a>
                <a href="https://github.com/tejasxsingh" target="_blank" rel="noreferrer" className="rounded-xl border px-4 py-2 text-sm font-semibold">GitHub</a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-xl border px-4 py-2 text-sm font-semibold">Resume (PDF)</a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Tejas Singh. All rights reserved.
      </footer>

      {/* Minimal CSS for reveal effect */}
      <style>{`
        .reveal { opacity: 0; transform: translateY(12px); transition: opacity .6s ease, transform .6s ease; }
        .reveal.in { opacity: 1; transform: none; }
      `}</style>
    </div>
  );
}
