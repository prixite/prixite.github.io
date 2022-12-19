import Head from 'next/head'
import Layout from '../components/Shared/layout/Layout'
import favicon from '../public/favicon.ico'
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../components/Shared/header/header.scss'
import '../styles/pagesStyles/home.scss'
import '../components/Shared/footer/footer.scss'
import '../styles/pagesStyles/contactUs.scss'
import '../styles/pagesStyles/careers.scss'
import '../styles/pagesStyles/clients.scss'
import '../styles/pagesStyles/portfolio.scss'
import '../styles/pagesStyles/jobs.scss'
import '../styles/pagesStyles/portfolio.scss'
import '../styles/pagesStyles/blog.scss'
import '../styles/pagesStyles/aboutUs.scss'
import '../styles/pagesStyles/services.scss'
import '../styles/pagesStyles/page.scss'
import '../components/Presentational/AboutUs/AboutUs.scss'
import '../components/Presentational/Title/Title.scss'
import '../components/Smart/Testimonials/Testimonials.scss'
import '../components/Shared/Subscribe/Subscribe.scss'
import '../components/Smart/ContactButton/ContactButton.scss'
import '../components/Presentational/TestimonialCard/TestimonialCard.scss'
import '../components/Presentational/Vision/Vision.scss'
import '../components/Presentational/Service/Service.scss'
import '../components/Smart/ContactForm/ContactForm.scss'
import '../components/Presentational/HomeContainer/HomeContainer.scss'
import '../components/Smart/HeaderMenu/HeaderMenu.scss'

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: 'Montserrat, Noto Sans, sans-serif',
  },
  palette: {
    primary: {
      main: '#63AC45',
    },
  },
})

theme = responsiveFontSizes(theme)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href={favicon.src} />
      </Head>{' '}
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
