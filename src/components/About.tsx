import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-teal-900 via-blue-900 to-purple-900 py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Portrait */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-teal-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Brooke Bachman"
                className="relative rounded-lg w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Bio & Links */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
              <p>
                I'm a software engineer with over 8 years of experience in
                full-stack development, system architecture, and building
                scalable applications. I specialize in creating robust software
                solutions that solve complex problems and deliver exceptional
                user experiences.
              </p>
              <p>
                My expertise spans across modern web technologies, cloud
                platforms, and distributed systems. I've worked with everything
                from early-stage startups to Fortune 500 companies, helping them
                build and scale their technical infrastructure.
              </p>
              <p>
                Currently based in San Francisco, I'm passionate about clean
                code, performance optimization, and leveraging cutting-edge
                technologies to create software that makes a meaningful impact
                on users and businesses alike.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex items-center space-x-6">
              <a
                href="https://github.com/brookebachman"
                className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <Github size={20} />
                <span>Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/brooke-bachman/"
                className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:brooke.l.bachman@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                <Mail size={20} />
                <span>brooke.l.bachman@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
