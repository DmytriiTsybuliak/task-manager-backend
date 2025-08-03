import express from 'express';
import { env } from './utils/env';
import { pinoHttp } from 'pino-http';

const PORT = Number(env('PORT', '6000'));
export const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use('/', router);

  app.use(
    pinoHttp({
      transport: {
        target: 'pino-pretty',
      },
    })
  );
  // Example route
  app.get('/', (req, res) => {
    res.send('Hello World');
  });
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
