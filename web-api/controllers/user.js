const userController = require("express").Router();
const PrismaClient = require("@prisma/client").PrismaClient;
const primsa = new PrismaClient();

userController.get("/", async (req, res)=> {
  if (req.userRole !== 'admin'){
    res.status(403).send("Unauthorized")
  }
  const users = await primsa.user.findMany({ include: { articles: true} });
  res.send(users);
})

userController.post("/", async (req, res)=> {
  const { email } = req.body || {} ;
  if(!email) {
    return res.status(400).send("Email is required")
  }

  const createdRecord = await primsa.user.create({
    data: { email }
  });

  return res.send(createdRecord)
})




module.exports = userController;