import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    proxy: {
      "/api": {
        target: "http://76.13.58.192.nip.io:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
