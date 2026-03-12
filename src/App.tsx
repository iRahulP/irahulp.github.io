import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { SplashScreen } from "./components/SplashScreen";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Mail, Github, Linkedin } from "lucide-react";
import resumeData from "./data/resume.json";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <main key="main" className="relative">
            <AnimatedBackground />
            
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
              <div className="text-2xl font-bold tracking-tighter">
                RP<span className="text-blue-500">.</span>
              </div>
              <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Home</button>
                <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Experience</button>
                <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Skills</button>
              </div>
              <div className="flex gap-4">
                <a href={resumeData.basics.profiles.find(p => p.network === "LinkedIn")?.url} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={resumeData.basics.url} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </nav>

            <Hero />
            
            {/* Impact Strip */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
              <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center text-center">
                  <span className="text-4xl font-bold text-blue-500 mb-2">3+</span>
                  <span className="text-sm uppercase tracking-widest text-zinc-500 font-mono">Years Experience</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-4xl font-bold text-blue-500 mb-2">10+</span>
                  <span className="text-sm uppercase tracking-widest text-zinc-500 font-mono">Core Technologies</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-4xl font-bold text-blue-500 mb-2">AI</span>
                  <span className="text-sm uppercase tracking-widest text-zinc-500 font-mono">Specialization</span>
                </div>
              </div>
            </section>

            <Experience />
            
            <div id="skills">
              <Skills />
            </div>
            
            <Education />

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/5">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Let's build something intentful.</h2>
                <div className="flex justify-center gap-6 mb-12">
                  <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" /> Say Hello
                  </a>
                </div>
                <p className="text-zinc-500 text-sm font-mono">
                  &copy; {new Date().getFullYear()} {resumeData.basics.name}. Built with intent.
                </p>
              </div>
            </footer>
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
