"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const sectionsRef = useRef<Map<string, HTMLElement | null>>(new Map());

  useEffect(() => {
    items.forEach(item => {
      const elementId = item.url.split('#')[1];
      if (elementId) {
        const element = document.getElementById(elementId);
        sectionsRef.current.set(item.name, element);
      }
    });

    const handleScroll = () => {
        const scrollPosition = window.scrollY + 150; // Add an offset
        let currentSection = '';

        for (const [name, element] of sectionsRef.current.entries()) {
            if (element) {
                const sectionTop = element.offsetTop;
                const sectionHeight = element.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = name;
                    break; 
                }
            }
        }
        if (currentSection) {
            setActiveTab(currentSection);
        }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize();
    handleScroll(); // Set initial active tab

    window.addEventListener("resize", handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  return (
    <div
      className={cn(
        "fixed bottom-6 sm:top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none",
        className
      )}
    >
      <div className="flex items-center gap-1 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg pointer-events-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-xs font-medium px-4 py-1.5 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-10 h-5 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-6 h-5 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-3 h-3 bg-primary/20 rounded-full blur-sm top-0 left-1.5" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
