export default function FeaturedFrameworks() {
    const frameworks = [
      { name: "TensorFlow", description: "An open-source library for machine learning." },
      { name: "PyTorch", description: "A flexible deep learning framework." },
      { name: "Keras", description: "High-level neural networks API." },
    ];
  
    return (
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Featured Frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{framework.name}</h3>
              <p className="text-gray-600">{framework.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }