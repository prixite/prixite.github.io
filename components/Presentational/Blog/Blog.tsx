import { Stack, Typography, Chip, Box } from '@mui/material'
import { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface BlogInterface {
  id: number
  image: StaticImageData
  title: string
  description: string
  chipLabel: string
  readTime: string
  details: string[]
  likes: number
  comments: number
}
interface BlogProps {
  image: StaticImageData
  title: string
  description: string
  chipLabel: string
  readTime: string
  mainBlog?: number
  details?: string[]
  index?: number | undefined
  blog?: BlogInterface
}

const Blog: React.FC<BlogProps> = ({
  image,
  title,
  description,
  chipLabel,
  readTime,
  mainBlog,
  index,
  blog,
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

  useEffect(() => {
    setWindowSize(window.innerWidth)
  }, [])

  const router = useRouter()

  const navigateToRoute = (
    i: number | undefined,
    blogData: BlogInterface | undefined
  ) => {
    return (
      i !== undefined &&
      router.push(
        {
          pathname: `/blogs/${blogData?.id}`,
          query: {
            title: blogData?.title,
            description: blogData?.description,
            readTime: blogData?.readTime,
            details: blogData?.details,
            likes: blogData?.likes,
            comments: blogData?.comments,
          },
        },
        `/blogs/${blogData?.id}`
      )
    )
  }

  return (
    <Box className="blog" onClick={() => navigateToRoute(index, blog)}>
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
            priority
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
                width={900}
                height={carousel ? 250 : 600}
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
                className="blog-image"
                objectFit="cover"
              />
              <Stack spacing={1} className="blog-content">
                <Typography className="blog-title">{title}</Typography>
                <Typography className="blog-description">
                  {description}
                </Typography>
                <Stack direction={'row'} spacing={2} alignItems="center">
                  <Chip
                    label={chipLabel}
                    size="small"
                    sx={{ fontSize: 10, width: '50%' }}
                  />
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
