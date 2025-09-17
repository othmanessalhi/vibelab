"use client";

import { User, Briefcase, Archive, Cpu, Home } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function Header() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Work', url: '#work', icon: Archive },
    { name: 'AI Tool', url: '#ai-tool', icon: Cpu },
  ];

  return <NavBar items={navItems} />;
}
