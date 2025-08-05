import { initMongoDB } from './db/initMongoDB';
import { setupServer } from './server';

const bootstrap = async () => {
  await initMongoDB();
  setupServer();
};

bootstrap();
