const PaymentDownException = require("../exception/payment-down-exception");
const logger = require("../logger/winston-log");

const errorMiddleware = (err, req, res, next) => {
  logger.error("Error messsage ----->",err.message);
  logger.error("Error stack ----->",err.stack);
  if(err instanceof PaymentDownException){
    return res.status(503).send("Payment service is down");
  }
  res.status(500).send('Something broke!');
}

module.exports = errorMiddleware;