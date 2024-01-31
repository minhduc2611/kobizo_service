import { Variants } from "framer-motion";
import {isMobile} from 'react-device-detect';
const Default = {}
export const textVariant = (delay = 0) => {
  return isMobile? Default :{
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: "left" | "up" | "right" | "down",
  type = "",
  delay = 0,
  duration = 0
) => {
  return  isMobile? Default :{
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay = 0, duration = 0) => {
  return  isMobile? Default :{
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: "left" | "up" | "right" | "down",
  type = "",
  delay = 0,
  duration = 0
) => {
  return  isMobile? Default :{
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        delayChildren: delayChildren || 0,
      },
    },
  } as Variants;
};
