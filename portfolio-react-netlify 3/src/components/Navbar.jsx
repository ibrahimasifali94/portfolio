export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Ibrahim Ali</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#experience" className="hover:text-blue-400">Experience</a>
          <a href="#education" className="hover:text-blue-400">Education</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  )
}