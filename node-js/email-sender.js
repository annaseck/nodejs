const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '@gmail.com',
    pass: ''
  }
});

const mailOptions = {
  from: '@gmail.com',
  to: '@gmail.com',
  subject: 'Utiliser Node.js pour envoyer des mails',
  text: 'Salut, bienvenue!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé: ' + info.response);
  }
});