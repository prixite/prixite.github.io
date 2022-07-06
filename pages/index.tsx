import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Button,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import Image from 'next/image'
import Header from '../components/header/Header'
import { homeData, servicesData } from '../data/data'


const theme = createTheme({
  palette: {
    primary: {
      main: '#63AC45',
    },
  },
})

export default function Home() {
  const {
    title,
    header,
    headerImage,
    heading,
    homeAim,
    contactUsButtonText,
    videoButtonText,
    youtubeIcon
  } = homeData

  const {
    servicesHeading,
    servicesAim,
    services,
  } = servicesData

  return (
    <div className="home-page-container">
      <Header title={title}>
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
                <ThemeProvider theme={theme}>
                  <Box>
                    <Button
                      variant="contained"
                      endIcon={<SendOutlinedIcon />}
                      size="large"
                      className="contact-us-button"
                    >
                      {contactUsButtonText}
                    </Button>
                  </Box>
                </ThemeProvider>

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
      </Header>
      <Container maxWidth="xl">
        <Box pb='5rem' pt='5rem'>

          <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
            {servicesHeading.slice(0, 3)}
            <span style={{ color: 'var(--primary-green' }}>
              {servicesHeading.slice(3, 12)}
            </span>
          </Typography>
          <Typography mt={2} mb={6}>{servicesAim}</Typography>

          <Grid container spacing={{ xs: 2, md: 7 }} columnSpacing={3}>
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

                  <Typography sx={{ fontSize: 15, fontWeight: 600 }} mt="18px">
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
