"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setPlan(data);
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      color: "white",
      fontFamily: "sans-serif",
      padding: "20px"
    }}>
      
      {/* HERO */}
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          ✈️ SmartTrip AI
        </h1>
        <p style={{ opacity: 0.7, marginTop: "10px" }}>
          Plan your perfect trip in seconds using AI
        </p>
      </div>

      {/* INPUT BOX */}
      <div style={{
        maxWidth: "600px",
        margin: "40px auto",
        background: "rgba(255,255,255,0.1)",
        padding: "20px",
        borderRadius: "15px",
        backdropFilter: "blur(10px)"
      }}>
        <input
          placeholder="e.g. 3 days in Goa under ₹10k"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "10px"
          }}
        />

        <button
          onClick={generatePlan}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            background: "#3b82f6",
            color: "white",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          {loading ? "Generating..." : "Generate Trip 🚀"}
        </button>
      </div>

      {/* RESULT */}
      {plan && (
        <div style={{
          maxWidth: "600px",
          margin: "20px auto",
          background: "rgba(255,255,255,0.1)",
          padding: "20px",
          borderRadius: "15px"
        }}>
          <h2>{plan.destination}</h2>

          {plan.days.map((d, i) => (
            <p key={i}>📍 Day {i + 1}: {d}</p>
          ))}

          <p style={{ marginTop: "10px", fontWeight: "bold" }}>
            💰 Budget: {plan.budget}
          </p>
        </div>
      )}
    </div>
  );
}
