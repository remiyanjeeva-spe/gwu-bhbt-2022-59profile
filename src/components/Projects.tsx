import { FolderOpen, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Medical Device Analysis Project',
      description: 'Comprehensive study and analysis of various medical monitoring devices, examining their functionality, specifications, and clinical applications.',
      tools: ['ECG Monitors', 'Pulse Oximeters', 'Blood Pressure Devices'],
      outcome: 'Enhanced understanding of device operation principles and patient safety protocols.',
      category: 'Research',
    },
    {
      title: 'Lab Equipment Maintenance Documentation',
      description: 'Created detailed maintenance and calibration documentation for laboratory equipment, ensuring compliance with safety standards.',
      tools: ['Technical Writing', 'Quality Standards', 'Safety Protocols'],
      outcome: 'Improved equipment tracking and maintenance scheduling efficiency.',
      category: 'Documentation',
    },
    {
      title: 'Healthcare Web Application',
      description: 'Developed a web-based application for managing patient monitoring data and medical equipment inventory using modern web technologies.',
      tools: ['HTML/CSS', 'JavaScript', 'Database Management'],
      outcome: 'Successfully implemented a functional prototype for healthcare data management.',
      category: 'Development',
    },
    {
      title: 'Biomedical Instrumentation Study',
      description: 'In-depth research project on modern biomedical instrumentation, focusing on imaging systems and diagnostic equipment.',
      tools: ['Medical Imaging', 'Research Methods', 'Data Analysis'],
      outcome: 'Gained comprehensive knowledge of imaging technologies and their clinical applications.',
      category: 'Research',
    },
  ];

  const categoryColors = {
    Research: 'from-blue-500 to-cyan-500',
    Documentation: 'from-teal-500 to-green-500',
    Development: 'from-cyan-500 to-blue-500',
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Projects & Assignments
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all hover:transform hover:scale-[1.02] animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[project.category as keyof typeof categoryColors]} rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                  <FolderOpen className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded-full text-sm font-semibold">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Tools & Equipment:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs border border-gray-300 dark:border-gray-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Outcome:
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  {project.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
