"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useTrip } from "../context/TripContext";

export default function CreateTrip() {
  const [step, setStep] = useState(1);
  const { members, setMembers } = useTrip();
  const [input, setInput] = useState("");

  const addMember = () => {
    if (!input) return;
    setMembers([...members, input]);
    setInput("");
  };

  return (
    <div>
      <Navbar />

      <div style={{
        maxWidth: "700px",
        margin: "40px auto",
        background: "rgba(255,255,255,0.05)",
        padding: "25px",
        borderRadius: "20px",
        backdropFilter: "blur(10px)"
      }}>
        <h1>Customize Your Trip</h1>
        <p>Step {step} of 5</p>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <input placeholder="Destination" />
            <button onClick={() => setStep(2)}>Next</button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <input placeholder="Trip Name" />
            <button onClick={() => setStep(3)}>Next</button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <input
              placeholder="Add member"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={addMember}>Add</button>

            <ul>
              {members.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>

            <button onClick={() => setStep(4)}>Next</button>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div>
            <p>Now go to Expenses page</p>
            <button onClick={() => setStep(5)}>Next</button>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div>
            <p>Done! Check Summary 🎉</p>
          </div>
        )}
      </div>
    </div>
  );
}
