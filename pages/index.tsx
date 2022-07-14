import { Box, Container, Typography, Stack, Grid, Divider } from '@mui/material'
import Image from 'next/image'
import { homeData, newsAndBlogs } from '../data/data'
import { useRouter } from 'next/router'
import Chip from '@mui/material/Chip'
import news1 from '../public/images/news1.png'
import news2 from '../public/images/news2.png'
import news3 from '../public/images/news3.png'
import news4 from '../public/images/news4.png'
import { aboutUsData, servicesData } from '../data/data'
import Head from 'next/head'
import Service from '../components/Presentational/Service/Service'
import ContactButton from '../components/Smart/ContactButton/ContactButton'
import AboutUs from '../components/Presentational/AboutUs/AboutUs'
import SectionHeader from '../components/Presentational/SectionHeader/SectionHeader'

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
                <ContactButton text={contactUsButtonText} />

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
        <Box p="5rem 1.5rem">
          <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
            {newsAndBlogs.header.slice(0, 6)}
            <span style={{color: '#63AC45'}}>{newsAndBlogs.header.slice(6, 11)}</span>
          </Typography>
          <Typography my={3}>
            {newsAndBlogs.heading}
          </Typography>


        
        
          <Stack
            spacing={2}
            direction={{ xs: 'column', md: 'row', lg: 'row'}}
          >
            <Stack spacing={2}>
              <Image src={news1} width={530} height={386} alt="service-image" />
              <Typography fontSize={20} fontWeight={600}>
                In-house versus agency UX design
              </Typography>
              <Typography fontSize={15}>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual. Text commonly used to demonstrate the visual
              </Typography>
              <Stack direction={'row'} spacing={4} alignItems="center">
                <Chip label="UX Design" size='small' />
                <Typography fontSize={14}>5 Mins Read</Typography>
              </Stack>
            </Stack>



            <Stack spacing={2}>
              <Stack direction={{ xs: 'column', md: 'row', lg: 'row'}} spacing={2} >
                <Image
                  src={news2}
                  width={380}
                  height={320}
                  alt="service-image"
                />
                <Stack spacing={1} justifyContent="center">
                  <Typography fontSize={17} fontWeight={600}>
                    In-house versus agency UX design
                  </Typography>
                  <Typography fontSize={12}>
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual. Text commonly used to demonstrate
                    the visual
                  </Typography>
                  <Stack direction={'row'} spacing={4} alignItems="center">
                    <Chip label="UX Design" size='small' />
                    <Typography fontSize={14}>5 Mins Read</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction={{ xs: 'column', md: 'row', lg: 'row'}} spacing={2}>
                <Image
                  src={news3}
                  width={380}
                  height={320}
                  alt="service-image"
                />
                <Stack spacing={2} justifyContent="center">
                  <Typography fontSize={18} fontWeight={600}>
                    In-house versus agency UX design
                  </Typography>
                  <Typography fontSize={12}>
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual. Text commonly used to demonstrate
                    the visual
                  </Typography>
                  <Stack direction={'row'} spacing={4} alignItems="center">
                    <Chip label="UX Design" size='small' />
                    <Typography fontSize={14}>5 Mins Read</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction={{ xs: 'column', md: 'row', lg: 'row'}} spacing={2}>
                <Image
                  src={news4}
                  width={380}
                  height={320}
                  alt="service-image"
                />
                <Stack spacing={2} justifyContent="center">
                  <Typography fontSize={16} fontWeight={600}>
                    In-house versus agency UX design
                  </Typography>
                  <Typography fontSize={12}>
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual. Text commonly used to demonstrate
                    the visual
                  </Typography>
                  <Stack direction={'row'} spacing={4} alignItems="center">
                    <Chip label="UX Design" size='small'/>
                    <Typography fontSize={14}>5 Mins Read</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
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
        </Container>
        </div>
    </>
  )
}
