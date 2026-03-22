import { motion } from 'framer-motion';
import { 
  Layers, 
  Globe, 
  Wrench,
  Terminal
} from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon, color }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="glass-card p-6 border border-white/10 hover:border-sky-500/50 transition-all duration-300 shadow-xl"
  >
    <div className={`p-3 rounded-lg w-fit mb-4 bg-white/5 ${color}`}>
      <Icon className="text-sky-400" size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill: string) => (
        <span 
          key={skill} 
          className="px-3 py-1 text-sm bg-sky-500/10 text-sky-300 border border-sky-500/20 rounded-full hover:bg-sky-500/20 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Python', 'C', 'Java'],
      icon: Terminal,
      color: 'text-blue-400'
    },
    {
      title: 'Tools / Platforms',
      skills: ['MySQL', 'VS Code', 'Cisco Packet', 'Automation Anywhere'],
      icon: Wrench,
      color: 'text-sky-400'
    },
    {
      title: 'Soft Skills',
      skills: ['Problem-Solving', 'Team Player', 'Adaptability'],
      icon: Globe,
      color: 'text-emerald-400'
    },
    {
      title: 'Database & Others',
      skills: ['JDBC', 'Sockets', 'Socket Programming', 'Data Analysis'],
      icon: Layers,
      color: 'text-purple-400'
    }
  ];


  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -ml-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of computer science and data analysis.
          </p>
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <SkillCard key={index} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
