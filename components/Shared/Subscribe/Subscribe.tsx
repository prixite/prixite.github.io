import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import PrixiteLogo from '../../../public/images/subscribe-image.png'
import ContactButton from '../../Smart/ContactButton/ContactButton'

const Subscribe = () => {
  return (
    <Container className="subscribe-container" maxWidth="xl">
      <Box className="subscribe-image">
        <Image src={PrixiteLogo} alt="prixite" />
      </Box>
      <Box className="subscribe-card">
        <Box>
          <Typography className="subscribe-heading">
            Subscribers <span style={{ color: '#63AC45' }}>Get More</span>
          </Typography>
          <Typography>Join the community</Typography>
        </Box>
        <Box className="subscribe-input">
          <input
            className="input"
            type="text"
            placeholder="Enter you Email"
            multiple
          ></input>
          <div className="subscribe-button">
            <ContactButton text="Subscribe" />
          </div>
        </Box>
      </Box>
    </Container>
  )
}

export default Subscribe
