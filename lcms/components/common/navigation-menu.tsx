"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

import logo from "@/assets/logo.png"
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";

const navItems = [
  { name: "Trang chủ", href: "#" },
  { name: "Khám phá", href: "#" },
  { name: "Giới thiệu", href: "#" },
  { name: "Liên hệ", href: "#" },
];

const EXPAND_SCROLL_THRESHOLD = 100;

const containerVariants = {
  expanded: {
    y: 0,
    opacity: 1,
    scale: 1,
    width: "100%",
    maxWidth: "72rem",
    transition: {
      type: "spring" as const,
      damping: 50,
      stiffness: 400,
      staggerChildren: 0.05,
      delayChildren: 0.03,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    scale: 1,
    width: "3.5rem",
    maxWidth: "3.5rem",
    transition: {
      type: "spring" as const,
      damping: 50,
      stiffness: 400,
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const logoVariants = {
  expanded: { 
    opacity: 1, 
    scale: 1, 
    x: 0,
    transition: { 
      type: "spring" as const, 
      damping: 20, 
      stiffness: 300,
      delay: 0.2
    } 
  },
  collapsed: { 
    opacity: 0, 
    scale: 0.8, 
    x: -20,
    transition: { 
      type: "spring" as const, 
      damping: 20, 
      stiffness: 300,
      duration: 0.15
    } 
  },
};

const itemVariants = {
  expanded: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring" as const, 
      damping: 20, 
      stiffness: 300,
      delay: 0.15
    } 
  },
  collapsed: { 
    opacity: 0, 
    scale: 0.8, 
    y: 10,
    transition: { 
      type: "spring" as const, 
      damping: 20, 
      stiffness: 300,
      duration: 0.15
    } 
  },
};

const searchVariants = {
  expanded: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring" as const, 
      damping: 20, 
      stiffness: 300,
      delay: 0.2
    } 
  },
  collapsed: { 
    opacity: 0, 
    scale: 0.8, 
    y: 10,
    transition: { 
      type: "spring" as const, 
      damping: 20, 
      stiffness: 300,
      duration: 0.15
    } 
  },
};

const collapsedIconVariants = {
    expanded: { 
      opacity: 0, 
      scale: 0.8, 
      rotate: 90,
      transition: { 
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
        duration: 0.15
      } 
    },
    collapsed: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
        delay: 0.1,
      }
    },
}

export function AnimatedNavFramer() {
  const [isExpanded, setExpanded] = React.useState(true);
  
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    
    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest; 
    } 
    else if (!isExpanded && latest < previous && (scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD)) {
      setExpanded(true);
    }
    
    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
      whileHover={!isExpanded ? { scale: 1.02 } : {}}
      whileTap={!isExpanded ? { scale: 0.95 } : {}}
      onClick={handleNavClick}
      className={cn(
        "fixed z-40 border bg-background/80 shadow-lg backdrop-blur-sm",
        isExpanded 
          ? "top-6 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4" 
          : "top-6 left-6 w-14 h-14 rounded-full cursor-pointer"
      )}
    >
      <div className={cn(
        "flex items-center justify-between overflow-hidden h-14 relative",
        isExpanded ? "px-6" : "justify-center"
      )}>
        {/* Left Section - Logo, Home, Khám phá */}
        <motion.div
          className={cn(
            "flex items-center gap-6",
            !isExpanded && "hidden"
          )}
        >
          <motion.div
            variants={logoVariants}
            className="flex-shrink-0 flex items-center"
          >
            <Image src={logo} alt="Logo" className="h-8 w-8 object-contain" />
          </motion.div>
          
          <motion.div
            className={cn(
              "flex items-center gap-6",
              !isExpanded && "pointer-events-none"
            )}
          >
            {navItems.slice(0, 2).map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                variants={itemVariants}
                onClick={(e) => e.stopPropagation()}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Center Section - Search Bar */}
        <motion.div
          variants={searchVariants}
          className={cn(
            "flex-1 flex items-center justify-center max-w-md mx-8",
            !isExpanded && "hidden"
          )}
        >
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-background/50 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </motion.div>

        {/* Right Section - About, Contact, Login */}
        <motion.div
          className={cn(
            "flex items-center gap-6",
            !isExpanded && "hidden"
          )}
        >
          {navItems.slice(2, 4).map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
          
          <motion.div
            variants={itemVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <ThemeToggle />
          </motion.div>
          
          <motion.button
            variants={itemVariants}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-full"
          >
            <User className="h-4 w-4" />
            <span>Đăng nhập</span>
          </motion.button>
        </motion.div>
        
        {/* Collapsed Menu Icon */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center",
          isExpanded ? "pointer-events-none" : "pointer-events-auto"
        )}>
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-6 w-6" />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}