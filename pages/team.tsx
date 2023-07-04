import React, { useState } from 'react'
import { Container, Typography } from '@mui/material'
import Head from 'next/head'
import { categories } from '../data/data'
import Category from '../components/Smart/Category/Category'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import { getMarkdownAllData } from '../utils/markdown'
import { EMPLOYEES_PATH } from '../utils/constants'
import { EmployeePost, MDContent } from '../types/interfaces'

const MeetTeam = ({ employees }: MDContent) => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [employeesState, setEmployeesState] = useState(employees)

  const handleClick = (label: string) => {
    setSelectedCategory(label)
    if (label === 'All') {
      setEmployeesState(employees)
      return
    }

    // filter employees array
    setEmployeesState(
      employees?.filter((employee) => {
        return employee.frontmatter.category.includes(label)
      })
    )
  }

  return (
    <>
      <Head>
        <title>Meet the team</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="team-page">
        <Typography fontWeight={600} className="heading">
          Meet the <span className="color-primary">team</span>
        </Typography>
        <Typography fontWeight={450} className="desc">
          Meet our highly enthusiastic team, who looks for out of box solutions,
          and aspires to become our customer’s first choice.
        </Typography>

        <div className="category">
          {categories &&
            categories.map((item, index) => {
              return (
                <Category
                  label={item}
                  key={index}
                  selected={selectedCategory === item}
                  handleClick={(label: string) => handleClick(label)}
                />
              )
            })}
        </div>

        <div className="images-main-container">
          {employeesState &&
            employeesState.map((employee: EmployeePost) => {
              return (
                <Link
                  key={employee.frontmatter?.id}
                  href={`/team/${employee.slug}`}
                >
                  <div className="image-container">
                    <Image
                      className="image"
                      alt="emp-image"
                      height={150}
                      width={150}
                      src={employee.frontmatter?.image}
                    />
                    <Typography fontWeight={500} fontSize={14}>
                      {employee.frontmatter?.name}
                    </Typography>
                    <Typography
                      fontWeight={500}
                      fontSize={14}
                      className="color-primary"
                    >
                      {employee.frontmatter?.title}
                    </Typography>
                  </div>
                </Link>
              )
            })}
        </div>
      </Container>
    </>
  )
}

export default MeetTeam

export async function getStaticProps() {
  const employeeFiles = fs.readdirSync(path.join(EMPLOYEES_PATH))
  const employees = getMarkdownAllData(employeeFiles, EMPLOYEES_PATH, fs)

  return {
    props: {
      employees: employees,
    },
  }
}
