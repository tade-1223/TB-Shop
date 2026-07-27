function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Welcome to
           <span className="text-yellow-300"> Ethiora</span>
        </h1>

          <p className="text-lg text-blue-100 mb-8">
  Connecting Ethiopia Through Commerce.
  Discover quality electronics, fashion,
  home essentials, beauty products,
  and authentic Ethiopian products
  from trusted local businesses.
</p>

          <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
  Explore Marketplace
</button>
        </div>

        {/* Right Content */}
        <div className="hidden md:flex justify-center">
          <div className="w-80 h-80 bg-white/10 rounded-3xl backdrop-blur-sm flex items-center justify-center">
            <span className="text-8xl">🛒</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;