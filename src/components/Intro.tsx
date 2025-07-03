import React from 'react';

const Intro = () => {
  return (
    <section id="intro" className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
            I build
            <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400">
              innovative
            </span>
            software solutions
          </h2>
          <div className="mt-16 w-24 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;