import { Award, Trophy, FileCheck, Sparkles } from 'lucide-react';

export default function Certifications() {
  const achievements = [
    {
      icon: Trophy,
      title: 'First Place - Provincial Javelin Competition',
      description: 'Achieved first place in the Provincial Javelin Competition, demonstrating athletic excellence and competitive spirit.',
      category: 'Athletics',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Award,
      title: 'Second Place - Grade 10 Social Science Competition',
      description: 'Secured second place in the Grade 10 Social Science Competition, showcasing academic prowess and research skills.',
      category: 'Academic',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const certifications = [
    {
      title: 'Biomedical Equipment Safety Training',
      issuer: 'University Medical Training Program',
      description: 'Comprehensive safety protocols for handling medical equipment',
    },
    {
      title: 'Medical Equipment Handling Course',
      issuer: 'Healthcare Technology Institute',
      description: 'Certified in proper operation and maintenance of medical devices',
    },
    {
      title: 'Clinical Environment Safety Workshop',
      issuer: 'Hospital Training Division',
      description: 'Patient safety awareness and clinical best practices',
    },
    {
      title: 'Laboratory Safety & Quality Control',
      issuer: 'Medical Laboratory Standards Board',
      description: 'Lab safety procedures and quality assurance protocols',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white flex items-center justify-center gap-3">
            
              Notable Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all hover:transform hover:scale-[1.02] animate-slideInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-bl-full"></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>

                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded-full text-sm font-semibold mb-3">
                      {achievement.category}
                    </span>

                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                      {achievement.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white flex items-center justify-center gap-3">
              <FileCheck className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
              Professional Certifications & Workshops
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all hover:transform hover:scale-[1.02] animate-slideInUp"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 text-gray-800 dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-cyan-400 font-semibold mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
