// app/components/AudienceNavigation.tsx
export default function AudienceNavigation() {
    return (
      <div className="flex flex-col gap-4 text-center mt-16">
        <h2 className="text-2xl font-bold">Explore AI Frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Beginner</h3>
            <p>Learn AI basics with tutorials and visualizations.</p>
            <a href="/beginner" className="text-blue-600 hover:underline">
              Get Started →
            </a>
          </div>
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Intermediate</h3>
            <p>Compare frameworks and explore tools.</p>
            <a href="/intermediate" className="text-blue-600 hover:underline">
              Explore Tools →
            </a>
          </div>
          <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">Expert</h3>
            <p>Access advanced resources and case studies.</p>
            <a href="/expert" className="text-blue-600 hover:underline">
              Dive Deeper →
            </a>
          </div>
        </div>
      </div>
    );
  }