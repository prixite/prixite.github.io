import React from 'react'
import { Container, Typography } from '@mui/material'
import Head from 'next/head'
import fs from 'fs'
import { Employee, EmployeeWithContent } from '../../types/interfaces'
import {
  getMarkDownSingleData,
  getMarkdownSinglePath,
} from '../../utils/markdown'
import { EMPLOYEES_PATH } from '../../utils/constants'
import Image from 'next/image'
// import { LuTwitter, LuFacebook, LuInstagram, LuLinkedin } from 'react-icons/lu'
// import { AiOutlineLink } from 'react-icons/ai'

const EmployeeDetail = ({
  frontmatter: {
    title,
    name,
    imageB,
    description,
    moreInfoOne,
    moreInfoTwo,
    developmentStack,
  },
}: EmployeeWithContent) => {
  const trimName = (name: string) => {
    return name?.split(' ')[0].toString()
  }
  return (
    <>
      <Head>
        <title>Prixite! Team</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="page-header">
        <div className="profile">
          <div className="single-image">
            <Image
              src={imageB}
              height={250}
              width={250}
              alt="profile-picture"
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className="profile-info">
            {/* <div className="profile-header"> */}
            <Typography fontWeight={600} fontSize={18}>
              {name}
            </Typography>
            {/* <div className="icons-container">
                <LuFacebook size={20} color="#d3d3d3" />
                <hr className="hr" />
                <LuTwitter size={20} color="#d3d3d3" />
                <hr className="hr" />
                <LuInstagram size={20} color="#d3d3d3" />
                <hr className="hr" />
                <LuLinkedin
                  size={20}
                  color="#d3d3d3"
                  style={{
                    border: '2px solid #d3d3d3',
                    padding: '3px',
                    borderRadius: '4px',
                  }}
                />
                <hr className="hr" />
                <AiOutlineLink size={20} color="#d3d3d3" />
              </div> */}
            {/* </div> */}
            <Typography fontWeight={500} className="color-primary">
              {title}
            </Typography>
            <Typography
              style={{ marginTop: '20px', width: '60%', textAlign: 'justify' }}
            >
              {description}
            </Typography>
          </div>
        </div>

        <div className="moreInfo">
          <Typography
            fontSize={16}
            fontWeight={600}
            style={{ marginBottom: '5px' }}
          >
            More About {trimName(name)}
          </Typography>
          <Typography style={{ textAlign: 'justify' }}>
            {moreInfoOne}
          </Typography>
          {moreInfoTwo && (
            <div>
              <br />
              <Typography style={{ textAlign: 'justify' }}>
                {moreInfoTwo}
              </Typography>
            </div>
          )}
        </div>

        <Typography
          fontSize={16}
          fontWeight={600}
          style={{ marginTop: '20px' }}
        >
          Development Stack
        </Typography>
        <div className="stack-container">
          {developmentStack?.map((tech, index) => {
            return (
              <div key={index} className="stack">
                <Image alt="tech.name" src={tech.icon} height={80} width={80} />
                <Typography fontWeight={500} style={{ textAlign: 'center' }}>
                  {tech.name}
                </Typography>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default EmployeeDetail

export async function getStaticPaths() {
  return getMarkdownSinglePath(fs, EMPLOYEES_PATH)
}

export async function getStaticProps({ params: { slug } }: Employee) {
  return getMarkDownSingleData(fs, EMPLOYEES_PATH, slug)
}
