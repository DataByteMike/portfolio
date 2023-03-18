import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { navLinks } from "@/utilities/data";

type Props = {}

const Navbar = ({}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

  // Handle the toggling of mobile menu
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const circleVariants = {
    hidden : {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60
      }
    }
  }

  const ulVariants = {
    hidden : {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1
      }
    },
  }

  // Handles scroll behavior of navbar
  const handleScroll = () => {
    return window.scrollY > 50 ? setIsNavActive(true) : setIsNavActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`${isNavActive ? "bg-tertiary h-20" : "h-24"} fixed flex top-0 w-full z-10 transition-all duration-300`}>
      <Head>
        <title>Michael G. | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A software engineer who loves programming." />
      </Head>
      <div className="container flex h-full mx-auto items-center justify-between">
        {/* Left Side */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{ duration: 1.5 }}
          className="flex font-bold text-xl cursor-pointer"
        >
          <Link href="/" className="flex items-center">
            {"DataByteMike".split("").map((letter, index) => {
              return (
                <span key={index} className="hover:text-accent hover:-mt-2 transition-all duration-500 hover:duration-100">
                  {letter}
                </span>
              );
            })}
          </Link>
        </motion.div>
        {/* Right Side */}
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
          className="hidden lg:inline-flex items-center capitalize"
        >
          {/* Navigation section */}
          <ul className="flex space-x-8 text-[15px] list-none">
            {navLinks.map(({name, link}, index) => {
              return (
                <li key={index} className="cursor-pointer underline-effect">
                  <Link href={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
        {/* Mobile section */}
        <motion.div className="lg:hidden">
          {/* Mobile button */}
          <button
            onClick={handleMenu}
            className="relative focus:outline-none w-10 h-10 z-20 text-accent"
          >
            <div className="block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10">
              <span 
                  className={`block rounded-full absolute bg-current transform transition duration-1000 ease-in-out h-0.5 w-9  ${
                  isMenuOpen ? "-rotate-45" : "-translate-y-2.5"
                  }`}
                />
                <span 
                  className={`block rounded-full absolute bg-current transform transition duration-1000 ease-in-out h-0.5 w-9 ${
                  isMenuOpen ? "translate-x-10 opacity-0" : ""
                  }`}
                />
                <span 
                  className={`block rounded-full absolute bg-current transform transition duration-1000 ease-in-out h-0.5 w-9 ${
                  isMenuOpen ? "rotate-45" : "translate-y-2.5"
                  }`}
                />
            </div>
          </button>
          <motion.div
            variants={circleVariants}
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            className="w-4 h-4 rounded-full fixed top-0 right-0 bg-secondary"
          />
          <motion.ul
            variants={ulVariants}
            initial="hidden"
            animate={isMenuOpen ? "visible" : ""}
            className={`${isMenuOpen? "right-0" : "-right-full"} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
          >
            {navLinks.map((item, index) => {
              return (
                
                <li key={index} 
                  className="cursor-pointer mb-8"
                  onClick={handleMenu}
                >
                  <Link href={item.link} className="text-xl capitalize">{item.name.toUpperCase()}</Link>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Navbar;