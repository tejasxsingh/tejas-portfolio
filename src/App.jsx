import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Tejas Singh</h1>
        <p className="text-lg text-gray-600">
          Aspiring Data Scientist | UBC Student | Python • R • SQL
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <section className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I am a detail-oriented and analytical student at UBC, passionate
            about data science, statistics, and mathematics. I enjoy building
            projects that combine coding, problem-solving, and creativity.
          </p>
        </section>

        <section className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>Python, R, SQL</li>
            <li>Data Analysis & Visualization</li>
            <li>Machine Learning (Scikit-learn, TensorFlow)</li>
            <li>Tableau, Excel</li>
          </ul>
        </section>

        <section className="p-6 bg-white rounded-2xl shadow-md md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc list-inside">
            <li>Wine Quality Analysis (R) — compared red vs. white wines.</li>
            <li>
              Heart Disease Prediction (R) — applied classification algorithms.
            </li>
            <li>
              Stock Dashboard (Python) — built an interactive data visualization.
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-12 text-gray-500">
        © {new Date().getFullYear()} Tejas Singh
      </footer>
    </div>
  );
}

export default App;
