"use client";

import { User, Briefcase, Archive, Cpu, Home, Quote, Mail, Settings, Moon, Sun } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"

export default function Header() {
  const { setTheme } = useTheme();

  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Work', url: '#work', icon: Archive },
    { name: 'Testimonials', url: '#testimonials', icon: Quote },
    { name: 'AI Tool', url: '#ai-tool', icon: Cpu },
    { name: 'Contact', url: '#cta', icon: Mail },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 z-50 p-4">
        <Link href="/" className="relative text-2xl font-bold font-headline text-primary tracking-tighter animate-logo-glow">
            <span className="absolute -inset-0.5 bg-primary/50 rounded-full blur-2xl opacity-75"></span>
            <span className="relative">VL</span>
        </Link>
      </div>
      <div className="fixed top-0 right-0 z-50 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings className="h-6 w-6 text-primary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Sun className="mr-2" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <Moon className="mr-2" />
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <NavBar items={navItems} />
    </>
  );
}
