#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const command = args[0];
const options = args.slice(1);

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
};

function run(cmd, silent = false) {
  if (!silent) {
    console.log(`\n${colors.cyan}📦 Running: ${cmd}${colors.reset}`);
  }
  try {
    execSync(cmd, { stdio: "inherit" });
    return true;
  } catch (error) {
    if (!silent) {
      console.error(`${colors.red}❌ Command failed: ${cmd}${colors.reset}`);
    }
    return false;
  }
}

function clean() {
  console.log(`${colors.yellow}🧹 Cleaning build artifacts...${colors.reset}`);
  const dirs = [".next", "out"];
  dirs.forEach((dir) => {
    if (fs.existsSync(dir)) {
      console.log(`  Removing ${dir}`);
      run(`rm -rf ${dir}`, true);
    }
  });
  console.log(`${colors.green}✅ Clean complete${colors.reset}`);
}

function lint(fix = false, files = null) {
  const target = files && files.length > 0 ? files.join(" ") : ".";
  console.log(
    `${colors.cyan}🔍 Running ESLint${fix ? " with auto-fix" : ""}...${colors.reset}`,
  );
  const cmd = fix
    ? `pnpm exec eslint ${target} --fix`
    : `pnpm exec eslint ${target}`;
  const success = run(cmd);
  if (!success && !fix) {
    process.exit(1);
  }
}

function format(files = null, check = false) {
  const target =
    files && files.length > 0
      ? files.join(" ")
      : "--ignore-path .prettierignore '**/*.{js,jsx,ts,tsx,json,css,scss,md}'";
  const action = check ? "--check" : "--write";
  console.log(
    `${colors.cyan}💅 ${check ? "Checking" : "Formatting"} code with Prettier...${colors.reset}`,
  );
  const success = run(`pnpm exec prettier ${action} ${target}`);
  if (success) {
    console.log(
      `${colors.green}✅ ${check ? "Format check" : "Formatting"} complete${colors.reset}`,
    );
  } else if (!check) {
    process.exit(1);
  }
  return success;
}

function typecheck() {
  console.log(
    `${colors.cyan}📝 Running TypeScript type checking...${colors.reset}`,
  );
  const success = run("pnpm exec tsc --noEmit");
  if (!success) {
    process.exit(1);
  }
  console.log(`${colors.green}✅ Type checking passed${colors.reset}`);
}

function killPort(port) {
  try {
    console.log(
      `${colors.cyan}🔍 Checking for processes on port ${port}...${colors.reset}`,
    );
    execSync(`lsof -ti:${port} | xargs kill -9 2>/dev/null || true`, {
      stdio: "pipe",
    });
    console.log(
      `${colors.green}✅ Port ${port} is now available${colors.reset}`,
    );
  } catch (error) {
    // Port is already free, which is fine
  }
}

function start() {
  const PORT = 3333;
  console.log(`${colors.cyan}🚀 Starting production server...${colors.reset}`);

  // Kill any existing process on the port
  killPort(PORT);

  // Start the production server
  const success = run(`next start --port ${PORT}`);
  if (!success) {
    process.exit(1);
  }
}

function main() {
  if (!command || command === "--help" || command === "-h") {
    console.log(`
${colors.bright}🛠️  Build Tools${colors.reset}

Usage: node scripts/tools-simple.js [command] [options]

Commands:
  ${colors.cyan}clean${colors.reset}              Clean build artifacts
  ${colors.cyan}lint${colors.reset}               Run ESLint
  ${colors.cyan}lint:fix${colors.reset}           Run ESLint with auto-fix
  ${colors.cyan}format${colors.reset}             Format code with Prettier
  ${colors.cyan}format:check${colors.reset}       Check code formatting without modifying
  ${colors.cyan}typecheck${colors.reset}          Run TypeScript type checking
  ${colors.cyan}start${colors.reset}              Start production server (kills existing port)
`);
    process.exit(0);
  }

  switch (command) {
    case "clean":
      clean();
      break;
    case "lint":
      lint(false, options);
      break;
    case "lint:fix":
      lint(true, options);
      break;
    case "format":
      format(options, false);
      break;
    case "format:check":
      const success = format(options, true);
      if (!success) {
        process.exit(1);
      }
      break;
    case "typecheck":
      typecheck();
      break;
    case "start":
      start();
      break;
    default:
      console.error(
        `${colors.red}❌ Unknown command: ${command}${colors.reset}`,
      );
      process.exit(1);
  }
}

main();
