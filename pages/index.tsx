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
import { homeData, services, servicesHeading, aim } from '../data/data'
import { useRouter } from 'next/router'
import serviceBgImage from '../public/images/serviceBackground.png'

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
          <Typography variant="h5" fontWeight="600">
            {descriptionHeading}
          </Typography>

          {paragraphs.map((item, index) => (
            <Typography margin="1.8rem 0" key={index}>
              {item.para}
            </Typography>
          ))}

          <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
            {servicesHeading.slice(0, 3)}
            <span style={{ color: 'var(--primary-green' }}>
              {servicesHeading.slice(3, 12)}
            </span>
          </Typography>
          <Typography mt={2} mb={7}>{aim}</Typography>

          <Grid container spacing={{ xs: 2, md: 3 }} columnSpacing={2}>
            {services.map((item, index) => (
              <Grid item sm={12} md={3} key={index}>
                <Box marginBottom="10px">
                  <Box className="service-image-container">
                    <Image
                      unoptimized
                      priority
                      src={item.img}
                      alt="service-image"
                    />
                  </Box>

                  <Typography sx={{ fontSize: 15, fontWeight: 600 }} mt="20px">
                    {item.title}
                  </Typography>

                  <Typography className="service-description">
                    {item.desc}
                  </Typography>

                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}
