import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: 'Prixite Contact Form',
      html: `<div>
        Name: ${req.body.name}
        <br />
        Email: ${req.body.email}
        <br />
        Contact: ${req.body.number}
        <br />
        Company: ${req.body.company}
        <br />
        Message: ${req.body.message}
      </div>`,
    })
  } catch (error) {
    console.log(error)
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
