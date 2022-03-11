const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// call the API

app.get("/", (req, res) => {
    res.send('Hey');
  });


app.get("/access2", (req, res) => {
    res.redirect('https://www.linkedin.com/badges/profile/create?vanityname=gad-azeraf&preferredlocale=en_US&trk=public_profile-settings_badge')
  });

app.get("/access", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

port = process.env.PORT || 80
app.listen(port, () => console.log("server started"));
