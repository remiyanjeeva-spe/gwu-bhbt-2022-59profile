import { Activity, Cpu, Code, FileText, Shield, Wrench } from 'lucide-react';

export default function Skills() {
  const medicalSkills = [
    { name: 'ECG & EEG', level: 75, icon: Activity },
    { name: 'Patient Monitoring Systems', level: 70, icon: Activity },
    { name: 'Medical Imaging Basics', level: 65, icon: Activity },
    { name: 'Lab Equipment Handling', level: 80, icon: Wrench },
    { name: 'Calibration & Safety', level: 75, icon: Shield },
  ];

  const technicalSkills = [
    { name: 'MS Office Suite', level: 90, icon: FileText },
    { name: 'Data Recording & Reporting', level: 85, icon: FileText },
    { name: 'Web Development', level: 70, icon: Code },
    { name: 'Equipment Documentation', level: 80, icon: FileText },
    { name: 'ICT & Computer Systems', level: 85, icon: Cpu },
  ];

  const softSkills = [
    'Communication',
    'Teamwork',
    'Attention to Detail',
    'Patient Safety Awareness',
    'Time Management',
    'Problem Solving',
    'Critical Thinking',
    'Adaptability',
  ];

  const SkillBar = ({ skill }: { skill: typeof medicalSkills[0] }) => (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <skill.icon className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-blue-600 dark:text-cyan-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800/50 p-8 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-700 animate-slideInLeft">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                <Activity className="w-7 h-7 text-blue-600 dark:text-cyan-400" />
                Medical & Biomedical Skills
              </h3>
              <div className="space-y-6">
                {medicalSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-800/50 p-8 rounded-2xl shadow-lg border border-teal-100 dark:border-gray-700 animate-slideInRight">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                <Cpu className="w-7 h-7 text-blue-600 dark:text-cyan-400" />
                Technical & IT Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-slideInUp">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
              Soft Skills & Personal Qualities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl text-white text-center font-semibold shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
