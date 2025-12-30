import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-page animated gradient background */}
      <div
        className="absolute inset-0 -z-10 animate-gradient-bg"
        style={{
          background:
            'linear-gradient(270deg, #3b82f6, #06b6d4, #14b8a6, #0ea5e9, #f472b6, #facc15, #3b82f6)',
          backgroundSize: '1000% 1000%',
          opacity: 0.6,
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 transition-colors">
        {/* Wrap each section in a container that inherits animated gradient */}
        <div className="animate-gradient-bg-section">
          <Header />
        </div>
        <div className="animate-gradient-bg-section">
          <Hero />
        </div>
        <div className="animate-gradient-bg-section">
          <About />
        </div>
        <div className="animate-gradient-bg-section">
          <Education />
        </div>
        <div className="animate-gradient-bg-section">
          <Skills />
        </div>
        <div className="animate-gradient-bg-section">
          <Experience />
        </div>
        <div className="animate-gradient-bg-section">
          <Projects />
        </div>
        <div className="animate-gradient-bg-section">
          <Certifications />
        </div>
        <div className="animate-gradient-bg-section">
          <Contact />
        </div>
        <div className="animate-gradient-bg-section">
          <Footer />
        </div>
      </div>

      {/* Inline keyframes for gradient animation */}
      <style>
        {`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          /* Full page background */
          .animate-gradient-bg {
            animation: gradient 25s ease infinite;
          }

          /* Individual section background overlay */
          .animate-gradient-bg-section {
            background: linear-gradient(270deg, #3b82f6, #06b6d4, #14b8a6, #0ea5e9, #f472b6, #facc15, #3b82f6);
            background-size: 1000% 1000%;
            animation: gradient 25s ease infinite;
            transition: background 0.5s;
          }
        `}
      </style>
    </div>
  );
}

export default App;
