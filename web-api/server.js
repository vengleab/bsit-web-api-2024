const express = require("express");

const webapp = express();
const PORT = 8080;

webapp.use(express.json());
webapp.use(express.urlencoded({ extended: true }));
webapp.use("/assets", express.static("public"));

webapp.get("/", (request, response) => {
  response.send(`
    <h1 style="color: red">Web-API 2</h1> 
  `);
});

webapp.post("/form-login", (request, response) => {
  console.log(request.body);
  response.send({ message: "Data received" + JSON.stringify(request.body) });
});

webapp.post("/login", (request, response) => {
  console.log(request.body);

  const { email, password } = request.body;
  console.log(request.body);
  response.send({ message: `Login successful for ${email}` });
});

webapp.listen(PORT, () => {
  console.log(`Web-API listening on port ${PORT}`);
});
