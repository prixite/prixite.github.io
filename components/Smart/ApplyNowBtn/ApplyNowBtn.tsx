import React from 'react'
import { Box, Button } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import Link from 'next/link'

interface ApplyNowBtnInterface {
  text?: string
  width?: boolean
}

const ApplyNowBtn: React.FC<ApplyNowBtnInterface> = ({ text, width }) => {
  return (
    <Box>
      <Button
        fullWidth={width}
        variant="contained"
        endIcon={<SendOutlinedIcon />}
        className="apply-btn"
      >
        <Link
          className="btn-text-color"
          href="https://stg-erp.prixite.com/job_application/new?job_title=test-job"
        >
          {text}
        </Link>
      </Button>
    </Box>
  )
}

export default ApplyNowBtn
