// app/components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Unlock the Power of AI Frameworks</h1>
      <p className="text-lg mb-8">
        Learn, compare, and engage with AI frameworks through visual tools.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
          Learn the Basics
        </button>
        <button className="bg-transparent border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600">
          Explore Frameworks
        </button>
      </div>
    </section>
  );
}