import winston from 'winston';

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.colorize(), logFormat),
  transports: [
    new winston.transports.File({
      filename: 'logs/app.log',
      level: process.env.LOG_LEVEL || 'info',
    }),

    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),
  ],
});

// If not in production, log to the console with additional details
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

export default logger;
