import React from 'react'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { footerData } from '../../../data/data'
import Title from '../../Presentational/Title/Title'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  const { copyright, info, joinUs, details } = footerData

  return (
    <Box className="footer-container">
      <Container maxWidth="xl" className="footer-items">
        <Box className="footer-items-container">
          <Title />
          {details?.map(({ icon, desc }, index) => (
            <Stack direction={'row'} spacing={1} key={index}>
              <Box>
                <Image src={icon.src} alt="icon" width={20} height={20} />
              </Box>
              <Typography className="description">{desc}</Typography>
            </Stack>
          ))}
        </Box>
        <Box className="footer-items-container">
          <Typography fontSize={18} fontWeight={'600'}>
            {info.title}
          </Typography>
          {info.contactUs.map((contact, index) => (
            <Typography
              key={index}
              onClick={() => router.push(contact.path)}
              sx={{ cursor: 'pointer' }}
            >
              {contact.text}
            </Typography>
          ))}
        </Box>
        <Box className="footer-items-container">
          <Typography fontSize={18} fontWeight={'600'}>
            {joinUs.title}
          </Typography>
          <Box className="join-us-icons">
            {joinUs.links.map(({ icon, path, width, height }, index, array) => (
              <React.Fragment key={index}>
                <a href={path} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={icon.src}
                    alt="icon"
                    style={{ cursor: 'pointer' }}
                    width={width}
                    height={height}
                  />
                </a>
                {index === array.length - 1 ? (
                  ''
                ) : (
                  <Divider className="join-us-divider" />
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Divider sx={{ marginTop: 4 }} />
        <Box className="copyright">
          <Typography>{copyright}</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
