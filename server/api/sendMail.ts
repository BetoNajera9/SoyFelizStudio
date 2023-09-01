import { createTransport } from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.PASSWORD_USER
    }
  })

  const bodyMail = `
    Nombre: ${body.name}<br/>
    Email: ${body.email}<br/>
    Telefono: ${body.phone}<br/>
    Fecha de nacimiento: ${body.birthday}<br/>
    Direccion: ${body.address}<br/>
    Zona: ${body.zone}<br/>
    Tamaño: ${body.size}<br/>
    Idea: ${body.idea}<br/>
    Referencia: <img src="cid:unique@nodemailer.com" alt="Referencia"/>
  `

  const mailOptions = {
    from: 'Soy Feliz Studio',
    to: process.env.EMAIL_TO,
    subject: 'Soy Feliz Studio',
    html: bodyMail,
    attachments: [{
      "filename": "image.png",
      "path": `data:image/png;base64, ${body.image}`,
      "cid": "unique@nodemailer.com"
    }]
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})