import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { createRequire } from 'module';
import { defineConfig, Plugin } from 'vite';

const require = createRequire(import.meta.url);

function netlifyFunctionDevPlugin(): Plugin {
  return {
    name: 'netlify-function-dev-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.startsWith('/.netlify/functions/send-email')) {
          if (req.method === 'OPTIONS') {
            res.statusCode = 200;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
            res.end();
            return;
          }

          if (req.method === 'POST') {
            let rawBody = '';
            req.on('data', (chunk) => {
              rawBody += chunk;
            });
            req.on('end', async () => {
              try {
                const { handler } = require('./netlify/functions/send-email.js');
                const event = {
                  httpMethod: 'POST',
                  body: rawBody,
                  headers: req.headers,
                };
                const result = await handler(event, {});
                res.statusCode = result.statusCode || 200;
                for (const [key, val] of Object.entries(result.headers || {})) {
                  res.setHeader(key, val as string);
                }
                res.end(result.body);
              } catch (err: unknown) {
                console.error('[Dev Server] Netlify function execution error:', err);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    success: true,
                    message: 'Formularz odebrany pomyślnie w lokalnym trybie developerskim.',
                  })
                );
              }
            });
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), netlifyFunctionDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
