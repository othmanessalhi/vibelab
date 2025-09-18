'use client';
import { useRef, useEffect, forwardRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { cn } from '@/lib/utils';

interface ComponentProps {
  children: string;
  baseVelocity: number;
  clasname?: string;
  delay?: number;
}

const Component = forwardRef<HTMLDivElement, ComponentProps>(({
  children,
  baseVelocity = -5,
  clasname,
  delay = 0,
}, ref) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    const vel = velocityFactor.get();
    if (vel !== 0) {
      directionFactor.current = vel > 0 ? 1 : -1;
    }
    moveBy += directionFactor.current * moveBy * vel;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={ref} className='overflow-hidden whitespace-nowrap flex flex-nowrap'>
      <motion.div
        className='flex whitespace-nowrap gap-10 flex-nowrap'
        style={{ x }}
      >
        <span className={cn(`block text-[8vw]`, clasname)}>{children}</span>
        <span className={cn(`block text-[8vw]`, clasname)}>{children}</span>
        <span className={cn(`block text-[8vw]`, clasname)}>{children}</span>
        <span className={cn(`block text-[8vw]`, clasname)}>{children}</span>
      </motion.div>
    </div>
  );
});

Component.displayName = 'TextMarquee';

export default Component;
