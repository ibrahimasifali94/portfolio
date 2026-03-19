export default function Hero() {
  const trackEvent = (action, label) => {
    if (window.gtag) {
      window.gtag("event", action, { event_category: "engagement", event_label: label });
    }
  };

  return (
    <div className="relative h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 gap-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-700 animate-gradient-x opacity-70"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="relative">
          <img src="/me.jpg" alt="Ibrahim Ali"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-xl border-4 border-gray-800 relative z-10" />
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-40 animate-pulse"></div>
        </div>

        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3 text-white drop-shadow-lg">Ibrahim Ali</h1>
          <p className="text-xl md:text-2xl text-blue-300 font-semibold mb-2">Product Manager</p>
          <p className="text-base md:text-lg text-gray-300 mb-2 max-w-xl">
            5+ years shipping platform infrastructure, AI/ML products, and consumer-facing features at{" "}
            <span className="text-white font-semibold">Priceline (Booking Holdings)</span>.
          </p>
          <p className="text-sm text-gray-400 mb-8 max-w-xl">
            Based in Toronto. Open to Senior PM and Strategy roles in fintech, AI, B2B SaaS, and platforms.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              onClick={() => trackEvent("resume_download", "Resume PDF")}
              className="px-5 py-3 bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition transform inline-block text-white font-medium">
              Download Resume
            </a>
            <a href="https://linkedin.com/in/ibrahimaali" target="_blank" rel="noopener noreferrer"
              onClick={() => trackEvent("linkedin_click", "LinkedIn")}
              className="px-5 py-3 bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 hover:-translate-y-1 transition transform inline-block text-white font-medium">
              LinkedIn
            </a>
            <a href="https://github.com/ibrahimasifali94" target="_blank" rel="noopener noreferrer"
              onClick={() => trackEvent("github_click", "GitHub")}
              className="px-5 py-3 bg-gray-700 rounded-xl shadow-lg hover:bg-gray-600 hover:-translate-y-1 transition transform inline-block text-white font-medium">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
