import { Avatar, Container, Typography } from '@mui/material'
import React from 'react'

interface CardProps {
  img: string
  text: string
  name: string
  designation: string
  company: string
  website: string
}

const TestimonialCard = ({
  img,
  text,
  name,
  designation,
  company,
  website,
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
        {designation && company && website && designation + ' '}
        {designation && company && website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="product-link"
          >
            {company}
          </a>
        )}

        {designation && company && !website && designation + ' ' + company}
        {!designation && company && !website && company}
      </Typography>
    </Container>
  )
}

export default TestimonialCard
