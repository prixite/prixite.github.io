import { Stack, Typography, Chip } from '@mui/material'
import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'

interface BlogProps {
  image: StaticImageData
  title: string
  description: string
  chipLabel: string
  readTime: string
}

const Blog: React.FC<BlogProps> = ({
  image,
  title,
  description,
  chipLabel,
  readTime,
}) => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row', lg: 'row' }}
      spacing={2}
      className="blog-container"
    >
      <Image
        src={image}
        alt="service-image"
        className="blog-image"
        width={400}
        height={300}
      />
      <Stack spacing={1} justifyContent="center" className="blog-content">
        <Typography className="blog-title">{title}</Typography>
        <Typography className="blog-description">{description}</Typography>
        <Stack direction={'row'} spacing={2} alignItems="center">
          <Chip label={chipLabel} size="small" />
          <Typography className="read-time">{readTime}</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Blog
