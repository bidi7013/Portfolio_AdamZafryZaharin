import React, { useState, useEffect } from 'react';
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
  CheckCircle2,
  FolderGit2,
  User,
  MessageSquare,
  MapPin,
  Globe,
  ShieldCheck,
  Cpu,
  Award as AwardIcon
} from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const [activeTab, setActiveTab] = useState('about'); // 'about', 'projects', 'experience', 'skills', 'contact'
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Entrance Loading Screen State
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isExitingLoader, setIsExitingLoader] = useState(false);

  const emailAddress = "adamzafryzaharin@gmail.com";
  const phoneNumber = "+6013-300-3775";
  const linkedinUrl = "https://www.linkedin.com/in/adamzafryzaharin3452492243";

  // Simulated Site Entrance Loader
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExitingLoader(true);
          setTimeout(() => setIsLoading(false), 600);
          return 100;
        }
        const nextVal = prev + Math.floor(Math.random() * 20) + 10;
        return nextVal > 100 ? 100 : nextVal;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const projects = [
    {
      id: 'edulink',
      title: 'EduLink Student Analytics System',
      category: 'systems',
      categoryLabel: 'Web & Database Systems',
      year: '2026',
      badgeColor: 'bg-[#FA5D29] text-white',
      description: 'A unified single-page web system designed for tracking student academic progress and wellbeing analytics.',
      longDescription: 'EduLink solves fragmented academic monitoring by unifying student check-ins, grade trajectory analytics, and counselor feedback into a cohesive single-page dashboard supported by structured SQL schemas and real-time data handling.',
      tech: ['JavaScript', 'React.js', 'SQL', 'HTML5/CSS3', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: '#',
      highlights: [
        'Architected modular React interface components for real-time academic visualizers',
        'Designed normalized relational SQL database schemas for student tracking',
        'Optimized UI responsiveness and state updates across devices'
      ]
    },
    {
      id: 'we-dashboard',
      title: 'Automated Evaluation & Scoring System',
      category: 'systems',
      categoryLabel: 'System Design & Algorithms',
      year: '2025',
      badgeColor: 'bg-[#502BD8] text-white',
      description: 'An automated program scoring and evaluation system engineered for university event management at USM.',
      longDescription: 'Engineered specifically for program evaluation at Universiti Sains Malaysia, this scoring system automates multi-criteria judge feedback and real-time result computations, eliminating manual calculation errors during live events.',
      tech: ['C++', 'Python', 'SQL', 'System Architecture'],
      github: 'https://github.com',
      demo: '#',
      highlights: [
        'Implemented fast C++ scoring algorithms for multi-criteria evaluation',
        'Designed automated score aggregation models for immediate result reporting',
        'Ensured reliable performance during campus-wide live events'
      ]
    },
    {
      id: 'nlp-sentiment-engine',
      title: 'Academic Sentiment Processing Engine',
      category: 'nlp',
      categoryLabel: 'Intelligent Computing & NLP',
      year: '2025',
      badgeColor: 'bg-[#00B894] text-white',
      description: 'A natural language processing utility for categorizing student feedback sentiment using Python & analytical data models.',
      longDescription: 'An academic research tool built to process and categorize qualitative feedback from university course evaluations into structured sentiment metrics using Python NLP tokenization and analytical data models.',
      tech: ['Python', 'SQL', 'Data Analytics', 'REST API'],
      github: 'https://github.com',
      demo: '#',
      highlights: [
        'Preprocessed qualitative text feedback datasets with tokenization pipelines',
        'Evaluated sentiment model accuracy against human analytical baselines',
        'Exposed lightweight REST API endpoints for client data consumption'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const experienceData = [
    {
      role: 'Pembimbing Program Siswa Lestari (PPSL)',
      organization: 'Universiti Sains Malaysia (USM)',
      period: '2024 — 2026',
      badge: 'CAMPUS LOGISTICS LEAD',
      description: 'Appointed to key logistics leadership roles for university-wide student orientation programs and national delegations.',
      points: [
        'Led the Logistics Team for PPSL Induk throughout Mingguan Siswa Lestari (MSL).',
        'Handled the Logistics Department for Malam Variasiswa across all Desasiswa hostel communities.',
        'Led the Logistics Department for all USM student representatives attending the Festival of Ideas (FOI) in Putrajaya.'
      ]
    },
    {
      role: 'Vice President I',
      organization: 'Majlis Penghuni Desasiswa Indah Kembara (MPDIK), USM',
      period: '2024 — 2025',
      badge: 'EXECUTIVE LEADERSHIP',
      description: 'Spearheaded strategic planning, team development, and operational oversight for the student council.',
      points: [
        'Led strategic planning, fostered teamwork, and oversaw daily operations to ensure council objectives were achieved.',
        'Committed to driving innovation, empowering members, and achieving sustainable organizational growth.'
      ]
    },
    {
      role: 'Protocol and Activity Management EXCO',
      organization: 'Majlis Penghuni Desasiswa Indah Kembara (MPDIK), USM',
      period: '2023 — 2024',
      badge: 'EVENT MANAGEMENT',
      description: 'Managed protocol adherence and activity execution for student hostel events and university programs.',
      points: [
        'Ensured seamless event coordination, protocol compliance, and efficient activity management.',
        'Prioritized operational precision, structured organization, and stakeholder satisfaction.'
      ]
    },
    {
      role: 'Community Engagement and Marketing EXCO',
      organization: 'Computer Science Society (CSS), USM',
      period: '2023 — 2024',
      badge: 'SOCIETY EXCO',
      description: 'Promoted Computer Science Society initiatives and fostered strong engagement among CS students.',
      points: [
        'Built strong connections with stakeholders and designed impactful marketing campaigns.',
        'Drove awareness, strengthened relationships, and promoted society initiatives effectively.'
      ]
    },
    {
      role: 'Entrepreneurship and Economics EXCO',
      organization: 'Persatuan Kebajikan Islam Malaysia (PERKIM), USM',
      period: '2023 — 2024',
      badge: 'ECONOMIC EXCO',
      description: 'Drove economic initiatives and business development opportunities for PERKIM USM.',
      points: [
        'Promoted innovative ventures and economic initiatives to support organizational activities.',
        'Empowered members with practical skills, fostering collaboration and growth opportunities.'
      ]
    }
  ];

  const educationData = [
    {
      degree: 'Bachelor of Computer Science with Honours (Intelligent Computing)',
      institution: 'Universiti Sains Malaysia (USM)',
      period: '2023 — Present',
      badge: 'UNDERGRADUATE',
      details: 'Specializing in Intelligent Computing, Computer Infrastructure, System Design & Architecture, Cybersecurity, and Programming.'
    },
    {
      degree: 'Foundation in Engineering and Technology',
      institution: 'Kolej MARA Kuala Nerang (KMKN), Kedah',
      period: '2022 — 2023',
      badge: 'PRE-UNIVERSITY',
      details: 'Achieved an outstanding CGPA of 3.98. Built strong foundations in mathematics, physics, engineering principles, and programming.'
    },
    {
      degree: 'Secondary Education',
      institution: "Sekolah Dato' Abdul Razak (SDAR), Negeri Sembilan",
      period: '2022 — 2023',
      badge: 'SPM EXCELLENCE',
      details: "Sijil Pelajaran Malaysia (SPM): Achieved 9A's (Straight A's) at a premier national residential school."
    }
  ];

  const technicalSkills = [
    { name: 'C++', level: 'Proficient', desc: 'System programming, algorithms & memory management' },
    { name: 'SQL', level: 'Proficient', desc: 'Relational database design, queries & schema normalization' },
    { name: 'Python', level: 'Intermediate', desc: 'Data processing, analytics & NLP pipelines' },
    { name: 'JavaScript ES6+', level: 'Intermediate', desc: 'Web application logic & DOM manipulation' },
    { name: 'HTML5 & CSS3', level: 'Intermediate', desc: 'Responsive layouts & component styling' },
    { name: 'System Design & Architecture', level: 'Strong Foundation', desc: 'Modular architecture & hardware-software interfaces' },
    { name: 'Cybersecurity', level: 'Knowledgeable', desc: 'Security principles & safe coding practices' },
    { name: 'Problem Solving & Analytics', level: 'Strong', desc: 'Algorithmic optimization & logical analysis' }
  ];

  const languageProficiency = [
    { lang: 'Malay', level: 'Mastery / Native' },
    { lang: 'English', level: 'Proficient (MUET: Band 4.5)' },
    { lang: 'Japanese', level: 'Beginner' }
  ];

  const navTabs = [
    { id: 'about', label: '01. About Me', icon: User },
    { id: 'projects', label: '02. Projects', icon: FolderGit2 },
    { id: 'experience', label: '03. Experience', icon: Briefcase },
    { id: 'skills', label: '04. Technical Skills', icon: Cpu },
    { id: 'contact', label: '05. Contact', icon: MessageSquare }
  ];

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans relative ${
      isDark ? 'bg-[#121212] text-[#f8f8f8]' : 'bg-[#f8f8f8] text-[#222222]'
    }`}>

      {/* Interactive Developer Entrance Loading Screen */}
      {isLoading && (
        <div className={`fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-16 bg-[#121212] text-[#f8f8f8] transition-all duration-700 ${
          isExitingLoader ? 'loading-exit' : 'opacity-100'
        }`}>
          {/* Top Loader Header */}
          <div className="flex justify-between items-center text-xs font-mono tracking-widest text-neutral-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              PORTFOLIO INITIALIZING
            </span>
            <span>USM COMPUTER SCIENCE</span>
          </div>

          {/* Center Title & Progress Bar */}
          <div className="max-w-4xl mx-auto w-full my-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FA5D29]/10 border border-[#FA5D29]/40 text-[#FA5D29] rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
              <Sparkles size={14} /> ADAM ZAFRY ZAHARIN
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              DEVELOPER <span className="text-[#FA5D29]">/</span> PORTFOLIO
            </h1>

            {/* Glowing Progress Bar */}
            <div className="max-w-md mx-auto space-y-3">
              <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden p-0.5 border border-neutral-700">
                <div 
                  className="h-full bg-gradient-to-r from-[#FA5D29] to-emerald-400 rounded-full transition-all duration-150 ease-out shadow-lg"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
                <span>{loadingProgress < 100 ? 'LOADING PORTFOLIO MODULES...' : 'READY'}</span>
                <span className="text-xl font-bold font-heading text-[#FA5D29]">{loadingProgress}%</span>
              </div>
            </div>
          </div>

          {/* Bottom Footer Meta */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-neutral-500 border-t border-neutral-800 pt-4 gap-2">
            <span>UNIVERSITI SAINS MALAYSIA (USM)</span>
            <span>INTELLIGENT COMPUTING & INFRASTRUCTURE</span>
          </div>
        </div>
      )}

      {/* Developer Top Status Bar */}
      <div className="bg-[#1c1c1c] text-[#f8f8f8] text-[11px] font-mono py-2 px-6 flex justify-between items-center border-b border-neutral-800">
        <div className="flex items-center space-x-3">
          <span className="bg-[#FA5D29] text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
            <AwardIcon size={12} /> USM CS UNDERGRAD
          </span>
          <span className="hidden sm:inline text-neutral-400">Adam Zafry Zaharin — Intelligent Computing & System Architecture</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
            AVAILABLE FOR INTERNSHIPS
          </span>
          
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 px-2.5 py-1 rounded text-neutral-200 transition-colors cursor-pointer"
          >
            {isDark ? <Sun size={12} className="text-amber-400" /> : <Moon size={12} className="text-indigo-300" />}
            <span>{isDark ? 'LIGHT MODE' : 'DARK MODE'}</span>
          </button>
        </div>
      </div>

      {/* Main Header Navigation */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
        isDark ? 'bg-[#121212]/90 border-neutral-800' : 'bg-[#f8f8f8]/90 border-neutral-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <button 
            onClick={() => setActiveTab('about')}
            className="font-heading font-black text-xl tracking-tight flex items-center gap-2 cursor-pointer text-left focus:outline-none"
          >
            <span className="w-3 h-3 bg-emerald-500 rounded-full inline-block animate-pulse" />
            <span>ADAM ZAFRY ZAHARIN</span>
          </button>

          {/* Top Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider">
            {navTabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#FA5D29] text-white shadow-md'
                      : (isDark ? 'text-neutral-300 hover:text-[#FA5D29] hover:bg-neutral-800' : 'text-neutral-700 hover:text-[#FA5D29] hover:bg-neutral-200/60')
                  }`}
                >
                  <tab.icon size={13} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          <a
            href={`mailto:${emailAddress}`}
            className="px-4 py-2 bg-[#FA5D29] hover:bg-[#e04b19] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Mail size={14} /> Get In Touch
          </a>
        </div>
      </header>

      {/* Mobile Navigation Tab Bar */}
      <div className={`border-b transition-colors md:hidden ${
        isDark ? 'bg-[#181818] border-neutral-800' : 'bg-neutral-100 border-neutral-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-around overflow-x-auto space-x-1">
          {navTabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shrink-0 transition-all flex items-center gap-1 ${
                  isActive
                    ? 'bg-[#FA5D29] text-white'
                    : (isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black')
                }`}
              >
                <tab.icon size={12} />
                <span>{tab.id}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tab Content Area */}
      <main className="min-h-[75vh]">
        {/* TAB 1: ABOUT ME */}
        {activeTab === 'about' && (
          <div key="about" className="animate-tab-fade">
            <section className="relative pt-12 pb-16 px-6 max-w-6xl mx-auto overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Hero Left Content */}
                <div className="lg:col-span-8 animate-slide-left delay-100">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-[#FA5D29]/10 text-[#FA5D29] border border-[#FA5D29]/30 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1">
                      <Cpu size={13} /> INTELLIGENT COMPUTING
                    </span>
                    <span className="px-3 py-1 bg-[#502BD8]/10 text-[#502BD8] border border-[#502BD8]/30 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1">
                      <ShieldCheck size={13} /> COMPUTER INFRASTRUCTURE
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1">
                      <GraduationCap size={13} /> USM CS STUDENT
                    </span>
                  </div>

                  <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8">
                    Computer Science Student <span className="text-[#FA5D29] underline decoration-[#FA5D29]/40 underline-offset-8">specializing in Intelligent Computing & Systems.</span>
                  </h1>

                  <p className={`text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl font-normal ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}>
                    I am a Computer Science Student at <strong>Universiti Sains Malaysia (USM)</strong> focused on computer infrastructure, system design and architecture, cybersecurity, and programming. Beyond academics, I am an active student leader driving impactful events and student council initiatives across campus.
                  </p>

                  <div className="flex flex-wrap gap-4 items-center mb-10">
                    <button 
                      onClick={() => setActiveTab('projects')}
                      className="px-7 py-4 bg-[#222222] hover:bg-black text-white font-bold text-sm tracking-wider uppercase rounded-full shadow-lg flex items-center gap-2 transition-all cursor-pointer"
                    >
                      View Projects & Code <ArrowUpRight size={18} />
                    </button>

                    <button 
                      onClick={() => handleCopyEmail(emailAddress)}
                      className={`px-6 py-4 border-2 font-bold text-sm tracking-wider uppercase rounded-full flex items-center gap-2 transition-all cursor-pointer ${
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

                {/* Developer Profile Snapshot Card */}
                <div className="lg:col-span-4 animate-slide-right delay-200">
                  <div className={`p-6 rounded-3xl border-2 shadow-xl transition-all ${
                    isDark ? 'bg-[#1c1c1c] border-neutral-800' : 'bg-white border-neutral-200'
                  }`}>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-mono font-bold text-[#FA5D29] uppercase tracking-wider flex items-center gap-1.5">
                        <User size={14} /> DEVELOPER PROFILE
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    </div>

                    <h3 className="font-heading text-2xl font-bold mb-1">Adam Zafry Zaharin</h3>
                    <div className="text-xs font-bold text-[#502BD8] mb-4">Computer Science Undergrad (USM)</div>

                    <div className="space-y-3 text-xs font-mono mb-6 border-y border-neutral-200 dark:border-neutral-800 py-4">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-400">Specialization:</span>
                        <span className="font-bold text-right">Intelligent Computing</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-400">Core Proficiencies:</span>
                        <span className="font-bold text-right text-[#FA5D29]">C++ & SQL</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-400">Foundation CGPA:</span>
                        <span className="font-bold text-right text-emerald-500">3.98 (KMKN)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-400">Location:</span>
                        <span className="font-bold text-right">Pahang, Malaysia</span>
                      </div>
                    </div>

                    <a 
                      href={linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 bg-[#502BD8] hover:bg-[#3f20b3] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                    >
                      <FaLinkedin size={15} /> Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Developer Marquee Ribbon */}
            <section className="bg-[#FA5D29] text-white py-4 overflow-hidden shadow-inner animate-slide-up delay-300">
              <div className="animate-marquee whitespace-nowrap font-heading font-black text-lg tracking-wider uppercase flex space-x-8">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="flex items-center space-x-6">
                    <span>⚡ C++ & SQL PROFICIENT</span>
                    <span>·</span>
                    <span>🛡️ COMPUTER INFRASTRUCTURE & CYBERSECURITY</span>
                    <span>·</span>
                    <span>🎓 USM INTELLIGENT COMPUTING</span>
                    <span>·</span>
                    <span>🏛️ PPSL LOGISTICS LEAD & MPDIK VICE PRESIDENT</span>
                    <span>·</span>
                  </span>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: PROJECTS */}
        {activeTab === 'projects' && (
          <div key="projects" className="animate-tab-fade max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 animate-slide-left delay-100">
              <div>
                <span className="px-3 py-1 bg-[#FA5D29] text-white text-xs font-bold tracking-widest uppercase rounded-full inline-block mb-3">
                  SOFTWARE & SYSTEMS PORTFOLIO
                </span>
                <h2 className="font-heading text-4xl font-extrabold tracking-tight">Featured Projects</h2>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'ALL PROJECTS' },
                  { id: 'systems', label: 'SYSTEMS & ARCHITECTURE' },
                  { id: 'nlp', label: 'INTELLIGENT COMPUTING & NLP' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full transition-all border-2 cursor-pointer ${
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
              {filteredProjects.map((project, idx) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer group flex flex-col justify-between animate-slide-up ${
                    idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : 'delay-300'
                  } ${
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
          </div>
        )}

        {/* TAB 3: EXPERIENCE & LEADERSHIP */}
        {activeTab === 'experience' && (
          <div key="experience" className="animate-tab-fade max-w-6xl mx-auto px-6 py-12">
            <div className="max-w-3xl mb-12 animate-slide-left delay-100">
              <span className="px-3 py-1 bg-[#FA5D29] text-white text-xs font-bold tracking-widest uppercase rounded-full inline-block mb-3">
                CAMPUS & LEADERSHIP ROLES
              </span>
              <h2 className="font-heading text-4xl font-extrabold tracking-tight">Relevant Experiences</h2>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className={`p-8 rounded-3xl border-2 transition-all hover:scale-[1.01] animate-slide-up ${
                  idx === 0 ? 'delay-100' : idx === 1 ? 'delay-200' : 'delay-300'
                } ${
                  isDark ? 'bg-[#181818] border-neutral-800' : 'bg-white border-neutral-200'
                }`}>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                    <span className="px-3 py-1 bg-[#FA5D29] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-400">{exp.period}</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold mb-1">{exp.role}</h3>
                  <div className="text-sm font-bold text-[#502BD8] mb-4">{exp.organization}</div>

                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs">
                    {exp.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-neutral-400">
                        <CheckCircle2 size={16} className="text-[#FA5D29] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: TECHNICAL SKILLS & EDUCATION */}
        {activeTab === 'skills' && (
          <div key="skills" className="animate-tab-fade max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Technical Skills Matrix */}
              <div className="animate-slide-left delay-100">
                <div className="flex items-center gap-3 mb-8">
                  <Cpu size={24} className="text-[#FA5D29]" />
                  <h2 className="font-heading text-3xl font-bold">Technical Skills</h2>
                </div>

                <div className="space-y-4">
                  {technicalSkills.map((sk, idx) => (
                    <div key={idx} className={`p-5 rounded-2xl border-2 transition-all ${
                      isDark ? 'bg-[#181818] border-neutral-800' : 'bg-white border-neutral-200'
                    }`}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-heading font-bold text-base">{sk.name}</span>
                        <span className="px-2.5 py-0.5 bg-[#FA5D29]/10 text-[#FA5D29] border border-[#FA5D29]/30 text-xs font-bold rounded-full uppercase">
                          {sk.level}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 font-mono">{sk.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Languages Section */}
                <div className="mt-10">
                  <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
                    <Globe size={18} className="text-[#00B894]" /> Languages Spoken
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {languageProficiency.map(lp => (
                      <div key={lp.lang} className={`p-4 rounded-2xl border ${
                        isDark ? 'bg-[#181818] border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
                      }`}>
                        <div className="text-sm font-bold">{lp.lang}</div>
                        <div className="text-xs text-neutral-400 mt-1">{lp.level}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Background */}
              <div className="animate-slide-right delay-200">
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap size={24} className="text-[#502BD8]" />
                  <h2 className="font-heading text-3xl font-bold">Education</h2>
                </div>

                <div className="space-y-6">
                  {educationData.map((edu, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl border-2 transition-all ${
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
          </div>
        )}

        {/* TAB 5: CONTACT ME */}
        {activeTab === 'contact' && (
          <div key="contact" className="animate-tab-fade max-w-6xl mx-auto px-6 py-16">
            <div className={`p-10 md:p-16 rounded-3xl border-2 text-center animate-slide-up delay-100 ${
              isDark ? 'bg-[#181818] border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900 shadow-xl'
            }`}>
              <span className="px-3 py-1 bg-[#FA5D29] text-white text-xs font-bold tracking-widest uppercase rounded-full inline-block mb-4">
                GET IN TOUCH
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight mb-6 animate-slide-up delay-200">
                Let's connect for software engineering & research opportunities.
              </h2>
              <p className={`text-base mb-8 max-w-xl mx-auto animate-slide-up delay-300 ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                Open for software internships, Intelligent Computing projects, and campus leadership collaborations.
              </p>

              {/* Direct Info Card */}
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-neutral-900 text-white text-left space-y-4 mb-10 text-xs font-mono animate-slide-up delay-300 border border-neutral-800 shadow-lg">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#FA5D29] shrink-0" />
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase">Email</div>
                    <div className="font-bold text-sm text-white">{emailAddress}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-neutral-800">
                  <PhoneCall size={18} className="text-[#502BD8] shrink-0" />
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase">Phone / WhatsApp</div>
                    <div className="font-bold text-sm text-white">{phoneNumber}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-neutral-800">
                  <MapPin size={18} className="text-[#00B894] shrink-0" />
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase">Address / Location</div>
                    <div className="font-bold text-sm text-white">Muadzam Shah, Pahang, Malaysia</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-400">
                <a 
                  href={`mailto:${emailAddress}`}
                  className="px-8 py-4 bg-[#FA5D29] hover:bg-[#e04b19] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Mail size={16} /> Send Email Direct
                </a>
                <a 
                  href={linkedinUrl}
                  target="_blank" 
                  rel="noreferrer"
                  className={`px-8 py-4 font-bold text-xs uppercase tracking-wider rounded-full transition-all flex items-center gap-2 ${
                    isDark ? 'bg-neutral-800 hover:bg-neutral-700 text-white' : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-900'
                  }`}
                >
                  <FaLinkedin size={16} /> LinkedIn Profile
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`px-8 py-4 font-bold text-xs uppercase tracking-wider rounded-full transition-all flex items-center gap-2 ${
                    isDark ? 'bg-neutral-800 hover:bg-neutral-700 text-white' : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-900'
                  }`}
                >
                  <FaGithub size={16} /> GitHub Profile
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Project Detail Modal Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-tab-fade">
          <div className={`relative w-full max-w-2xl p-8 md:p-10 rounded-3xl border-2 shadow-2xl transition-all animate-slide-up ${
            isDark ? 'bg-[#181818] border-neutral-700 text-white' : 'bg-white border-neutral-300 text-neutral-900'
          }`}>
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
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
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FA5D29] mb-3">Key Technical Highlights</h4>
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

      {/* Global Developer Portfolio Footer */}
      <footer className="bg-[#1c1c1c] text-white py-12 px-6 border-t border-neutral-800 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-mono text-neutral-400 gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-heading font-bold text-white text-sm">ADAM ZAFRY ZAHARIN</span>
          </div>

          <div className="flex flex-wrap items-center space-x-6">
            {navTabs.map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)} 
                className="hover:text-[#FA5D29] transition-colors uppercase cursor-pointer"
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div>
            © {new Date().getFullYear()} Adam Zafry Zaharin. Intelligent Computing Portfolio.
          </div>
        </div>
      </footer>
    </div>
  );
}