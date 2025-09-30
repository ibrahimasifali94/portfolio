export default function Hero() {
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 gap-8">
      {/* Profile Photo */}
      <img
        src="/me.jpg"
        alt="Profile"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-gray-700"
      />

      {/* Text Content */}
      <div>
        <h1 className="text-5xl font-extrabold mb-4">Ibrahim Ali</h1>
        <p className="text-lg text-gray-300 mb-6">
          AI Product Manager | Experimentation & Analytics | Quirky AI Apps
        </p>

        <div className="space-x-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 bg-blue-600 rounded-lg shadow hover:bg-blue-700"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/ibrahimasifali94"
            target="_blank"
            className="px-4 py-2 bg-gray-700 rounded-lg shadow hover:bg-gray-600"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ibrahimaali"
            target="_blank"
            className="px-4 py-2 bg-gray-700 rounded-lg shadow hover:bg-gray-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
