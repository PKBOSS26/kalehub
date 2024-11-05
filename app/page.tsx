export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-100 to-blue-50">
      <header className="flex flex-col items-center text-center my-12">
        <h1 className="text-4xl font-bold text-gray-800">Hello, I’m Pratik Kale</h1>
        <p className="text-xl text-gray-600 mt-2">
          A Full Stack Web Developer passionate about building impactful web applications.
        </p>
      </header>

      <section className="w-full max-w-lg text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Me</h2>
        <p className="text-gray-600">
          I specialize in building dynamic, responsive web applications using modern frameworks
          and technologies like Next.js, TypeScript, and Node.js. Here’s a look at some of my live projects.
        </p>
      </section>

      <section className="w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Projects</h2>
        <p className="text-sm text-gray-500 mb-6">*Projects may take a few seconds to load</p>
        <ul className="space-y-4">
          <li>
            <a
              href="https://speedenchat.kalehub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Real-time Chat Application
            </a>
          </li>
          <li>
            <a
              href="https://psocial.kalehub.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Social Media Application
            </a>
          </li>
        </ul>
      </section>

      <footer className="mt-12 text-gray-500 text-center">
        <p>© {new Date().getFullYear()} Pratik Kale | kalehub.com</p>
        <p className="text-sm mt-2 text-gray-400">
          This website is a work in progress. Stay tuned for updates!
        </p>
      </footer>
    </div>
  );
}
