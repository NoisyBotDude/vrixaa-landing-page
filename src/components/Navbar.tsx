"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/#" },
  { name: "About", href: "/#about" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Extract the section ID from the href
    const sectionId = href.split('#')[1];
    
    // If it's the home section (empty sectionId), scroll to top
    if (!sectionId) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // Find the section and scroll to it
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80; // Height of the navbar
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="/#" 
            onClick={(e) => handleNavClick(e, "/#")}
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            VrixaaLabs
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
              <Button
                className={`${
                  scrolled
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white border-2 border-white/20"
                } transition-all duration-300`}
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-white"} />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b md:hidden"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block text-foreground hover:text-primary py-2 text-lg font-medium"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
} 