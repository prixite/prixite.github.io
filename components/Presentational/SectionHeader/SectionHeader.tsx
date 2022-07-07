import React from 'react'
import { Typography } from '@mui/material'

interface SectionHeaderProps {
  heading: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ heading }) => {
  return (
    <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
      {heading.slice(0, 3)}
      <span style={{ color: 'var(--primary-green' }}>
        {heading.slice(3, 12)}
      </span>
    </Typography>
  )
}

export default SectionHeader
