import { Box, Typography, Grid, Divider } from '@mui/material'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface VisionProps {
  aboutUsVisionImg: StaticImageData
  visionAim: string
  visionData: {
    value: string
    text: string
  }[]
  visionTitle: string
}

const Vision = ({
  aboutUsVisionImg,
  visionAim,
  visionData,
  visionTitle,
}: VisionProps) => {
  return (
    <Box className="vision-container">
      <Box>
        <Image
          src={aboutUsVisionImg}
          width={586}
          height={525}
          objectFit="cover"
          alt="vision"
        />
      </Box>
      <Box className="vision-content">
        <Typography fontSize={30} fontWeight={600}>
          {visionTitle.slice(0, 4)}
          <span style={{ color: 'var(--primary-green)' }}>
            {visionTitle.slice(4, 10)}
          </span>
        </Typography>
        <Typography>{visionAim}</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {visionData.map((vision, index) => {
            return (
              <Grid item xs={6} key={index}>
                <Typography className="vision-value">{vision.value}</Typography>
                <Divider className="vision-value-divider" />
                <Typography className="vision-value-text">
                  {vision.text}
                </Typography>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default Vision
