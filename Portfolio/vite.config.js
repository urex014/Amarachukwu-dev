import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        about: "./about.html",
        contact: "./contact.html",
        projects: "./work.html"
      }
    }
  }
});
