import React from 'react'

import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-around" sx={{background: "#000", width: "100%", marginTop: 5, }}>
        <Typography variant='h8' sx={{color: "#fff"}}>© 2022 Helping Hand. All Rights Reserved. | Email: helpdesk@helpinghand.com</Typography>

    </Box>
  )
}

export default Footer