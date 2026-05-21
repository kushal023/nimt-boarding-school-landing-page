/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import imgHero1 from './assets/images/regenerated_image_1779082019093.png';
import imgHero2 from './assets/images/regenerated_image_1779082023443.png';
import { 
  ShieldCheck, 
  BookOpen, 
  Users, 
  Award, 
  Home, 
  Brain, 
  Rocket, 
  Laptop, 
  Trophy, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  MessageCircle,
  X,
  Stethoscope,
  GraduationCap,
  Sparkles,
  Search,
  Monitor,
  Dumbbell
} from 'lucide-react';

// --- Shared Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center group transition-all hover:scale-105 select-none ${className}`}>
    <div className="bg-[#0041f5] w-24 h-24 flex items-center justify-center shadow-lg overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center text-white font-black text-2xl">NIMT</div>
      <img 
        src="/src/assets/images/regenerated_image_1779068887030.png" 
        alt="NIMT Beacon School Logo" 
        className="w-full h-full object-contain p-2 relative z-10"
        referrerPolicy="no-referrer"
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
    </div>
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline' | 'white',
  className?: string,
  [key: string]: any
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/20",
    secondary: "bg-brand-muted text-brand hover:bg-brand/10",
    outline: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
    white: "bg-white text-brand hover:bg-gray-100 shadow-xl"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-gray-600 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0041f5] shadow-2xl ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          {['Why NIMT', 'Boarding', 'Education', 'Facilities', 'Admissions'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="font-bold tracking-tight transition-colors hover:opacity-75 text-white"
            >
              {item}
            </a>
          ))}
          <a href="https://wa.me/919599931443" target="_blank" rel="noopener noreferrer">
            <Button variant="white" className="!py-2.5 !px-8 text-sm shadow-2xl">
              Enquire Now
            </Button>
          </a>
        </div>

        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['Why NIMT', 'Boarding', 'Education', 'Facilities', 'Admissions'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-lg font-medium text-white hover:text-blue-200" 
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button variant="white">Apply for Admission</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
    {/* Video/Image Background */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
        alt="NIMT Campus" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-linear-to-r from-brand/80 via-brand/40 to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-16 items-center">
      <div className="lg:w-1/2">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="px-5 py-2 bg-[#fffc4d] text-[#0041f5] text-xs font-black uppercase tracking-widest rounded-full shadow-[0_10px_30px_rgba(255,252,77,0.3)]">
            Admissions Open 2026-27
          </span>
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-[1.15] mb-8 tracking-tight"
        >
          Looking for the <span className="text-[#fffc4d]">Perfect Boarding School</span> in Delhi NCR for Your Child?
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-blue-50 mb-12 leading-relaxed max-w-xl font-medium drop-shadow-md"
        >
          A premium, safe, and disciplined boarding experience where your child grows into a confident global citizen.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-5"
        >
          <a href="#admissions">
            <Button variant="white" className="!bg-white !text-[#0041f5] hover:!bg-[#fffc4d] transition-all text-lg px-12 py-5 shadow-2xl">
              Apply Now <ArrowRight size={22} />
            </Button>
          </a>
          <a href="https://wa.me/919599931443" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="!text-white border-white/50 hover:bg-white/10 text-lg px-10 py-5">
              Book Visit
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="lg:w-1/2 w-full grid grid-cols-2 gap-4"
      >
        <div className="space-y-4">
          <div className="h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/20">
            <img 
              src={imgHero1} 
              alt="Study" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="h-[200px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/20 bg-[#08a7e6] flex items-center justify-center p-8 text-center text-white">
            <div>
              <p className="text-4xl font-black mb-2">98%</p>
              <p className="text-xs uppercase font-bold tracking-widest text-blue-100">Board Results</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 py-8">
          <div className="h-[200px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/20 bg-[#fffc4d] flex items-center justify-center p-8 text-center text-[#0041f5]">
            <div className="flex flex-col items-center">
              <ShieldCheck size={40} className="mb-4" />
              <p className="font-bold text-sm uppercase tracking-widest leading-tight">Safe & Secure <br /> Campus</p>
            </div>
          </div>
          <div className="h-[300px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/20">
            <img 
              src={imgHero2} 
              alt="Mentor" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
    >
      <span className="text-xs uppercase tracking-widest font-bold">Explore Campus</span>
      <motion.div 
        animate={{ y: [0, 8, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </motion.div>
  </section>
);

const WhyNIMT = () => {
  const cards = [
    { title: "Safe & Supervised", desc: "24/7 campus security and resident mentors ensuring safety at every step.", icon: <ShieldCheck className="text-brand" size={32} /> },
    { title: "IIT/NEET Ready", desc: "Specialized coaching integrated with regular schooling for top performance.", icon: <GraduationCap className="text-brand" size={32} /> },
    { title: "Personal Attention", desc: "Small class sizes and personalized mentorship for holistic development.", icon: <Users className="text-brand" size={32} /> },
    { title: "Modern Amenities", desc: "Smart classrooms, advanced labs, and state-of-the-art sports facilities.", icon: <Laptop className="text-brand" size={32} /> },
    { title: "Leadership Growth", desc: "Focus on public speaking, soft skills, and character building.", icon: <Sparkles className="text-brand" size={32} /> },
    { title: "Healthy Lifestyle", desc: "Nutritious balanced meals and a structured regime for physical fitness.", icon: <Dumbbell className="text-brand" size={32} /> }
  ];

  return (
    <section id="why-nimt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Why Parents Choose NIMT Boarding" 
          subtitle="We don't just teach; we prepare students for life with a balance of academics, discipline, and emotional well-being."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-brand/20 transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SecondHome = () => (
  <section id="boarding" className="py-24 bg-[#f6eada] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0041f5]/5 -skew-x-12 transform origin-top-right -z-0" />
    
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="/src/assets/images/regenerated_image_1778933912074.png" 
              alt="Hostel Room" 
              className="rounded-3xl shadow-xl w-full h-[300px] object-cover border-4 border-white"
              referrerPolicy="no-referrer"
            />
            <div className="bg-[#0041f5] p-6 rounded-3xl text-white shadow-xl">
              <h4 className="text-3xl font-black mb-1">24/7</h4>
              <p className="text-xs uppercase font-bold text-blue-200">Resident Support</p>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="bg-[#fffc4d] p-6 rounded-3xl flex items-center gap-4 shadow-xl border border-yellow-200">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0041f5]">
                <CheckCircle2 size={20} />
              </div>
              <p className="font-bold text-[#0041f5] text-sm leading-tight">Nutritious Home-style Meals</p>
            </div>
            <img 
              src="/src/assets/images/play.png" 
              alt="Dining" 
              className="rounded-3xl shadow-xl w-full h-[300px] object-cover border-4 border-white"
            />
          </div>
        </div>
      </motion.div>

      <div className="space-y-8">
        <span className="px-4 py-1.5 bg-[#0041f5]/10 text-[#0041f5] font-bold uppercase tracking-widest text-xs rounded-full">Life at NIMT</span>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          A Second Home <br /> Built on <span className="text-[#0041f5]">Trust & Safety.</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          At NIMT Beacon, your child's emotional and physical safety is our priority. Our boarding facilities are designed to foster growth, discipline, and lifelong friendships.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
          {[
            { text: "Air-Conditioned Rooms", icon: <CheckCircle2 /> },
            { text: "24/7 Medical Care", icon: <CheckCircle2 /> },
            { text: "Smart Laundry Systems", icon: <CheckCircle2 /> },
            { text: "Evening Support Classes", icon: <CheckCircle2 /> },
            { text: "Nutritious Food Menu", icon: <CheckCircle2 /> },
            { text: "Modern Recreation Box", icon: <CheckCircle2 /> }
          ].map(item => (
            <li key={item.text} className="flex items-center gap-3 text-gray-800 font-bold group">
              <div className="w-6 h-6 rounded-full bg-[#fffc4d]/50 text-[#8a5506] flex items-center justify-center group-hover:bg-[#0041f5] group-hover:text-white transition-all">
                <CheckCircle2 size={14} />
              </div>
              {item.text}
            </li>
          ))}
        </ul>
        <Button variant="primary" className="!px-12 !py-5 shadow-2xl !bg-[#0041f5]">Schedule a Visit</Button>
      </div>
    </div>
  </section>
);

const FutureReady = () => (
  <section id="education" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Future-Ready Education" 
        subtitle="Empowering your child with the skills needed for the 21st century."
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Smart Classrooms", icon: <Monitor />, count: "100%", color: "bg-[#f6eada]" },
          { title: "AI & Robotics", icon: <Rocket />, count: "Advanced", color: "bg-[#08a7e6]/10" },
          { title: "Public Speaking", icon: <MessageSquare />, count: "Weekly", color: "bg-[#fffc4d]/20" },
          { title: "Global Exposure", icon: <Brain />, count: "Holistic", color: "bg-[#0041f5]/5" }
        ].map((item, idx) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`${item.color} p-10 rounded-[2.5rem] flex flex-col justify-between h-full border border-transparent hover:border-gray-200 transition-all shadow-sm`}
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0041f5] shadow-sm mb-12">
              {item.icon}
            </div>
            <div>
              <span className="text-4xl font-black block mb-2 text-[#0041f5]">{item.count}</span>
              <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CompetitiveSection = () => (
  <section className="py-24 bg-brand text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <span className="text-[#08a7e6] font-black uppercase tracking-widest text-sm mb-4 block">Integrated Preparation</span>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Building Future <br />
          <span className="text-[#fffc4d]">Doctors & <br /> Engineers.</span>
        </h2>
        <p className="text-xl text-[#f5f7ff] mb-10 leading-relaxed font-medium border-[#afbacc]">
          NIMT Beacon provides specialized preparation for IIT-JEE and NEET, eliminating the need for external coaching and saving student's valuable travel time.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-[#0041f5]/20 rounded-xl flex items-center justify-center shrink-0">
              <Stethoscope className="text-[#08a7e6]" />
            </div>
            <div>
              <h5 className="font-bold text-lg mb-1">NEET Focus</h5>
              <p className="text-sm text-[#fcfcff]">Integrated medical entrance preparation modules.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-[#0041f5]/20 rounded-xl flex items-center justify-center shrink-0">
              <Brain className="text-[#08a7e6]" />
            </div>
            <div>
              <h5 className="font-bold text-lg mb-1">IIT-JEE Strategy</h5>
              <p className="text-sm text-[#fcfeff]">Advanced math and physics workshops by specialists.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-white/5 rounded-[2rem] border border-white/10 relative group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#0041f5]/20 blur-2xl rounded-full -z-10 group-hover:bg-[#0041f5]/40 transition-all pointer-events-none" />
          <h4 className="text-xl font-bold mb-4">Academic Mentorship</h4>
          <p className="text-[#e8ecf7] text-sm leading-relaxed">Our resident faculty provides 1-on-1 doubt sessions every evening, ensuring no student is left behind.</p>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-[#0041f5]/20 blur-[120px] rounded-full -z-10" />
        <img 
          src="/src/assets/images/neet.png" 
          alt="IIT Study" 
          className="rounded-[3rem] shadow-2xl skew-y-2 border-4 border-white/10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-8 -left-8 bg-[#0041f5] p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,65,245,0.4)]">
          <span className="text-5xl font-black block text-white">98%</span>
          <span className="text-xs uppercase tracking-widest font-black text-blue-200">Result Achievement</span>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Boarding Life Experience" 
        subtitle="A day at NIMT Beacon is perfectly balanced between discipline, study, and recreation."
      />
      
      <div className="space-y-12">
        {[
          { time: "06:00 AM", event: "Morning Fitness & Drill", detail: "Start the day with physical activity and meditation for mental clarity.", icon: <Dumbbell /> },
          { time: "08:30 AM", event: "Academic Sessions", detail: "Intensive 21st century learning in smart, climate-controlled classrooms.", icon: <BookOpen /> },
          { time: "04:00 PM", event: "Sports & Club Activities", detail: "Football, basketball, music, robotics, or swimming classes.", icon: <Trophy /> },
          { time: "06:00 PM", event: "Remedial & Self Study", detail: "Doubt clearing with expert mentors in a quiet environment.", icon: <Brain /> },
          { time: "08:30 PM", event: "Dining & Community", detail: "Sharing healthy meals and bonding with peers before rest.", icon: <Home /> }
        ].map((item, idx) => (
          <motion.div 
            key={item.time}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="md:w-1/4 text-center md:text-right">
              <span className="text-brand font-bold text-3xl">{item.time}</span>
            </div>
            <div className="hidden md:flex flex-col items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-brand" />
              <div className="w-0.5 h-20 bg-brand/20" />
            </div>
            <div className="md:w-1/2 p-8 bg-gray-50 rounded-3xl flex items-start gap-6 border border-transparent hover:border-brand/10 transition-colors">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{item.event}</h4>
                <p className="text-gray-600">{item.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="facilities" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Campus & Facilities" 
        subtitle="Experience our world-class infrastructure designed for the leaders of tomorrow."
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
        <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-3xl">
          <img src="/src/assets/images/campus.png" alt="Main Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <span className="text-white font-bold text-xl uppercase tracking-wider">Main Campus</span>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-3xl">
          <img src="/src/assets/images/regenerated_image_1778933918446.png" alt="Smart Class" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        </div>
        <div className="group relative overflow-hidden rounded-3xl">
          <img src="https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=2069&auto=format&fit=crop" alt="Library" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        </div>
        <div className="group relative overflow-hidden rounded-3xl">
          <img src="/src/assets/images/regenerated_image_1779068877872.png" alt="Sports" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        </div>
        <div className="group relative overflow-hidden rounded-3xl">
          <img src="/src/assets/images/nimt2.png" alt="Labs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Voices of Trust" 
        subtitle="Hear from parents who have seen their children transform at NIMT Beacon."
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Rahul Sharma", role: "Parent of Class X Student", content: "The discipline and integrated NEET prep have taken a huge load off our shoulders. My son is much more focused now.", img: "RS" },
          { name: "Anjali Gupta", role: "Parent of Class VIII Student", content: "Safety was my primary concern. After visiting the campus and meeting the resident mentors, I was convinced this is the best place.", img: "AG" },
          { name: "Vikram Singh", role: "Parent of Class XII Student", content: "The personality development sessions have made my daughter so much more confident. She's now ready for university.", img: "VS" }
        ].map(item => (
          <div key={item.name} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Sparkles key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-gray-700 italic mb-8">"{item.content}"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white font-bold">{item.img}</div>
              <div>
                <h5 className="font-bold">{item.name}</h5>
                <span className="text-xs text-gray-500">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);
  
  const faqs = [
    { q: "Is the boarding safe for girls?", a: "Absolutely. We have a dedicated girls' wing with female wardens, 24/7 security, and comprehensive CCTV coverage in common areas." },
    { q: "How is the food quality and menu?", a: "We serve 4 balanced meals daily prepared in a hygienic kitchen. The menu is designed by nutritionists and includes both North and South Indian options." },
    { q: "What is the teacher-student ratio?", a: "We maintain a strict 1:15 ratio to ensure every child gets the attention they deserve, especially during evening study hours." },
    { q: "How do parents communicate with boarders?", a: "There are designated calling hours on weekends. In case of emergencies, parents can reach out to the resident wardens 24/7." },
    { q: "What competitive exams do you prepare for?", a: "We provide integrated classroom coaching for IIT-JEE, NEET, and NTSE, along with regular internal assessments." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 overflow-hidden">
              <button 
                onClick={() => setActive(active === idx ? null : idx)}
                className="w-full py-6 flex items-center justify-between text-left font-bold text-lg hover:text-brand transition-colors"
              >
                {faq.q}
                <motion.div animate={{ rotate: active === idx ? 180 : 0 }}>
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {active === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdmissionForm = () => (
  <section id="admissions" className="py-24 bg-brand relative">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div className="text-white">
        <h2 className="text-5xl font-bold mb-8">Admissions Open 2026-27</h2>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed text-balance">
          Secure Your Child’s Future Today. Limited Boarding Seats Available from Nursery to Class 12th
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg">
            <Phone className="text-blue-200" />
            <span>+91 95999 31443</span>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <div className="w-6 h-6 flex items-center justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span>WhatsApp: +91 95999 31443</span>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <MapPin className="text-blue-200" />
            <span>NIMT Beacon School, Avantika Colony, Shastri Nagar, Ghaziabad</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl">
        <h3 className="text-2xl font-bold mb-8 text-center">Inquiry for Admission</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Student Name" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand outline-none" />
            <input type="text" placeholder="Parent Name" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand outline-none" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand outline-none" />
          <div className="grid grid-cols-2 gap-4">
            <input type="tel" placeholder="Mobile Number" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand outline-none" />
            <select className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand outline-none">
              <option>Applying for Class</option>
              <option>Nursery / KG</option>
              <option>Class 1 - 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option>
            </select>
          </div>
          <Button variant="primary" className="!w-full">Submit Inquiry <ArrowRight size={20} /></Button>
          <p className="text-xs text-center text-gray-500">By clicking submit, you agree to our contact terms.</p>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-950 text-white py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Logo className="mb-8 scale-110 origin-left" />
          <p className="text-gray-400 max-w-sm mb-10 leading-relaxed font-medium">
            Building a Safe, Disciplined & Future-Ready Boarding Environment Where Students Learn, Grow & Succeed with Confidence.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/nimtschool/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/nimtschoolgzb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
              <Facebook size={18} />
            </a>
            <a href="https://wa.me/919599931443" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-8">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            {['Home', 'Admissions', 'Boarding Life', 'Academic Program', 'Campus Visit', 'Contact Us'].map(l => (
              <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-8">Campus</h4>
          <p className="text-gray-400 leading-relaxed uppercase">
            NIMT Beacon School, <br />
            Avantika Colony, Shastri Nagar, <br />
            Ghaziabad
          </p>
          <div className="mt-8">
            <span className="text-sm text-gray-500 block mb-2 uppercase tracking-widest">Office Hours</span>
            <p className="text-gray-400">Mon - Sat: 09:00 - 17:00</p>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2026 NIMT Beacon School. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingCall = () => (
  <motion.a 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href="tel:+919599931443"
    className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#0041f5] text-white rounded-full flex items-center justify-center shadow-2xl"
  >
    <Phone size={24} fill="white" />
  </motion.a>
);

// --- Main Application ---

export default function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  return (
    <div className="font-sans selection:bg-brand selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhyNIMT />
        <SecondHome />
        <FutureReady />
        <CompetitiveSection />
        <Experience />
        <Gallery />
        <Testimonials />
        {/* Results Section */}
        <section className="py-24 bg-brand text-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "25+", label: "Years of Excellence" },
              { val: "1500+", label: "Happy Students" },
              { val: "95%", label: "IIT/NEET Success" },
              { val: "10+", label: "Safe Hostels" }
            ].map(item => (
              <div key={item.label}>
                <span className="text-5xl md:text-6xl font-black block mb-2">{item.val}</span>
                <span className="text-sm uppercase tracking-widest font-bold text-blue-200">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
        
        {/* Simple Video Placeholder Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div 
              className="aspect-video bg-gray-900 rounded-[3rem] overflow-hidden relative group cursor-pointer shadow-2xl"
              onClick={() => setIsVideoPlaying(true)}
            >
              {isVideoPlaying ? (
                <iframe 
                  className="w-full h-full"
                  src="https://www.instagram.com/p/DRcWdEHER6W/embed" 
                  title="Campus Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img 
                    src="/src/assets/images/nimt01.png" 
                    alt="Video Placeholder" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="w-24 h-24 rounded-full bg-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                      <AnimatePresence>
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                          <Rocket size={40} fill="white" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight">Watch Campus Tour</h3>
                    <p className="text-white/80 font-medium">A cinematic look at the future of boarding.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <AdmissionForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
