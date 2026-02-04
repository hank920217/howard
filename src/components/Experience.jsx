import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Trophy, Store, Ticket, Utensils } from 'lucide-react';

const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto space-y-16 pb-20"
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -20 }}
      variants={container}
    >
      {/* Header */}
      <motion.h2 variants={item} className="text-4xl font-bold text-center text-amber-900 mb-12">
        個人經歷
      </motion.h2>

      {/* Education - Timeline Style */}
      <motion.section variants={item} className="space-y-6">
        <h3 className="flex items-center gap-3 text-2xl font-semibold text-amber-900">
            <GraduationCap className="text-amber-500" /> 學歷
        </h3>
        <div className="relative border-l-2 border-amber-500/30 ml-3 space-y-8 pl-8 py-2">
            {[
                { period: "2019/9 - 2021/6", school: "彰師附工", dept: "職業學校" },
                { period: "2021/9 - 2025/6", school: "嘉南藥理大學", dept: "資訊管理系" },
                { period: "2023/7 - 2023/8", school: "高雄榮總", dept: "資訊部 (實習)" },
            ].map((edu, idx) => (
                <div key={idx} className="relative group">
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-amber-950 bg-amber-500 group-hover:bg-amber-300 transition-colors" />
                    <span className="text-sm text-amber-500 font-mono tracking-wider">{edu.period}</span>
                    <h4 className="text-xl font-bold text-amber-900">{edu.school}</h4>
                    <p className="text-amber-900/70">{edu.dept}</p>
                </div>
            ))}
        </div>
      </motion.section>

      {/* Certifications - Glass Cards with Hover Reveal */}
      <motion.section variants={item} className="space-y-6">
        <h3 className="flex items-center gap-3 text-2xl font-semibold text-amber-900">
            <Award className="text-amber-500" /> 專業證照&獎狀
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
                { name: "Microsoft AI-900", img: "/certs/AI-900.jpg" },
                { name: "電腦硬體裝修乙級", img: "/certs/hardware_b.jpg" },
                { name: "工業電子丙級", img: "/certs/hardware_c.jpg" },
                { name: "IC3 國際證照", img: "/certs/ic3.jpg" },
                { name: "TQC專案管理概論", img: "/certs/TQCFOM.jpg" },
                { name: "TQC電子商務概論", img: "/certs/TQC-FOC.jpg" },
                { name: "電子化助理規劃師", img: "/certs/EAP.jpg" },
                { name: "電子化軟體應用師", img: "/certs/ESAP.jpg" },
                { name: "實習表現優異",img: "/certs/good.jpg" },
            ].map((cert, idx) => (
                <motion.div 
                    key={idx}
                    className="relative overflow-hidden rounded-xl glass-panel cursor-pointer group flex flex-col items-center justify-center p-2 min-h-[160px]"
                    whileHover={{ scale: 1.05 }}
                >
                    {/* Placeholder for Image */}
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        <img 
                            src={cert.img} 
                            alt={cert.name}
                            className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="hidden flex-col items-center justify-center text-amber-900/20">
                            <Award size={48} />
                            <span className="text-xs mt-2 italic">Image Placeholder</span>
                        </div>
                    </div>

                    {/* Hover Reveal Mask */}
                    <div className="absolute inset-0 bg-amber-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm">
                         <span className="font-bold text-amber-50 text-base mb-1">{cert.name}</span>
                         <div className="h-0.5 w-12 bg-amber-500 rounded-full" />
                    </div>

                    {/* Label (Visible when not hovering, subtle) */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/20 to-transparent p-2 group-hover:opacity-0 transition-opacity">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-amber-900/40 block text-center">
                            {cert.name}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
      </motion.section>

      {/* Work Experience */}
      <motion.section variants={item} className="space-y-6">
        <h3 className="flex items-center gap-3 text-2xl font-semibold text-amber-900">
            <Briefcase className="text-amber-500" /> 工作經歷
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
                { 
                    company: "全家便利商店", 
                    period: "2023/07 - 2024/04", 
                    desc: "負責解決顧客需求與貨架管理",
                    icon: <Store size={24} />
                },
                { 
                    company: "威秀影城", 
                    period: "2024/05 - 2025/07", 
                    desc: "負責售票服務、驗票與業績推銷",
                    icon: <Ticket size={24} />
                },
                { 
                    company: "只今居酒屋", 
                    period: "2024/10 - 2025/06", 
                    desc: "外場服務",
                    icon: <Utensils size={24} />
                },
            ].map((work, idx) => (
                <div 
                    key={idx} 
                    className="glass-panel p-6 rounded-xl flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] bg-amber-900/5 border border-amber-900/10"
                >
                    <div className="p-3 rounded-full bg-amber-500/20 text-amber-600 shrink-0">
                        {work.icon}
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-amber-900">{work.company}</h4>
                        <span className="text-sm text-center text-amber-800/60 font-mono block mb-2">{work.period}</span>
                        <p className="text-amber-800/80 text-sm leading-relaxed">
                            {work.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </motion.section>



    </motion.div>
  );
};

export default Experience;
