import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import PrixiteLogo from '../../../public/images/subscribe-image.png'
import ContactButton from '../../Smart/ContactButton/ContactButton'

const Subscribe = () => {
  return (
    <Container sx={{position: 'relative', display: 'flex', justifyContent: 'center'}} maxWidth='xl'>
      <Box sx={{
        position: 'relative',
        right: '43%',
        bottom: 25
      }}>
        <Image src={PrixiteLogo} width={186} height={186} />
      </Box>
      <Box className='subscribe-container'>
        <Box>
          <Typography fontWeight={600} fontSize={22}>
            Subscribers Get More
          </Typography>
          <Typography>Join the community</Typography>
        </Box>
        <Box width={'65%'} sx={{position: 'relative'}}>
          <TextField
            id="outlined-basic"
            label="Enter your Email Address"
            variant="outlined"
            fullWidth
          />
          <div
            style={{ position: 'absolute', top: 9, right: 7 }}
          >
            <ContactButton text="Subscribe" buttonSize='medium'/>
          </div>
        </Box>
      </Box>
    </Container>


    // <Container className="subscribe-container" maxWidth="lg">

    //   <Box width={'100%'}>
    //     <Typography fontWeight={600} fontSize={22}>
    //       Subscribers Get More
    //     </Typography>
    //     <Typography>Join the community</Typography>
    //   </Box>
    //   <Box className="input-container">
    //     <TextField
    //       id="outlined-basic"
    //       label="Enter your Email Address"
    //       variant="outlined"
    //       className="input"
    //       fullWidth
    //     />
    //     <div
    //       className="subscribe-button"
    //       style={{ position: 'absolute', top: 6, right: 6 }}
    //     >
    //       <ContactButton text="Subscribe" />
    //     </div>
    //   </Box>
    // </Container>
  )
}

export default Subscribe
