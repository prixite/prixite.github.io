import { Box, Container, Typography, Grid, Button, Stack } from '@mui/material'
// eslint-disable-next-line
import Image from 'next/image'
import { homeData, newsAndBlogs } from '../data/data'
// eslint-disable-next-line
import Chip from '@mui/material/Chip'
import { aboutUsCardData, servicesData } from '../data/data'
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
import Blog from '../components/Presentational/Blog/Blog'
// eslint-disable-next-line
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import HomeContainer from '../components/Presentational/HomeContainer/HomeContainer'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { BlogPost, Posts } from '../types/blog'

export default function Home({ posts }: Posts) {
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

        <Container maxWidth="xl">
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
                onClick={() => router.push('/blogs')}
              >
                {viewButtonText}
              </Button>
            </Stack>

            <Typography my={3}>{newsHeading}</Typography>

            <Container maxWidth="xl" className="posts" disableGutters>
              {posts?.slice(0, 2).map((post: BlogPost, index: number) => (
                <div className="card" key={index}>
                  <Image
                    className="post-img"
                    src={post?.frontmatter?.cover_image}
                    alt="image"
                    width={500}
                    height={500}
                    layout="responsive"
                  />

                  <div className="post-date">
                    Posted on {post.frontmatter.date}
                  </div>

                  <h3>{post.frontmatter.title}</h3>

                  <p>{post.frontmatter.excerpt}</p>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="contained" className="read-button">
                      Read More
                    </Button>
                  </Link>
                </div>
              ))}
            </Container>
          </Box>
        </Container>

        {/* <Testimonials /> */}

        {/* <Container maxWidth="xl" sx={{ marginTop: 10 }}>
          <Subscribe />
        </Container> */}
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('data/blogs'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('data/blogs', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts,
    },
  }
}
