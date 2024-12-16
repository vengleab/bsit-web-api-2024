const PaymentDownException = require("../exception/payment-down-exception");

const errorMiddleware = (err, req, res, next) => {
  console.log("Error messsage ----->",err.message);
  console.log("Error stack ----->",err.stack);
  if(err instanceof PaymentDownException){
    return res.status(503).send("Payment service is down");
  }
  res.status(500).send('Something broke!');
}

module.exports = errorMiddleware;