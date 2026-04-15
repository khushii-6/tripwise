import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";

export default function Expenses() {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />

      <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-10">
        <h2 className="text-2xl font-bold mb-6">Add Expense</h2>

        <input placeholder="Amount" className="w-full p-3 border rounded-lg mb-4" />
        <input placeholder="Member Name" className="w-full p-3 border rounded-lg mb-4" />
        <select className="w-full p-3 border rounded-lg mb-4">
          <option>Food</option>
          <option>Travel</option>
        </select>

        <Button className="w-full">Add Expense</Button>
      </div>
    </div>
  );
}
