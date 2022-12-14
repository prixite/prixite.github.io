import { Container, Box, Typography, Grid } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Service from '../components/Presentational/Service/Service'
// eslint-disable-next-line
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import ContactButton from '../components/Smart/ContactButton/ContactButton'
import { servicesData } from '../data/data'
import { MDContent } from '../types/interfaces'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByIndex } from '../utils/sort'

const Services = ({ services }: MDContent) => {
  const { servicesPageTitle, servicesPageHeader } = servicesData
  return (
    <>
      <Head>
        <title>{servicesPageTitle}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="page-header">
        <Box className="header">
          <Box className="heading">
            <Typography className="heading-text">
              {servicesPageHeader.slice(0, 6)}
              <span style={{ color: 'var(--primary-green)' }}>
                {servicesPageHeader.slice(6, 15)}
              </span>
              {servicesPageHeader.slice(15, 39)}
            </Typography>
          </Box>
          <Box>
            <ContactButton text="Contact Us" />
          </Box>
        </Box>

        <Grid container spacing={{ xs: 2, md: 7 }} columnSpacing={3}>
          {services?.map((item) => (
            <Service
              key={item.frontmatter.index}
              img={item.frontmatter.logo_image}
              title={item.frontmatter.header}
              description={item.frontmatter.description}
              path={`/services/${item.slug}`}
            />
          ))}
        </Grid>
        {/* <Subscribe /> */}
      </Container>
    </>
  )
}

export default Services

export async function getStaticProps() {
  const serviceFiles = fs.readdirSync(path.join('data/services'))

  const services = serviceFiles.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('data/services', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      services: services.sort(sortByIndex),
    },
  }
}
