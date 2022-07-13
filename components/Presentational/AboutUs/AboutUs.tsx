import React from 'react'
import { Typography, Divider, Box } from '@mui/material'

interface AboutUs {
  header: string
  heading: string
  description: string
}

const AboutUs: React.FC<AboutUs> = ({ header, heading, description }) => {
  return <Box p="5rem 3rem" className="about-us"></Box>
}

export default AboutUs
