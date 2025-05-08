export const fadeIn = (direction = "down", delay) => {
    return {
      hidden: {
        opacity: 0,
        x: direction === "left" ? 40 : direction === "right" ? -60 : 0,
        y: direction === "up" ? 40 : direction === "down" ? -60 : 0,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          type: "tween",
          stiffness: 100,
          duration: 1,
          delay: delay,
          ease: [0.20, 0.20, 0.20, 0.75],
        },
      },
    };
  };