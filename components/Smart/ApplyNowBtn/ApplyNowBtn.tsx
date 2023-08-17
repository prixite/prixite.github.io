//import { useState } from 'react'
import React from 'react'
import { Box, Button } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
//import { useRouter } from 'next/router'
import Link from 'next/link'

interface ApplyNowBtnInterface {
  text?: string
  width?: boolean
}

const ApplyNowBtn: React.FC<ApplyNowBtnInterface> = ({ text, width }) => {
 // const router = useRouter()
 {/* const [jobsData, setJobsData] = useState([])

  const fetchData =async () => {
    const response = await fetch('https://stg-erp.prixite.com/job_application/new?job_title=test-job')
    const data = await response.json()
    setJobsData(data)
} */}
  return (
    <Box>
      <Button
      fullWidth={width}
      variant="contained"
      endIcon={<SendOutlinedIcon />}
      className="apply-btn">
        <Link className='btn-text-color' href='https://stg-erp.prixite.com/job_application/new?job_title=test-job'>
           {text}</Link>
     {/*  <a className='contact-us-button' href='https://stg-erp.prixite.com/job_application/new?job_title=test-job'>
           {text}
        </a> */}
      </Button>

  {/*   {jobsData.map(jobData => {
          return(
            <div>
              {jobData}
            </div>
          )
        })}   */}
    </Box>
  )
}

export default ApplyNowBtn
