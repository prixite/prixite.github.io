import React from 'react'
import { Box, Button } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

interface ContactButtonInterface {
  text: string
}

const ContactButton: React.FC<ContactButtonInterface> = ({ text }) => {
  return (
    <Box>
      <Button
        variant="contained"
        endIcon={<SendOutlinedIcon />}
        className="contact-us-button"
        size="large"
      >
        {text}
      </Button>
    </Box>
  )
}

export default ContactButton
