"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070')] 
            bg-cover bg-center bg-no-repeat"
          >
            {/* Two-layer gradient for better color control */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent backdrop-blur-[2px]" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <motion.h1 
                className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Where Education Meets Innovation
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                We're building a future-ready learning ecosystem that makes education more engaging, 
                interactive, and inclusive. By embracing the latest advancements in technology, 
                we aim to reimagine how learners connect, collaborate, and grow.
              </motion.p>
              <motion.div
                className="flex gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  size="lg" 
                  className="text-lg bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/#about" className="text-white">
                    Explore Our Vision
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="text-lg bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/#contact" className="text-white">
                    Contact Us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5
            }}
          >
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
            </div>
          </motion.div>
        </section>

        {/* Who We Are Section */}
        <WhoWeAreSection />

        {/* Team Section */}
        <TeamSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
} 