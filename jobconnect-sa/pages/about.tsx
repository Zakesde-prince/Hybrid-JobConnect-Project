import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaBriefcase } from "react-icons/fa";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto pt-20 px-8 bg-gray-900">
        {/* Intro Section with Animated Icon */}
        <section className="mb-8 text-center relative">
          <FaBriefcase className="text-blue-400 text-6xl mx-auto mb-4 animate-bounce-slow" />
          <h1 className="text-4xl font-extrabold mb-2">About JobConnect-SA</h1>
          <p className="text-gray-300">
            JobConnect-SA is your go-to platform for connecting entry-level and administrative job seekers with opportunities in South Africa. Our mission is to simplify the job search process, connect talent with employers, and provide a seamless experience for both sides.
          </p>
        </section>

        {/* Mission / Vision */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-300 mb-4">
            To empower job seekers with easy access to entry-level and administrative roles, and to create a platform where employers can find qualified candidates efficiently.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-300">
            To be the leading job connection platform in South Africa, helping both job seekers and employers achieve their goals with transparency, efficiency, and reliability.
          </p>
        </section>

        {/* Team or Additional Info */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
          <p className="text-gray-300">
            Our team is passionate about bridging the gap between employers and job seekers. With a focus on innovation and user experience, we continuously improve JobConnect-SA to serve the community better.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
