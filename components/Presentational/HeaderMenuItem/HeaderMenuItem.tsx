import React from 'react'
import { MenuItem, Typography, ListItemIcon } from '@mui/material'
import CallMadeIcon from '@mui/icons-material/CallMade'

interface HeaderMenuItemProps {
  handleCloseNavMenu: (path: string) => void
  text: string
  path: string
}

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({
  handleCloseNavMenu,
  text,
  path,
}) => {
  return (
    <MenuItem
      onClick={() => handleCloseNavMenu(path)}
      sx={{
        height: 70,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        textAlign="center"
        sx={{
          fontWeight: 700,
          fontFamily: 'lato',
        }}
      >
        {text}
      </Typography>
      <ListItemIcon>
        <CallMadeIcon fontSize="small" />
      </ListItemIcon>
    </MenuItem>
  )
}

export default HeaderMenuItem
