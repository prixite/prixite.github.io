import React from 'react'
import { Box, Button } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import Link from 'next/link'

interface ApplyNowBtnInterface {
  text?: string
  url?: string | any
}

const ApplyNowBtn: React.FC<ApplyNowBtnInterface> = ({ text, url }) => {
  return (
    <Box>
      <Button
        fullWidth
        variant="contained"
        endIcon={<SendOutlinedIcon />}
        className="apply-btn"
      >
        <Link className="btn-text-color" href={url} target="_blank">
          {text}
        </Link>
      </Button>
    </Box>
  )
}

export default ApplyNowBtn
