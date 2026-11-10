import { Config } from './config';
import logger from './config/logger';
import app from './app';

const PORT = Config.PORT || 3000;
const startServer = () => {
  try {
    app.listen(PORT, () => {
      logger.info(`Server is running on port `, { port: PORT });
    });
  } catch (error) {
    logger.error('Error starting the server:', error);
    process.exit(1);
  }
};

startServer();
