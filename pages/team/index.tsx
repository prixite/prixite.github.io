import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
// import { productList } from '../../data/data'
import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
// import { Product } from '../../types/interfaces'
import { sortByIndex } from '../../utils/sort'
import { MDContent, TeamPerson } from '../../types/interfaces'
// import { PRODUCTS_PATH } from '../../utils/constants'
import { getMarkdownAllData } from '../../utils/markdown'
import { TEAM_PATH } from '../../utils/constants'
import { teamData } from '../../data/data'

const Team = ({ team }: MDContent) => {
  //   const { title, header } = productList
  const { title, header } = teamData
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

      <Container maxWidth="xl" className="team">
        {team?.map((person: TeamPerson, index: number) => (
          <div className="person-card" key={index}>
            <Image
              src={person.frontmatter.person_image}
              alt=""
              className="person-img"
              width={500}
              height={500}
            />

            <h3 className="person-name">{person.frontmatter.name}</h3>

            <p className="person-designation">
              {person.frontmatter.designation}
            </p>

            <Link href={`/team/${person.slug}`}>
              <Button variant="contained" className="details-button">
                Details
              </Button>
            </Link>
          </div>
        ))}
      </Container>
    </>
  )
}

export default Team

export async function getStaticProps() {
  const teamPersons = fs.readdirSync(path.join(TEAM_PATH))
  const team = getMarkdownAllData(teamPersons, TEAM_PATH, fs)

  return {
    props: {
      team: team.sort(sortByIndex),
    },
  }
}
