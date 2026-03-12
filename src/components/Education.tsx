import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import resumeData from "../data/resume.json";

export const Education = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Education</h2>
        <p className="text-zinc-400">Academic foundation in Computer Science.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeData.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-blue-500/20 transition-all group"
          >
            <div className="p-3 w-fit rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
              {edu.institution}
            </h3>
            <p className="text-blue-400 font-medium mb-4">{edu.degree}</p>
            
            <div className="flex flex-col gap-2 text-sm text-zinc-500">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {edu.dates}
              </span>
              {edu.location && (
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {edu.location}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
