module.exports = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const requestTime = new Date().toISOString();
  console.info(`========================================`);
  next();
  console.log(`${requestTime}: ${method} - ${url} [${res.statusCode}]`);
}
