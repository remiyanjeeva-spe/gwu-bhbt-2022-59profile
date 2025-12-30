import { Heart, Mail, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Remiyan
            </h3>
            <p className="text-gray-400 mb-2">Biomedical Technology Student</p>
            <p className="text-gray-500 text-sm">
              Gampaha Wickramarachchi University of Indigenous Medicine
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:abd@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>abd@gmail.com</span>
              </a>
              <a
                href="tel:+94772830197"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+94 77 283 0197</span>
              </a>
              <a
                href="https://linkedin.com/in/12345kfji"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Remiyan
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {currentYear} Remiyan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
