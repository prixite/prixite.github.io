import Image from 'next/image'
import Header from '../components/header/Header'
import homePageBg from '../public/images/homePageBg.png'
import aboutUsImage from '../public/images/about-us.png'
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Grid,
  Button,
} from '@mui/material'
import { homeData, services, servicesHeading } from '../data/data'
import { useRouter } from 'next/router'

export default function Home() {
  const {
    title,
    header,
    headerImage,
    heading,
    descriptionHeading,
    paragraphs,
  } = homeData

  const router = useRouter()
  return (
    <div className="home-page-container">
      <Header bgImg={homePageBg} title={title}>
        <Container maxWidth="xl">
          <Stack
            pt={{ xs: '60px', lg: '110px' }}
            pb={{ xs: '100px', lg: '80px' }}
            direction={{ xs: 'column', md: 'row' }}
            spacing={8}
          >
            <Box>
              <Typography variant="h6" className="home-main-heading-1">
                {header}
              </Typography>

              <Divider
                textAlign="left"
                className="divider"
                sx={{ width: '17%' }}
              />

              <Typography variant="h4" className="home-main-heading-2">
                {heading}
              </Typography>
            </Box>

            <Box textAlign="center">
              <Image
                unoptimized
                priority
                src={headerImage}
                width={400}
                height={300}
                alt="service-image"
              />
            </Box>
          </Stack>
        </Container>
      </Header>
      <Container maxWidth="xl">
        <Box p="5rem 1.5rem" className="about-us">

          <Image src={aboutUsImage} alt='about-us-image' />
          {/* <Typography fontSize={30} fontWeight={600}>
            About <span style={{ color: '#63AC45' }}>Us</span>
          </Typography>

          <Typography fontWeight={500}>Fastest Growing IT Company</Typography>

          <Divider
            sx={{
              backgroundColor: '#63AC45',
              height: 2,
              width: 102,
              mt: 3,
              mb: 3,
              borderRadius: 12,
            }}
          /> */}
        </Box>
      </Container>
    </div>
  )
}
