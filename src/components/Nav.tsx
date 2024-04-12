import { Link } from "react-scroll";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuAlignRight } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks = () => {
  return (
    <>
      <Link
        className="hover:text-secondary-color transform transition duration-300 hover:scale-110"
        to="aboutMe"
      >
        About Me
      </Link>
      <Link
        className="hover:text-secondary-color transform transition duration-300 hover:scale-110"
        to="projects"
      >
        Projects
      </Link>
      <Link
        className="hover:text-secondary-color transform transition duration-300 hover:scale-110"
        to="abilities"
      >
        Abilities
      </Link>
      <Link
        className="hover:text-secondary-color transform transition duration-300 hover:scale-110"
        to="contactMe"
      >
        Contact Me
      </Link>
    </>
  );
};

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-2/ z-10 flex justify-end text-black">
        <div className="hidden w-full justify-between gap-8 md:flex">
          <NavLinks></NavLinks>
        </div>
        <div className="md:hidden">
          <motion.button
            id="toggle-nav-button"
            onClick={toggleNav}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <LuAlignRight />
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <GiHamburgerMenu />
              </motion.div>
            )}
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-4 pb-2 text-white md:hidden"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} // Fondo semi-transparente para que el contenido principal sea visible pero oscurecido
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            <NavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
