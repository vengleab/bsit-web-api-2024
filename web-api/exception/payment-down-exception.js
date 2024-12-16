class PaymentDownException extends Error {
  constructor(message) {
    super(message);
    this.name = "PaymentDownException";
  }
}

module.exports = PaymentDownException;