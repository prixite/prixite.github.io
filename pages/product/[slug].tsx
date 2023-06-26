import fs from 'fs'
import Image from 'next/image'
import { Box, Container, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import { joinUsLinkIcons } from '../../data/data'
import { ProductDetail, ProductDetailWithContent } from '../../types/interfaces'
import { PRODUCT_PATH } from '../../utils/constants'
import {
  getMarkDownSingleData,
  getMarkdownSinglePath,
} from '../../utils/markdown'
import MarkdownText from '../../components/MarkdownText'

export default function ProductDetailPage({
  frontmatter: { title, header, date },
  content,
}: ProductDetailWithContent) {
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
              {header}
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
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  return getMarkdownSinglePath(fs, PRODUCT_PATH)
}

export async function getStaticProps({ params: { slug } }: ProductDetail) {
  return getMarkDownSingleData(fs, PRODUCT_PATH, slug)
}
