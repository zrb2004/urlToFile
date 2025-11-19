import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",// 使用相对路径
  plugins: [
    react({
      // 确保使用React 18的新API
      jsxRuntime: "automatic",
    }),
  ],
  server: {
    host: "0.0.0.0",
    // allowedHosts: ["localhost", "127.0.0.1", "0.0.0.0", "x8eb6299.natappfree.cc"],
  },
  build: {
    rollupOptions: {
      external: ["#minpath"],
    },
  },
  optimizeDeps: {
    // 确保React和ReactDOM的依赖被正确处理
    include: ["react", "react-dom"],
  },
});
