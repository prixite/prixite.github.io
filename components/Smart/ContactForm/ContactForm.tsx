import { Grid, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { contactForm } from '../../../data/data'

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    company: '',
    message: '',
  })

  const formSuccess = () => toast.success(contactForm.success)
  const formError = () => toast.error(contactForm.error)

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    formSuccess()
    setForm({ name: '', email: '', number: '', company: '', message: '' })

    const { error } = await res.json()
    if (error) {
      formError()
    }
  }

  return (
    <>
      <ToastContainer autoClose={5000} position="top-center" />
      <form className="contact-form" onSubmit={handleForm}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction={{ xs: 'column', md: 'row' }}
        >
          <Grid item xs={6} className="input-field-container">
            <PersonOutlineOutlinedIcon className="input-field-icon" />
            <input
              name="name"
              required
              className="input-field"
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            ></input>
          </Grid>
          <Grid item xs={6} className="input-field-container">
            <EmailOutlinedIcon className="input-field-icon" />
            <input
              name="email"
              required
              className="input-field"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
            ></input>
          </Grid>
          <Grid item xs={6} className="input-field-container">
            <PhoneInTalkOutlinedIcon className="input-field-icon" />
            <input
              name="number"
              className="input-field"
              type="number"
              placeholder="Phone Number"
              value={form.number}
              onChange={(e) => setForm({ ...form, number: e.target.value })}
            ></input>
          </Grid>
          <Grid item xs={6} className="input-field-container">
            <BusinessCenterOutlinedIcon className="input-field-icon" />
            <input
              name="company"
              className="input-field"
              type="text"
              placeholder="Company Name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            ></input>
          </Grid>
          <Grid item xs={100} md={100} className="input-field-container">
            <MessageOutlinedIcon className="input-field-icon" />
            <textarea
              name="message"
              required
              className="text-area"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
          </Grid>
        </Grid>
        <Box className="submit-button">
          <Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              endIcon={<SendOutlinedIcon />}
              className="contact-us-button"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </>
  )
}

export default ContactForm
