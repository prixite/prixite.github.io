import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

interface ServiceProps {
  img: StaticImageData
  title: string
  description: string
  path: string
}
const Service: React.FC<ServiceProps> = ({ img, title, description, path }) => {
  const router = useRouter()
  return (
    <Grid item sm={12} md={3} className="service">
      <Box
        marginBottom="10px"
        onClick={() => router.push(path)}
        sx={{ cursor: 'pointer' }}
      >
        <Box className="service-image-container">
          <Image unoptimized priority src={img} alt="service-image" />
        </Box>

        <Typography sx={{ fontSize: 15, fontWeight: 600 }} mt="18px">
          {title}
        </Typography>

        <Typography className="service-description">{description}</Typography>
      </Box>
    </Grid>
  )
}

export default Service
