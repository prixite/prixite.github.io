import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import Head from 'next/head'
import ContactButton from '../../components/Smart/ContactButton/ContactButton'
import fs from 'fs'
import md from 'markdown-it'
import { Service, ServiceWithContent } from '../../types/interfaces'
import {
  getMarkDownSingleData,
  getMarkdownSinglePath,
} from '../../utils/markdown'
import { SERVICES_PATH } from '../../utils/constants'

const ServiceDetail = ({
  frontmatter: { title, header, description },
  content,
}: ServiceWithContent) => {
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
            <Typography className="heading-text">{header}</Typography>
            <Typography>{description}</Typography>
          </Box>
          <Box>
            <ContactButton text="Contact Us" />
          </Box>
        </Box>

        <Box className="page-content">
          <Container disableGutters maxWidth="xl">
            <div className="post-body">
              <div
                className="service-content"
                dangerouslySetInnerHTML={{ __html: md().render(content) }}
              ></div>
            </div>
          </Container>
        </Box>
        {/* <Subscribe /> */}
      </Container>
    </>
  )
}

export default ServiceDetail

export async function getStaticPaths() {
  return getMarkdownSinglePath(fs, SERVICES_PATH)
}

export async function getStaticProps({ params: { slug } }: Service) {
  return getMarkDownSingleData(fs, SERVICES_PATH, slug)
}
