"use client";
import React from "react";
import { gsap } from "gsap";

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (
    mouseY: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = mouseY;
    const bottomEdgeDist = height - mouseY;
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    gsap.killTweensOf([marqueeRef.current, marqueeInnerRef.current]);
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientY - rect.top,
      rect.height
    );
    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    gsap.killTweensOf([marqueeRef.current, marqueeInnerRef.current]);
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientY - rect.top,
      rect.height
    );
    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  const singleMarqueeSet = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="
          text-neutral-900
          uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0] whitespace-nowrap"
        >
          {text}
        </span>
        <div
          className="w-[200px] h-[7vh] my-[1em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center shrink-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ));
  }, [text, image]);

  return (
    <div
      className="
        flex-1 relative overflow-hidden text-center
        shadow-[0_-1px_0_0_rgba(0,0,0,0.2)]
      "
      ref={itemRef}
    >
      <a
        className="
          flex items-center justify-center h-full relative cursor-pointer
          uppercase no-underline font-semibold
          text-primary
          text-[4vh]
          hover:text-neutral-900
          focus:text-white
          focus-visible:text-neutral-900
        "
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        className="
          absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none
          bg-accent/10
          translate-y-[101%]"
        ref={marqueeRef}
      >
        <div
          className="h-full w-full flex"
          ref={marqueeInnerRef}
        >
          <div className="flex items-center relative h-full w-max animate-marquee will-change-transform">
            <div className="flex items-center shrink-0">{singleMarqueeSet}</div>
            <div className="flex items-center shrink-0">{singleMarqueeSet}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="
      w-full h-full overflow-hidden
      bg-background
      transition-colors duration-300
      "
    >
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} text={item.text} image={item.image} link={item.link} />
        ))}
      </nav>
    </div>
  );
};
