import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <Navbar />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center p-10">
        <div>
          <h1 className="text-5xl font-bold">
            Travel Together <br />
            <span className="text-green-600">Split Smarter</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Manage trips and expenses without stress.
          </p>
          <div className="flex gap-4 mt-6">
            <Button>Start Trip</Button>
            <Button variant="outline">Demo</Button>
          </div>
        </div>

        <div className="h-64 bg-green-200 rounded-3xl shadow-xl" />
      </div>
    </div>
  );
}
