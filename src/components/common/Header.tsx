"use client";

import { User, Briefcase, Archive, Cpu, Home } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import Link from 'next/link';

export default function Header() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Work', url: '#work', icon: Archive },
    { name: 'AI Tool', url: '#ai-tool', icon: Cpu },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 z-50 p-4">
        <Link href="/" className="text-2xl font-bold font-headline text-primary tracking-tighter">
          VL
        </Link>
      </div>
      <NavBar items={navItems} />
    </>
  );
}
