import { motion } from 'framer-motion';
import { FileDown, Eye, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Resume / CV</h2>
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-1 md:p-4 border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Resume Preview Placeholder */}
          <div className="bg-slate-800 rounded-xl w-full aspect-[1/1.4] flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent"></div>
            
            <FileText size={120} className="text-sky-500/20 mb-8 transform group-hover:scale-110 transition-transform duration-500" />
            
            <div className="text-center z-10 px-6">
              <h3 className="text-2xl font-bold text-white mb-2">Portfolio_Resume.pdf</h3>
              <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                Click preview to view my full academic and professional background in detail.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/mkCV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg flex items-center gap-2 transition-all transform hover:scale-105"
                >
                  <Eye size={20} /> Preview CV
                </a>
                <a 
                  href="/mkCV.pdf" 
                  download="Mukesh_Kumar_Singh_Resume.pdf"
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold rounded-lg flex items-center gap-2 transition-all transform hover:scale-105"
                >
                  <FileDown size={20} /> Download CV
                </a>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-500 to-blue-600"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
