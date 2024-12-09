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

webapp.get('/profile', (req, res) => {
  const mockProfile = {
    name: 'Jane Doe',
    gender: 'Female',
    image: 'https://www.digitalocean.com/api/static-content/v1/images?src=https%3A%2F%2Fcommunity-cdn-digitalocean-com.global.ssl.fastly.net%2FvkL74ySp2fFiArxbTvhp4QF2&width=1920', 
  };

  res.json(mockProfile);
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
