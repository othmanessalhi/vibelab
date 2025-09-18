"use client";

import { User, Briefcase, Archive, Cpu, Home, Quote } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import Link from 'next/link';

export default function Header() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Work', url: '#work', icon: Archive },
    { name: 'Testimonials', url: '#testimonials', icon: Quote },
    { name: 'AI Tool', url: '#ai-tool', icon: Cpu },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 z-50 p-4">
        <Link href="/" className="relative text-2xl font-bold font-headline text-primary tracking-tighter animate-logo-glow">
            <span className="absolute -inset-0.5 bg-primary/50 rounded-full blur-2xl opacity-75"></span>
            <span className="relative">VL</span>
        </Link>
      </div>
      <NavBar items={navItems} />
    </>
  );
}
