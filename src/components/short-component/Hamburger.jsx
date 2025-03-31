// import React from "react";

// const HamburgerMenu = () => {
//   return (
//       <div className="group cursor-pointer space-y-1 p-1">
//         <span className="block h-1 w-8 bg-gray-100 transition-transform duration-300 group-hover:translate-x-0"></span>
//         <span className="block h-1 w-8 bg-gray-100 transition-all duration-300 group-hover:translate-x-4"></span>
//         <span className="block h-1 w-8 bg-gray-100 transition-transform duration-300 group-hover:translate-x-0"></span>
//       </div>
//   );
// };

// export default HamburgerMenu;

import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import useDimensions from "./useDimensions.jsx";
import MenuToggle from "./MenuToggle.jsx";
import Navigation from "./Navigation.jsx";

const HamburgerMenu = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="sidebar"
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default HamburgerMenu;

