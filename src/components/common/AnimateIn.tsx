"use client";

import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimateInProps {
  children: ReactNode;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  trigger?: ScrollTrigger.Vars;
}

export default function AnimateIn({
  children,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
  trigger = { start: 'top 85%', toggleActions: 'play none none none' }
}: AnimateInProps) {
  const elemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elem = elemRef.current;
    if (elem) {
      gsap.fromTo(
        elem.children,
        { ...from },
        {
          ...to,
          scrollTrigger: {
            trigger: elem,
            ...trigger,
          },
          stagger: 0.1,
        }
      );
    }
  }, [from, to, trigger]);

  return <div ref={elemRef}>{children}</div>;
}
