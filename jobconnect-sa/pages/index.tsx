import React from "react";
import Button from "../components/commons/Button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to JobConnect-SA</h1>
      <p className="mb-8 text-lg">Find entry-level jobs and start your career today!</p>
      <div className="space-x-4">
        <Link href="/jobs">
          <Button title="Browse Jobs" />
        </Link>
        <Link href="/signin">
          <Button title="Sign In" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
