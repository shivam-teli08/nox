const nodemailer = require('nodemailer');
const send = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'shivamteli07@gmail.com',
    pass: 'ihpr caix giyy uunp'
  }
});

const send2 = {
  from: 'shivamteli07@gmail.com',
  to: 'shravan20076@gmail.com',
  subject: 'dekh le',
  text: 'result ke din tu toh gaya jyada aaya toh'
};

send.sendMail(send2, (err, info) => {
  if (err) {
    return console.log(err);
  }
  console.log('Email sent: ' + info.response);
});