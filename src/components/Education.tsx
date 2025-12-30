import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      icon: GraduationCap,
      degree: 'Bachelor of Biomedical Technology',
      institution: 'Gampaha Wickramarachchi University of Indigenous Medicine',
      status: 'Currently Reading',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      degree: 'Diploma in English',
      institution: 'ESOFT Campus',
      status: 'Completed',
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: Award,
      degree: 'Diploma in Information and Communication Technology (ICT)',
      institution: 'ESOFT Campus',
      status: 'Completed',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: BookOpen,
      degree: 'Secondary Education',
      institution: "St. Xavier's Boys' College",
      status: 'Completed',
      color: 'from-green-500 to-teal-500',
    },
  ];

  const subjects = [
    'Human Anatomy & Physiology',
    'Medical Instrumentation',
    'Biomedical Electronics',
    'Web Development',
    'Imaging Systems',
    'Clinical Engineering Basics',
  ];

  return (
    <section
      id="education"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
    >
      {/* Background animated gradient */}
      <div className="absolute inset-0 animate-[gradient_8s_ease_infinite] bg-[linear-gradient(270deg,#60a5fa,#06b6d4,#60a5fa)] bg-[length:600%_600%] -z-10 opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto grid gap-6 mb-12">
          {education.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card animated gradient overlay */}
              <div className={`absolute inset-0 bg-[linear-gradient(270deg,#60a5fa,#06b6d4,#60a5fa)] bg-[length:600%_600%] opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-[gradient_8s_ease_infinite] -z-10 rounded-xl`}></div>

              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.degree}</h3>
                    <span
                      className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                        item.status === 'Currently Reading'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-cyan-400'
                          : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{item.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Subjects */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative overflow-hidden">
          {/* Overlay gradient animation */}
          <div className="absolute inset-0 bg-[linear-gradient(270deg,#60a5fa,#06b6d4,#60a5fa)] bg-[length:600%_600%] opacity-20 animate-[gradient_8s_ease_infinite] -z-10 rounded-xl"></div>

          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
            Relevant Subjects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-700/50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline keyframes for gradient animation */}
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
