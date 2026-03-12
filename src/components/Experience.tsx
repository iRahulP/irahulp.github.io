import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import resumeData from "../data/resume.json";

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Professional Journey</h2>
        <p className="text-zinc-400">Building scalable systems at global scale.</p>
      </motion.div>

      <div className="space-y-6">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden ${
              expandedIndex === index 
                ? "bg-zinc-900/50 border-blue-500/30" 
                : "bg-zinc-900/20 border-white/5 hover:border-white/10"
            }`}
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-zinc-400 font-medium">{exp.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {exp.dates}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> {exp.location}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`} />
              </div>
            </button>

            <motion.div
              initial={false}
              animate={{ height: expandedIndex === index ? "auto" : 0, opacity: expandedIndex === index ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-8 md:px-8 md:pb-10 pt-0 ml-16">
                <div className="h-px w-full bg-white/5 mb-6" />
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400/80 text-xs font-mono">
                    Impact: {exp.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
