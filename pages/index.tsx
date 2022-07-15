import { Box, Container, Typography, Stack, Grid, Divider } from '@mui/material'
import Image from 'next/image'
import { aboutUsData, homeData, servicesData } from '../data/data'
import Head from 'next/head'
import Service from '../components/Presentational/Service/Service'
import ContactButton from '../components/Smart/ContactButton/ContactButton'
import AboutUs from '../components/Presentational/AboutUs/AboutUs'
import SectionHeader from '../components/Presentational/SectionHeader/SectionHeader'
import Subscribe from '../components/Shared/Subscribe/Subscribe'

export default function Home() {
  const {
    title,
    header,
    headerImage,
    heading,
    homeAim,
    contactUsButtonText,
    videoButtonText,
    youtubeIcon,
  } = homeData

  const { servicesHeading, servicesAim, services } = servicesData
  const { aboutUsHeader, aboutUsHeading, aboutUsDescription } = aboutUsData

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-page-container">
        <Container maxWidth="xl">
          <Stack
            pt={{ xs: '60px', lg: '60px' }}
            pb={{ xs: '100px', lg: '60px' }}
            direction={{ xs: 'column', md: 'row' }}
            spacing={8}
            alignItems={'center'}
          >
            <Box>
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
                <ContactButton text={contactUsButtonText}/>

                <Box className="youtube-icon">
                  <Image
                    unoptimized
                    priority
                    src={youtubeIcon}
                    alt="service-image"
                  />
                </Box>
                <Typography>{videoButtonText}</Typography>
              </Box>
            </Box>

            <Box>
              <Image
                unoptimized
                priority
                src={headerImage}
                alt="service-image"
              />
            </Box>
          </Stack>
        </Container>
        <Container maxWidth="xl">
          <Box pb="5rem" pt="5rem">
            <SectionHeader heading={servicesHeading} />
            <Typography mt={2} mb={6}>
              {servicesAim}
            </Typography>

            <Grid container spacing={{ xs: 2, md: 7 }} columnSpacing={3}>
              {services.map((item, index) => (
                <Service
                  key={index}
                  img={item.img}
                  title={item.title}
                  description={item.desc}
                />
              ))}
            </Grid>
          </Box>

          <AboutUs
            header={aboutUsHeader}
            heading={aboutUsHeading}
            description={aboutUsDescription}
          />

          <Subscribe />
        </Container>
      </div>
    </>
  )
}
