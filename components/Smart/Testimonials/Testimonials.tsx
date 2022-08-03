import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import TestimonialCard from '../../Presentational/TestimonialCard/TestimonialCard'
import { testimonialsData } from '../../../data/data'
import { Typography, Container } from '@mui/material'

interface Props {
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const PreviousBtn = (props: Props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <Image src={testimonialsData.leftImg} alt="left" />
    </div>
  )
}

const NextBtn = (props: Props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <Image src={testimonialsData.rightImg} alt="right" />
    </div>
  )
}

const Testimonials = () => {
  const { testimonials, heading } = testimonialsData
  return (
    <Container maxWidth="xl" className="testimonials-container">
      <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
        {heading.slice(0, 3)}
        <span style={{ color: 'var(--primary-green)' }}>
          {heading.slice(3, 16)}
        </span>
      </Typography>
      <div className="testimonial">
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              img={testimonial.image}
              text={testimonial.text}
              name={testimonial.name}
              designation={testimonial.designation}
            />
          ))}
        </Slider>
      </div>
    </Container>
  )
}

export default Testimonials
