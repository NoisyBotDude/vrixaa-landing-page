"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WhoWeAreSection = () => {
  const content = [
    {
      title: "Transforming Learning Environments",
      description: "At VrixaaLabs, we are rethinking the way education is delivered and experienced. Our mission is to empower students and institutions with tools that make complex subjects more understandable and deeply engaging.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071",
      imageAlt: "Students collaborating in a modern learning environment",
      isImageRight: true,
    },
    {
      title: "Innovation Meets Education",
      description: "With a strong focus on accessibility and adaptability, we're working closely with academic institutions to test and refine our platform for real-world impact. From concept to classroom, we aim to support the journey of every learner with thoughtful design, advanced technology, and pedagogical integrity.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070",
      imageAlt: "Modern educational technology in use",
      isImageRight: false,
    },
    {
      title: "Building Future-Ready Solutions",
      description: "Our platform combines cutting-edge technology with proven educational methodologies to create an immersive learning experience. We're not just building tools; we're crafting experiences that inspire curiosity and foster deep understanding.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
      imageAlt: "Future of education visualization",
      isImageRight: true,
    },
  ];

  return (
    <section className="py-24 px-4 bg-background/50" id="about">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Who We Are
        </motion.h2>

        <div className="space-y-32">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                item.isImageRight ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-16`}
            >
              {/* Text Content */}
              <div className="flex-1 p-6 md:p-8">
                <div className="max-w-xl">
                  <h3 className="text-3xl font-semibold mb-6 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection; 