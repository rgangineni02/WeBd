// app/components/Timeline.tsx
const milestones = [
  { year: 2006, event: "Birth of Deep Learning" },
  { year: 2015, event: "Launch of TensorFlow" },
  { year: 2020, event: "Rise of Transformers" },
];

export default function Timeline() {
  return (
    <section className="text-center mt-16">
      <h2 className="text-2xl font-bold mb-4">Evolution of AI Frameworks</h2>
      <div className="flex overflow-x-auto gap-8 py-4">
        {milestones.map((milestone, index) => (
          <div key={index} className="min-w-[200px] p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">{milestone.year}</h3>
            <p>{milestone.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
}