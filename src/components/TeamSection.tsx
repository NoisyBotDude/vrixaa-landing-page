"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, TwitterIcon } from "lucide-react";

const teamMembers = [
  {
    name: "Ronit Choudhury",
    role: "Founder & CEO",
    description: "Provides strategic leadership and drives the vision, operations, and growth of VrixaaLabs.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Ashish Sarmah",
    role: "Chief Technology Officer (CTO)",
    description: "Leads the development of our core technologies and oversees platform innovation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Dr. Rupam Goswami",
    role: "Honorary Director",
    description: "Offers strategic academic insights and helps guide institutional alignment.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=987",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Dr. Manuj Hazarika",
    role: "Advisor",
    description: "Advises on ecosystem collaboration, educational impact, and long-term scalability.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function TeamSection() {
  return (
    <section className="py-24 px-4 bg-background/50" id="team">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Meet the People Driving Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At the heart of VrixaaLabs is a team of passionate innovators and educators committed to building meaningful change in education.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={item}>
              <Card className="group h-full overflow-hidden bg-card hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="relative h-64 p-0 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                    <div className="pt-4 flex gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-primary hover:text-white transition-colors"
                        asChild
                      >
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <LinkedinIcon className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-primary hover:text-white transition-colors"
                        asChild
                      >
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                          <TwitterIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 