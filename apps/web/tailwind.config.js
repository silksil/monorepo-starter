const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  presets: [sharedConfig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
