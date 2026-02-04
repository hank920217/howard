import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, X, Trophy } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "臉部表情辨識系統",
            desc: "使用 Python 與 OpenCV 進行即時臉部表情分析，應用於課堂專注度監測。",
            tags: ["Python", "OpenCV", "AI"],
            rank: "Award 1st",
            certImg: "/certs/US.jpg" // Placeholder
        },
        {
            title: "球型機器人控制",
            desc: "基於 Arduino 的球型滾動機器人，透過手機藍牙進行全向控制。",
            tags: ["C++", "Arduino", "Bluetooth"],
            rank: "Award 2nd",
            certImg: "/certs/highschool.jpg" // Placeholder
        },
        {
            title: "作品集網站 (This Website)",
            desc: "使用 React 與 Framer Motion 打造的玻璃擬態個人網站。",
            tags: ["React", "Tailwind", "Framer Motion"],
            rank: null,
            certImg: null
        }
    ];

    return (
        <motion.div 
            className="max-w-6xl mx-auto pb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
             <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">專案作品</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-amber-950/90 backdrop-blur-lg rounded-2xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 border border-amber-500/20 shadow-2xl cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => project.certImg && setSelectedProject(project)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500" />
                        
                        <div className="relative z-10 space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
                                    <FolderGit2 size={24} />
                                </div>
                                {project.rank && (
                                    <span className="px-2 py-1 text-xs bg-amber-500/20 text-amber-200 rounded border border-amber-500/30">
                                        {project.rank}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-amber-50 transition-colors group-hover:text-amber-300">
                                {project.title}
                            </h3>
                            
                            <p className="text-amber-200/80 text-sm leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded bg-amber-900/60 text-amber-300 border border-amber-800/50">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
             </div>

             {/* Modal Overlay */}
             <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-amber-950/60 backdrop-blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-2xl bg-amber-50/10 backdrop-blur-2xl rounded-3xl border border-amber-400/50 shadow-2xl overflow-hidden"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                className="absolute top-4 right-4 p-2 rounded-full bg-amber-950/50 text-amber-200 hover:bg-amber-900 transition-colors z-20"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X size={24} />
                            </button>

                            <div className="p-8 space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-amber-500/20 rounded-xl text-amber-500">
                                        <Trophy size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-amber-50">{selectedProject.title} - 詳細獎狀</h3>
                                </div>

                                <div className="aspect-[3/2] w-full bg-amber-950/40 rounded-2xl border border-amber-500/20 overflow-hidden flex items-center justify-center group">
                                    {selectedProject.certImg ? (
                                        <img 
                                            src={selectedProject.certImg} 
                                            alt="Project Certificate" 
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div className="hidden flex-col items-center justify-center text-amber-500/30">
                                        <Trophy size={64} className="mb-4" />
                                        <span className="text-lg">獎狀圖片載入中...</span>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button 
                                        className="px-6 py-2 rounded-full bg-amber-500 text-amber-950 font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                                        onClick={() => setSelectedProject(null)}
                                    >
                                        關閉
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
             </AnimatePresence>
        </motion.div>
    );
};

export default Projects;
