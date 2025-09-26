export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl shadow-lg p-4 bg-gray-800">
          <h3 className="font-semibold mb-2">📰 Fake News Buster</h3>
          <iframe src="https://huggingface.co/spaces/yourname/fake-news-buster" width="100%" height="400" style={{border:"none"}}></iframe>
        </div>
        <div className="rounded-2xl shadow-lg p-4 bg-gray-800">
          <h3 className="font-semibold mb-2">🕰️ AI Time Machine</h3>
          <iframe src="https://huggingface.co/spaces/yourname/ai-time-machine" width="100%" height="400" style={{border:"none"}}></iframe>
        </div>
      </div>
    </div>
  )
}