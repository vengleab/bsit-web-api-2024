const express = require("express");
const profileRouter = express.Router();

profileRouter.get("/", (req, res) => {
  res.send("User profile data");
})

profileRouter.get("/:id", (req, res) => {
  res.send("Profile data for user: " + req.params.id);
})

profileRouter.get("/search", (req, res) => {
  const { id, name } = req.query;
  console.log("Request querys",req.query);
  
  res.send(`Search user profiles data: ${id}. ${name}`);
});

module.exports = profileRouter;