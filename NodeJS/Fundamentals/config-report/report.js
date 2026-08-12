// config-report/report.js

import fs from "fs";
import config from "./config.js";
import { heading, subheading, bullet } from "./formatter.js";

const report = [
  heading(config.title),
  "",
  subheading("Author"),
  bullet(config.author),
  "",
  subheading("Sales"),
  bullet("Product A: 100 units"),
  bullet("Product B: 80 units"),
].join("\n");


fs.writeFileSync("./config-report/report.md", report);

console.log("Report generated successfully!");