import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToIntro = () => {
    const element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Morphing Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 animate-gradient-shift">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-pink-500/30 to-teal-400/30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Gooey Lava Lamp Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large morphing blob 1 */}
        <div className="absolute top-1/4 left-1/4 animate-lava-blob-1">
          <div className="w-96 h-96 bg-gradient-to-br from-yellow-400/30 to-orange-500/20 rounded-full blur-2xl animate-morph-1"></div>
          <div className="absolute -top-12 -left-12 w-72 h-72 bg-gradient-to-br from-yellow-300/25 to-pink-400/15 rounded-full blur-xl animate-morph-2"></div>
        </div>

        {/* Large morphing blob 2 */}
        <div className="absolute bottom-1/4 right-1/4 animate-lava-blob-2">
          <div className="w-80 h-96 bg-gradient-to-br from-teal-400/25 to-cyan-500/20 rounded-full blur-2xl animate-morph-3"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-80 bg-gradient-to-br from-blue-400/20 to-teal-300/15 rounded-full blur-xl animate-morph-4"></div>
        </div>

        {/* Center morphing blob */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-lava-blob-3">
          <div className="w-72 h-72 bg-gradient-to-br from-pink-400/30 to-purple-500/25 rounded-full blur-2xl animate-morph-5"></div>
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-pink-300/20 to-red-400/15 rounded-full blur-lg animate-morph-6"></div>
        </div>

        {/* Smaller floating gooey bits */}
        <div className="absolute top-1/3 right-1/3 animate-lava-blob-4">
          <div className="w-48 h-64 bg-gradient-to-br from-purple-400/20 to-indigo-500/15 rounded-full blur-xl animate-morph-7"></div>
        </div>

        <div className="absolute bottom-1/3 left-1/3 animate-lava-blob-5">
          <div className="w-56 h-48 bg-gradient-to-br from-orange-400/25 to-red-500/20 rounded-full blur-xl animate-morph-8"></div>
        </div>

        {/* Tiny gooey droplets */}
        <div className="absolute top-1/5 left-1/2 animate-lava-droplet-1">
          <div className="w-24 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/25 rounded-full blur-md animate-morph-9"></div>
        </div>

        <div className="absolute bottom-1/5 right-1/2 animate-lava-droplet-2">
          <div className="w-32 h-24 bg-gradient-to-br from-teal-400/25 to-cyan-400/20 rounded-full blur-md animate-morph-10"></div>
        </div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-scan"></div>
      </div>

      {/* Content with Staggered Animations */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div
          className={`transition-all duration-1500 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block animate-slide-in-left">Software</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-teal-300 leading-tight animate-slide-in-right animation-delay-300">
              Engineer
            </span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1500 ease-out delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-in-up animation-delay-700">
            Building scalable solutions that power the future
          </p>
        </div>

        {/* Animated Accent Lines */}
        <div
          className={`flex justify-center space-x-4 mb-8 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse-glow"></div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse-glow animation-delay-500"></div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse-glow animation-delay-1000"></div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button
        onClick={scrollToIntro}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all duration-500 group ${
          isLoaded ? "animate-bounce-in animation-delay-1500" : "opacity-0"
        }`}
      >
        <div className="relative">
          <ChevronDown
            size={32}
            className="group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-white/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </button>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-twinkle animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-twinkle animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-twinkle animation-delay-1500"></div>
      </div>
    </section>
  );
};

export default Hero;
