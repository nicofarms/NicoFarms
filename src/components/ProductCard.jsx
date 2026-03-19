function ProductCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image Section */}
      <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-6xl text-green-300">🥚</div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-800 mb-3 group-hover:text-green-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium group-hover:bg-green-700">
          Learn More →
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
