module.exports = (req, res, next) => {
  console.log("Before handling");
  next();
  console.log("After Handding:");
};