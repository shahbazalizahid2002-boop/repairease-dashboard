// 1. Import the libraries
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// 2. Import your own files
import user from "./name.js";
import getDate from "./date.js";

// 3. Load values from the .env file (e.g. PORT)
dotenv.config();
const app = express();

// Test your imports
console.log(user);
console.log(user.name);
console.log(user.age);
getDate();

// 4. Middleware
app.use(cors());
app.use(express.json());

// 5. Test route
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "RepairEase backend is running",
  });
});

// 6. Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});