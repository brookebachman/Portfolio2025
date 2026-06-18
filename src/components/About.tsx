import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-teal-900 via-blue-900 to-purple-900 py-24 lg:py-32"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-10">
        <div className="block lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Portrait */}
          <div className="order-2 lg:order-1 w-full lg:max-w-[500px]">
            <div className="relative group">
              <div className="absolute h-full -inset-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-teal-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src="/profile.png"
                alt="Brooke Bachman"
                className="relative rounded-lg w-full h-auto group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Bio & Links */}
          <div className="mt-10 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
              <p>
                I started my career in sales — running full-cycle deals, demoing
                products, and learning what makes customers tick. That frontline
                experience became my superpower when I transitioned into
                engineering.
              </p>
              <p>
                Over 5 years across startups from pre-seed to Series B, I've
                shipped customer-facing products end-to-end — building design
                systems, implementing RBAC, and architecting AI agent workflows
                that cut reporting time by 83%. I've trained engineers, partnered
                with enterprise customers, and owned the full arc from discovery
                to production.
              </p>
              <p>
                Now based in Oakland, I work as a Forward Deployed Engineer —
                the person who sits at the intersection of customers, product,
                and engineering. I translate pain points into shipped code, and
                I thrive in the ambiguity of early-stage environments where
                speed and empathy matter most.
              </p>
            </div>

            {/* Social Links */}
            <div className="block mt-12 lg:flex items-center lg:space-x-6">
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
