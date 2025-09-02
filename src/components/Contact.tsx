import React, { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Store env variables in constants

  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";

  // Debug: Check if env variables are loaded
  console.log("Public Key:", EMAILJS_PUBLIC_KEY ? "Loaded" : "Missing");
  console.log("Template ID:", EMAILJS_TEMPLATE_ID ? "Loaded" : "Missing");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if credentials are available
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_TEMPLATE_ID) {
      console.error("EmailJS credentials are missing!");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using the form element directly
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.currentTarget as HTMLFormElement,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 py-24 lg:py-32"
    >
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/30 text-white placeholder-gray-300 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
              placeholder="Tell me about your project..."
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
              <p className="text-green-300 text-center">
                ✨ Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
              <p className="text-red-300 text-center">
                ❌ Oops! Something went wrong. Please try again or email me
                directly.
              </p>
            </div>
          )}

          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 group shadow-lg hover:shadow-xl ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <Send
                size={18}
                className={`${
                  isSubmitting ? "animate-pulse" : "group-hover:translate-x-1"
                } transition-transform duration-300`}
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
