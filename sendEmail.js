const mailer = require('./mailer');

mailer.sendMail(
  {
    from: 'goncalo_dsilva@hotmail.com',
    to: 'goncalo.pds.92@gmail.com',
    subject: 'This is a test email',
    text: 'Hello world',
    html: '<p>Hello <em>world</em></p>',
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);