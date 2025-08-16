import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-300 py-6 mt-12">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">JobConnect-SA</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">About</Link>
          <Link href="/signin">Sign In</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
