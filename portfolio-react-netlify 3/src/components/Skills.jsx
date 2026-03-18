export default function Skills() {
  const categories = [
    {
      title: "Product & Strategy",
      items: ["Product Vision & Roadmapping", "Go-to-Market Strategy", "Concept-to-Launch Execution", "Customer Segmentation", "Competitive Analysis", "User Research", "Cross-Functional Leadership", "Stakeholder Management", "Influencing Without Authority"]
    },
    {
      title: "Platform & API",
      items: ["API Product Management", "Self-Serve Platform Design", "Data Pipeline Ownership", "Event Modeling", "Platform Migrations", "Replatforming", "GraphQL", "Webhooks", "OpenSearch"]
    },
    {
      title: "AI/ML & Data",
      items: ["GenAI Evaluation", "LLM Product Management", "Recommendation Systems", "ML Model Development", "Observability", "Correctness Monitoring", "SQL", "Python"]
    },
    {
      title: "Experimentation & Analytics",
      items: ["A/B Testing", "Experimentation Platforms", "Stat-Sig Monitoring", "Power Analysis", "MDE", "Funnel Analysis", "Cohort Analysis", "Tableau", "Looker", "Splunk"]
    },
    {
      title: "Tools",
      items: ["JIRA", "Confluence", "Figma", "New Relic", "Agile / Scrum"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <div key={i} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, j) => (
                <span key={j} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
