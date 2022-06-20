import React from 'react'
import { Box, Typography, Container, Stack } from '@mui/material'
import Image from 'next/image'

interface ProjectCardProps {
  name: string
  description: string
  image: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <Container maxWidth="md">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={5}
        my={3}
        p={2}
        sx={{
          alignItems: 'center',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          borderRadius: 4,
        }}
      >
        <Box>
          <Image src={image} width={150} height={150} objectFit="cover" alt='project'/>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography fontSize={18} variant="h6">
              {name}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={15}>{description}</Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default ProjectCard
