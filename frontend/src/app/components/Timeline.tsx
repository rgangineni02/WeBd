export default function Timeline() {
    const milestones = [
      { year: 2006, event: "Birth of Deep Learning" },
      { year: 2015, event: "Launch of TensorFlow" },
      { year: 2020, event: "Rise of Transformers" },
    ];
  
    return (
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Evolution of AI Frameworks</h2>
        <div className="flex flex-col gap-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-4 items-center">
              <span className="text-lg font-semibold">{milestone.year}</span>
              <p>{milestone.event}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }