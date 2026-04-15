export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      position: "sticky",
      top: 0
    }}>
      <h2 style={{
        background: "linear-gradient(to right, #3b82f6, #06b6d4)",
        WebkitBackgroundClip: "text",
        color: "transparent"
      }}>
        ✈️ TripWise AI
      </h2>

      <div style={{ display: "flex", gap: "25px" }}>
        {["Home", "Create", "Expenses", "Summary", "About"].map((item, i) => (
          <a
            key={i}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            style={{
              color: "white",
              textDecoration: "none",
              opacity: 0.8
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
