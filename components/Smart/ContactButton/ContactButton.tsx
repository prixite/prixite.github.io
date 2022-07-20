import React from 'react'
import { Box, Button } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import { useRouter } from 'next/router'

interface ContactButtonInterface {
  text?: string
}

const ContactButton: React.FC<ContactButtonInterface> = ({ text }) => {
  const router = useRouter()
  return (
    <Box>
      <Button
        variant="contained"
        endIcon={<SendOutlinedIcon />}
        className="contact-us-button"
        size="large"
        onClick={() => router.push('/contact-us')}
      >
        {text}
      </Button>
    </Box>
  )
}

export default ContactButton
