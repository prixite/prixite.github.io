import React from 'react'
import { Box, Typography, Container, Stack } from '@mui/material'
import Image from 'next/image'

interface BlogCardProps {
  image: string
  name: string
  description: string
}

const BlogCard: React.FC<BlogCardProps> = ({ image, name, description }) => {
  return (
    <Container maxWidth="md" className="blog-card">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        className="blog-card-items"
      >
        <Box>
          <Image
            src={image}
            width={150}
            height={150}
            objectFit="cover"
            alt="blog"
          />
        </Box>
        <Box className="blog-card-content">
          <Box>
            <Typography variant="h6">{name}</Typography>
          </Box>

          <Box>
            <Typography>{description}</Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default BlogCard
