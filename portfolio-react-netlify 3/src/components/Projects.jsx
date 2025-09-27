export default function Projects() {
  const projects = [
    {
      title: "📰 Fake News Buster",
      desc: "Detect whether a news snippet is real or fake using AI.",
      link: "https://ibrahimali94-fake-news-buster.hf.space"
    },
    {
      title: "🕰️ AI Time Machine",
      desc: "Travel through time with AI-generated historical insights.",
      link: "https://ibrahimali94-ai-time-machine.hf.space"
    },
    {
      title: "🎟️ Event Sellout Predictor",
      desc: "Predict if an event will sell out based on demand signals.",
      link: "https://ibrahimali94-event-sellout-predictor.hf.space"
    },
    {
      title: "🔮 Price Drop Oracle",
      desc: "Should you buy now or wait? AI-powered price predictions.",
      link: "https://ibrahimali94-price-drop-oracle.hf.space"
    },
    {
      title: "🎲 Experiment Roulette",
      desc: "Spin the wheel for quirky, testable A/B experiment ideas.",
      link: "https://ibrahimali94-experiment-roulette.hf.space"
    },
    {
      title: "🧭 AI Travel Buddy",
      desc: "Get quirky, budget-friendly travel itineraries with AI.",
      link: "https://ibrahimali94-ai-travel-buddy.hf.space"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl shadow-lg p-6 bg-gray-800 hover:bg-gray-700 transition-transform transform hover:-translate-y-1 hover:shadow-xl block"
          >
            <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}