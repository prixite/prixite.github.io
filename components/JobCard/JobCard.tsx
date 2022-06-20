import React from 'react'
import { Box, Typography, Container, Stack } from '@mui/material'
import Image from 'next/image'

interface JobCardProps {
  name: string
  image: string
  description: string
}

const JobCard: React.FC<JobCardProps> = ({ name, image, description }) => {
  return (
    <Container maxWidth="md" className="job-card">
      <Stack
        className="job-card-items"
        direction={{ xs: 'column', md: 'row' }}
      >
        <Box>
          <Image
            src={image}
            width={150}
            height={150}
            objectFit="cover"
            alt="Job"
          />
        </Box>
        <Box
          className="job-card-content"
        >
          <Box>
            <Typography variant="h6">{name}</Typography>
          </Box>

          <Box>
            <Typography>{description}</Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default JobCard
