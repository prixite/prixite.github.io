import { useEffect } from 'react'
import fs from 'fs'
import Image from 'next/image'
import { Box, Container, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import { joinUsLinkIcons } from '../../data/data'
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
import { PersonDetail, PersonDetailWithContent } from '../../types/interfaces'
import { TEAM_PATH } from '../../utils/constants'

export default function PersonDetailPage({
  frontmatter: { title, name },
  content,
}: PersonDetailWithContent) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="xl" className="page-header">
        <Box className="header">
          <Box className="heading">
            <Typography className="heading-text" sx={{ width: '95%' }}>
              {name}
            </Typography>
          </Box>
          <Stack direction={'row'} gap={3} alignItems="center">
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
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  return getMarkdownSinglePath(fs, TEAM_PATH)
}

export async function getStaticProps({ params: { slug } }: PersonDetail) {
  return getMarkDownSingleData(fs, TEAM_PATH, slug)
}
