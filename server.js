const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (request, response) {
  response.send("Olá mundo cruel");
});

app.listen(8081);
