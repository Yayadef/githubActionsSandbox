const config = require("config");

console.log("Hello World");

const params = process.argv;

switch (params[2]) {
  case "ENV":
    console.log("ENV is selected");
    break;
  case "DEV":
    console.log("DEV is selected");
    break;
  case "PROD":
    console.log("PROD is selected");
    break;
  default:
    console.log("No environment selected");
}

console.log("\nTest config file :");
console.log(config.get("ENV_NAME"));
