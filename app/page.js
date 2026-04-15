"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [plan, setPlan] = useState(null);

  const generatePlan = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setPlan(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>✈️ SmartTrip AI</h1>

      <input
        placeholder="e.g. 3 days in Goa under ₹10k"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={generatePlan}>Generate</button>

      {plan && (
        <div>
          <h2>{plan.destination}</h2>
          {plan.days.map((d, i) => (
            <p key={i}>Day {i + 1}: {d}</p>
          ))}
          <p>Budget: {plan.budget}</p>
        </div>
      )}
    </div>
  );
}
