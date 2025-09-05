#!/usr/bin/env node

const { execSync } = require("child_process");
const { spawn } = require("child_process");

const PORT = 3333;

// Function to kill process on port
function killPort(port) {
  try {
    // For macOS/Linux
    console.log(`🔍 Checking for processes on port ${port}...`);

    // Find process using the port
    const pid = execSync(`lsof -ti:${port}`, { encoding: "utf-8" }).trim();

    if (pid) {
      console.log(`⚠️  Found process ${pid} using port ${port}`);
      console.log(`🔪 Killing process ${pid}...`);
      execSync(`kill -9 ${pid}`);
      console.log(`✅ Process killed successfully`);

      // Wait a moment for port to be released
      setTimeout(() => {}, 1000);
    }
  } catch (error) {
    // No process found on port, which is fine
    console.log(`✅ Port ${port} is available`);
  }
}

// Kill any existing process on the port
killPort(PORT);

// Start the dev server
console.log(`\n🚀 Starting Next.js dev server on port ${PORT}...`);
const next = spawn("next", ["dev", "--port", PORT.toString()], {
  stdio: "inherit",
  shell: true,
});

// Handle process termination
process.on("SIGINT", () => {
  console.log("\n👋 Shutting down dev server...");
  next.kill("SIGINT");
  process.exit(0);
});

process.on("SIGTERM", () => {
  next.kill("SIGTERM");
  process.exit(0);
});
