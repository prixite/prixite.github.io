import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
// import fs from 'fs'
import Image from 'next/image'
import { LinkedinShareButton, FacebookShareButton } from 'next-share'
import { Box, Container, Stack, Typography } from '@mui/material'
import { joinUsLinkIcons, newsAndBlogs } from '../../data/data'
import MarkdownText from '../../components/MarkdownText'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-python'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import 'prismjs/plugins/toolbar/prism-toolbar.min.css'
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import 'prismjs/components/prism-markup-templating'
import axios from 'axios'
interface BlogPost {
  name: string
  creation: string
  modified: string
  modified_by: string
  owner: string
  docstatus: number
  idx: number
  title: string
  blog_category: string
  blogger: string
  route: string
  read_time: number
  published_on: string
  published: number
  featured: number
  hide_cta: number
  enable_email_notification: number
  disable_comments: number
  disable_likes: number
  blog_intro: string
  content_type: string
  content: string
  content_md: string
  content_html: string
  email_sent: number
  meta_title: string
  meta_description: string
  meta_image: string
}
export default function BlogDetailPage({ blog }) {
  const router = useRouter()
  const [blogData, setBlogData] = useState<BlogPost>(blog)
  useEffect(() => {
    setBlogData(blogData)
    Prism.highlightAll()
  }, [router])

  if (!blogData) return <p>loading</p>

  return (
    <>
      <Head>
        <title>{blogData?.title}</title>
        {/* <meta property="og:image" content={cover_image} /> */}
      </Head>
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
                url={`${process.env.NEXT_PUBLIC_BASEPATH || 'prixite.com'}/${
                  router.asPath
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
                url={`${process.env.NEXT_PUBLIC_BASEPATH || 'prixite.com'}/${
                  router.asPath
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

export async function getServerSideProps({ params: { blogname } }) {
  try {
    const headers = {
      Authorization: `token  ${process.env.NEXT_PUBLIC_ERP_AUTH_TOKEN}`,
    }
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_ERP_BASEPATH}/Blog%20Post/${blogname}?filters=["*"]`,
      {
        headers,
      }
    )

    const blog = response.data.data

    return {
      props: {
        blog: blog,
      },
    }
  } catch (error) {
    console.error('Error fetching blog data:', error.message)
    return {
      props: {
        blog: null,
      },
    }
  }
}
