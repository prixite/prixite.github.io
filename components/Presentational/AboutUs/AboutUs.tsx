import React from 'react'
import { Typography, Divider, Box } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

interface AboutUs {
  header: string
  heading: string
  description: string
  images: {
    img: StaticImageData
    className: string
  }[]
}

const AboutUs: React.FC<AboutUs> = ({
  header,
  heading,
  description,
  images,
}) => {
  return (
    <Box p="4rem 3rem" className="about-us">
      {images.map((image, index) => (
        <Box className={`${image.className} img`} key={index}>
          <Image src={image.img} alt="aboutus" layout="responsive" />
        </Box>
      ))}
      <Typography fontSize={30} fontWeight={600}>
        {header.slice(0, 6)}
        <span style={{ color: '#63AC45' }}>{header.slice(5, 9)}</span>
      </Typography>

      <Typography fontWeight={500}>{heading}</Typography>

      <Divider className="about-us-divider" />
      <Typography className="description">{description}</Typography>
    </Box>
  )
}

export default AboutUs
