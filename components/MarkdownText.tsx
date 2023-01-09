import * as React from 'react'
import Markdown from 'markdown-to-jsx'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h1' },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h2' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h3' },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h4' },
    },
    h5: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h5' },
    },
    h6: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6' },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: (props: { name: string }) => (
        <Box component="li" sx={{ mt: 1 }}>
          <Typography component="span" {...props} />
        </Box>
      ),
    },
  },
}

export default function MarkdownText(props: { children: string }) {
  return <Markdown options={options} {...props} />
}
