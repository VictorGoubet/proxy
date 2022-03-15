const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require('path')

const fs = require('fs')
const puppeteer = require('puppeteer')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


htmlToImage = async (html = "") => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html);

  const content = await page.$("body");
  const imageBuffer = await content.screenshot({ omitBackground: true });

  await page.close();
  await browser.close();

  return imageBuffer;
};


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.get("/img", (req, res) => {
    
  });

app.get("/graphic", async (req, res) => {
  const imageBuffer = await htmlToImage(`<div>
                                            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
                                            <div class="badge-base LI-profile-badge" data-locale="fr_FR" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="gad-azeraf" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://fr.linkedin.com/in/gad-azeraf?trk=profile-badge">Gad Azeraf</a></div>
                                         </div>`);
  fs.writeFileSync("./image.png", imageBuffer);
  res.sendFile(path.join(__dirname, 'image.png'));
  //res.set("Content-Type", "image.png");
  //res.send(imageBuffer);
});

port = process.env.PORT || 3000
app.listen(port, () => console.log("server started"));
