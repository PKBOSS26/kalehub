export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center justify-center h-[60vh] mb-8">
        <h1 className="text-2xl font-bold mt-4">Hello, Pratik Here!</h1>
        <p className="text-lg mt-2 text-center">
          Soon this site will be updated. Thanks for visiting!
        </p>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-semibold">My Live Projects:</h2>
        <h3 className="text-gray-600">It may take up to a minute to load</h3>
        <a
          href="https://speedenchat.kalehub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Realtime Chat Application
        </a>
        <a
          href="https://psocial.kalehub.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Social Media Application
        </a>
      </div>
    </div>
  );
}
