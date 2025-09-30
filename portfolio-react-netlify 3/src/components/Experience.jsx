export default function Experience() {
  const experiences = [
    {
      company: "Priceline",
      role: "Senior Product Manager",
      years: "2023 – Present",
      bullets: [
        "Led AI/ML initiatives in flight & hotel prediction models.",
        "Developed GenAI evaluation frameworks for product experimentation.",
        "Owned A/B testing platform strategy, accelerating decision-making speed."
      ]
    },
    {
      company: "Aterian",
      role: "Senior Data Analyst / Product Analytics",
      years: "2019 – 2023",
      bullets: [
        "Designed recommendation engines that improved sales performance across multiple product lines.",
        "Drove $2M+ incremental revenue by running 100+ A/B tests.",
        "Partnered with product and engineering leadership to shape data-informed roadmaps."
      ]
    },
    {
      company: "IBM",
      role: "Product Researcher",
      years: "2018",
      bullets: [
        "Built IoT-based supply chain tracking reducing damage costs by 2%.",
        "Prototyped predictive analytics tools in collaboration with engineers."
      ]
    },
    {
      company: "Zoho",
      role: "Product Marketing Analyst",
      years: "2016 – 2017",
      bullets: [
        "Launched GTM strategies that increased SaaS product adoption.",
        "Created pricing experiments that improved conversions by 18%.",
        "Delivered cross-functional marketing campaigns aligned with product roadmap."
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold">
              {exp.role} <span className="text-gray-400">• {exp.company}</span>
            </h3>
            <p className="text-gray-500 mb-3">{exp.years}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
