import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, FolderGit2 } from 'lucide-react';

const Hero = ({ setView }) => {
  return (
    <motion.div 
        className="flex flex-col items-center justify-center text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        transition={{ duration: 0.6 }}
    >
      {/* Profile Photo */}
      <motion.div 
        className="w-40 h-40 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-300 p-1 shadow-2xl shadow-amber-500/20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <div className="w-full h-full rounded-full bg-amber-950 overflow-hidden flex items-center justify-center border-4 border-amber-900/50 relative group">
             <img 
                src="/certs/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                }}
             />
             <div className="hidden flex items-center justify-center w-full h-full bg-amber-900">
                <User size={48} className="text-amber-500 opacity-20" />
             </div>
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="space-y-4 max-w-2xl">
        <motion.h1 
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-amber-600 to-amber-900"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
          曾俊翰 (Howard)
        </motion.h1>
        <motion.p 
            className="text-xl md:text-2xl text-amber-900/80 font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
          「將使用者需求與技術落地相結合」
        </motion.p>
      </div>

      {/* Action Buttons (Will transition to Navigation) */}
      <div className="flex gap-6 mt-8">
        <motion.button
            layoutId="nav-exp"
            onClick={() => setView('experience')}
            className="group relative px-8 py-4 rounded-full bg-amber-900/10 backdrop-blur-sm border border-amber-900/20 text-amber-900 font-semibold text-lg overflow-hidden transition-all hover:bg-amber-900/20 hover:scale-105"
            whileHover={{ boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)" }}
        >
            <span className="flex items-center gap-2">
                <User size={20} />
                經歷
            </span>
        </motion.button>
        
        <motion.button
            layoutId="nav-proj"
            onClick={() => setView('projects')}
            className="group relative px-8 py-4 rounded-full bg-amber-900/10 backdrop-blur-sm border border-amber-900/20 text-amber-900 font-semibold text-lg overflow-hidden transition-all hover:bg-amber-900/20 hover:scale-105"
            whileHover={{ boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)" }}
        >
            <span className="flex items-center gap-2">
                <FolderGit2 size={20} />
                作品
            </span>
        </motion.button>
      </div>

    </motion.div>
  );
};

export default Hero;
