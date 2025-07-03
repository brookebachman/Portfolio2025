import React from 'react';
import { ExternalLink, Shield, BarChart3, Palette, Globe, Users } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: "LoginFlow",
      subtitle: "Multi-Tenant Cybersecurity API",
      description: "A robust RESTful API built with Golang and SQLite for multi-tenant cybersecurity monitoring. Features secure login event ingestion, suspicious activity detection, and strict tenant data isolation with configurable threat thresholds.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024",
      tags: ["Golang", "SQLite", "REST API", "Multi-tenant", "Security"],
      highlights: [
        "Idempotent event ingestion with validation",
        "Configurable suspicious activity detection",
        "Complete tenant data isolation",
        "Extensible threat scoring architecture"
      ],
      icon: Shield,
      link: null
    },
    {
      title: "Tellus Solutions",
      subtitle: "Enterprise Web Platform",
      description: "A comprehensive enterprise web platform delivering scalable solutions for business operations. Built with modern web technologies to provide robust functionality, seamless user experience, and enterprise-grade performance across multiple business domains.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024",
      tags: ["Enterprise", "Web Platform", "Scalable", "Business Solutions", "Modern Stack"],
      highlights: [
        "Enterprise-grade scalability and performance",
        "Comprehensive business solution platform",
        "Modern web architecture and design",
        "Multi-domain functionality integration"
      ],
      icon: Globe,
      link: "https://www.tellussol.com/"
    },
    {
      title: "Todyl",
      subtitle: "Cybersecurity Platform",
      description: "A cutting-edge cybersecurity platform providing comprehensive security solutions for modern businesses. Features advanced threat detection, security monitoring, and integrated protection services designed to safeguard digital infrastructure and data.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024",
      tags: ["Cybersecurity", "Threat Detection", "Security Platform", "Enterprise", "Protection"],
      highlights: [
        "Advanced threat detection and monitoring",
        "Comprehensive security solution suite",
        "Enterprise-level protection services",
        "Integrated security infrastructure"
      ],
      icon: Shield,
      link: "https://www.todyl.com/"
    },
    {
      title: "InsightFlow",
      subtitle: "Interactive Data Dashboard",
      description: "A modern, responsive data dashboard built with TypeScript (79%) showcasing clean architecture and strong type safety. Originally developed as a technical assessment, demonstrating rapid delivery of polished, production-ready interfaces.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024",
      tags: ["TypeScript", "React", "Responsive Design", "Data Viz", "Modular"],
      highlights: [
        "79% TypeScript for robust type safety",
        "Modular, reusable component architecture",
        "Fully responsive across all devices",
        "Clean, maintainable codebase"
      ],
      icon: BarChart3,
      link: null
    },
    {
      title: "Portfolio Website",
      subtitle: "Modern React Portfolio",
      description: "A stunning, interactive portfolio website built with React, TypeScript, and Tailwind CSS. Features advanced animations, morphing lava lamp effects, and responsive design showcasing modern web development capabilities and attention to visual detail.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024",
      tags: ["React", "TypeScript", "Tailwind CSS", "Animations", "Responsive"],
      highlights: [
        "Advanced CSS animations and morphing effects",
        "Fully responsive with mobile-first design",
        "Modern gradient backgrounds and transitions",
        "Production-ready component architecture"
      ],
      icon: Palette,
      link: null
    }
  ];

  return (
    <section id="work" className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-black/30 backdrop-blur-sm hover:bg-black/20 transition-all duration-700 cursor-pointer border border-white/10 hover:border-pink-400/30"
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-700"></div>
                  {project.link && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink size={20} className="text-yellow-400" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <IconComponent size={24} className="text-white/80 group-hover:text-yellow-400 transition-colors duration-300" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-300">{project.year}</span>
                  </div>
                  
                  <p className="text-sm text-pink-300 font-medium mb-3">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-teal-300 mb-2 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-start">
                          <span className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded border border-white/20 group-hover:border-pink-400/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;