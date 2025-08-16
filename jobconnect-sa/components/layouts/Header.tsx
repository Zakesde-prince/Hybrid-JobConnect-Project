import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">JobConnect-SA</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/signin">Sign In</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
