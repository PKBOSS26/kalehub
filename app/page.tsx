"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Effect to load the theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    localStorage.setItem('theme', !isDarkTheme ? 'dark' : 'light');
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-6 ${
        isDarkTheme ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-100 to-blue-50'
      }`}
    >
      <header className="flex flex-col items-center text-center my-12 relative">
        <h1 className={`text-4xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>
          Hello, I’m Pratik Kale
        </h1>
        <p className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
          A Full Stack Web Developer passionate about building impactful web applications.
        </p>
        <button
          onClick={toggleTheme}
          className={`absolute right-4 p-2 rounded focus:outline-none ${
            isDarkTheme ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          aria-label="Toggle theme"
        >
          {isDarkTheme ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0zm0 18A8 8 0 1 1 10 2a8 8 0 0 1 0 16zm-1-14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0V4zm5.657 1.343a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707zM4 9a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2h1zm12 0a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2h1zm-6 5a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0v1zM4.343 14.657a1 1 0 1 1-1.414-1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 1 1 1.414 1.414l.707.707zM16.657 16.657a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707zM10 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 0 1 1.707 19.167A7 7 0 1 0 3.833 12A10 10 0 0 1 10 0zM10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
              <path d="M15 9a5.002 5.002 0 0 0-4-4.898V5a1 1 0 0 1-2 0v1.102A5.002 5.002 0 0 0 5 9a5.002 5.002 0 0 0 4 4.898V15a1 1 0 0 1 2 0v-1.102A5.002 5.002 0 0 0 15 9z" />
            </svg>
          )}
        </button>
      </header>

      <section className="w-full max-w-lg text-center mb-12">
        <h2 className={`text-2xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-700'} mb-4`}>
          About Me
        </h2>
        <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
          I specialize in building dynamic, responsive web applications using modern frameworks
          and technologies like Next.js, TypeScript, and Node.js. Here’s a look at some of my live projects.
        </p>
      </section>

      <section className="w-full max-w-lg text-center">
        <h2 className={`text-2xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-700'} mb-4`}>
          Projects
        </h2>
        <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'} mb-6`}>
          *Projects may take a few seconds to load
        </p>
        <ul className="space-y-4">
          <li>
            <a
              href="https://speedenchat.kalehub.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium ${isDarkTheme ? 'text-blue-400 hover:text-blue-600' : 'text-blue-600 hover:text-blue-800'}`}
            >
              Real-time Chat Application
            </a>
          </li>
          <li>
            <a
              href="https://psocial.kalehub.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium ${isDarkTheme ? 'text-blue-400 hover:text-blue-600' : 'text-blue-600 hover:text-blue-800'}`}
            >
              Social Media Application
            </a>
          </li>
        </ul>
      </section>

      <footer className="mt-12 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} Pratik Kale | kalehub.com</p>
        <p className={`text-sm mt-2 ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
          This website is a work in progress. Stay tuned for updates!
        </p>
      </footer>
    </div>
  );
}
