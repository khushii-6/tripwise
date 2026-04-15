import Navbar from "../components/Navbar";

export default function Summary() {
  const total = 800;
  const members = 4;
  const perPerson = total / members;

  return (
    <div>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Expense Summary
        </h1>

        {/* TOP CARDS */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap"
        }}>
          {[
            { title: "Total Expense", value: `₹${total}` },
            { title: "Members", value: members },
            { title: "Per Person", value: `₹${perPerson}` }
          ].map((card, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "15px",
              minWidth: "200px",
              textAlign: "center",
              boxShadow: "0 0 20px rgba(0,0,0,0.3)"
            }}>
              <p style={{ opacity: 0.6 }}>{card.title}</p>
              <h2>{card.value}</h2>
            </div>
          ))}
        </div>

        {/* TRANSACTIONS */}
        <div style={{
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>
          {[
            "Rahul owes Aman ₹500",
            "Priya owes Rahul ₹300"
          ].map((t, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.05)",
              padding: "15px",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "space-between"
            }}>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
