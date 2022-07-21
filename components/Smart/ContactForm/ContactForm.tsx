import { Grid, Box, Container } from '@mui/material'
import React from 'react'
import ContactButton from '../ContactButton/ContactButton'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'

const ContactForm = () => {
  return (
    <form className="contact-form">
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction={{ xs: 'column', md: 'row' }}
      >
        <Grid item xs={6} className="input-field-container">
          <PersonOutlineOutlinedIcon className="input-field-icon" />
          <input
            className="input-field"
            type="text"
            placeholder="Full Name"
          ></input>
        </Grid>
        <Grid item xs={6} className="input-field-container">
          <EmailOutlinedIcon className="input-field-icon" />
          <input
            className="input-field"
            type="email"
            placeholder="Email Address"
          ></input>
        </Grid>
        <Grid item xs={6} className="input-field-container">
          <PhoneInTalkOutlinedIcon className="input-field-icon" />
          <input
            className="input-field"
            type="number"
            placeholder="Phone Number"
          ></input>
        </Grid>
        <Grid item xs={6} className="input-field-container">
          <BusinessCenterOutlinedIcon className="input-field-icon" />
          <input
            className="input-field"
            type="text"
            placeholder="Company Name"
          ></input>
        </Grid>
        <Grid item xs={100} md={100} className="input-field-container">
          <MessageOutlinedIcon className="input-field-icon" />
          <textarea className="text-area" placeholder="Your Message"></textarea>
        </Grid>
      </Grid>
      <Box className="submit-button">
        <ContactButton text="Submit" width={true} />
      </Box>
    </form>
  )
}

export default ContactForm
