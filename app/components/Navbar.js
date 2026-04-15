import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-green-600">TripWise</h1>
        <div className="flex gap-6 items-center">
          <a href="/" className="hover:text-green-600">Home</a>
          <a href="/expenses" className="hover:text-green-600">Expenses</a>
          <a href="/summary" className="hover:text-green-600">Summary</a>
          <a href="/about" className="hover:text-green-600">About</a>
          <Button className="rounded-xl">Get Started</Button>
        </div>
      </div>
    </div>
  );
}
