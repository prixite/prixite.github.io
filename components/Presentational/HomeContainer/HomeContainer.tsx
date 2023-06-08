import { Stack, Box, Typography } from '@mui/material'
import React from 'react'
import ContactButton from '../../Smart/ContactButton/ContactButton'
import Image from 'next/image'
import { homeData } from '../../../data/data'

const HomeContainer = () => {
  const {
    header,
    headerImage,
    heading,
    homeAim,
    contactUsButtonText,
    // eslint-disable-next-line
    videoButtonText,
    // eslint-disable-next-line
    youtubeIcon,
  } = homeData
  return (
    <Stack
      pt={{ xs: '20px', md: '60px', lg: '30px' }}
      pb={{ xs: '100px', lg: '60px' }}
      direction={{ xs: 'column-reverse', md: 'row' }}
      spacing={5}
      alignItems={'center'}
    >
      <Box className="home-container">
        <Typography variant="h6" className="home-main-heading-1">
          {header}
        </Typography>

        <Typography variant="h4" className="home-main-heading-2">
          {heading.slice(0, 8)}
          <span className="solution-color">{heading.slice(8, 17)}</span>
          {heading.slice(17, 40)} 🚀
        </Typography>

        <Typography>{homeAim}</Typography>

        <Box display="flex" gap="25px" alignItems={'center'} mt={6}>
          <ContactButton text={contactUsButtonText} />

          {/* <Box className="youtube-icon">
            <Image unoptimized priority src={youtubeIcon} alt="service-image" />
          </Box>
          <Typography>{videoButtonText}</Typography> */}
        </Box>
      </Box>

      <Box>
        <Image src={headerImage} alt="service-image" layout="responsive" />
      </Box>
    </Stack>
  )
}

export default HomeContainer
