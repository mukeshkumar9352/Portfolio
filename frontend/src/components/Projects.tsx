import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, image, liveLink, githubLink }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="glass-card overflow-hidden group border border-white/10 hover:border-sky-500/50 transition-all duration-500"
  >
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60"></div>
      <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute bottom-4 left-4 z-20">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      </div>
    </div>

    <div className="p-6">
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/5 text-gray-400 rounded border border-white/10">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 bg-white/5 hover:bg-white/10 text-white text-center text-sm font-bold rounded-lg border border-white/10 transition-colors flex items-center justify-center gap-2"
        >
          <Github size={16} /> Code
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      "title": "Power BI Retail Analysis Dashboard",
      "description": "Transformed a raw retail transaction dataset (99K+ records) into an interactive dashboard to identify top-performing shopping malls and product categories, analyze sales trends, and support inventory and promotional decision-making.",
      "tags": ["Power BI", "Data Analytics", "Retail Analytics", "Business Intelligence"],
      "image": "/retail-dashboard.png",
      "liveLink": "#",
      "githubLink": "https://github.com/mukeshkumar9352"
    },
    {
      "title": "Chat Server: Realtime Messenger",
      "description": "Engineered a multi-client broadcast chat server that supported real-time messaging, private communication, and file sharing. Handled system architecture, backend logic, and database connectivity. Managed Java Swing interface integration.",
      "tags": ["Java", "MySQL", "Sockets", "JDBC"],
      "image": "/chat-messenger.png",
      "liveLink": "#",
      "githubLink": "https://github.com/mukeshkumar9352"
    },
    {
      "title": "Student Management System",
      "description": "Developed a robust desktop-based CRUD application using Java Swing and JDBC. Streamlined data entry and retrieval, achieving a 25% improvement in update efficiency. Integrated robust validation and error-handling.",
      "tags": ["Java", "JDBC", "MySQL", "Swing"],
      "image": "/student-management.png",
      "liveLink": "#",
      "githubLink": "https://github.com/mukeshkumar9352"
    }
  ];


  return (
    <section id="projects" className="section-padding bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
