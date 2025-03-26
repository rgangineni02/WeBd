export default function InteractiveTool() {
    return (
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Find the Right Framework</h2>
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <select className="p-2 border rounded">
            <option>Preferred Language</option>
            <option>Python</option>
            <option>JavaScript</option>
          </select>
          <select className="p-2 border rounded">
            <option>Use Case</option>
            <option>Deep Learning</option>
            <option>Research</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Recommendation
          </button>
        </form>
      </section>
    );
  }