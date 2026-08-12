console.log("config.js loaded");

const config = {
  title: process.env.REPORT_TITLE,
  author: process.env.AUTHOR,
};

if (!config.title) {
  throw new Error("REPORT_TITLE is missing");
}

if (!config.author) {
  throw new Error("AUTHOR is missing");
}

export default config;