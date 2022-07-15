import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { Avatar } from '@mui/material'

const PreviousBtn = (props: any) => {
  console.log(props)
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: 'gray', fontSize: '45px' }} />
    </div>
  )
}

const NextBtn = (props: any) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: 'gray', fontSize: '45px' }} />
    </div>
  )
}

const Testimonials = () => {
  return (
    <div
    className="testimonial"
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
        width: '50%',
        height: 200,
      }}
    >
      <div style={{ width: '100%', }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
  )
}

const Card = ({ img }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'gray',
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: '50%' } }}
        src={img}
        style={{
          width: 100,
          height: 100,
          padding: 7,
          marginBottom: 30,
        }}
      />
      <p>
        Prixite is one online technology solutions provider company that is
        considered as a new breed of thinkers who is driven to create effective
        business solutions for its clients. We aspire to become our client’s
        first choice when it comes to being a world leader in the progress and
        advancement of businesses through digital platforms.
      </p>
      <p>Brandon Dorwart</p>
      <p>CEO Dupe Tech</p>
    </div>
  )
}

export default Testimonials
