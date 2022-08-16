import { Box, Container, Typography, Grid } from '@mui/material'
// eslint-disable-next-line
import Image from 'next/image'
import { homeData, newsAndBlogs } from '../data/data'
// eslint-disable-next-line
import Chip from '@mui/material/Chip'
import { aboutUsCardData, servicesData } from '../data/data'
import Head from 'next/head'
import Service from '../components/Presentational/Service/Service'
import AboutUs from '../components/Presentational/AboutUs/AboutUs'
import SectionHeader from '../components/Presentational/SectionHeader/SectionHeader'
// eslint-disable-next-line
import Testimonials from '../components/Smart/Testimonials/Testimonials'
// eslint-disable-next-line
import Subscribe from '../components/Shared/Subscribe/Subscribe'
// eslint-disable-next-line
import Blog from '../components/Presentational/Blog/Blog'
// eslint-disable-next-line
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import HomeContainer from '../components/Presentational/HomeContainer/HomeContainer'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
  const { title } = homeData
  const { servicesHeading, servicesAim, services } = servicesData
  const { aboutUsHeader, aboutUsHeading, aboutUsDescription, images } =
    aboutUsCardData
  const {
    // eslint-disable-next-line
    header: newsHeader,
    // eslint-disable-next-line
    heading: newsHeading,
    // eslint-disable-next-line
    mainBlog,
    // eslint-disable-next-line
    blogs,
    // eslint-disable-next-line
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
          <Box pb="5rem" pt={{ xs: '0rem', md: '5rem' }}>
            <SectionHeader heading={servicesHeading} />
            <Typography mt={2} mb={6}>
              {servicesAim}
            </Typography>

            <Grid
              container
              spacing={{ xs: 2, md: 7 }}
              columnSpacing={3}
              className="services-grid"
            >
              {services.map((item, index) => (
                <Service
                  key={index}
                  img={item.img}
                  title={item.title}
                  description={item.desc}
                  path={item.path}
                />
              ))}
            </Grid>

            <Slider className="services-carousel" arrows={false}>
              {services.map((item, index) => (
                <Service
                  key={index}
                  img={item.img}
                  title={item.title}
                  description={item.desc}
                  path={item.path}
                />
              ))}
            </Slider>
          </Box>
        </Container>

        <Container maxWidth="xl">
          <AboutUs
            header={aboutUsHeader}
            heading={aboutUsHeading}
            description={aboutUsDescription}
            images={images}
          />
        </Container>

        {/* <Container maxWidth="xl">
          <Box pb="5rem" pt="5rem">
            <Stack direction={'row'} justifyContent="space-between">
              <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
                {newsHeader.slice(0, 6)}
                <span style={{ color: '#63AC45' }}>
                  {newsHeader.slice(6, 11)}
                </span>
              </Typography>
              <Button
                className="view-all-btn"
                variant="outlined"
                endIcon={<ArrowForwardOutlinedIcon />}
              >
                {viewButtonText}
              </Button>
            </Stack>

            <Typography my={3}>{newsHeading}</Typography>

            <Stack
              spacing={2}
              direction={{ xs: 'column', md: 'row', lg: 'row' }}
              className="blogs-grid"
            >
              <Stack spacing={2}>
                {blogs.map((blog, index) => {
                  if (index === 0) {
                    return (
                      <Blog
                        key={index}
                        image={blog.image}
                        title={blog.title}
                        description={blog.description}
                        chipLabel={blog.chipLabel}
                        readTime={blog.readTime}
                        mainBlog={index}
                      />
                    )
                  }
                })}
              </Stack>

              <Stack spacing={2}>
                {blogs.map((blog, index) => {
                  if (index !== 0) {
                    return (
                      <Blog
                        key={index}
                        image={blog.image}
                        title={blog.title}
                        description={blog.description}
                        chipLabel={blog.chipLabel}
                        readTime={blog.readTime}
                        mainBlog={index}
                      />
                    )
                  }
                })}
              </Stack>
            </Stack>

            <Slider className="blogs-carousel" arrows={false}>
              {blogs.map((blog, index) => {
                return (
                  <Blog
                    key={index}
                    image={blog.image}
                    title={blog.title}
                    description={blog.description}
                    chipLabel={blog.chipLabel}
                    readTime={blog.readTime}
                    mainBlog={index}
                  />
                )
              })}
            </Slider>
          </Box>
        </Container> */}

        {/* <Testimonials /> */}

        {/* <Container maxWidth="xl" sx={{ marginTop: 10 }}>
          <Subscribe />
        </Container> */}
      </div>
    </>
  )
}
