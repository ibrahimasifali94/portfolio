export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Profile Photo */}
      <img
        src="/me.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full mb-6 shadow-lg border-4 border-gray-700"
      />

      {/* Name */}
      <h1 className="text-5xl font-extrabold mb-4">Ibrahim Ali</h1>

      {/* Tagline */}
      <p className="text-lg text-gray-300 mb-6">
        AI Product Manager | Experimentation & Analytics | Quirky AI Apps
      </p>

      {/* Buttons */}
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
  );
}
