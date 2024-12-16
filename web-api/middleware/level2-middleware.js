module.exports = (req, res, next) => {
  console.log("Level 2: Before handling");
  next();
  console.log("Level 2: After Handding:");
};