export const metadata = {
  title: "TripWise AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(135deg, #020617, #0f172a)",
        color: "white"
      }}>
        {children}
      </body>
    </html>
  );
}
