const express = require("express");
const profiles = require("./models/profiles.json");
const webapp = express();

const userController = require("./controllers/user");

const errorMiddleware = require("./middleware/error-middleware");
const profileRouter = require("./controllers/profile");
const PaymentDownException = require("./exception/payment-down-exception");
const notFound = require("./middleware/not-found-middleware");
const loggerMiddleware = require("./middleware/logger-middleware");
const level1Middleware = require("./middleware/level1-middleware");
const level2Middleware = require("./middleware/level2-middleware");
const requestLogMiddleware = require("./middleware/request-log-middleware");
const morgan = require("morgan");
const PORT = 8080;
const logger = require("./logger/winston-log");

// morgan.token('body', (req) => JSON.stringify(req.body));

webapp.use(requestLogMiddleware);
// webapp.use(morgan(":remote-addr :status :res[content-length] :method :url :response-time ms"));
webapp.set("view engine", "ejs");
webapp.use(express.json());
webapp.use(express.urlencoded({ extended: true }));
webapp.use("/assets", express.static("public"));
webapp.use("/api/profiles", profileRouter);
webapp.use("/users", userController)

// webapp.use(loggerMiddleware)
// webapp.use(level1Middleware)
// webapp.use(level2Middleware)
webapp.get("/", (request, response) => {
  response.send(`
    <h1 style="color: red">Web-API 2</h1> 
  `);
});

webapp.get("/error", (request, response) => {
  throw new PaymentDownException("Something went wrong");
});

webapp.get("/mypage", (request, response) => {
  response.render("index", { data: profiles });
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

webapp.get("/handling-endpoint", [errorMiddleware, level1Middleware], (request, response) => {
  console.log("handling-endpoint");
  response.send("Handling endpoint");
});


webapp.use(errorMiddleware);
webapp.use(notFound);

webapp.listen(PORT, () => {
  console.log(`Web-API listening on port ${PORT}`);
});
