import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
  MenuItem,
  Button,
  ListItemIcon,
} from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import logoImg from '../../public/images/prixite-logo.png'
import menuIcon from '../../public/images/menu-icon.png'
import MenuIcon from '@mui/icons-material/Menu'
import { NextRouter, useRouter } from 'next/router'
import { pages, siteName } from '../../data/data'
import Link from 'next/link'
import Head from 'next/head'
import CallMadeIcon from '@mui/icons-material/CallMade'

interface HeaderProps {
  children: React.ReactNode
  bgImg?: StaticImageData
  title: string
}

const Header: React.FC<HeaderProps> = ({ children, bgImg, title }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const router: NextRouter = useRouter()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (path: string) => {
    if (path !== router.pathname) {
      router.push(path)
    }

    setAnchorElNav(null)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className="header-container">
        <AppBar position="static" className="header-bar">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  mr: 1,
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={logoImg}
                  alt={siteName}
                  onClick={() => router.push('/')}
                />
              </Box>
              <Typography
                className="title-heading"
                onClick={() => router.push('/')}
              >
                {siteName}
                <span style={{ color: '#63AC45' }}>.</span>
              </Typography>
              <Box sx={{ flexGrow: 1 }}></Box>

              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <Box className="menu-icon">
                    <Box className="menu-icon-first-line"></Box>
                    <Box className="menu-icon-second-line"></Box>
                    <Box className="menu-icon-third-line"></Box>
                  </Box>
                </IconButton>
                <Menu
                  PaperProps={{
                    style: {
                      width: 300,
                    },
                  }}
                  className="header-menu"
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={() => setAnchorElNav(null)}
                >
                  {pages.map((page, index) => (
                    <MenuItem
                      className="header-menu-items"
                      key={index}
                      onClick={() => handleCloseNavMenu(page.path)}
                      sx={{
                        height: 70,
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography
                        textAlign="center"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {page.text}
                      </Typography>
                      <ListItemIcon>
                        <CallMadeIcon fontSize="small" />
                      </ListItemIcon>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {children}
      </Box>
    </>
  )
}

export default Header
