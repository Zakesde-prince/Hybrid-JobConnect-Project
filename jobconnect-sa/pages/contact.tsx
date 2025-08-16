import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-8 text-gray-600">
          Have questions or feedback? Send us a message!
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-3 py-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-3 py-2 border rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            className="px-3 py-2 border rounded"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
}
