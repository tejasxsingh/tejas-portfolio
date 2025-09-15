import React from "react";

export default function App() {
  // ------------------ PROJECTS ------------------
  const projects = [
    {
      title: "Global Financial Health Score Dashboard",
      repo: "global-financial-health-score-dashboard",
      desc:
        "Built a composite scoring system and dashboard to benchmark countries using cleaned, scaled indicators; produced ranked comparisons and trend insights.",
      img: "/projects/financial-health.png", // optional screenshot
      tags: ["Python", "Pandas", "Visualization"],
    },
    {
      title: "Ocean Depth Profile",
      repo: "ocean-depth-profile",
      desc:
        "Analyzed bathymetry profiles and gradients; created Matplotlib visualizations to understand seabed structure and depth transitions.",
      img: "/projects/ocean-depth.png",
      tags: ["Python", "NumPy", "Matplotlib"],
    },
    {
      title: "Orbital Flyby Simulation with Python",
      repo: "Orbital-Flyby-Simulation-with-Python",
      desc:
        "Numerically modeled gravitational flybys; modularized code, plotted trajectories, and examined energy transfer for EOSC 211.",
      img: "/projects/flyby.png",
      tags: ["Python", "Simulation"],
    },
    {
      title: "Heart Disease — DSCI 100",
      repo: "heart-disease-dsci100",
      desc:
        "Explored risk factors and built classification baselines; compared models and evaluated metrics to understand drivers of heart disease.",
      img: "/projects/heart.png",
      tags: ["R", "Classification"],
    },
    {
      title: "Wine Quality — STAT 201",
      repo: "wine-quality-stat201",
      desc:
        "Compared red vs. white wines with inference and visualization; identified acidity/quality relationships and distributional differences.",
      img: "/projects/wine.png",
      tags: ["R", "ggplot2", "Stats"],
    },
  ];

  // ------------------ SKILLS ------------------
  const skills = [
    {
      group: "Programming & Tools",
      items: ["Python", "R", "SQL", "Git/GitHub", "LaTeX", "Jupyter"],
    },
    {
      group: "Data Science & ML",
      items: [
        "Wrangling",
        "Visualization",
        "Regression",
        "Classification",
        "Clustering",
        "Time Series",
      ],
    },
    {
      group: "Math & Statistics",
      items: [
        "Probability",
        "Hypothesis Testing",
        "Linear Algebra",
        "Multivariable Calculus",
        "Numerical Methods",
      ],
    },
    {
      group: "BI & Dashboards",
      items: ["Tableau", "Power BI", "Excel"],
    },
    {
      group: "Software",
      items: ["React (Vite)", "Vercel Deployment", "Basic AWS/PySpark exposure"],
    },
  ];

  // ------------------ HELPERS ------------------
  const Tag = ({ children }) => (
    <span className="text-xs px-2 py-0.5 rounded-full border bg-white">
      {children}
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* NAV */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold">
            Tejas Singh
          </a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#experience" className="hover:opacity-80">
              Research
            </a>
            <a href="#projects" className="hover:opacity-80">
              Projects
            </a>
            <a href="#skills" className="hover:opacity-80">
              Skills
            </a>
            <a href="#contact" className="hover:opacity-80">
              Contact
            </a>
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
              Tejas Singh
            </h1>
            <p className="mt-3 text-gray-600">
              Data Science & Quantitative Analysis at UBC — applying{" "}
              <strong>machine learning</strong>, <strong>statistics</strong>, and{" "}
              <strong>mathematical modeling</strong> to real-world problems in
              health, science, and finance.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="rounded-xl px-4 py-2 text-sm font-semibold bg-black text-white"
                href="#projects"
              >
                See Projects
              </a>
              <a
                className="rounded-xl px-4 py-2 text-sm font-semibold border"
                href="#experience"
              >
                Research
              </a>
              <a
                className="rounded-xl px-4 py-2 text-sm font-semibold border"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:tejasxsingh@gmail.com"
                className="underline underline-offset-4"
              >
                tejasxsingh@gmail.com
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/tejas-singh-5995a5301"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/tejasxsingh"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* RESEARCH & EXPERIENCE */}
        <section id="experience" className="py-12">
          <h2 className="text-2xl font-bold mb-6">Research & Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold">
                Machine Learning Researcher
              </h3>
              <p className="text-gray-600 italic">
                Department of Medicine — Centre for Heart Lung Innovation (HLI),
                UBC
              </p>
              <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                <li>
                  Applied ML to biomedical/clinical datasets for predictive
                  modeling of health outcomes.
                </li>
                <li>
                  Performed statistical analysis, feature engineering, and
                  reproducible evaluation pipelines.
                </li>
                <li>
                  Collaborated with researchers to translate results into
                  actionable insights.
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <h3 className="text-xl font-semibold">
                Researcher — PDE & Data Science
              </h3>
              <p className="text-gray-600 italic">Department of Mathematics, UBC</p>
              <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                <li>
                  Worked on partial differential equations with applications to{" "}
                  <strong>cancer modeling</strong> and complex systems.
                </li>
                <li>
                  Studied numerical methods, stability, and computational
                  simulation in biological settings.
                </li>
                <li>
                  Linked rigorous mathematical analysis with data science for
                  interpretable models.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-gray-600 mt-2">
            Selected work spanning dashboards, simulations, and statistical
            analysis. More on{" "}
            <a
              href="https://github.com/tejasxsingh"
              className="underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>

          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl overflow-hidden border bg-white shadow-sm"
              >
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-36 w-full object-cover"
                    onError={(e) => {
                      // graceful fallback if an image is missing
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : null}
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
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
            {skills.map((s) => (
              <div key={s.group} className="rounded-2xl border bg-white p-5">
                <h3 className="font-semibold">{s.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
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
              I’m currently seeking opportunities in{" "}
              <strong>Data Science, Analytics, or Research</strong>. Let’s
              connect.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:tejasxsingh@gmail.com"
                className="rounded-xl px-4 py-2 text-sm font-semibold bg-black text-white"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/tejas-singh-5995a5301"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-4 py-2 text-sm font-semibold border"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/tejasxsingh"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-4 py-2 text-sm font-semibold border"
              >
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-4 py-2 text-sm font-semibold border"
              >
                Resume (PDF)
              </a>
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
