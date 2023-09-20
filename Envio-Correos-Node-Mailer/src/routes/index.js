const { Router }  = require ('express');
const nodemailer = require('nodemailer')
const router = Router();

router.post('/send-email', async (req,res) => {
    const {name, email, phone, message} = req.body
    contentHTML = `
    <h1>User Information</h1>
    <ul>
        <li>Username: ${name}</li>
        <li>User Email: ${email}</li>
        <li>PhoneNumber: ${phone}</li>
    </ul>
    <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: "truequeacom@gmail.com",
          pass: "xfzilrxgastmdyxd",
        },
      });

      const info = await transporter.sendMail({
        from:'truequeacom@gmail.com',
        to:'truequeacom@gmail.com',
        subject:'correo node.js',
        html: contentHTML
      });

      console.log('Message send', info.messageId);

    res.redirect('/success.html');
})

module.exports = router;