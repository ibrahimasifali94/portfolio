export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="text-gray-400 mb-8">
        Open to Senior PM, Strategy, and Analytics Manager roles in Toronto and remote. Feel free to reach out directly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="mailto:iaa37@cornell.edu"
          className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition text-white font-medium">
          iaa37@cornell.edu
        </a>
        <a href="https://linkedin.com/in/ibrahimaali" target="_blank" rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-700 rounded-xl hover:bg-gray-600 transition text-white font-medium">
          LinkedIn
        </a>
        <a href="https://github.com/ibrahimasifali94" target="_blank" rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-700 rounded-xl hover:bg-gray-600 transition text-white font-medium">
          GitHub
        </a>
      </div>
    </div>
  );
}
