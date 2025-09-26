export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-10 items-center">
      <img src="/me.jpg" alt="Profile" className="rounded-2xl shadow-lg" />
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 mb-4">
          Product Manager with expertise in AI, data analytics, and experimentation platforms.
          Experienced in leading cross-functional teams to deliver data-driven products that improve
          customer experience, accelerate growth, and reduce costs.
        </p>
        <p className="text-gray-400">
          Passionate about quirky AI projects, creative experimentation, and building delightful product experiences.
        </p>
      </div>
    </div>
  )
}