// app/components/FeaturedFrameworks.tsx
const frameworks = [
  { name: "TensorFlow", description: "Scalable deep learning library.", logo: "/tensorflow.png" },
  { name: "PyTorch", description: "Flexible deep learning framework.", logo: "/pytorch.png" },
  { name: "Keras", description: "High-level neural networks API.", logo: "/keras.png" },
];

export default function FeaturedFrameworks() {
  return (
    <section className="text-center mt-16">
      <h2 className="text-2xl font-bold mb-4">Featured Frameworks</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {frameworks.map((framework, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={framework.logo} alt={framework.name} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{framework.name}</h3>
            <p className="text-gray-600">{framework.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}