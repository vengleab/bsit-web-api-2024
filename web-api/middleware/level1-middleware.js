module.exports = (req, res, next) => {
  console.log("Level 1: Before handling");
  next();
  console.log("Level 1: After Handding:");
};