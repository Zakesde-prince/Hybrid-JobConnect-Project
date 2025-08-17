import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaBriefcase } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto pt-20 px-8">
        {/* Title + Icon */}
        <section className="mb-12 text-center relative">
          <FaBriefcase className="text-5xl text-blue-400 mx-auto mb-4 animate-bounce" />
          <h1 className="text-4xl font-extrabold mb-2">About JobConnect-SA</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            JobConnect-SA is your go-to platform for connecting entry-level and
            administrative job seekers with opportunities in South Africa.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            We aim to bridge the gap between employers and job seekers by
            providing a simple, reliable, and accessible platform. Our mission
            is to empower communities by creating pathways to employment,
            especially for those just starting their careers.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To become South Africa’s most trusted platform for finding
            entry-level and administrative jobs — helping people take their
            first steps into the working world with confidence.
          </p>
        </section>

        {/* Meet the Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-md text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/30">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-700 mb-4 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"></div>
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-blue-400">Founder & CEO</p>
              <p className="text-gray-400 mt-2 text-sm">
                Passionate about bridging the gap between talent and
                opportunity.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-md text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/30">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-700 mb-4 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"></div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-blue-400">Head of Operations</p>
              <p className="text-gray-400 mt-2 text-sm">
                Ensuring smooth operations and reliable job listings.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-md text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/30">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-700 mb-4 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"></div>
              <h3 className="text-xl font-semibold">Sarah Lee</h3>
              <p className="text-blue-400">Community Manager</p>
              <p className="text-gray-400 mt-2 text-sm">
                Building strong relationships with job seekers and employers.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
