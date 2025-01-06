const winston = require("winston");

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp(),
        winston.format.printf(
          (info) => `  \u001b[31${info.timestamp}\u001b[39 - ${info.level}: ${info.message}`
        )
      ),
    }),
    new winston.transports.File({
      filename: "logs/app.log",
      level: "info",
      // format: winston.format.combine(winston.format.json()),
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
  ],
});

winston.addColors({
  error: "green",
  warn: "yellow",
  info: "white",
  debug: "blue",
});

module.exports = logger;
