import Image from 'next/image'
import Header from '../components/header/Header'
import homePageBg from '../public/images/homePageBg.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Grid,
  Button,
} from '@mui/material'
import { homeData, newsAndBlogs } from '../data/data'
import { useRouter } from 'next/router'
import Chip from '@mui/material/Chip'
import news1 from '../public/images/news1.png'
import news2 from '../public/images/news2.png'
import news3 from '../public/images/news3.png'
import news4 from '../public/images/news4.png'

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
    </div>
  )
}
