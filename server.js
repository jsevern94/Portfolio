const express = require('express');
const bodyParser = require("body-parser");
const mailPost = require('./nodemailer/nodemailer');
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(mailPost)

app.listen(PORT);
