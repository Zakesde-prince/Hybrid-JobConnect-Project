import Layout from "../components/Layout";
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-20 bg-gray-50 rounded-lg shadow-md px-4 sm:px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to My Website
        </h2>
        <p className="mb-8 text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
          This is the best place to start your journey. Discover new features, learn, and grow with us.
        </p>
        <Button text="Get Started" onClick={() => alert("Let's go!")} />
      </section>

      <section className="py-16 bg-white px-4 sm:px-6 lg:px-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-10">
          Explore Our Features
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://source.unsplash.com/random/600x400/?technology"
            alt="Technology"
            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
           />
        </div>

        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://source.unsplash.com/random/600x400/?teamwork"
            alt="Teamwork"
            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>

        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src="https://source.unsplash.com/random/600x400/?growth"
            alt="Growth"
            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Get Started?
        </h3>
          <p className="text-lg sm:text-xl mb-8">
            Join us today and take the first step towards your future!
          </p>
          <a
            href="#"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </section>

    </Layout>
  );
}
