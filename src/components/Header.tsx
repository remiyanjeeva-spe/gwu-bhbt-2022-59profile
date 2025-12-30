import { Moon, Sun, Menu, X } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll pannumpothu header background change aga
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
        ? 'py-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/50 shadow-2xl' 
        : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo with Glow Effect */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
          className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm"
        >
          Remiyan
        </motion.a>

        {/* Desktop Menu - Glass Pills */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-1.5 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-full border border-white/30 dark:border-gray-700/30 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-pink-400 transition-all duration-300 rounded-full hover:bg-white/40 dark:hover:bg-gray-700/40"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2" />

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-white/40 dark:bg-gray-800/40 border border-white/50 dark:border-gray-700/50 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 group"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-90 transition-transform duration-500" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700 group-hover:-rotate-12 transition-transform duration-500" />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white/40 dark:bg-gray-800/40 border border-white/50 dark:border-gray-700/50"
          >
            {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-800 dark:text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Glass Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border-b border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-5">
              {navItems.map((item, index) => (
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-pink-400 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}