import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* <Link to="hero" smooth={true} duration={500} className="cursor-pointer mb-6">
          <span className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent italic">
            MS
          </span>
        </Link> */}

        {/* <p className="text-gray-400 text-center mb-8 max-w-md">
          © {new Date().getFullYear()} मुकेश कुमार सिंह (Mukesh Kumar Singh). All rights reserved.
          Aspiring Software Developer & Data Scientist.
        </p> */}

        <div className="flex gap-6 mb-8">
          {[
            { icon: Github, link: "#" },
            { icon: Linkedin, link: "#" },
            { icon: Mail, link: "#" },
            { icon: Twitter, link: "#" }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.2, y: -5 }}
              href={social.link}
              className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-sky-400 hover:bg-white/10 transition-all border border-white/5"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-500 font-medium">
          <Link to="about" smooth={true} className="hover:text-sky-400 cursor-pointer transition-colors">About</Link>
          <Link to="skills" smooth={true} className="hover:text-sky-400 cursor-pointer transition-colors">Skills</Link>
          <Link to="projects" smooth={true} className="hover:text-sky-400 cursor-pointer transition-colors">Projects</Link>
          <Link to="contact" smooth={true} className="hover:text-sky-400 cursor-pointer transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
