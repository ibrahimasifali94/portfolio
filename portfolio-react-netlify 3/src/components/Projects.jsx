export default function Projects() {
  const caseStudies = [
    {
      tag: "Platform · Experimentation",
      title: "Self-Serve Experimentation Platform",
      problem: "Priceline's experiment pipeline required eng involvement for every test setup — creating a bottleneck that slowed test velocity and buried insights.",
      approach: "Built an API-first self-serve platform from scratch: event models, stat-sig monitoring, webhook-based rollouts, and an ML-ranked test recommender that surfaces the highest-impact test ideas.",
      outcome: "+12% rollout success rate, +8% test velocity across multiple product teams.",
      color: "from-blue-900 to-indigo-900",
      accent: "text-blue-400"
    },
    {
      tag: "Consumer Product · AI",
      title: "Flex Airports — Live Prototype",
      problem: "Travelers don't always know that flying from a nearby airport could save them hundreds. The flight search UI had no way to surface this opportunity at the right moment.",
      approach: "Designed and built a flight SERP feature showing origin/destination airport toggle chips with real-time price deltas. Deployed to Netlify as a working prototype to validate the concept.",
      outcome: "Live prototype at flexairports.netlify.app. Drove internal alignment for GDS city-level matching feature that delivered +2% CVR lift.",
      link: "https://flexairports.netlify.app",
      linkLabel: "View Live Prototype",
      color: "from-indigo-900 to-purple-900",
      accent: "text-indigo-400"
    },
    {
      tag: "AI/ML · Evaluation",
      title: "AI Chatbot Evaluation Pipeline",
      problem: "Priceline launched an AI-powered trip search chatbot with no systematic way to detect when it was failing — hallucinating fares, returning biased results, or regressing on core flows.",
      approach: "Owned end-to-end evaluation framework: defined failure taxonomies, built hallucination detection and bias scoring pipelines, designed LLM regression test suites across multi-turn booking flows.",
      outcome: "Reduced production failure rate and improved CSAT by 38%.",
      color: "from-purple-900 to-pink-900",
      accent: "text-purple-400"
    }
  ];

  const sideProjects = [
    { title: "Fake News Buster", desc: "Detect whether a news snippet is real or fake using AI.", link: "https://ibrahimali94-fake-news-buster.hf.space" },
    { title: "Price Drop Oracle", desc: "AI-powered price prediction — buy now or wait?", link: "https://ibrahimali94-price-drop-oracle.hf.space" },
    { title: "Event Sellout Predictor", desc: "Predict event sellout probability from demand signals.", link: "https://ibrahimali94-event-sellout-predictor.hf.space" },
    { title: "Experiment Roulette", desc: "Spin for quirky, testable A/B experiment ideas.", link: "https://ibrahimali94-experiment-roulette.hf.space" },
    { title: "AI Travel Buddy", desc: "Budget-friendly travel itineraries powered by AI.", link: "https://ibrahimali94-ai-travel-buddy.hf.space" },
    { title: "AI Time Machine", desc: "AI-generated historical insights from any era.", link: "https://ibrahimali94-ai-time-machine.hf.space" }
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-2">Case Studies</h2>
      <p className="text-gray-400 mb-10 text-sm">Selected work from Priceline — problem, approach, and outcome.</p>

      <div className="space-y-6 mb-20">
        {caseStudies.map((cs, i) => (
          <div key={i} className={`rounded-2xl p-6 bg-gradient-to-r ${cs.color} border border-gray-700`}>
            <span className={`text-xs font-semibold uppercase tracking-widest ${cs.accent} mb-2 block`}>{cs.tag}</span>
            <h3 className="text-xl font-bold text-white mb-4">{cs.title}</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className={`font-semibold ${cs.accent} mb-1`}>Problem</p>
                <p className="text-gray-300">{cs.problem}</p>
              </div>
              <div>
                <p className={`font-semibold ${cs.accent} mb-1`}>Approach</p>
                <p className="text-gray-300">{cs.approach}</p>
              </div>
              <div>
                <p className={`font-semibold ${cs.accent} mb-1`}>Outcome</p>
                <p className="text-gray-300">{cs.outcome}</p>
                {cs.link && (
                  <a href={cs.link} target="_blank" rel="noopener noreferrer"
                    className={`mt-2 inline-block text-xs underline ${cs.accent} hover:opacity-80`}>
                    {cs.linkLabel} →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-2">Side Projects</h2>
      <p className="text-gray-400 mb-8 text-sm">AI experiments and prototypes built for fun and learning.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {sideProjects.map((p, i) => (
          <a key={i} href={p.link} target="_blank" rel="noopener noreferrer"
            className="rounded-2xl shadow-lg p-5 bg-gray-800 hover:bg-gray-700 transition-transform transform hover:-translate-y-1 hover:shadow-xl block">
            <h3 className="font-semibold text-base mb-1 text-white">{p.title}</h3>
            <p className="text-gray-400 text-sm">{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
