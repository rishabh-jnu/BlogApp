import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Specify extensions to resolve automatically
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // Optional: Configure alias for cleaner imports
    alias: {
      '@components': '/src/components', // Example alias
    },
  },
});
