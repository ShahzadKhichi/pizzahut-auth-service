import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp()),
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.json(),
    }),
    new winston.transports.File({
      level: 'error',
      format: winston.format.json(),
      dirname: 'logs',
      filename: 'error.log',
    }),
    new winston.transports.File({
      level: 'info',
      format: winston.format.json(),
      dirname: 'logs',
      filename: 'combined.log',
    }),
  ],
});

export default logger;
