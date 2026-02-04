import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderGit2 } from 'lucide-react';

const Navigation = ({ view, setView }) => {
  // Navigation items configuration
  const navItems = [
    { id: 'landing', label: '首頁', icon: <Home size={18} />, layoutId: 'nav-home' },
    { id: 'experience', label: '經歷', icon: <User size={18} />, layoutId: 'nav-exp' },
    { id: 'projects', label: '作品', icon: <FolderGit2 size={18} />, layoutId: 'nav-proj' },
  ];

  // In landing view, we don't show the nav bar at the top right, 
  // because the buttons are in the Hero section (except "Home" which is implicit).
  // However, to make the transition work, we might need these mounted but hidden?
  // No, Framer Motion handles unmount->mount transition with layoutId if usage is correct.
  
  if (view === 'landing') return null;

  return (
    <motion.nav 
      className="fixed top-0 right-0 p-6 z-50 flex gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex bg-amber-950/40 backdrop-blur-md rounded-full p-2 border border-amber-500/20 shadow-lg">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            layoutId={item.layoutId} // Shared layoutId for smooth transition
            onClick={() => setView(item.id)}
            className={`
              relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-colors
              ${view === item.id 
                ? 'text-amber-900' 
                : 'text-amber-800 hover:text-amber-900 hover:bg-amber-900/10'}
            `}
          >
            {view === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-amber-400 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ zIndex: -1 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
                {item.icon}
                {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
