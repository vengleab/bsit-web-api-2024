const logger = require("../logger/winston-log");
module.exports = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const requestTime = new Date().toISOString();
  next();
  logger.info(`${requestTime}: ${method} - ${url} [${res.statusCode}]`);
}
