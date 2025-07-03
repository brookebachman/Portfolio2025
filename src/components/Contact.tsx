import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-200">
            Ready to bring your vision to life?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/30 text-white placeholder-gray-300 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                placeholder="Your name"
                required
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/30 text-white placeholder-gray-300 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="text-center pt-8">
            <button
              type="submit"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;