export async function POST(req) {
  const { prompt } = await req.json();

  return Response.json({
    destination: prompt,
    days: [
      "Arrival and explore",
      "Main attractions",
      "Relax and depart"
    ],
    budget: "₹5,000 - ₹10,000"
  });
}
