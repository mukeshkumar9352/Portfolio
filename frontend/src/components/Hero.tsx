import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';



const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left md:w-3/5 order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Mukesh Kumar Singh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6 font-medium">
              <Typewriter
                words={['Software Developer', 'Data Analysis']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="max-w-xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
              B.Tech Computer Science student at Lovely Professional University.
              Passionate about building scalable applications and solving complex problems using Java and Python.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="projects" smooth={true} duration={500}>
                <button className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-sky-500/25">
                  View Projects <ExternalLink size={20} />
                </button>
              </Link>
              <a
                href="/mkCV.pdf"
                download="Mukesh_Kumar_Singh_Resume.pdf"
                className="px-8 py-3 bg-transparent border-2 border-sky-500 text-sky-400 hover:bg-sky-500/10 font-semibold rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Download Resume <FileText size={20} />
              </a>
            </div>

            <div className="flex gap-6">
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="https://github.com/mukeshkumar9352"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={32} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="https://www.linkedin.com/in/mukesh-kumarmk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={32} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                href="mailto:mky21146@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={32} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-2/5 flex justify-center md:justify-end order-1 md:order-2 mb-10 md:mb-0"
          >
            <div className="relative inline-block group">
              {/* Animated Gradient Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              {/* Inner Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-sky-500/10 animate-pulse"></div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="relative"
              >
                {/* <img
                  src="/MINE.png"
                  alt="Mukesh Kumar Singh"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-slate-900 object-cover bg-black shadow-2xl"
                  onError={(e: any) => {
                    e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Mukesh";
                  }}
                /> */}

                {/* Subtle Overlay Shine */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
