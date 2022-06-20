import React from 'react'
import { Box, Typography, Container, Stack } from '@mui/material'
import Image from 'next/image'

interface ClientCardProps {
  image: string
  name: string
  project: string
  description: string
}

const ClientCard: React.FC<ClientCardProps> = ({ image, name, project, description }) => {
  return (
    <Container maxWidth="md" className="client-card">
      <Stack
        direction={{ xs: 'column', md: 'row'  }}
        className="client-card-items"
      >
        <Box>
          <Image src={image} width={150} height={150} objectFit="cover" />
        </Box>
        <Box className="client-card-content">
          <Box>
            <Typography variant="h6">{name}</Typography>
          </Box>

          <Typography>{project}</Typography>
          <Box>
            <Typography>{description}</Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default ClientCard
