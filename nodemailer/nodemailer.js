var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'chi-node15.websitehostserver.net',
    port: 465,
    secure: true,
    auth: {
        user: "contact@jonahsevern.com",
        pass: "C1o2t3t4!",
    },
});

transporter.verify((error, success) => {
  console.log("here\nhere\nhere\nhere\nhere\nhere\nhere\nhere\nhere\nhere\nhere\nhere\nhere\nhere\nhere\nhere\nhere\nhere\n" + process.env.USER + process.env.PASS)
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