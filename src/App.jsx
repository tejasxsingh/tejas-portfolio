import React from "react";

// ------------------ SMALL VISUALS ------------------
// Lightweight animated sparkline + KPI cards for a more "data" feel
function AnimatedSparkline() {
  return (
    <svg viewBox="0 0 200 60" className="w-full h-12">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      <path
        d="M0 40 C 20 35, 35 50, 50 32 C 65 20, 80 30, 95 22 C 110 18, 125 36, 140 26 C 155 20, 170 30, 200 22"
        fill="none"
        stroke="url(#g1)"
        strokeWidth="3"
      >
        <animate
          attributeName="stroke-dasharray"
          from="0,400"
          to="400,0"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs bg-white">
    {children}
  </span>
);

// ------------------ DATA ------------------
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
      "Analyzed bathymetry profiles/gradients; produced scientific plots to understand seabed structure and depth transitions.",
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

const skillGroups = [
  {
    group: "Core Programming",
    items: ["Python", "R", "SQL", "Git/GitHub", "LaTeX", "Jupyter"],
  },
  {
    group: "ML & Analytics",
    items: [
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Regression/Classification",
      "Clustering",
      "PCA",
      "A/B Testing",
      "Statistical Inference",
    ],
  },
  {
    group: "BI & Visualization",
    items: ["Tableau", "Power BI", "Excel"],
  },
  {
    group: "Math & Methods",
    items: [
      "Probability",
      "Hypothesis Testing",
      "Linear Algebra",
      "Multivariable Calculus",
      "Numerical Methods",
      "Time Series",
      "Econometrics",
    ],
  },
  {
    group: "Data & Cloud",
    items: ["ETL (SQL)", "AWS S3 (exposure)", "Vercel Deployment", "React (Vite)"],
  },
];

// ------------------ APP ------------------
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/30 to-emerald-50/20 text-gray-800">
      {/* NAV */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Tejas Singh</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#experience" className="hover:opacity-80">Research</a>
            <a href="#work" className="hover:opacity-80">Work</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5">
        {/* HERO */}
        <section className="py-12 sm:py-16 grid md:grid-cols-[auto,1fr] gap-8 items-center">
          <img
            src="/profile.jpg"
            alt="Tejas Singh"
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover ring-2 ring-white shadow"
          />
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Data Science & Quantitative Analysis
            </h1>
            <p className="mt-3 text-gray-700">
              UBC student blending <strong>machine learning</strong>,{" "}
              <strong>statistics</strong>, and <strong>mathematical modeling</strong> to
              produce clean analyses, clear visuals, and deployable data products.
            </p>

            <div className="mt-5 grid md:grid-cols-3 gap-4">
              <div className="rounded-2xl border bg-white p-4">
                <div className="text-xs text-gray-500">Recent Trend</div>
                <AnimatedSparkline />
              </div>
              <div className="rounded-2xl border bg-white p-4">
                <div className="text-xs text-gray-500">Tooling</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Pandas", "NumPy", "scikit-learn", "Matplotlib"].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border bg-white p-4">
                <div className="text-xs text-gray-500">Dashboards</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Tableau", "Power BI", "Excel"].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a className="rounded-xl px-4 py-2 text-sm font-semibold bg-black text-white" href="#projects">
                See Projects
              </a>
              <a className="rounded-xl px-4 py-2 text-sm font-semibold border" href="#experience">
                Research
              </a>
              <a className="rounded-xl px-4 py-2 text-sm font-semibold border" href="/resume.pdf" target="_blank" rel="noreferrer">
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
        </section>

        {/* RESEARCH */}
        <section id="experience" className="py-12">
          <h2 className="text-2xl font-bold mb-6">Research</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold">Machine Learning Researcher</h3>
              <p className="text-gray-600 italic">
                Department of Medicine — Centre for Heart Lung Innovation (HLI), UBC
              </p>
              <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                <li>Applied ML to biomedical/clinical datasets for predictive modeling of health outcomes.</li>
                <li>Feature engineering, statistical testing, and reproducible evaluation pipelines.</li>
                <li>Presented insights with clear visualizations to support clinical research decisions.</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold">Researcher — PDE & Data Science</h3>
              <p className="text-gray-600 italic">Department of Mathematics, UBC</p>
              <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                <li>PDE and data science research with applications to <strong>cancer modeling</strong> and complex systems.</li>
                <li>Numerical methods, stability analysis, and computational simulation in biological settings.</li>
                <li>Bridged rigorous mathematical analysis with interpretable, data-driven models.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="work" className="py-12">
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <h3 className="text-lg font-semibold">Data Science Intern</h3>
              <p className="text-gray-600 italic">CanaSelect — Sep 2024 · Dec 2024</p>
              <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                <li>Built SQL-based ETL pipelines; reduced manual ingestion effort and improved reliability.</li>
                <li>Analyzed large operational/financial datasets using <strong>Pandas</strong>, <strong>scikit-learn</strong>, and <strong>R</strong> (regression, logistic, PCA, clustering).</li>
                <li>Shipped dashboards in <strong>Tableau</strong> and <strong>Power BI</strong>; integrated with <strong>AWS S3</strong> sources and presented actionable findings.</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <h3 className="text-lg font-semibold">Analyst Intern (Real Estate)</h3>
              <p className="text-gray-600 italic">M3M Properties — May 2022 · Aug 2022</p>
              <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                <li>Analyzed pricing/demand trends with <strong>SQL</strong> and <strong>Excel</strong> to identify market opportunities.</li>
                <li>Built <strong>Power BI</strong> dashboards and optimized SQL queries; cut reporting turnaround by ~12%.</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border shadow-sm md:col-span-2">
              <h3 className="text-lg font-semibold">General Associate</h3>
              <p className="text-gray-600 italic">Aritzia — Aug 2023 · Sep 2023</p>
              <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                <li>Supported inventory tracking and prepared weekly reports; improved floor readiness and operations.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-gray-600 mt-2">
            Selected work spanning dashboards, simulations, and statistical analysis. More on{" "}
            <a href="https://github.com/tejasxsingh" className="underline underline-offset-4" target="_blank" rel="noreferrer">
              GitHub
            </a>.
          </p>

          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <article key={p.title} className="rounded-2xl overflow-hidden border bg-white shadow-sm">
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
                  <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <a
                    href={`https://github.com/tejasxsingh/${p.repo}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-sm font-medium underline underline-offset-4"
                  >
                    View on GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-12">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((s) => (
              <div key={s.group} className="rounded-2xl border bg-white p-5">
                <h3 className="font-semibold">{s.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((i) => <Tag key={i}>{i}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-10">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="mt-4 rounded-2xl border bg-white p-6">
            <p>
              I’m seeking roles in <strong>Data Science, Analytics, and Research</strong>.
              Let’s connect.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="mailto:tejasxsingh@gmail.com" className="rounded-xl px-4 py-2 text-sm font-semibold bg-black text-white">Email Me</a>
              <a href="https://www.linkedin.com/in/tejas-singh-5995a5301" target="_blank" rel="noreferrer" className="rounded-xl px-4 py-2 text-sm font-semibold border">LinkedIn</a>
              <a href="https://github.com/tejasxsingh" target="_blank" rel="noreferrer" className="rounded-xl px-4 py-2 text-sm font-semibold border">GitHub</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-xl px-4 py-2 text-sm font-semibold border">Resume (PDF)</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Tejas Singh. All rights reserved.
      </footer>
    </div>
  );
}
