import { useState } from "react";

function ProjectCard({ title, url, emoji }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="rounded-2xl shadow-lg p-4 bg-gray-800 relative">
      <h3 className="font-semibold mb-2">{emoji} {title}</h3>
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 text-white z-10 rounded-2xl">
          <span className="animate-pulse">⏳ Loading app…</span>
        </div>
      )}

      <iframe
        src={`${url}?embed=true`}
        width="100%"
        height="400"
        style={{ border: "none" }}
        onLoad={() => setLoading(false)}
        title={title}
      ></iframe>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <ProjectCard
          title="Fake News Buster"
          url="https://huggingface.co/spaces/ibrahimali94/fake-news-buster"
          emoji="📰"
        />
        <ProjectCard
          title="AI Time Machine"
          url="https://huggingface.co/spaces/ibrahimali94/ai-time-machine"
          emoji="🕰️"
        />
        <ProjectCard
          title="Event Sellout Predictor"
          url="https://huggingface.co/spaces/ibrahimali94/event-sellout-predictor"
          emoji="🎟️"
        />
        <ProjectCard
          title="Price Drop Oracle"
          url="https://huggingface.co/spaces/ibrahimali94/price-drop-oracle"
          emoji="🔮"
        />
        <ProjectCard
          title="Experiment Roulette"
          url="https://huggingface.co/spaces/ibrahimali94/experiment-roulette"
          emoji="🎲"
        />
        <ProjectCard
          title="AI Travel Buddy"
          url="https://huggingface.co/spaces/ibrahimali94/ai-travel-buddy"
          emoji="🧭"
        />
      </div>
    </div>
  );
}
