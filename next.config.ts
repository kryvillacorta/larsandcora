import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Lets phones/tablets on the same Wi-Fi open the dev server (http://<your-ip>:3000). Without
  // this, Next blocks the dev scripts for those devices and the page loads without JavaScript
  // (no scroll fade-in, no mobile menu, no dress-code tabs). Dev only; has no effect in production.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*", "*.local"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "globals.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
