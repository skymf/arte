import React, { useState, isHovered } from "react";
import { motion } from "framer-motion";

export default function AnimatedLink({ title }) {
    const [isHovered, setHovered] = useState(false);
  
    return (
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative overflow-hidden cursor-pointer"
      >
        <AnimatedWord title={title} animation={letterAnimation} />
        <div className="absolute top-0">
          <AnimatedWord title={title} animation={letterAnimationTwo} />
        </div>
      </motion.div>
    );
  }
  const titleAnimation = {
    rest: {
      transition: {
        staggerChildren: 0.003,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.003,
      },
    },
  };
  
  const letterAnimation = {
    rest: {
      y: 0,
    },
    hover: {
      y: -30,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      },
    },
  };
  
  const letterAnimationTwo = {
    rest: {
      y: 30,
    },
    hover: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      },
    },
  };
const AnimatedLetter = ({ character, animation }) => {
  return (
    <motion.span
      variants={animation}
      className="relative inline-block whitespace-nowrap"
    >
      {character}
    </motion.span>
  );
};

const AnimatedWord = ({ title, animation }) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative"
    >
      {title
        .split("")
        .map((character, i) =>
          character === " " ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <AnimatedLetter character={character} animation={animation} />
          )
        )}
    </motion.span>
  );
};