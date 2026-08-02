import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Layout, 
  Server, 
  Terminal, 
  ExternalLink, 
  ChevronRight, 
  Award, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 'edulink',
      title: 'EduLink',
      category: 'web',
      description: 'Unified single-page application designed for student academic and wellbeing tracking in one centralized platform.',
      tech: ['React.js', 'Tailwind CSS', 'Firebase'],
      github: '#',
      demo: '#',
      highlights: [
        'Built dynamic dashboard components using React and Tailwind CSS',
        'Integrated Firebase real-time database for live data persistence',
        'Centralized wellbeing and academic metric visualizers'
      ]
    },
    {
      id: 'we-dashboard',
      title: 'WE Scoring Dashboard',
      category: 'web',
      description: 'Automated scoring dashboard system for organizational program evaluation and real-time score calculations.',
      tech: ['React.js', 'JavaScript', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      highlights: [
        'Designed modular architecture for flexible input and score aggregation',
        'Optimized build configurations for smooth deployment',
        'Ensured fully responsive design across mobile and desktop devices'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Adam Zafry
          </span>
          <div className="flex space-x-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-36 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-start justify-center min-h-[85vh]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
          <Terminal size={14} /> Computer Science Student @ USM
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Adam Zafry Zaharin
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6">
          Software Developer & Web Engineering Enthusiast
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed mb-8">
          Computer Science undergraduate at Universiti Sains Malaysia specializing in building responsive web applications, modern interactive user interfaces, and clean code solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20"
          >
            View Projects <ChevronRight size={18} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg border border-slate-700 flex items-center gap-2 transition-all"
          >
            <Github size={18} /> GitHub Profile
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-950/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Code className="text-blue-400" /> Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
              <p className="text-slate-400 text-sm mb-4">Creating responsive, dynamic user interfaces with contemporary design standards.</p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3', 'WebGL'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-xs border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-400 mb-4">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Backend & Languages</h3>
              <p className="text-slate-400 text-sm mb-4">Core software development, database integration, and foundational logic.</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'R', 'Prolog', 'Firebase', 'REST APIs'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-xs border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tools & Workflows</h3>
              <p className="text-slate-400 text-sm mb-4">Version control, platform deployments, and modern development tools.</p>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'VS Code', 'Vercel', 'Netlify'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded text-xs border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-slate-400">Key applications built during academic and technical work.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all flex flex-col">
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <div className="flex gap-2">
                      <a href={project.github} className="text-slate-400 hover:text-white transition-colors" title="Repository">
                        <Github size={20} />
                      </a>
                      <a href={project.demo} className="text-slate-400 hover:text-white transition-colors" title="Live Preview">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((point, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">•</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-slate-800 text-blue-400 rounded text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Leadership Section */}
      <section id="experience" className="py-20 px-6 bg-slate-950/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-400" /> Work Experience
            </h2>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-slate-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
                <h3 className="text-lg font-bold text-white">Software Engineering Intern</h3>
                <p className="text-sm text-blue-400 mb-2">Walnut Education • April 2026 – Present</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Contributed to frontend feature development, software platform maintenance, and educational outreach programs.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Leadership */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-teal-400" /> Education & Leadership
            </h2>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-slate-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <h3 className="text-lg font-bold text-white">Bachelor of Computer Science</h3>
                <p className="text-sm text-teal-400 mb-2">Universiti Sains Malaysia (USM)</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Focusing on Web Engineering, Data Structures & Algorithms, Natural Language Processing, and WebGL/Computer Graphics.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
                <h3 className="text-lg font-bold text-white">Vice Program Director</h3>
                <p className="text-sm text-indigo-400 mb-2">Sukan Antara Desasiswa (USM)</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Coordinated event logistics, program workflows, and committee communication for university-wide student sports programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Interested in working together or reviewing my full software development profile? Feel free to reach out directly.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:example@email.com" className="p-3 bg-slate-800 text-slate-300 hover:text-white rounded-full border border-slate-700 hover:border-blue-500 transition-colors">
            <Mail size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 text-slate-300 hover:text-white rounded-full border border-slate-700 hover:border-blue-500 transition-colors">
            <Linkedin size={22} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 text-slate-300 hover:text-white rounded-full border border-slate-700 hover:border-blue-500 transition-colors">
            <Github size={22} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Adam Zafry Zaharin. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}