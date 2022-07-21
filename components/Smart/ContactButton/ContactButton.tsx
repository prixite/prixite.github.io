import React from 'react'
import { Box, Button } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import { useRouter } from 'next/router'

interface ContactButtonInterface {
  text?: string
  width?: boolean
}

const ContactButton: React.FC<ContactButtonInterface> = ({ text, width }) => {
  const router = useRouter()
  return (
    <Box>
      <Button
        fullWidth={width}
        variant="contained"
        endIcon={<SendOutlinedIcon />}
        className="contact-us-button"
        onClick={() => router.push('/contact-us')}
      >
        {text}
      </Button>
    </Box>
  )
}

export default ContactButton
