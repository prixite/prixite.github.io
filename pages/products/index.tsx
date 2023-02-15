import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import { productList } from '../../data/data'
import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import { Product } from '../../types/interfaces'
import { sortByIndex } from '../../utils/sort'
import { MDContent } from '../../types/interfaces'
import { PRODUCTS_PATH } from '../../utils/constants'
import { getMarkdownAllData } from '../../utils/markdown'

const ProductList = ({ products }: MDContent) => {
  const { title, header } = productList

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
          </Box>
          <Link href={'/'}>
            <Typography color={'primary'}> {'< '}Back </Typography>
          </Link>
        </Box>
      </Container>

      <Container maxWidth="xl" className="posts">
        {products?.map((product: Product, index: number) => (
          <div className="card" key={index}>
            <Image
              src={product.frontmatter.logo_image}
              alt=""
              className="post-img"
              width={500}
              height={500}
              layout="responsive"
            />

            <h3>{product.frontmatter.header}</h3>

            <p>{product.frontmatter.description}</p>

            <Link href={`/products/${product.slug}`}>
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
  const productFiles = fs.readdirSync(path.join(PRODUCTS_PATH))
  const products = getMarkdownAllData(productFiles, PRODUCTS_PATH, fs)

  return {
    props: {
      products: products.sort(sortByIndex),
    },
  }
}
