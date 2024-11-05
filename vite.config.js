// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base:  "https://luca-b431.github.io/ohmyfood/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        menu1: resolve(__dirname, "menu1.html"),
        menu2: resolve(__dirname, "menu2.html"),
        menu3: resolve(__dirname, "menu3.html"),
        menu4: resolve(__dirname, "menu4.html"),
      },
    },
  },
});
