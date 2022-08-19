import { Box, Typography, Container, Stack } from '@mui/material'
import { NextRouter, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { joinUsLinkIcons } from '../../data/data'
import Image from 'next/image'
import { newsAndBlogs } from '../../data/data'

interface BlogDetailInterface {
  title?: string
  readTime?: string
  details?: string[]
  likes?: number
  comments?: number
}

const BlogDetails = () => {
  const [blogData, setBlogData] = useState<BlogDetailInterface>({})
  const router: NextRouter = useRouter()

  useEffect(() => {
    function getBlogDetails() {
      newsAndBlogs.blogs.forEach((blog) => {
        return Number(router.query.blogId) === blog.id && setBlogData(blog)
      })
    }
    getBlogDetails()
  }, [router.query])

  return (
    <Container maxWidth="xl" className="page-header">
      <Box className="header">
        <Box className="heading">
          <Typography className="heading-text" sx={{ width: '95%' }}>
            {blogData.title}
          </Typography>
        </Box>
        <Stack direction={'row'} gap={3} alignItems="center">
          <Typography fontSize={12}>{new Date().toDateString()}</Typography>
          <Typography fontSize={12}>{blogData.readTime}</Typography>
          <Stack
            direction={{ xs: 'column', md: 'column', lg: 'row' }}
            alignItems="center"
            gap={3}
            className="icons"
          >
            {joinUsLinkIcons.map(({ icon, path, width, height }, index) => (
              <Box key={index}>
                <a href={path} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={'/' + icon.src}
                    alt="icon"
                    width={width}
                    height={height}
                    objectFit="cover"
                  />
                </a>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>

      <Container disableGutters>
        {Array(blogData.details).map((detail, index) => (
          <Typography key={index}>{detail}</Typography>
        ))}
      </Container>

      <Container className="likes">
        <Stack direction={'row'} gap={10}>
          <Stack direction={'row'} gap={1} alignItems="center">
            <Image
              src={'/' + newsAndBlogs.likesImg.src}
              width={25}
              height={25}
              alt="icon"
            />
            <Typography fontSize={13}>{blogData.likes} Likes</Typography>
          </Stack>
          <Stack direction={'row'} gap={1} alignItems="center">
            <Image
              src={'/' + newsAndBlogs.commentsImg.src}
              width={25}
              height={25}
              alt="icon"
            />
            <Typography fontSize={13}>{blogData.comments} comments </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={'row'}
          gap={1}
          alignItems="center"
          className="scroll-top"
        >
          <Image
            src={'/' + newsAndBlogs.scrollToTopImg.src}
            width={25}
            height={25}
            alt="icon"
          />
          <Typography fontSize={13}>Back To Top </Typography>
        </Stack>
      </Container>
    </Container>
  )
}

export default BlogDetails
