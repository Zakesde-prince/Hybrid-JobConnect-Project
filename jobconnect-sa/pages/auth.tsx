import Layout from "../components/Layout";
import { useState } from "react";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <Layout>
      <section className="max-w-md mx-auto py-20 px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <p className="mb-8 text-lg text-gray-600 text-center">
          {isSignUp
            ? "Create a new account to start your journey."
            : "Sign in to continue your journey."}
        </p>

        <form className="bg-white shadow-md rounded-lg px-8 py-10">
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-indigo-600 font-semibold hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </section>
    </Layout>
  );
}
