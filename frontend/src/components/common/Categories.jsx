const categories = [
  { id: 1, name: "Electronics", icon: "📱" },
  { id: 2, name: "Fashion", icon: "👕" },
  { id: 3, name: "Home", icon: "🏠" },
  { id: 4, name: "Beauty", icon: "💄" },
];

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
        <p className="text-gray-600">
          Explore our popular product categories.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition cursor-pointer border border-gray-100"
          >
            <div className="text-5xl mb-4">{category.icon}</div>
            <h3 className="font-semibold text-lg">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;