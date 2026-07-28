function Newsletter() {
  return (
    <section className="bg-green-700 text-white py-20 mt-20">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-4">
          Stay Updated with Ethiora
        </h2>

        <p className="text-lg mb-8 text-green-100">
          Subscribe to receive new products, special offers,
          and the latest Ethiopian marketplace updates.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <input
            type="email"
            placeholder="Enter your email address"
            className="px-5 py-3 rounded-lg text-black w-full md:w-96 outline-none"
          />

          <button
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;