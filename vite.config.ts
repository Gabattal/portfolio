import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const alias = {
    "@": path.resolve(__dirname, "src")
};

export default defineConfig({
    build: {
        outDir: "dist"
    },
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => ["md-linedivider"].includes(tag)
                }
            }
        })
    ],
    publicDir: "assets",
    resolve: {
        alias
    },
    root: "./",
    server: {
        host: "127.0.0.1",
        port: 5555
    }
}); 
