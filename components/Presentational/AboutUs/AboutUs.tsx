import React from 'react'
import { Typography, Divider, Box } from '@mui/material'

interface AboutUs {
  header: string
  heading: string
  description: string
}

const AboutUs: React.FC<AboutUs> = ({ header, heading, description }) => {
  return (
    <Box p="5rem 3rem" className="about-us">
      <Typography fontSize={30} fontWeight={600}>
        {header.slice(0, 6)}
        <span style={{ color: '#63AC45' }}>{header.slice(5, 9)}</span>
      </Typography>

      <Typography fontWeight={500}>{heading}</Typography>

      <Divider className="about-us-divider" />
      <Typography>{description}</Typography>
    </Box>
  )
}

export default AboutUs
