export default function Hero() {
  // Google Analytics event helper
  const trackEvent = (action, label) => {
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: "engagement",
        event_label: label,
      });
    }
  };

  return (
    <div className="relative h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 gap-12 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-700 animate-gradient-x opacity-70"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Photo with Glow */}
        <div className="relative">
          <img
            src="/me.jpg"
            alt="Profile"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-xl border-4 border-gray-800 relative z-10"
          />
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-40 animate-pulse"></div>
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
            Ibrahim Ali
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Senior Product Manager | AI & Experimentation | Growth Strategist
          </p>

          <div className="space-x-4">
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("resume_download", "Resume PDF")}
              className="px-5 py-3 bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition transform inline-block"
            >
              Download Resume
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/ibrahimasifali94"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("github_click", "GitHub Profile")}
              className="px-5 py-3 bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 hover:-translate-y-1 transition transform inline-block"
            >
              GitHub
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com/in/ibrahimaali"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("linkedin_click", "LinkedIn Profile")}
              className="px-5 py-3 bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 hover:-translate-y-1 transition transform inline-block"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
