import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-black/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full -mr-16 -mt-16 blur-2xl transition-all group-hover:bg-sky-500/20"></div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm a <span className="text-sky-400 font-semibold">B.Tech Computer Science & Engineering</span> student at <span className="text-white font-medium">Lovely Professional University</span>. I am passionate about
            <span className="text-white font-medium"> software development</span> and <span className="text-white font-medium">system architecture</span>, with a strong foundation in Java and C++.
            My approach is highly practical — I've built real-time messaging servers and student management systems to understand the intricacies of <span className="text-sky-400">JDBC, MySQL, and Socket Programming</span>.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I enjoy creating solutions that are <span className="text-sky-400 font-semibold">robust and user-centric</span>. Beyond coding, I've engaged in community development projects and continuous learning through certifications in <span className="text-sky-400">Prompt Engineering and Responsive Web Design</span>. I am constantly looking for opportunities to apply my technical skills to solve real-world challenges.
          </p>


          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <h3 className="text-sky-400 font-bold mb-2">Education</h3>
              <p className="text-gray-400 text-sm">B.Tech in CSE</p>
            </div>
            <div className="p-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <h3 className="text-sky-400 font-bold mb-2">Focus</h3>
              <p className="text-gray-400 text-sm">Data Science & Software Dev</p>
            </div>
            <div className="p-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <h3 className="text-sky-400 font-bold mb-2">Interests</h3>
              <p className="text-gray-400 text-sm">Backend, Cloud, Scalable Systems</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
