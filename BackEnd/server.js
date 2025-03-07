import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Poop Earnings Backend is running!");
});

// Temporary in-memory storage
let users = {}; // Stores user accounts and salary
let poopSessions = {}; // Stores poop sessions per user

// Create an account
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required." });
  }
  if (users[username]) {
    return res.status(400).json({ message: "User already exists." });
  }
  users[username] = { password, salary: 0 };
  poopSessions[username] = [];
  res.json({ message: "Account created successfully!", username });
});

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!users[username] || users[username].password !== password) {
    return res.status(401).json({ message: "Invalid credentials." });
  }
  res.json({ message: "Login successful!", username });
});

// Set salary
app.post("/set-salary", (req, res) => {
  const { username, salary } = req.body;
  if (!users[username]) {
    return res.status(404).json({ message: "User not found." });
  }
  users[username].salary = salary;
  res.json({ message: "Salary updated.", salary });
});

// Log poop session
app.post("/log-poop", (req, res) => {
  const { username, duration } = req.body;
  if (!users[username]) {
    return res.status(404).json({ message: "User not found." });
  }
  const hourlyRate = users[username].salary / (40 * 52);
  const earnings = (hourlyRate / 60) * duration;
  
  const session = { id: uuidv4(), duration, earnings, timestamp: Date.now() };
  poopSessions[username].push(session);
  res.json({ message: "Poop session logged.", session });
});

// Get poop history
app.get("/history/:username", (req, res) => {
  const { username } = req.params;
  if (!users[username]) {
    return res.status(404).json({ message: "User not found." });
  }
  res.json({ history: poopSessions[username] });
});

// Start the server (only once!)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));