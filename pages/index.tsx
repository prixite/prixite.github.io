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
import { homeData, services, servicesHeading } from '../data/data'
import { useRouter } from 'next/router'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import youtubeIcon from '../public/images/youtubeIcon.png'

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
    descriptionHeading,
    paragraphs,
    aim,
  } = homeData

  const router = useRouter()
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
            <Box mb={4}>
              <Typography variant="h6" className="home-main-heading-1">
                {header}
              </Typography>

              <Typography variant="h4" className="home-main-heading-2">
                {heading.slice(0, 8)}
                <span className="solution-color">{heading.slice(8, 17)}</span>
                {heading.slice(17, 40)} 🚀
              </Typography>

              <Typography>{aim}</Typography>

              <Box display="flex" gap="25px" alignItems={'center'} mt={6}>
                <ThemeProvider theme={theme}>
                  <Box>
                    <Button
                      variant="contained"
                      endIcon={<SendOutlinedIcon />}
                      size="large"
                      className="contact-us-button"
                    >
                      Contact Us
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
                <Typography>Watch Video</Typography>
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
        <Box p="5rem 1.5rem">
          <Typography variant="h5" fontWeight="600">
            {descriptionHeading}
          </Typography>

          {paragraphs.map((item, index) => (
            <Typography margin="1.8rem 0" key={index}>
              {item.para}
            </Typography>
          ))}

          <Typography variant="h4" className="service-heading">
            {servicesHeading}
          </Typography>

          <Divider
            variant="middle"
            className="service-divider"
            sx={{ mx: 'auto', fill: 'true', width: '8%' }}
          />

          <Grid container spacing={{ xs: 2, md: 3 }} columnSpacing={10}>
            {services.map((item, index) => (
              <Grid item sm={12} md={6} key={index}>
                <Box marginBottom="10px">
                  <div className="service-image">
                    <Image
                      src={item.img}
                      objectFit="cover"
                      width={800}
                      height={500}
                      className="service-image"
                      onClick={() => router.push(item.path)}
                      alt="service-image"
                    />
                  </div>

                  <Typography variant="h6" fontWeight="600" mt="20px">
                    {item.title}
                  </Typography>

                  <Typography className="service-description">
                    {item.desc}
                  </Typography>

                  <Box textAlign="center" mt="2rem">
                    <Button
                      className="service-button"
                      endIcon={<ArrowRightAltIcon />}
                      onClick={() => router.push(item.path)}
                    >
                      {item.buttonText}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}
