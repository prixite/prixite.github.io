import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { LinkedinShareButton, FacebookShareButton } from 'next-share'
import { Box, Container, Stack, Typography } from '@mui/material'
import { joinUsLinkIcons, newsAndBlogs } from '../../../data/data'
import MarkdownText from '../../MarkdownText'
import { BlogPost } from '../../../types/interfaces'

export default function Blog({ blog }: { blog: BlogPost }) {
  const router = useRouter()

  const [blogData, setBlogData] = useState<BlogPost>(blog)

  useEffect(() => {
    setBlogData(blog)
  }, [blog])

  if (!blogData) return <p>Loading...</p>

  return (
    <>

      <Container maxWidth="xl" className="page-header">
        <Box className="header">
          <Box className="heading">
            <Typography className="heading-text" sx={{ width: '95%' }}>
              {blogData.title}
            </Typography>
          </Box>
          <Stack direction={'row'} gap={3} alignItems="center">
            <Typography fontSize={12}>{blogData.published_on}</Typography>
            <Typography fontSize={12}>5 min read</Typography>
            <Stack
              direction={{ xs: 'column', md: 'column', lg: 'row' }}
              alignItems="center"
              gap={3}
              className="icons"
            >
              <FacebookShareButton
                url={`${process.env.NEXT_PUBLIC_BASEPATH || 'prixite.com'}/${router.asPath
                  }`}
              >
                <Image
                  src={joinUsLinkIcons[0].icon.src}
                  alt="icon"
                  width={joinUsLinkIcons[0].width}
                  height={joinUsLinkIcons[0].height}
                  objectFit="cover"
                />
              </FacebookShareButton>
              <LinkedinShareButton
                url={`${process.env.NEXT_PUBLIC_BASEPATH || 'prixite.com'}/${router.asPath
                  }`}
              >
                <Image
                  src={joinUsLinkIcons[1].icon.src}
                  alt="icon"
                  width={joinUsLinkIcons[1].width}
                  height={joinUsLinkIcons[1].height}
                  objectFit="cover"
                />
              </LinkedinShareButton>
            </Stack>
          </Stack>
        </Box>

        <Container disableGutters maxWidth="xl">
          <div className="post-body">
            <MarkdownText>
              {blogData.content_md ? blogData.content_md : blogData.content}
            </MarkdownText>
          </div>
        </Container>

        <Container className="likes" maxWidth="xl">
          <Stack direction={'row'} gap={10}>
            <Stack direction={'row'} gap={1} alignItems="center">
              <Typography fontSize={13}>
                Written by {blogData.blogger}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            gap={1}
            alignItems="center"
            className="scroll-top"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }}
          >
            <Image
              src={newsAndBlogs.scrollToTopImg.src}
              width={25}
              height={25}
              alt="icon"
            />
            <Typography fontSize={13}>Back To Top </Typography>
          </Stack>
        </Container>
      </Container>
    </>
  )
}


