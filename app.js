const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// call the API

app.get("/", (req, res) => {
    res.sendFile('index.html');
  });

port = process.env.PORT || 80
app.listen(port, () => console.log("server started"));
