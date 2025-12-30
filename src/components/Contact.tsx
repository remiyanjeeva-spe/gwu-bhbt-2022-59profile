import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jeevaremiyan@gmail.com',
      href: 'jeevaremiyan@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 77 283 0197',
      href: 'tel:+94772830197',
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'https://linkedin.com/in/12345kfji',
      href: 'https://linkedin.com/in/12345kfji',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mannar, Sri Lanka',
      href: null,
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to connect!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all hover:transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform mx-auto`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 text-center">
                  {info.label}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-800 dark:text-white font-medium hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-center block break-words"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-800 dark:text-white font-medium text-center">
                    {info.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 md:p-12 rounded-2xl shadow-2xl text-white text-center animate-slideInUp">
            <Send className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Ready to Connect?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              I'm always open to discussing biomedical technology, medical devices, healthcare innovation, or potential opportunities in the field.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:abd@gmail.com"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Send Email
              </a>
              <a
                href="tel:+94772830197"
                className="px-8 py-4 bg-blue-800 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
