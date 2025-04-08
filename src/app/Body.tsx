"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const projects = [
  {
    title: "MyUni",
    description:
      "A university-matching app helping students in Nigeria discover their best-fit universities based on personal preferences.",
    link: "https://myuni.ng",
  },
  {
    title: "MyUni Friends (Backend)",
    description:
      "Consultation feature connecting prospective students with current students. Built in FastAPI.",
    link: "https://github.com/flourishdev/myuni-friends",
  },
];

const series = [
  {
    title: "Practicing Backend Development",
    description:
      "A LinkedIn series where I document my journey learning backend development through real-world projects like MyUni Friends using FastAPI.",
    link: "https://www.linkedin.com/in/flourishdev",
  },
];

const Body = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 py-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <section className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Flourish — Backend Developer & Tech Entrepreneur
          </motion.h1>
          <p className="mt-4 text-lg text-gray-300">
            I build solutions that help students make better academic decisions, document my journey learning backend development, and explore the intersection of technology, education, and business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href="mailto:flourish@example.com">
              <Button className="bg-gradient-to-r from-white to-gray-400 text-black hover:scale-105 transition">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/flourish-olukotun-05aa92202/" target="_blank">
              <Button className="bg-gradient-to-r from-white to-gray-400 text-black hover:scale-105 transition">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </a>
            <a href="https://github.com/flourishdev" target="_blank">
              <Button className="bg-gradient-to-r from-white to-gray-400 text-black hover:scale-105 transition">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </a>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-block text-sm font-medium bg-gradient-to-r from-white to-gray-400 text-black px-4 py-2 rounded-md hover:scale-105 transition"
                    >
                      Visit Project
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Series */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Series</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {series.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      className="inline-block text-sm font-medium bg-gradient-to-r from-white to-gray-400 text-black px-4 py-2 rounded-md hover:scale-105 transition"
                    >
                      View on LinkedIn
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Flourish. Built with love and a black-and-white aesthetic.</p>
        </footer>
      </div>
    </main>
  );
};

export default Body;
