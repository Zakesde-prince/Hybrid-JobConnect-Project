import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      // Redirect to auth if not signed in
      router.push("/auth");
    } else {
      const user = JSON.parse(currentUser);
      setUserName(user.name);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    router.push("/auth");
  };

  if (!userName) return null; // Wait until user is loaded

  return (
    <Layout>
      <section className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
          Welcome, {userName}!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          This is your dashboard. Start exploring jobs and features!
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-700 transition-colors duration-300"
        >
          Logout
        </button>
      </section>
    </Layout>
  );
}
