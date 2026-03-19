function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 relative">
        {title}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-600 rounded-full"></div>
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
