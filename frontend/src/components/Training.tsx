import { motion } from 'framer-motion';
import { BookOpen, Calendar } from 'lucide-react';

const Training = () => {
  const trainings = [
    {
      title: "Java and MySQL: Application Development",
      organization: "LPU (Lovely Professional University)",
      duration: "Intensive Course",
      description: "Gained practical experience in core Java programming and used JDBC with MySQL to build efficient, data-driven applications. Developed interactive GUIs and implemented Socket Programming.",
      tech: ["Java", "MySQL", "GUI", "JDBC", "Sockets"]
    }
  ];


  return (
    <section id="training" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Training & Internships</h2>
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen size={64} className="text-sky-400" />
              </div>
              
              <div className="flex items-center gap-2 text-sky-400 mb-4">
                <Calendar size={18} />
                <span className="text-sm font-medium">{training.duration}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{training.title}</h3>
              <p className="text-sky-500 font-medium mb-4">{training.organization}</p>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {training.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {training.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
