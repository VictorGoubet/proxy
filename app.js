const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


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
  axios.get("https://www.linkedin.com/badges/profile/create?vanityname=gad-azeraf&preferredlocale=en_US&trk=public_profile-settings_badge").then((data) => {
      res.send(data);
    }).catch((error) => {
      console.log(error.message);
    });
});

port = process.env.PORT || 80
app.listen(port, () => console.log("server started"));
