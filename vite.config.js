import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
base: "/Hackathonfinal_review/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        admin: resolve(root, "admin.html"),
        user: resolve(root, "user.html")
      }
    }
  }
});
