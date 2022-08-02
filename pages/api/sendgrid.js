import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    console.log(req.body)
    await sendgrid.send({
      to: 'uzairmirza90@gmail.com', // Your email where you'll receive emails
      from: 'uzairmirza90@gmail.com', // your website email address here
      html: `<div>You've got a mail</div>`,
    })
  } catch (error) {
    console.log(error)
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
