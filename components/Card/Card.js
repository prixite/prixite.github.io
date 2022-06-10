import React from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useRouter } from 'next/router';

const Card = ({ image, name, description, buttonText, path }) => {
    const router = useRouter()
    return (
        <>
            <Grid
                item
                sm={12}
                md={6}
                className='card'
            >
                <Box marginBottom="10px">
                    <div className='card-image'>
                        <Image
                            src={image}
                            objectFit='cover'
                            width={800}
                            height={500}
                            className='card-image'
                            alt="service-image"
                            priority
                            onClick={router.route === '/' ? () => router.push(path) : () => ''}
                        />
                    </div>

                    <Typography
                        variant="h6"
                        fontWeight="600"
                        mt='20px'>
                        {name}
                    </Typography>

                    <Typography
                        className='card-description'>
                        {description}
                    </Typography>

                    {router.route === '/' ?
                        <Box textAlign="center" mt="2rem">
                            <Button
                                className='card-button'
                                endIcon={<ArrowRightAltIcon />}
                                onClick={() => router.push(path)}
                            >
                                {buttonText}
                            </Button>
                        </Box>
                        :
                        ''}
                </Box>
            </Grid>
        </>
    )
}

export default Card