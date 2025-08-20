import express from 'express';
import { env } from './utils/env';
import { pinoHttp } from 'pino-http';
import cors from 'cors';
import router from './routers';
import { errorHandler } from './middlewares/errorHandler';
import cookieParser from 'cookie-parser';

const PORT = Number(env('PORT', '6000'));
export const setupServer = () => {
  const app = express();
  app.use(express.json());
  const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
  };
  app.use(cors(corsOptions));
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
  });
  app.use(cookieParser());

  app.use('/', router);

  app.use(
    pinoHttp({
      transport: {
        target: 'pino-pretty',
      },
    })
  );

  app.get('/', (req, res) => {
    res.send('Server works');
  });

  app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
