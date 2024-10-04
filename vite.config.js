import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [react(), commonjs()],
  build: {
    rollupOptions: {
      external: ['pdfmake'],
      output: {
        globals: {
          pdfmake: 'pdfMake',
        },
      },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`, 
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  namedExports: {
    'react/jsx-runtime': ['jsx', 'jsxs'],
    'react/jsx-dev-runtime': ['jsx', 'jsxs', 'jsxDEV'],
},
});
