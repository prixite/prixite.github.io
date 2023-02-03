import { useEffect } from 'react'
import fs from 'fs'
import Image from 'next/image'
import { Box, Container, Stack, Typography } from '@mui/material'
import { joinUsLinkIcons, newsAndBlogs } from '../../data/data'
import { BlogPostWithContent, Blog } from '../../types/interfaces'
import { BLOGS_PATH } from '../../utils/constants'
import {
  getMarkDownSingleData,
  getMarkdownSinglePath,
} from '../../utils/markdown'
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

export default function BlogDetailPage({
  frontmatter: { title, date },
  content,
}: BlogPostWithContent) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Container maxWidth="xl" className="page-header">
      <Box className="header">
        <Box className="heading">
          <Typography className="heading-text" sx={{ width: '95%' }}>
            {title}
          </Typography>
        </Box>
        <Stack direction={'row'} gap={3} alignItems="center">
          <Typography fontSize={12}>{date}</Typography>
          <Typography fontSize={12}>5 min read</Typography>
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
                    src={icon.src}
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

      <Container disableGutters maxWidth="xl">
        <div className="post-body">
          <MarkdownText>{content}</MarkdownText>
        </div>
      </Container>

      <Container className="likes" maxWidth="xl">
        <Stack direction={'row'} gap={10}>
          <Stack direction={'row'} gap={1} alignItems="center">
            <Image
              src={newsAndBlogs.likesImg.src}
              width={25}
              height={25}
              alt="icon"
            />
            <Typography fontSize={13}>10 Likes</Typography>
          </Stack>
          <Stack direction={'row'} gap={1} alignItems="center">
            <Image
              src={newsAndBlogs.commentsImg.src}
              width={25}
              height={25}
              alt="icon"
            />
            <Typography fontSize={13}>10 Comments </Typography>
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
  )
}

export async function getStaticPaths() {
  return getMarkdownSinglePath(fs, BLOGS_PATH)
}

export async function getStaticProps({ params: { slug } }: Blog) {
  return getMarkDownSingleData(fs, BLOGS_PATH, slug)
}
