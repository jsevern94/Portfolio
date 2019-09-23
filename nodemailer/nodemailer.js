var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/keys');

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  secureConnection: false,
  port: 587,
  auth: {
      user: "severnj@spu.edu",
      pass: "c1o2t3t4"
  },
  tls: {
      ciphers:'SSLv3'
  }
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \nemail: ${email} \nmessage: ${message} `

  var mail = {
    from: name,
    to: 'contact@jonahsevern.com',
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;