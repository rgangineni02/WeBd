// app/components/InteractiveTool.tsx
"use client"; // Mark this file as a client component

import { useState } from "react";

export default function InteractiveTool() {
  const [language, setLanguage] = useState("Python");
  const [useCase, setUseCase] = useState("Deep Learning");

  const recommendFramework = () => {
    if (language === "Python" && useCase === "Deep Learning") return "TensorFlow";
    if (language === "Python" && useCase === "Research") return "PyTorch";
    return "Keras";
  };

  return (
    <section className="text-center mt-16">
      <h2 className="text-2xl font-bold mb-4">Find the Right Framework</h2>
      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded"
        >
          <option>Preferred Language</option>
          <option>Python</option>
          <option>JavaScript</option>
        </select>
        <select
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          className="p-2 border rounded"
        >
          <option>Use Case</option>
          <option>Deep Learning</option>
          <option>Research</option>
        </select>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          type="button"
          onClick={() => alert(`Recommended Framework: ${recommendFramework()}`)}
        >
          Get Recommendation
        </button>
      </form>
    </section>
  );
}