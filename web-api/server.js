const express = require("express");
const profiles = require("./models/profiles.json");
const webapp = express();
// ========== cors configration ================
const cors = require("cors");
webapp.use(cors({ origin: ["http://localhost:3000", "http://localhost:3001"] }));
// ========== cors configration ================


// ========== stateful configration ================
const session = require("express-session");
webapp.use(session({
  secret: "dsjhfdjgdfjhgfdjgkjdfghlfdghfgdr",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));
// ========== stateful configration ================


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

// ========== stateful api================
// ========== stateful api - Login ================
webapp.get("/login", (request, response) => {
  const { email, password } = request.query;
  if (email === "admin" && password === "admin") {
    request.session.user = { email, password };
    return response.send("Login successful");
  } else {
    response.status(401).send("Login failed");
  }
});

// ========== stateful api - Logout ================
webapp.get("/logout", (request, response) => {
  request.session.destroy();
  return response.send("Logout successful");
});

// ========== stateful api - Authentication ================
const authMiddleware = (request, response, next) => {
  try {
    const { email, password } = request.session.user || {};
    if (email === "admin" && password === "admin") {
      return next();
    } else {
      return response.status(401).send("Not login");
    }
  } catch (error) {
    logger.error("Login failed", error);
    return response.status(400).send("Error");
  }
}

// ========== stateful api ================

webapp.use("/users", [authMiddleware], userController)

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
