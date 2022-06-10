import React from 'react'
import { Box, Typography, Container, Stack } from '@mui/material'
import Image from 'next/image';

const ClientCard = ({image, name, project}) => {
    return (
        <Container
            maxWidth='md'
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={5}
                my={4}
                p={2}
                sx={{
                    alignItems: 'center',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    borderRadius: 4,
                }}
            >
                <Box>
                    <Image src={image} width={100} height={100} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography fontSize={18} variant='h6'>
                            {name}
                        </Typography>

                    </Box>

                    <Typography fontSize={14}>
                        {project}
                    </Typography>
                    <Box>
                        <Typography fontSize={15}>Description</Typography>
                    </Box>
                </Box>
            </Stack>
        </Container>
    )
}

export default ClientCard