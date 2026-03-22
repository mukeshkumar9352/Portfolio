import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certs = [
    {
      title: "Social Networks (Nptel)",
      issuer: "Nptel",
      image: "/social-networks-cert.png",
      link: "https://www.linkedin.com/posts/mukesh-kumar-aa8928296_social-network-certification-activity-7399120347301756928-2lyO/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEevKiAB1SIfp88rfzHnld_W0eRMAYjSKpg"
    },
    {
      title: "ChatGPT-4 Prompt Engineering",
      issuer: "Infosys Certification",
      image: "/prompt-chatgpt-cert.png",
      link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_014157693153288192147/1-997855c3-3c36-4619-bc5f-5231e7f3d1cf.pdf"
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "https://www.freecodecamp.org/certification/fccbe40f28c-b39a-456e-a42b-39d1aebb12e6/responsive-web-design"
    }
  ];


  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="glass-card overflow-hidden border border-white/10 hover:border-sky-500/50 transition-all p-2"
            >
              <div className="relative group cursor-pointer" onClick={() => setSelectedCert(cert)}>
                <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl mb-4">
                  <p className="text-white font-bold">Click to Preview</p>
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-sky-400 text-sm mb-6">{cert.issuer}</p>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#00A3FF] hover:bg-[#0086D1] text-white font-bold rounded-lg transition-colors w-auto"
                >
                  Verify Certificate <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-4xl w-full p-2 relative bg-slate-900 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 rounded-full text-white z-20 border border-white/10"
              >
                <X size={24} />
              </button>
              <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto rounded-xl max-h-[70vh] object-contain bg-black" />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="text-sky-400 text-lg mb-8">{selectedCert.issuer}</p>
                <a 
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#00A3FF] hover:bg-[#0086D1] text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/20"
                >
                  Verify Certificate <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
