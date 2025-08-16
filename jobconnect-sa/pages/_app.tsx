import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with top padding so it's not hidden behind navbar */}
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
