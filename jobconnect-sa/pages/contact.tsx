import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEnvelope } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto pt-20 px-8 bg-gray-900">
        {/* Intro Section with Animated Icon */}
        <section className="mb-8 text-center relative">
          <FaEnvelope className="text-blue-400 text-6xl mx-auto mb-4 animate-bounce-slow" />
          <h1 className="text-4xl font-extrabold mb-2">Get in Touch</h1>
          <p className="text-gray-300">
            Have questions or need support? We’d love to hear from you. Fill out the form below or reach us directly via email or phone.
          </p>
        </section>

        {/* Contact Info */}
        <section className="mb-8 text-center">
          <p className="mb-2">
            Email: <a href="mailto:info@jobconnect-sa.com" className="underline text-blue-400">info@jobconnect-sa.com</a>
          </p>
          <p>Phone: <strong>+27 123 456 7890</strong></p>
        </section>

        {/* Contact Form */}
        <section>
          <form className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <label className="block mb-4">
              Name
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full mt-2 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-transform duration-200" 
              />
            </label>
            <label className="block mb-4">
              Email
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full mt-2 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-transform duration-200" 
              />
            </label>
            <label className="block mb-4">
              Message
              <textarea 
                placeholder="Your Message" 
                rows={6} 
                className="w-full mt-2 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-105 transition-transform duration-200"
              ></textarea>
            </label>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:shadow-lg text-white font-semibold py-3 rounded-lg transition-transform transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

