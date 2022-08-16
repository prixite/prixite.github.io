import { Stack, Typography, Chip, Box } from '@mui/material'
import { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface BlogProps {
  image: StaticImageData
  title: string
  description: string
  chipLabel: string
  readTime: string
  mainBlog: number
}

const Blog: React.FC<BlogProps> = ({
  image,
  title,
  description,
  chipLabel,
  readTime,
  mainBlog,
}) => {
  const [windowSize, setWindowSize] = useState<number>()
  const [carousel, setCarousel] = useState(false)

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (typeof windowSize !== 'undefined') {
      if (windowSize <= 600) {
        setCarousel(true)
      } else {
        setCarousel(false)
      }
    }
  }, [windowSize])
  return (
    <Box className="blog">
      {carousel ? (
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
            objectFit="cover"
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
      ) : (
        <>
          {mainBlog === 0 ? (
            <Stack
              spacing={2}
              className="blog-container"
              direction={{
                xs: 'column',
                md: 'column',
                lg: 'column',
                xl: 'column',
              }}
            >
              <Image
                src={image}
                alt="service-image"
                className="blog-image"
                objectFit="cover"
                height={carousel ? 250 : ''}
              />

              <Stack
                spacing={1}
                justifyContent="center"
                className="blog-content"
              >
                <Typography className="blog-title">{title}</Typography>
                <Typography className="blog-description">
                  {description}
                </Typography>
                <Stack direction={'row'} spacing={2} alignItems="center">
                  <Chip label={chipLabel} size="small" />
                  <Typography className="read-time">{readTime}</Typography>
                </Stack>
              </Stack>
            </Stack>
          ) : (
            <Stack
              spacing={2}
              className="blog-container"
              direction={{ xs: 'column', md: 'row', lg: 'row' }}
            >
              <Image
                src={image}
                alt="service-image"
                width={300}
                height={250}
                objectFit="cover"
                className="blog-image"
              />
              <Stack
                spacing={1}
                justifyContent="center"
                className="blog-content"
              >
                <Typography className="blog-title">{title}</Typography>
                <Typography className="blog-description">
                  {description}
                </Typography>
                <Stack direction={'row'} spacing={2} alignItems="center">
                  <Chip label={chipLabel} size="small" />
                  <Typography className="read-time">{readTime}</Typography>
                </Stack>
              </Stack>
            </Stack>
          )}
        </>
      )}
    </Box>
  )
}

export default Blog
