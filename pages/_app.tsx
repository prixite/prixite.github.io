import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../components/header/header.scss'
import '../styles/pagesStyles/home.scss'
import '../components/footer/footer.scss'
import '../styles/pagesStyles/contactUs.scss'
import '../styles/pagesStyles/careers.scss'
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import favicon from '../public/favicon.ico'

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
