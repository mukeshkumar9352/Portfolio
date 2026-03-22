import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology – Computer Science and Engineering",
      school: "Lovely Professional University, Phagwara, Punjab",
      year: "CGPA: 7.02",
      score: "Ongoing",
      description: "Focused on core CS fundamentals, algorithms, and data structures."
    },
    {
      degree: "Intermediate Education",
      school: "Sir Padampat Singhania School, Kota, Rajasthan",
      year: "Percentage: 80%",
      score: "Distinction",
      description: "Science stream with Mathematics and Computer Science."
    },
    {
      degree: "Matriculation",
      school: "Army Public School, Kota, Rajasthan",
      year: "Percentage: 75%",
      score: "Distinction",
      description: "Foundational secondary education."
    }
  ];


  return (
    <section id="education" className="section-padding overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 to-transparent rounded-full shadow-[0_0_15px_rgba(56,189,248,0.3)]"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between md:justify-normal w-full group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dots */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-sky-500 rounded-full border-4 border-slate-900 z-10 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>

                {/* Content Card */}
                <div className={`w-[calc(100%-2rem)] md:w-[45%] ml-8 md:ml-0 glass-card p-6 border border-white/10 hover:border-sky-500/50 transition-all duration-300`}>
                  <div className="flex items-center gap-2 text-sky-400 mb-2">
                    <GraduationCap size={20} />
                    <span className="text-sm font-bold uppercase tracking-wider">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <School size={16} />
                    <span className="text-sm">{item.school}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <div className="inline-block px-3 py-1 bg-sky-500/10 text-sky-400 text-sm font-bold rounded border border-sky-500/20">
                    {item.score}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
