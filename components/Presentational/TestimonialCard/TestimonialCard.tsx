import { Avatar, Container, Typography } from '@mui/material'
import React from 'react'

interface CardProps {
  img: string
  text: string
  name: string
  designation: string
  product: string
  product_link: string
}

const TestimonialCard = ({
  img,
  text,
  name,
  designation,
  product,
  product_link,
}: CardProps) => {
  return (
    <Container maxWidth="xl" className="testimonial-card">
      <Avatar
        imgProps={{ style: { borderRadius: '50%' } }}
        src={img}
        className="testimonial-image"
      />
      <Typography className="testimonial-text">{text}</Typography>
      <Typography className="testimonial-name">{name}</Typography>
      <Typography className="testimonial-designation">
        {designation + ' '}
        <a
          href={product_link}
          target="_blank"
          rel="noopener noreferrer"
          className="product-link"
        >
          {product}
        </a>
      </Typography>
    </Container>
  )
}

export default TestimonialCard
