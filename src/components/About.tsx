import { Heart, Microscope, Cpu, Target } from 'lucide-react';

export default function About() {
  const interests = [
    { icon: Heart, title: 'Medical Devices', description: 'Exploring innovative medical equipment and diagnostic tools' },
    { icon: Cpu, title: 'Healthcare Technology', description: 'Integrating technology solutions in modern healthcare' },
    { icon: Microscope, title: 'Lab Instruments', description: 'Understanding diagnostic equipment and laboratory systems' },
    { icon: Target, title: 'Career Goals', description: 'Pursuing excellence in hospital, research, or industry settings' },
  ];

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
    >
      {/* Background animation using absolute div */}
      <div className="absolute inset-0 animate-[gradient_8s_ease_infinite] bg-[linear-gradient(270deg,#60a5fa,#06b6d4,#60a5fa)] bg-[length:600%_600%] -z-10 opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800/50 p-8 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a dedicated <span className="font-semibold text-blue-600 dark:text-cyan-400">Biomedical Technology</span> student at the Gampaha Wickramarachchi University of Indigenous Medicine, building a strong foundation at the intersection of medicine and technology.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My academic journey is driven by a passion for understanding how medical devices and healthcare technology can improve patient care and outcomes.
            </p>
          </div>
        </div>

        {/* Interests Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group relative overflow-hidden p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform hover:scale-105"
            >
              {/* Gradient hover overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(270deg,#60a5fa,#06b6d4,#60a5fa)] bg-[length:600%_600%] opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-[gradient_8s_ease_infinite] -z-10 rounded-xl"></div>

              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                <interest.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{interest.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Tailwind animation */}
      <style>
        {`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-[gradient_8s_ease_infinite] {
            animation: gradient 8s ease infinite;
          }
        `}
      </style>
    </section>
  );
}
