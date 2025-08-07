"use client";

import * as React from "react";
import { Search, Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import logo from "@/assets/logo.png"

const navItems = [
  { name: "Trang chủ", href: "/" },
  { name: "Khám phá", href: "#" },
  { name: "Giới thiệu", href: "#" },
  { name: "Liên hệ", href: "#" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const containerVariants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem",
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const logoVariants = {
  expanded: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring" as const, damping: 15 } },
  collapsed: { opacity: 0, x: -25, rotate: -180, transition: { duration: 0.3 } },
};

const itemVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring" as const, damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const searchVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring" as const, damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const rightItemsVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring" as const, damping: 15 } },
  collapsed: { opacity: 0, x: 20, scale: 0.95, transition: { duration: 0.2 } },
};

const collapsedIconVariants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  collapsed: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 300,
      delay: 0.15,
    }
  },
}

export function AnimatedNavFramer() {
  const [isExpanded, setExpanded] = React.useState(true);
  const router = useRouter();

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
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={cn(
          "w-[800px] flex items-center overflow-hidden rounded-full border bg-background/80 shadow-lg backdrop-blur-sm h-12",
          !isExpanded && "cursor-pointer justify-center"
        )}
      >
        {/* Left side: Logo, Home, Explore */}
        <motion.div
          variants={logoVariants}
          className="flex-shrink-0 flex items-center gap-4 pl-4 pr-2"
        >
          <Image
            src={logo}
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </motion.div>

        <motion.div
          className={cn(
            "flex items-center gap-4",
            !isExpanded && "pointer-events-none"
          )}
        >
          {navItems.slice(0, 2).map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              onClick={(e) => {
                e.stopPropagation();
                if (item.href === '/') {
                  router.push('/');
                }
              }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Center: Search bar */}
        <motion.div
          variants={searchVariants}
          className={cn(
            "flex items-center mx-4",
            !isExpanded && "pointer-events-none"
          )}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm..."
              className="pl-10 w-64 h-8 text-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </motion.div>

        {/* Right side: About, Contact, Theme Toggle, Login */}
        <motion.div
          variants={rightItemsVariants}
          className={cn(
            "flex items-center gap-4 pr-4",
            !isExpanded && "pointer-events-none"
          )}
        >
          {navItems.slice(2, 4).map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
            >
              {item.name}
            </motion.a>
          ))}

          <motion.div variants={itemVariants} onClick={(e) => e.stopPropagation()}>
            <ThemeToggle />
          </motion.div>

          <motion.div variants={itemVariants} onClick={(e) => e.stopPropagation()}>
            <Button
              size="sm"
              variant="outline"
              onClick={() => router.push('/auth')}
            >
              Đăng nhập
            </Button>
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-6 w-6" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}