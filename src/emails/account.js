const sgMail = require("@sendgrid/mail");

const sengrigridApiKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sengrigridApiKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ahafonovmykyta@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ahafonovmykyta@gmail.com",
    subject: "Goobye!",
    text: `Goodbye from the app, ${name}. We hope to see you soon :(`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
