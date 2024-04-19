import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
  color?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ color = "#F1C40F" }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start({ opacity: 1, scale: 1 });
      } else {
        controls.start({ opacity: 0, scale: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-yellow-400 shadow-md"
      style={{ background: color }}
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={controls}
    >
      <ArrowUp />
    </motion.div>
  );
};

export default ScrollToTop;
