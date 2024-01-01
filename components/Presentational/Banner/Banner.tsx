import React from 'react'
import { Typography, Box, Grid, Paper } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import circle from '../../../public/images/circles.png'

interface Banner {
  header: string
  heading: string
  images: {
    img: StaticImageData
    className: string
  }[]
  partnersCard: {
    title: string
    description: string
    img: StaticImageData
  }[]
}

const Banner: React.FC<Banner> = ({
  header,
  heading,
  images,
  partnersCard,
}) => {
  return (
    <>
      <div>
        <Box p="4rem 3rem 1rem" className="banner">
          {images.map((image, index) => (
            <Box className={`${image.className} img`} key={index}>
              <Image src={image.img} alt="aboutus" layout="responsive" />
            </Box>
          ))}
          <Typography fontSize={30} fontWeight={600}>
            {header.slice(0, 11)}
            <span style={{ color: '#875A7B' }}>{header.slice(11, 13)}</span>
            <span style={{ color: '#888888' }}>{header.slice(13, 16)}</span>
            {header.slice(16)}
          </Typography>
          <div style={{ width: '70%' }}>
            <Typography fontWeight={500}>
              <Image
                src={circle}
                alt="circle"
                layout="responsive"
                className="img-circle"
              />
              <span style={{ fontWeight: 'bold' }}>{heading.slice(0, 7)}</span>
              {heading.slice(7, 39)}
              <span style={{ color: '#875A7B' }}>{heading.slice(38, 40)}</span>
              <span style={{ color: '#888888' }}>{heading.slice(40, 44)}</span>
              {heading.slice(44)}
            </Typography>
          </div>
          <Grid container spacing={2} style={{ width: '70%' }}>
            {partnersCard.map((card, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={3}
                  style={{
                    padding: '20px 0',
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    margin: '0 auto',
                  }}
                >
                  <Image src={card.img} alt={`form-image-${index + 1}`} />
                  <Typography sx={{ fontSize: 15, fontWeight: 600 }} mt="18px">
                    {card.title}
                  </Typography>
                  <Typography className="service-description">
                    {card.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default Banner
