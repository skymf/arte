"use client";
import React from "react";
import { useState, useEffect } from "react";
export default function Gradient() {
  const [MousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const mouseX = Math.round((e.pageX / windowWidth) * 100);
      const mouseY = Math.round((e.pageY / windowHeight) * 100);
      setMousePosition({ x: mouseX, y: mouseY });
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  // implement tailwindcss maybe
  const GradientStyle = {
    backgroundImage: `radial-gradient(at ${MousePosition.x}% ${MousePosition.y}%, #3498db, #9b59b6)`,
    position: `fixed`,
    top: 0,
    left: 0,
    width: `100%`,
    height: `100%`,
  };
  return <div style={GradientStyle}> </div>;
}
