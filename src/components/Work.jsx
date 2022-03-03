import React from 'react'
import Mid1 from '../images/mid/mid1.jpg'
import Mid2 from '../images/mid/mid2.jpg'
import Mid3 from '../images/mid/mid3.jpg'
import Mid4 from '../images/mid/mid4.jpg'

import { Box, Typography } from '@mui/material';

import ImageSlider from './ImageSlider'

const Work = () => {

    const midImages = [Mid1, Mid2, Mid3, Mid4];
  return (
    <div>
        <Box sx={{}}>
            <Typography variant='h4'>Our Work</Typography>
            <Typography variant='p' gutterBottom sx={{marginRight: 50, marginTop: 20}}>Following a lifecycle approach, Helping Hand, among the top NGO in India, works intensively through focused welfare projects in four major areas – child education for poor children, healthcare for families, skills training and livelihood for youth, and community engagement through women empowerment.</Typography>
            <br/>
            <br/>
            <Typography variant='p' gutterBottom sx={{marginRight: 50}}>So far, we have been able to directly impact the lives of over 1 million children and families.</Typography>
            <div style={{marginTop: 20}}>
            <ImageSlider topImages={midImages}/>
            </div>
            
        </Box>
    </div>
  )
}

export default Work