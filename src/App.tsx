import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ThreeScene from "./components/ThreeScene";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100">
      <div className="fixed inset-0 z-0">
        <ThreeScene />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 text-center">
          <div className="container mx-auto px-4">
            <p>
              &copy; {new Date().getFullYear()} Nadun Malinda Jayaweera. All
              rights reserved.
            </p>
          </div>
          <p className="text-red-600">test</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
