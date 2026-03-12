import { motion } from "motion/react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import resumeData from "../data/resume.json";

export const Hero = () => {
  const { basics } = resumeData;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6">
            Available for New Opportunities
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-none">
            {basics.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-8">
            {basics.label}
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            {basics.summary}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Experience <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 bg-zinc-900 text-white font-semibold rounded-full border border-white/10 hover:bg-zinc-800 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Download Resume
            </button>
          </div>

          <div className="flex gap-6">
            {basics.profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                {profile.network === "LinkedIn" ? <Linkedin className="w-6 h-6" /> : <Github className="w-6 h-6" />}
              </a>
            ))}
            <a href={`mailto:${basics.email}`} className="text-zinc-500 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
};
