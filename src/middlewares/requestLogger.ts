import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - startTime;

    logger.info(`${req.method} ${req.originalUrl} - Status: ${res.statusCode} - ${duration}ms`);

    logger.debug(
      `${req.method} ${req.originalUrl} - Status: ${res.statusCode} - ${duration}ms - Body: ${JSON.stringify(req.body)}`,
    );
  });

  next();
};

export default requestLogger;
