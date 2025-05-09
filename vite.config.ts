import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // <-- this enables `describe`, `it`, etc.
    environment: 'jsdom', // <-- simulates the browser
    setupFiles: './src/test/setup.ts' // or .js if you're not using TS
  }
});
