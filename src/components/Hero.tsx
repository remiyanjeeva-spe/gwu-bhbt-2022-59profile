import { Download, Mail, MapPin, MousePointer2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#f8fafc] dark:bg-[#030712]">
      
      {/* --- Premium Background Elements --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Mesh Gradient */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#3b82f61a 1px, transparent 1px)', size: '40px 40px', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* --- Text Content Section --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm"
            >
              
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent uppercase tracking-wider">
                Biomedical Technology Student
              </span>
            </motion.div>

            {/* Name with Modern Typography */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
              I'm <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Remiyan</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-semibold italic">
              Gampaha Wickramarachchi University of Indigenous Medicine
            </p>

            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
              Passionate about <span className="text-blue-500 font-medium">medical devices</span> and healthcare technology, 
              bridging the gap between medicine and innovation.
            </p>

            {/* Glass Info Card */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-10 text-slate-600 dark:text-slate-400">
              <div className="p-2 rounded-full bg-blue-500/10 text-blue-500">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-medium">Uyitharasan Kulam Murungan, Mannar</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <motion.a
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold shadow-2xl transition-all flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Download className="relative z-10 w-5 h-5" />
                <span className="relative z-10">Download CV</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-8 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold shadow-lg hover:shadow-blue-500/10 flex items-center gap-3 transition-all"
              >
                <Mail className="w-5 h-5 text-blue-500" />
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* --- Premium Profile Section --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Geometric Background Decorations */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>

            {/* Profile Frame */}
            <div className="relative group">
              {/* Animated Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border-2 border-white/50 dark:border-slate-700/50 shadow-2xl">
                <img
                  src="/profile.jpg" 
                  alt="Remiyan Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Stats or Overlay (Optional) */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/20 dark:bg-black/20 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs font-bold text-white uppercase tracking-tighter text-center">Innovating Healthcare</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}