import { Box, Container, Typography, Grid, Stack, Button } from '@mui/material'
// eslint-disable-next-line
import Image from 'next/image'
import { homeData, newsAndBlogs, productsList } from '../data/data'
// eslint-disable-next-line
//import Chip from '@mui/material/Chip'
import { aboutUsCardData, servicesData, bannerCardData } from '../data/data'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Service from '../components/Presentational/Service/Service'
import AboutUs from '../components/Presentational/AboutUs/AboutUs'
import SectionHeader from '../components/Presentational/SectionHeader/SectionHeader'
// eslint-disable-next-line
import Testimonials from '../components/Smart/Testimonials/Testimonials'
// eslint-disable-next-line
import Subscribe from '../components/Shared/Subscribe/Subscribe'
// eslint-disable-next-line
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import HomeContainer from '../components/Presentational/HomeContainer/HomeContainer'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { BlogPost, MDContent, Product } from '../types/interfaces'
import { sortByDate, sortByIndex } from '../utils/sort'
import { getMarkdownAllData, getMarkDownSingleData } from '../utils/markdown'
import {
  BLOGS_PATH,
  SERVICES_PATH,
  TESTIMONIALS_PATH,
  ABOUT_US_PATH,
  PRODUCT_PATH,
} from '../utils/constants'
import { FEATURES } from '../data/features'
import Banner from '../components/Presentational/Banner/Banner'

export default function Home({
  blogs,
  services,
  testimonials,
  aboutUs,
  product,
}: MDContent) {
  const { title } = homeData
  const { servicesHeading, servicesAim } = servicesData
  const { images } = aboutUsCardData
  const {
    // eslint-disable-next-line
    header: newsHeader,
    // eslint-disable-next-line
    heading: newsHeading,
    // eslint-disable-next-line
    viewButtonText,
  } = newsAndBlogs
  // eslint-disable-next-line
  const router = useRouter()

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
          <Banner
            header={bannerCardData.aboutUsHeader}
            heading={bannerCardData.aboutUsDescription}
            images={bannerCardData.images}
            partnersCard={bannerCardData.partnersCard}
          />
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
              {services?.map((item) => (
                <Service
                  key={item.frontmatter.index}
                  img={item.frontmatter.logo_image}
                  title={item.frontmatter.header}
                  description={item.frontmatter.description}
                  path={`/services/${item.slug}`}
                />
              ))}
            </Grid>

            <Slider className="services-carousel" arrows={false}>
              {services?.map((item) => (
                <Service
                  key={item.frontmatter.index}
                  img={item.frontmatter.logo_image}
                  title={item.frontmatter.header}
                  description={item.frontmatter.description}
                  path={`/services/${item.slug}`}
                />
              ))}
            </Slider>
          </Box>
        </Container>

        <Container maxWidth="xl">
          <AboutUs
            header={aboutUs.frontmatter.title}
            heading={aboutUs.frontmatter.header}
            description={aboutUs.frontmatter.description}
            images={images}
          />
        </Container>

        {FEATURES.blogs && (
          <Container maxWidth="xl">
            <Box pb="5rem" pt="5rem">
              <Stack
                direction={'row'}
                justifyContent="space-between"
                className="blogs-header-section"
              >
                <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
                  {newsHeader.slice(0, 6)}
                  <span style={{ color: '#63AC45' }}>
                    {newsHeader.slice(6, 11)}
                  </span>
                </Typography>
                <Link className="view-all-btn" href="/blogs">
                  {viewButtonText}
                  <ArrowForwardOutlinedIcon className="view-link-icon" />
                </Link>
              </Stack>

              <Typography my={3}>{newsHeading}</Typography>

              <Container maxWidth="xl" className="posts" disableGutters>
                {blogs?.slice(0, 2).map((blog: BlogPost, index: number) => (
                  <div className="card" key={index}>
                    <Link href={`/blog/${blog.slug}`}>
                      <Image
                        className="post-img"
                        src={blog?.frontmatter?.cover_image}
                        alt="image"
                        width={500}
                        height={500}
                        layout="responsive"
                      />
                    </Link>

                    <div className="post-date">
                      Posted on {blog.frontmatter.date}
                    </div>

                    <Link href={`/blog/${blog.slug}`}>
                      <h3 className="blog-title">{blog.frontmatter.title}</h3>
                    </Link>

                    <p>{blog.frontmatter.excerpt}</p>

                    <Link href={`/blog/${blog.slug}`} className="read-button">
                      Read More
                    </Link>
                  </div>
                ))}
              </Container>
            </Box>
          </Container>
        )}

        {FEATURES.product && (
          <Container maxWidth="xl">
            <Box pb="5rem" pt="5rem">
              <Stack
                direction={'row'}
                justifyContent="space-between"
                className="blogs-header-section"
              >
                <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
                  {productsList.header.slice(0, 4)}
                  <span style={{ color: 'var(--primary-green)' }}>
                    {productsList.header.slice(4, 12)}
                  </span>
                </Typography>
                <Button
                  className="view-all-btn"
                  variant="outlined"
                  endIcon={<ArrowForwardOutlinedIcon />}
                  onClick={() => router.push('/product')}
                >
                  {viewButtonText}
                </Button>
              </Stack>

              <Typography my={3}>{productsList.heading}</Typography>

              <Container maxWidth="xl" className="posts" disableGutters>
                {product?.slice(0, 2).map((product: Product, index: number) => (
                  <div className="card" key={index}>
                    <h1>{product.frontmatter.header}</h1>

                    <p>{product.frontmatter.description}</p>

                    <Link href={`/product/${product.slug}`}>
                      <Button variant="contained" className="read-button">
                        Read More
                      </Button>
                    </Link>
                  </div>
                ))}
              </Container>
            </Box>
          </Container>
        )}

        {FEATURES.testimonials && <Testimonials testimonials={testimonials} />}

        {/* {FEATURES.subscribe && (
          <Container maxWidth="xl" sx={{ marginTop: 10 }}>
            <Subscribe />
          </Container>
        )} */}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const blogFiles = fs.readdirSync(path.join(BLOGS_PATH))
  const serviceFiles = fs.readdirSync(path.join(SERVICES_PATH))
  const testimonialFiles = fs.readdirSync(path.join(TESTIMONIALS_PATH))
  const productFiles = fs.readdirSync(path.join(PRODUCT_PATH))

  const blogs = getMarkdownAllData(blogFiles, BLOGS_PATH, fs)
  const services = getMarkdownAllData(serviceFiles, SERVICES_PATH, fs)
  const testimonials = getMarkdownAllData(
    testimonialFiles,
    TESTIMONIALS_PATH,
    fs
  )
  const aboutUs = getMarkDownSingleData(fs, ABOUT_US_PATH)
  const product = getMarkdownAllData(productFiles, PRODUCT_PATH, fs)

  return {
    props: {
      blogs: blogs.sort(sortByDate),
      services: services.sort(sortByIndex),
      testimonials: testimonials.sort(sortByDate),
      aboutUs: aboutUs.props,
      product: product.sort(sortByIndex),
    },
  }
}
