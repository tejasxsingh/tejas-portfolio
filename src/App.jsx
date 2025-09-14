import React from "react";

export default function App() {
  // ---- YOUR PROJECTS ----
  const projects = [
    {
      title: "Global Financial Health Score Dashboard",
      repo: "global-financial-health-score-dashboard",
      desc:
        "Exploratory data analysis + dashboard for a composite financial-health score; tidy data, feature scaling, and clear visualizations.",
      img: "/projects/financial-health.png", // optional screenshot
      tags: ["Python", "Pandas", "Visualization"],
    },
    {
      title: "Ocean Depth Profile",
      repo: "ocean-depth-profile",
      desc:
        "Analyzed ocean depth profiles and created plots to understand bathymetry patterns and gradients.",
      img: "/projects/ocean-depth.png",
      tags: ["Python", "NumPy", "Matplotlib"],
    },
    {
      title: "Orbital Flyby Simulation with Python",
      repo: "Orbital-Flyby-Simulation-with-Python",
      desc:
        "Numerical simulation of gravitational flybys (EOSC 211) with modular code and simple visual outputs.",
      img: "/projects/flyby.png",
      tags: ["Python", "Simulation"],
    },
    {
      title: "Heart Disease – DSCI 100",
      repo: "heart-disease-dsci100",
      desc:
        "Classification project exploring predictors of heart disease; model comparison and basic evaluation.",
      img: "/projects/heart.png",
      tags: ["R", "Classification"],
    },
    {
      title: "Wine Quality – STAT 201",
      repo: "wine-quality-stat201",
      desc:
        "Red vs. White wine analysis using inference and visualization; compared acidity and quality distributions.",
      img: "/projects/wine.png",
      tags: ["R", "ggplot2", "Stats"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* NAV */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold">Tejas Singh</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#projects" className="hover:opacity-80">Projects</a>
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
              Tejas Singh
            </h1>
            <p className="mt-3 text-gray-600">
              Aspiring Data Scientist @ UBC — Python • R • SQL • Visualization •
              Statistical Modeling
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="rounded-xl px-4 py-2 text-sm font-semibold bg-black text-white" href="#projects">
                See Projects
              </a>
              <a className="rounded-xl px-4 py-2 text-sm font-semibold border" href="#contact">
                Contact Me
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
              <a href="mailto:tejasxsingh@gmail.com" className="underline underline-offset-4">
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

        {/* ABOUT */}
        <section id="about" className="py-8">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-3 leading-relaxed">
            I’m a detail-oriented UBC student across Computer Science,
            Mathematics, and Statistics. I love building clean data products,
            analyzing real-world datasets, and communicating insights with
            visuals. Comfortable with Python, R, and SQL; experienced with
            hypothesis testing, regression/classification, and dashboards.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-semibold">Languages & Tools</h3>
              <p className="mt-2 text-gray-600">
                Python, R, SQL, Git/GitHub, Tableau, Power BI, Excel
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-semibold">Data & ML</h3>
              <p className="mt-2 text-gray-600">
                Data wrangling, visualization, regression, classification,
                clustering
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-semibold">Math & Stats</h3>
              <p className="mt-2 text-gray-600">
                Linear algebra, probability, inference, hypothesis testing
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <h3 className="font-semibold">Software</h3>
              <p className="mt-2 text-gray-600">
                Data structures, algorithms, software design
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <article key={p.title} className="rounded-2xl overflow-hidden border bg-white shadow-sm">
                {p.img ? (
                  <img src={p.img} alt={p.title} className="h-36 w-full object-cover" />
                ) : (
                  <div className="h-36 w-full bg-gray-200" />
                )}
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full border bg-white">
                        {t}
                      </span>
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

        {/* CONTACT */}
        <section id="contact" className="py-10">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="mt-4 rounded-2xl border bg-white p-6">
            <p>
              I’m open to internships, co-ops, and research roles. The quickest
              way to reach me is email.
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
