import express from 'express';
import cors from 'cors';
import routes from './routes';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createServer() {
  const app = express();
  
  // Middleware
  app.use(cors());
  app.use(express.json());
  
  // API routes
  app.use(routes);
  
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  
  app.use(vite.ssrFixStacktrace);
  app.use('*', vite.middlewares);
  
  const port = process.env.PORT || 5000;
  
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });
}

createServer().catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});