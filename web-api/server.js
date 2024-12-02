const express = require('express');

const webapp = express();
const PORT = 8080

webapp.use("/assets", express.static("public"))

webapp.get("/", (request, response)=>{
  response.send(`
    <h1 style="color: red">Web-API 2</h1> 
  `)

});

webapp.listen(PORT, () => {
  console.log(`Web-API listening on port ${PORT}`)
});