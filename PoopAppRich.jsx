import { useState } from "react";
import { Button } from "@/components/ui/button";

const API_URL = "https://poop-earnings-rich.onrender.com"; // 

export default function PoopEarningsTracker() {
  const [username, setUsername] = useState("testUser"); // Hardcoded for now, later implement login
  const [salary, setSalary] = useState("");
  const [poopSessions, setPoopSessions] = useState([]);
  const [isPooping, setIsPooping] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [salarySet, setSalarySet] = useState(false);

  const saveSalary = async () => {
    const response = await fetch(`${API_URL}/set-salary`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, salary }),
    });

    if (response.ok) {
      setSalarySet(true);
    } else {
      alert("Error setting salary");
    }
  };

  const startPoop = () => {
    setIsPooping(true);
    setStartTime(Date.now());
  };

  const endPoop = async () => {
    if (!isPooping) return;

    const endTime = Date.now();
    const duration = (endTime - startTime) / 60000; // Convert ms to minutes

    const response = await fetch(`${API_URL}/log-poop`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, duration }),
    });

    if (response.ok) {
      const data = await response.json();
      setPoopSessions([...poopSessions, data.session]);
    } else {
      alert("Error logging poop session");
    }

    setIsPooping(false);
  };

  const fetchPoopHistory = async () => {
    const response = await fetch(`${API_URL}/history/${username}`);
    if (response.ok) {
      const data = await response.json();
      setPoopSessions(data.history);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Poop Earnings Tracker 💩💰</h1>
      {!salarySet ? (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Enter Your Annual Salary:</h2>
          <div className="flex items-center border rounded p-2">
            <span className="mr-2 text-lg">$</span>
            <input
              type="number"
              placeholder="50000"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="p-2 w-full"
            />
            <span className="ml-2 text-lg">/yr</span>
          </div>
          <Button className="mt-2" onClick={saveSalary}>Save Salary</Button>
        </div>
      ) : (
        <div className="mb-4">
          <Button onClick={() => setSalarySet(false)}>Adjust Salary</Button>
        </div>
      )}
      <div className="flex justify-center gap-4 mb-4">
        <Button onClick={startPoop} disabled={isPooping}>
          Start Poop 🚽
        </Button>
        <Button onClick={endPoop} disabled={!isPooping}>
          End Poop ✅
        </Button>
        <Button onClick={fetchPoopHistory}>
          Refresh History 🔄
        </Button>
      </div>
      <h2 className="text-xl font-semibold">Total Earned While Pooping: ${poopSessions.reduce((acc, session) => acc + session.earnings, 0).toFixed(2)}</h2>
      <ul className="mt-4 text-left">
        {poopSessions.map((session, index) => (
          <li key={index} className="border p-2 rounded mb-2">
            💩 {session.duration.toFixed(2)} min - Earned ${session.earnings.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}