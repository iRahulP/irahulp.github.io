import { motion } from "motion/react";
import { Code2, Globe, Award } from "lucide-react";
import resumeData from "../data/resume.json";

export const Skills = () => {
  const { skills, certifications } = resumeData;

  return (
    <section className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="w-6 h-6 text-blue-500" />
              <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-zinc-500 font-mono mb-4">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.core.map((skill) => (
                    <span key={skill} className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-300 hover:border-blue-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-zinc-500 font-mono mb-4">Top Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.top.map((skill) => (
                    <span key={skill} className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-zinc-500 font-mono mb-4">Linguistic Proficiency</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang) => (
                    <span key={lang} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-white/5 text-zinc-400 text-sm">
                      <Globe className="w-3 h-3" /> {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-blue-500" />
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 flex items-center gap-4 hover:bg-zinc-900/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/5 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-zinc-300 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
