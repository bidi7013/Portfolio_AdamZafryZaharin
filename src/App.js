import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { 
  Mail, 
  ExternalLink, 
  ArrowUpRight, 
  Briefcase, 
  GraduationCap,
  Check,
  Copy,
  Sun,
  Moon,
  X,
  PhoneCall,
  Sparkles,
  Award,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Zap
} from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0); // Service accordion index

  // Interactive Scope & Calculator Widget State
  const [calcType, setCalcType] = useState('web');
  const [calcScope, setCalcScope] = useState('full');
  const [calcStack, setCalcStack] = useState('react');

  // Hotline simulator state
  const [hotlineStatus, setHotlineStatus] = useState('idle'); // 'idle', 'connecting', 'connected'

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleHotlineCall = () => {
    setHotlineStatus('connecting');
    setTimeout(() => {
      setHotlineStatus('connected');
    }, 1200);
  };

  const projects = [
    {
      id: 'edulink',
      title: 'EduLink Platform',
      category: 'web',
      categoryLabel: 'Web Engineering',
      year: '2026',
      badgeColor: 'bg-[#FA5D29] text-white',
      description: 'Unified single-page web system designed for student academic tracking & wellbeing analytics in one platform.',
      longDescription: 'EduLink solves fragmented academic monitoring by unifying student check-ins, grade trajectory analytics, and counselor feedback into a cohesive dashboard with real-time Firebase synchronization.',
      tech: ['React.js', 'Tailwind CSS', 'Firebase Firestore', 'Web Vitals'],
      github: 'https://github.com',
      demo: '#',
      highlights: [
        'Architected modular React components for real-time data visualizers',
        'Integrated Firebase Firestore for live state synchronization',
        'Optimized sub-100ms UI responsiveness across devices'
      ]
    },
    {
      id: 'we-dashboard',
      title: 'WE Scoring Dashboard',
      category: 'web',
      categoryLabel: 'Web Engineering',
      year: '2025',
      badgeColor: 'bg-[#502BD8] text-white',
      description: 'Automated program scoring system for organizational evaluation and live result computations at USM.',
      longDescription: 'Engineered specifically for program evaluation at Universiti Sains Malaysia, this scoring system automates multi-criteria judge feedback, eliminating manual computation errors during live events.',
      tech: ['React.js', 'JavaScript ES6+', 'Tailwind CSS', 'Chart Logic'],
      github: 'https://github.com',
      demo: '#',
      highlights: [
        'Designed flexible inputs for customizable evaluation criteria',
        'Optimized build configurations for instant page load',
        'Ensured full responsive accessibility on mobile and desktop'
      ]
    },
    {
      id: 'nlp-sentiment-engine',
      title: 'Academic Sentiment Engine',
      category: 'systems',
      categoryLabel: 'Systems & NLP',
      year: '2025',
      badgeColor: 'bg-[#00B894] text-white',
      description: 'Natural language processing utility for categorizing student feedback sentiments using Python & NLP models.',
      longDescription: 'An academic research tool built to process and categorize qualitative feedback from university course evaluations into structured sentiment metrics.',
      tech: ['Python', 'NLTK', 'Pandas', 'REST API'],
      github: 'https://github.com',
      demo: '#',
      highlights: [
        'Preprocessed large text evaluation datasets with tokenization',
        'Evaluated sentiment model accuracy against human baselines',
        'Exposed lightweight REST API endpoint for web client consumption'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const services = [
    {
      title: 'Web Engineering & Frontend Design',
      tag: '01 / CREATIVE WEB',
      color: 'border-l-[#FA5D29]',
      description: 'Designing bespoke, responsive web applications with modern framework architectures, interactive components, and smooth micro-interactions.',
      capabilities: ['React 19 & Component Architecture', 'Tailwind CSS & Custom Design Systems', 'Single-Page Applications (SPA)', 'Performance & Web Vitals Optimization']
    },
    {
      title: 'Backend Logic & Firebase Systems',
      tag: '02 / BACKEND & DATA',
      color: 'border-l-[#502BD8]',
      description: 'Developing data schemas, real-time sync databases, and serverless logic to power reliable client applications.',
      capabilities: ['Firebase Firestore & Authentication', 'RESTful API Integration', 'Data Validation & State Handling', 'Cloud Function Workflows']
    },
    {
      title: 'Python, NLP & Core Algorithms',
      tag: '03 / ALGORITHMS & TOOLS',
      color: 'border-l-[#00B894]',
      description: 'Applying core computer science fundamentals, natural language processing models, and data analytics tools to solve real problems.',
      capabilities: ['Python Data Processing & Pandas', 'NLP Text Tokenization & Sentiment Analysis', 'Algorithmic Optimization', 'Git Version Control & CI/CD']
    }
  ];

  const experienceData = [
    {
      role: 'Software Engineering Intern',
      organization: 'Walnut Education',
      period: 'April 2026 — Present',
      badge: 'INTERNSHIP',
      description: 'Contributing to frontend feature development, software platform maintenance, and educational digital integration.',
      points: [
        'Developing modular React interface components according to software specifications.',
        'Collaborating with senior engineers to maintain platform stability and improve code quality.',
        'Assisting in technical educational outreach and digital platform integration.'
      ]
    }
  ];

  const educationData = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Universiti Sains Malaysia (USM)',
      period: 'Graduation 2027',
      badge: 'ACADEMIC',
      details: 'Focusing on Web Engineering, Data Structures & Algorithms, Natural Language Processing, and Computer Graphics.'
    },
    {
      degree: 'Vice Program Director',
      institution: 'Sukan Antara Desasiswa (USM)',
      period: '2024 / 2025',
      badge: 'LEADERSHIP',
      details: 'Managed program workflow, cross-committee operations, and logistics execution for university-wide student sports activities.'
    }
  ];

  // Scope Calculator Logic
  const getCalcEstimate = () => {
    let days = 7;
    let stack = 'React.js + Tailwind CSS';
    if (calcType === 'dashboard') days = 14;
    if (calcType === 'nlp') days = 21;
    if (calcScope === 'full') days = Math.round(days * 1.8);
    if (calcStack === 'firebase') stack += ' + Firebase Backend';
    if (calcStack === 'python') stack = 'Python NLP + REST API + React';
    return { days, stack };
  };

  const calcResult = getCalcEstimate();

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      isDark ? 'bg-[#121212] text-[#f8f8f8]' : 'bg-[#f8f8f8] text-[#222222]'
    }`}>
      {/* Top Nominee Banner Bar (Agence Morez Style) */}
      <div className="bg-[#222222] text-[#f8f8f8] text-[11px] font-mono py-2 px-6 flex justify-between items-center border-b border-neutral-800">
        <div className="flex items-center space-x-3">
          <span className="bg-[#FA5D29] text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
            <Award size={12} /> AWWWARDS STYLE
          </span>
          <span className="hidden sm:inline text-neutral-400">Adam Zafry Zaharin — Full-Stack & Web Developer</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
            AVAILABLE FOR PROJECTS
          </span>
          
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 px-2.5 py-1 rounded text-neutral-200 transition-colors"
          >
            {isDark ? <Sun size={12} className="text-amber-400" /> : <Moon size={12} className="text-indigo-300" />}
            <span>{isDark ? 'DAY MODE' : 'NIGHT MODE'}</span>
          </button>
        </div>
      </div>

      {/* Header Navigation */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
        isDark ? 'bg-[#121212]/90 border-neutral-800' : 'bg-[#f8f8f8]/90 border-neutral-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <a href="#about" className="font-heading font-black text-xl tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 bg-[#FA5D29] rounded-full inline-block" />
            <span>MOREZ / ADAM ZAFRY</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider">
            <a href="#about" className="hover:text-[#FA5D29] transition-colors">01. About</a>
            <a href="#calculator" className="hover:text-[#FA5D29] transition-colors">02. Estimator</a>
            <a href="#projects" className="hover:text-[#FA5D29] transition-colors">03. Works</a>
            <a href="#capabilities" className="hover:text-[#FA5D29] transition-colors">04. Services</a>
            <a href="#contact" className="hover:text-[#FA5D29] transition-colors">05. Contact</a>
          </nav>

          <a 
            href="#contact" 
            className="px-4 py-2 bg-[#FA5D29] hover:bg-[#e04b19] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-xs flex items-center gap-1.5"
          >
            <Sparkles size={14} /> Start Project
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative pt-16 pb-20 px-6 max-w-6xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-[#FA5D29]/10 text-[#FA5D29] border border-[#FA5D29]/30 rounded-full text-xs font-bold tracking-wider uppercase">
                FULL-SERVICE WEB ENGINEERING
              </span>
              <span className="px-3 py-1 bg-[#502BD8]/10 text-[#502BD8] border border-[#502BD8]/30 rounded-full text-xs font-bold tracking-wider uppercase">
                USM COMPUTER SCIENCE
              </span>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 rounded-full text-xs font-bold tracking-wider uppercase">
                SOFTWARE INTERN @ WALNUT
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
              We take on every coding challenge. <span className="text-[#FA5D29] underline decoration-[#FA5D29]/40 underline-offset-8">No exceptions.</span>
            </h1>

            <p className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl font-normal ${
              isDark ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              Hi, I'm <strong className="font-bold underline decoration-[#502BD8] decoration-2">Adam Zafry Zaharin</strong>. I engineer responsive React applications, build real-time Firebase databases, and develop clean algorithms.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#projects" 
                className="px-7 py-4 bg-[#222222] hover:bg-black text-white font-bold text-sm tracking-wider uppercase rounded-full shadow-lg flex items-center gap-2 transition-all"
              >
                Explore Selected Works <ArrowUpRight size={18} />
              </a>

              <button 
                onClick={() => handleCopyEmail('adamzafry@example.com')}
                className={`px-6 py-4 border-2 font-bold text-sm tracking-wider uppercase rounded-full flex items-center gap-2 transition-all ${
                  copiedEmail 
                    ? 'border-emerald-500 text-emerald-600 bg-emerald-50' 
                    : (isDark ? 'border-neutral-700 hover:border-neutral-500 text-white' : 'border-neutral-300 hover:border-neutral-900 text-neutral-900')
                }`}
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                {copiedEmail ? 'Copied Email!' : 'Copy Email Address'}
              </button>
            </div>
          </div>

          {/* Hotline Quick Call Widget (Agence Morez Inspired: "Allo?! MOREZ à votre écoute") */}
          <div className="lg:col-span-4">
            <div className={`p-6 rounded-2xl border-2 shadow-xl transition-all ${
              isDark ? 'bg-[#1c1c1c] border-neutral-800' : 'bg-white border-neutral-200'
            }`}>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-bold text-[#FA5D29] uppercase tracking-wider flex items-center gap-1.5">
                  <PhoneCall size={14} /> ADAM HOTLINE
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <h3 className="font-heading text-xl font-bold mb-2">Allo ?! Adam à votre écoute.</h3>
              <p className={`text-xs mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Need a custom web app or developer for your project? Connect directly with me now.
              </p>

              {hotlineStatus === 'idle' && (
                <button 
                  onClick={handleHotlineCall}
                  className="w-full py-3 bg-[#FA5D29] hover:bg-[#e04b19] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <PhoneCall size={15} /> Trigger Hotline Check
                </button>
              )}

              {hotlineStatus === 'connecting' && (
                <div className="w-full py-3 bg-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Connecting...
                </div>
              )}

              {hotlineStatus === 'connected' && (
                <div className="w-full p-4 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-xl text-xs space-y-2">
                  <div className="font-bold flex items-center gap-1">
                    <CheckCircle2 size={16} className="text-emerald-600" /> STATUS: READY & ONLINE
                  </div>
                  <p className="text-[11px] text-emerald-800">
                    Direct Email: <strong>adamzafry@example.com</strong>
                  </p>
                  <a 
                    href="mailto:adamzafry@example.com"
                    className="block w-full py-2 bg-emerald-600 text-white text-center font-bold rounded text-[11px] uppercase tracking-wider"
                  >
                    Open Mail App
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee Ribbon */}
      <section className="bg-[#FA5D29] text-white py-4 overflow-hidden shadow-inner">
        <div className="animate-marquee whitespace-nowrap font-heading font-black text-lg tracking-wider uppercase flex space-x-8">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center space-x-6">
              <span>⚡ REACT 19 & TAILWIND CSS</span>
              <span>·</span>
              <span>🔥 FIREBASE REALTIME DB</span>
              <span>·</span>
              <span>🎓 USM COMPUTER SCIENCE</span>
              <span>·</span>
              <span>💼 WALNUT EDUCATION INTERN</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </section>

      {/* Interactive Scope & Calculator Widget (Inspired by Morez: "C'est quoi le bon prix ?") */}
      <section id="calculator" className="max-w-6xl mx-auto px-6 py-20">
        <div className={`p-8 md:p-12 rounded-3xl border-2 shadow-2xl ${
          isDark ? 'bg-[#181818] border-neutral-800' : 'bg-white border-neutral-200'
        }`}>
          <div className="max-w-3xl mb-10">
            <span className="px-3 py-1 bg-[#502BD8] text-white text-xs font-bold tracking-widest uppercase rounded-full inline-block mb-3">
              INTERACTIVE TOOL
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">
              C'est quoi le projet ? (Project Scope Estimator)
            </h2>
            <p className={`text-sm mt-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Select your application specifications to generate an instant tech stack recommendation & timeline estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Step 1: Application Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#FA5D29] mb-3">
                1. Select Application Type
              </label>
              <div className="space-y-2">
                {[
                  { id: 'web', label: 'Single-Page Web App' },
                  { id: 'dashboard', label: 'Analytics & Scoring Dashboard' },
                  { id: 'nlp', label: 'Python NLP / Sentiment Utility' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setCalcType(opt.id)}
                    className={`w-full p-3 text-left text-xs font-bold rounded-xl border-2 transition-all ${
                      calcType === opt.id
                        ? 'border-[#FA5D29] bg-[#FA5D29]/10 text-[#FA5D29]'
                        : (isDark ? 'border-neutral-800 bg-[#222] text-neutral-300' : 'border-neutral-200 bg-neutral-50 text-neutral-700')
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tech Preference */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#502BD8] mb-3">
                2. Tech Stack Architecture
              </label>
              <div className="space-y-2">
                {[
                  { id: 'react', label: 'React.js + Tailwind CSS' },
                  { id: 'firebase', label: 'React + Firebase Realtime DB' },
                  { id: 'python', label: 'Python Engine + REST API' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setCalcStack(opt.id)}
                    className={`w-full p-3 text-left text-xs font-bold rounded-xl border-2 transition-all ${
                      calcStack === opt.id
                        ? 'border-[#502BD8] bg-[#502BD8]/10 text-[#502BD8]'
                        : (isDark ? 'border-neutral-800 bg-[#222] text-neutral-300' : 'border-neutral-200 bg-neutral-50 text-neutral-700')
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Project Depth */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">
                3. Project Depth
              </label>
              <div className="space-y-2">
                {[
                  { id: 'mvp', label: 'Rapid Prototype / MVP' },
                  { id: 'full', label: 'Full Production Architecture' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setCalcScope(opt.id)}
                    className={`w-full p-3 text-left text-xs font-bold rounded-xl border-2 transition-all ${
                      calcScope === opt.id
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600'
                        : (isDark ? 'border-neutral-800 bg-[#222] text-neutral-300' : 'border-neutral-200 bg-neutral-50 text-neutral-700')
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator Output */}
          <div className="p-6 rounded-2xl bg-[#222222] text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">Estimated Timeline & Architecture</div>
              <div className="text-2xl font-bold font-heading text-[#FA5D29]">
                ~ {calcResult.days} Days Estimated Delivery
              </div>
              <div className="text-xs text-neutral-300 mt-1">
                Recommended Stack: <strong className="text-white">{calcResult.stack}</strong>
              </div>
            </div>

            <a 
              href="mailto:adamzafry@example.com?subject=Project%20Scope%20Inquiry"
              className="px-6 py-3 bg-[#FA5D29] hover:bg-[#e04b19] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Zap size={14} /> Submit Scope to Adam
            </a>
          </div>
        </div>
      </section>

      {/* Selected Projects Showcase (Agence Morez Grid) */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="px-3 py-1 bg-[#FA5D29] text-white text-xs font-bold tracking-widest uppercase rounded-full inline-block mb-3">
              CREATIVE PORTFOLIO
            </span>
            <h2 className="font-heading text-4xl font-extrabold tracking-tight">Selected Projects</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'ALL WORKS' },
              { id: 'web', label: 'WEB ENGINEERING' },
              { id: 'systems', label: 'SYSTEMS & NLP' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full transition-all border-2 ${
                  activeFilter === tab.id
                    ? 'bg-[#222222] text-white border-[#222222]'
                    : (isDark ? 'border-neutral-800 text-neutral-400 hover:border-neutral-600' : 'border-neutral-300 text-neutral-600 hover:border-neutral-900')
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                isDark 
                  ? 'bg-[#181818] border-neutral-800 hover:border-[#FA5D29]' 
                  : 'bg-white border-neutral-200 hover:border-[#FA5D29] shadow-md hover:shadow-xl'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className={`px-3 py-1 text-[11px] font-bold tracking-wider uppercase rounded-full ${project.badgeColor}`}>
                    {project.categoryLabel}
                  </span>
                  <span className="text-xs font-mono font-bold text-neutral-400">{project.year}</span>
                </div>

                <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-[#FA5D29] transition-colors flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#FA5D29]" />
                </h3>

                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {project.description}
                </p>
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span 
                    key={t}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-lg border ${
                      isDark ? 'bg-neutral-800 border-neutral-700 text-neutral-300' : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className={`relative w-full max-w-2xl p-8 md:p-10 rounded-3xl border-2 shadow-2xl transition-all ${
            isDark ? 'bg-[#181818] border-neutral-700 text-white' : 'bg-white border-neutral-300 text-neutral-900'
          }`}>
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              <X size={20} />
            </button>

            <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full inline-block mb-4 ${selectedProject.badgeColor}`}>
              {selectedProject.categoryLabel} &nbsp;·&nbsp; {selectedProject.year}
            </span>

            <h2 className="font-heading text-3xl font-bold mb-4">{selectedProject.title}</h2>
            
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {selectedProject.longDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FA5D29] mb-3">Key Highlights</h4>
              <ul className="space-y-2 text-sm">
                {selectedProject.highlights.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#FA5D29] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <a 
                href={selectedProject.github}
                target="_blank" 
                rel="noreferrer"
                className="px-5 py-2.5 bg-[#222] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2"
              >
                <FaGithub size={16} /> GitHub Repo
              </a>
              <a 
                href={selectedProject.demo}
                target="_blank" 
                rel="noreferrer"
                className="px-5 py-2.5 bg-[#FA5D29] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Services & Capabilities Accordion */}
      <section id="capabilities" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-3xl mb-12">
          <span className="px-3 py-1 bg-[#00B894] text-white text-xs font-bold tracking-widest uppercase rounded-full inline-block mb-3">
            AGENCY SERVICES
          </span>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight">Capabilities & Solutions</h2>
        </div>

        <div className="space-y-4">
          {services.map((srv, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <div 
                key={idx}
                className={`border-l-4 ${srv.color} rounded-r-2xl border-y border-r transition-all overflow-hidden ${
                  isDark ? 'bg-[#181818] border-neutral-800' : 'bg-white border-neutral-200'
                }`}
              >
                <button
                  onClick={() => setOpenAccordion(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex justify-between items-center font-heading text-xl font-bold"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-mono text-neutral-400">{srv.tag}</span>
                    <span>{srv.title}</span>
                  </div>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm">
                    <p className={`mb-4 leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {srv.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.capabilities.map(cap => (
                        <div key={cap} className="flex items-center gap-2 text-xs font-bold text-neutral-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FA5D29]" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Experience & Education */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-200 dark:border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={22} className="text-[#FA5D29]" />
              <h2 className="font-heading text-2xl font-bold">Work Experience</h2>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border-2 ${
                  isDark ? 'bg-[#181818] border-neutral-800' : 'bg-white border-neutral-200'
                }`}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2.5 py-0.5 bg-[#FA5D29] text-white text-[10px] font-bold rounded-full uppercase">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{exp.period}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold">{exp.role}</h3>
                  <div className="text-xs font-bold text-[#502BD8] mb-3">{exp.organization}</div>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Leadership */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={22} className="text-[#502BD8]" />
              <h2 className="font-heading text-2xl font-bold">Education & Leadership</h2>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border-2 ${
                  isDark ? 'bg-[#181818] border-neutral-800' : 'bg-white border-neutral-200'
                }`}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2.5 py-0.5 bg-[#502BD8] text-white text-[10px] font-bold rounded-full uppercase">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{edu.period}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold">{edu.degree}</h3>
                  <div className="text-xs font-bold text-[#FA5D29] mb-2">{edu.institution}</div>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <footer id="contact" className="bg-[#222222] text-white py-20 px-6 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="px-3 py-1 bg-[#FA5D29] text-white text-xs font-bold tracking-widest uppercase rounded-full inline-block mb-4">
            LET'S TALK
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight mb-6">
            Ready to build your next web application?
          </h2>
          <p className="text-neutral-400 text-base mb-10 max-w-xl mx-auto">
            Available for software development internships, full-stack projects, and technical collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="mailto:adamzafry@example.com"
              className="px-8 py-4 bg-[#FA5D29] hover:bg-[#e04b19] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all flex items-center gap-2"
            >
              <Mail size={16} /> Send Email
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all flex items-center gap-2"
            >
              <FaGithub size={16} /> GitHub Profile
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all flex items-center gap-2"
            >
              <FaLinkedin size={16} /> LinkedIn
            </a>
          </div>

          <div className="text-xs font-mono text-neutral-500 pt-8 border-t border-neutral-800">
            © {new Date().getFullYear()} Adam Zafry Zaharin. Inspired by Agence MOREZ (Awwwards Nominee). Built with React & Tailwind.
          </div>
        </div>
      </footer>
    </div>
  );
}