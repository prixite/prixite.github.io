import React from 'react'
import { AppBar, Box, Container, Toolbar } from '@mui/material'
// eslint-disable-next-line
import Image from 'next/image'
// eslint-disable-next-line
import { NextRouter, useRouter } from 'next/router'
// eslint-disable-next-line
import logoImg from '../../../public/images/prixite-logo.png'
// eslint-disable-next-line
import { siteName } from '../../../data/data'
import HeaderMenu from '../../Smart/HeaderMenu/HeaderMenu'
import Title from '../../Presentational/Title/Title'

const Header: React.FC = () => {
  return (
    <>
      <Box className="header-container">
        <AppBar position="static" className="header-bar">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Title />
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
