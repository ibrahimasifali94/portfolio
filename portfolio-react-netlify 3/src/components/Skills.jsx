import { Brain, BarChart3, Users, Wrench, Rocket } from "lucide-react";

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="space-y-10">

        {/* Product Leadership */}
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-3">
            <Rocket className="w-5 h-5 mr-2 text-blue-400" /> Product Leadership
          </h3>
          <p className="text-gray-300">
            Product Management • Strategy • Roadmapping • Growth Strategies •
            Product-Led Growth • Leadership • Stakeholder Management • Project
            Management • Communication • Negotiation • Public Speaking
          </p>
        </div>

        {/* AI & Data */}
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-3">
            <Brain className="w-5 h-5 mr-2 text-purple-400" /> AI & Data
          </h3>
          <p className="text-gray-300">
            Artificial Intelligence (AI) • Neural Networks • Machine Learning •
            Data Analytics • Data Mining • Predictive Modeling • ETL • CI/CD •
            Experimentation
          </p>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-3">
            <Wrench className="w-5 h-5 mr-2 text-green-400" /> Tools & Platforms
          </h3>
          <p className="text-gray-300">
            SQL • PostgreSQL • Google BigQuery • Amazon Redshift • Oracle •
            Snowflake • Python • R • Java • C++ • Matlab • HTML • Tableau •
            Looker • Power BI • Excel • PowerPoint • Apache Airflow • dbt
          </p>
        </div>

        {/* Marketing & Growth */}
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-3">
            <BarChart3 className="w-5 h-5 mr-2 text-pink-400" /> Marketing & Growth
          </h3>
          <p className="text-gray-300">
            SEM • Google Analytics • Adwords • Content Management • Digital
            Marketing • Social Media • Social Networking • Market Research •
            Product Marketing • Customer Service
          </p>
        </div>

        {/* Business & Ops */}
        <div>
          <h3 className="flex items-center text-xl font-semibold mb-3">
            <Users className="w-5 h-5 mr-2 text-yellow-400" /> Business & Operations
          </h3>
          <p className="text-gray-300">
            SaaS • CRM • OEM Management • Procurement • Suppliers • Purchase
            Orders • Reporting & Analysis • Customer Product Training
          </p>
        </div>

      </div>
    </div>
  );
}
