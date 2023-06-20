import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import { productsList } from '../../data/data'
import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import { Product } from '../../types/interfaces'
import { sortByIndex } from '../../utils/sort'
import { MDContent } from '../../types/interfaces'
import { PRODUCT_PATH } from '../../utils/constants'
import { getMarkdownAllData } from '../../utils/markdown'

const ProductList = ({ product }: MDContent) => {
  const { title, header } = productsList

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
            <Typography className="heading-text">
              {header.slice(0, 4)}
              <span style={{ color: 'var(--primary-green)' }}>
                {header.slice(4, 12)}
              </span>
            </Typography>
          </Box>
          <Link href={'/'}>
            <Typography color={'primary'}> {'< '}Back </Typography>
          </Link>
        </Box>
      </Container>

      <Container maxWidth="xl" className="posts">
        {product?.map((product: Product, index: number) => (
          <div className="card" key={index}>
            <h3>{product.frontmatter.header}</h3>

            <p>{product.frontmatter.description}</p>

            <Link href={`/product/${product.slug}`}>
              <Button variant="contained" className="read-button">
                Read More
              </Button>
            </Link>
          </div>
        ))}
      </Container>
    </>
  )
}

export default ProductList

export async function getStaticProps() {
  const productFiles = fs.readdirSync(path.join(PRODUCT_PATH))
  const product = getMarkdownAllData(productFiles, PRODUCT_PATH, fs)

  return {
    props: {
      product: product.sort(sortByIndex),
    },
  }
}
