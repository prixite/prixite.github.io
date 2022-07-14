import React from 'react'
import { Box, Button } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

interface ContactButtonInterface {
  text: string,
  buttonSize?: string,
}

const ContactButton: React.FC<ContactButtonInterface> = ({ text, buttonSize }) => {
  return (
    <Box>
      <Button
        variant="contained"
        endIcon={<SendOutlinedIcon />}
        size={buttonSize}
        className="contact-us-button"
      >
        {text}
      </Button>
    </Box>
  )
}

export default ContactButton
