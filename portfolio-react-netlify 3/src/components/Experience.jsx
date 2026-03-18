export default function Experience() {
  const experiences = [
    {
      company: "Priceline (Booking Holdings)",
      role: "Product Manager",
      years: "May 2023 – Present",
      location: "Toronto, ON",
      bullets: [
        "Built an API-first self-serve experimentation platform from scratch with stat-sig monitoring, webhook rollouts, and an ML-ranked test recommender — improving rollout success by 12% and test velocity by 8%.",
        "Launched ML-based search ranking on iOS and Android, owning GTM strategy, customer segmentation, and org-wide insight sharing — driving +8K incremental bookings per year.",
        "Owned the evaluation pipeline for an AI-powered trip search chatbot covering hallucination detection, bias scoring, and LLM regression testing — reducing failure rate and improving CSAT by 38%.",
        "Led a major replatforming initiative migrating high-traffic search to an OpenSearch-based caching pipeline — reducing load time from 13-18s to under 2s and cutting bounce rate by 6%.",
        "Partnered with an external AI vendor on fare optimization across GDS and NDC supply channels — delivering $1.5M in incremental revenue.",
        "Launched the first VCC-based alternative payment method on published bookings — driving +1% CVR lift.",
        "Identified a new customer segment through funnel analysis; owned concept-to-launch for a flexible dates feature — driving +36K incremental bookings per year."
      ]
    },
    {
      company: "Aterian",
      role: "Senior Data Analyst, Product Analytics",
      years: "Jan 2019 – May 2023",
      location: "New York, NY",
      bullets: [
        "Led the product analytics roadmap; designed and shipped a recommendation engine contributing to $2M in annual revenue growth.",
        "Defined KPIs, health monitoring dashboards, and experimentation frameworks — ran A/B tests achieving +5% CVR lift and +15% customer engagement.",
        "Served as analytical thought partner to PM and design leads, influencing product direction across engineering, design, and marketing."
      ]
    },
    {
      company: "IBM",
      role: "Product Researcher",
      years: "Jan 2018 – Jun 2018",
      location: "Poughkeepsie, NY",
      bullets: [
        "Conducted primary research on IoT applications for supply chain optimization — recommendations reduced shipping damage costs by 2%."
      ]
    },
    {
      company: "Zoho",
      role: "Product Marketing Analyst",
      years: "Jun 2016 – Jun 2017",
      location: "Chennai, India",
      bullets: [
        "Executed GTM strategies for SaaS products; tested pricing models and improved onboarding flows — driving +3% trial-to-paid conversions."
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-2 border-blue-500 pl-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
              <h3 className="text-xl font-semibold">
                {exp.role} <span className="text-blue-400">• {exp.company}</span>
              </h3>
              <p className="text-gray-500 text-sm mt-1 md:mt-0">{exp.years} · {exp.location}</p>
            </div>
            <ul className="mt-3 space-y-2">
              {exp.bullets.map((b, i) => (
                <li key={i} className="text-gray-300 text-sm flex gap-2">
                  <span className="text-blue-400 mt-1 shrink-0">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
