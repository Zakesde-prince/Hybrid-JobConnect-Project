import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="text-center">
        &copy; {new Date().getFullYear()} JobConnect-SA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
