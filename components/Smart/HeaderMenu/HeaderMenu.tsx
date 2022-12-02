import React from 'react'
import { Box, IconButton, Menu, Divider } from '@mui/material'
import { NextRouter, useRouter } from 'next/router'
import Image from 'next/image'
import { siteName, pages } from '../../../data/data'
import hamburgerClose from '../../../public/images/hamburgerClose.png'
import hamburgerOpen from '../../../public/images/hamburgerOpen.png'
import HeaderMenuItem from '../../Presentational/HeaderMenuItem/HeaderMenuItem'

const HeaderMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [hamburgerIcon, setHamburgerIcon] = React.useState<boolean>()

  const router: NextRouter = useRouter()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget)
    setHamburgerIcon(true)
  }

  const handleCloseNavMenu = (path: string) => {
    if (path !== router.pathname) {
      router.push(path)
    }
    setHamburgerIcon(false)
    setAnchorElNav(null)
  }
  return (
    <Box className="header-menu-container">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <Box className="menu-icon">
          {hamburgerIcon ? (
            <Image
              src={hamburgerClose.src}
              alt={siteName}
              width={40}
              height={40}
            />
          ) : (
            <Image
              src={hamburgerOpen.src}
              alt={siteName}
              width={40}
              height={40}
            />
          )}
        </Box>
      </IconButton>
      <Menu
        PaperProps={{
          style: {
            width: 1160,
            boxShadow: 'none',
          },
        }}
        className="header-menu"
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElNav)}
        onClose={() => {
          setAnchorElNav(null)
          setHamburgerIcon(false)
        }}
      >
        <Divider />
        {pages.map((page, index) => (
          <HeaderMenuItem
            key={index}
            handleCloseNavMenu={handleCloseNavMenu}
            text={page.text}
            path={page.path}
          />
        ))}
      </Menu>
    </Box>
  )
}

export default HeaderMenu
