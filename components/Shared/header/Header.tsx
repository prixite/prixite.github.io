import React from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import { NextRouter, useRouter } from 'next/router'
import logoImg from '../../../public/images/prixite-logo.png'
import { siteName } from '../../../data/data'
import HeaderMenu from '../../Smart/HeaderMenu/HeaderMenu'

const Header: React.FC = () => {
  const router: NextRouter = useRouter()
  return (
    <>
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
              <HeaderMenu />
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
