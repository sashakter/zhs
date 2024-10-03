import { initMongoDB } from './db/initMongoDB.js';
import { serverRunning } from './serverAlcotrade.js';

const bootstrap = async () => {
  await initMongoDB();
  serverRunning();
};

bootstrap();
