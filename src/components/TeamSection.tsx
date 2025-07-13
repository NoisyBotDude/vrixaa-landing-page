"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Ronit Choudhury",
    role: "Founder & CEO",
    description: "Provides strategic leadership and drives the vision, operations, and growth of VrixaaLabs.",
  },
  {
    name: "Ashish Sarmah",
    role: "Chief Technology Officer (CTO)",
    description: "Leads the development of our core technologies and oversees platform innovation.",
  },
  {
    name: "Dr. Rupam Goswami",
    role: "Honorary Director",
    description: "Offers strategic academic insights and helps guide institutional alignment.",
  },
  {
    name: "Dr. Manuj Hazarika",
    role: "Advisor",
    description: "Advises on ecosystem collaboration, educational impact, and long-term scalability.",
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
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Meet the People Driving Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            At the heart of VrixaaLabs is a team committed to building meaningful change in education.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 