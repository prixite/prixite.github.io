import { Box, Container, Typography, Stack, Grid, Button } from '@mui/material'
import Image from 'next/image'
import { homeData, newsAndBlogs } from '../data/data'
import Chip from '@mui/material/Chip'
import { aboutUsData, servicesData } from '../data/data'
import Head from 'next/head'
import Service from '../components/Presentational/Service/Service'
import AboutUs from '../components/Presentational/AboutUs/AboutUs'
import SectionHeader from '../components/Presentational/SectionHeader/SectionHeader'
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import Blog from '../components/Presentational/Blog/Blog'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import HomeContainer from '../components/Presentational/HomeContainer/HomeContainer'

export default function Home() {
  const { title } = homeData
  const { servicesHeading, servicesAim, services } = servicesData
  const { aboutUsHeader, aboutUsHeading, aboutUsDescription } = aboutUsData
  const {
    header: newsHeader,
    heading: newsHeading,
    mainBlog,
    blogs,
    viewButtonText,
  } = newsAndBlogs

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-page-container">
        <Container maxWidth="xl">
          <HomeContainer />
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

        <Container maxWidth="xl">
          <Box pb="5rem" pt="5rem">
            <Stack direction={'row'} justifyContent="space-between">
              <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
                {newsHeader.slice(0, 6)}
                <span style={{ color: '#63AC45' }}>
                  {newsHeader.slice(6, 11)}
                </span>
              </Typography>
              <Button variant="outlined" endIcon={<ArrowForwardOutlinedIcon />}>
                {viewButtonText}
              </Button>
            </Stack>

            <Typography my={3}>{newsHeading}</Typography>

            <Stack
              spacing={2}
              direction={{ xs: 'column', md: 'row', lg: 'row' }}
            >
              <Stack spacing={2}>
                <Image
                  src={mainBlog.image}
                  objectFit="cover"
                  alt="service-image"
                  style={{ borderRadius: 10 }}
                />
                <Typography fontSize={20} fontWeight={600}>
                  {mainBlog.title}
                </Typography>
                <Typography fontSize={15}>{mainBlog.description}</Typography>
                <Stack direction={'row'} spacing={4} alignItems="center">
                  <Chip label={mainBlog.chipLabel} size="small" />
                  <Typography fontSize={14}>{mainBlog.readTime}</Typography>
                </Stack>
              </Stack>

              <Stack spacing={2}>
                {blogs.map((blog, index) => {
                  return (
                    <Blog
                      key={index}
                      image={blog.image}
                      title={blog.title}
                      description={blog.description}
                      chipLabel={blog.chipLabel}
                      readTime={blog.readTime}
                    />
                  )
                })}
              </Stack>
            </Stack>
          </Box>
          <Subscribe />
        </Container>
      </div>
    </>
  )
}
