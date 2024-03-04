import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src/components/Table.vue', import.meta.url)),
    },
},
server: {
  host: true,
  port: 8080,
},
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      name: 'VueTable',
      formats: ['es', 'umd'],
      fileName: 'pangea-vue-table'
    },
    rollupOptions: {
      external:['vue'],
      output: {
          globals: {
              vue: 'Vue',
              'date-fns': 'dateFns',
          },
      },
  },
  }
});
