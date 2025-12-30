import { Stethoscope, FlaskConical, Wrench, Building2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      icon: Building2,
      title: 'Hospital Training',
      description: 'Hands-on experience in clinical environment, observing medical equipment operation and patient care protocols.',
      skills: ['Patient Safety', 'Medical Equipment', 'Clinical Protocols'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FlaskConical,
      title: 'Laboratory Practical Sessions',
      description: 'Extensive lab work involving various diagnostic equipment, specimen analysis, and quality control procedures.',
      skills: ['Lab Techniques', 'Quality Control', 'Data Analysis'],
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: Wrench,
      title: 'Equipment Maintenance',
      description: 'Training in preventive maintenance, calibration, and troubleshooting of medical laboratory equipment.',
      skills: ['Calibration', 'Troubleshooting', 'Documentation'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Stethoscope,
      title: 'Clinical Environment',
      description: 'Exposure to real-world healthcare settings, understanding workflow and interdisciplinary collaboration.',
      skills: ['Teamwork', 'Communication', 'Healthcare Standards'],
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Practical Training & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all hover:transform hover:scale-[1.02] animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                <exp.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                {exp.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
