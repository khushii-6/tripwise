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
      background: "linear-gradient(135deg, #020617, #0f172a)",
      color: "white",
      fontFamily: "Inter, sans-serif"
    }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}>
        <h2>✈️ SmartTrip AI</h2>
        <span style={{ opacity: 0.7 }}>Hackathon Build</span>
      </div>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        marginTop: "80px",
        padding: "20px"
      }}>
        <h1 style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          background: "linear-gradient(to right, #3b82f6, #06b6d4)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}>
          Plan Trips in Seconds with AI
        </h1>

        <p style={{
          marginTop: "15px",
          opacity: 0.7,
          fontSize: "1.2rem"
        }}>
          No more confusion. Just type → get your perfect itinerary.
        </p>
      </div>

      {/* INPUT CARD */}
      <div style={{
        maxWidth: "650px",
        margin: "40px auto",
        background: "rgba(255,255,255,0.05)",
        padding: "25px",
        borderRadius: "20px",
        backdropFilter: "blur(15px)",
        boxShadow: "0 0 40px rgba(0,0,0,0.3)"
      }}>
        <input
          placeholder="Try: 5 days in Manali under ₹15k"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "12px",
            fontSize: "1rem"
          }}
        />

        <button
          onClick={generatePlan}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            background: "linear-gradient(to right, #3b82f6, #06b6d4)",
            border: "none",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          {loading ? "Generating Magic..." : "Generate Trip 🚀"}
        </button>
      </div>

      {/* RESULT */}
      {plan && (
        <div style={{
          maxWidth: "650px",
          margin: "20px auto",
          background: "rgba(255,255,255,0.05)",
          padding: "25px",
          borderRadius: "20px"
        }}>
          <h2 style={{ marginBottom: "10px" }}>{plan.destination}</h2>

          {plan.days.map((d, i) => (
            <p key={i}>📍 Day {i + 1}: {d}</p>
          ))}

          <p style={{
            marginTop: "15px",
            fontWeight: "bold",
            color: "#22c55e"
          }}>
            💰 Budget: {plan.budget}
          </p>
        </div>
      )}

      {/* FEATURES SECTION */}
      <div style={{
        marginTop: "80px",
        padding: "40px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Why SmartTrip AI?
        </h2>

        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          {[
            "⚡ Instant Itinerary",
            "💰 Budget Optimization",
            "🌍 Smart Recommendations"
          ].map((f, i) => (
            <div key={i} style={{
              padding: "20px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "15px",
              minWidth: "200px"
            }}>
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        marginTop: "60px",
        padding: "20px",
        opacity: 0.5
      }}>
        Built for Hackathon 🚀
      </div>

    </div>
  );
}
