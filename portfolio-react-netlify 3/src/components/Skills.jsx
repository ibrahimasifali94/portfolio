export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Product Management</h3>
          <p className="text-gray-400">Roadmaps, Agile, Stakeholder Management</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Data & AI</h3>
          <p className="text-gray-400">GenAI, Recommenders, Predictive Analytics</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Analytics</h3>
          <p className="text-gray-400">A/B Testing, SQL, Python, Tableau, Looker</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Business</h3>
          <p className="text-gray-400">GTM, Pricing, Market Research</p>
        </div>
      </div>
    </div>
  )
}