import React from 'react'

import { Box, Typography, Divider , Grid} from '@mui/material'
import IndianMap from '../images/map.png'

const Reach = () => {
  return (
    <div>
        <Box flexDirection="row" justifyContent="space-between" display="flex" sx={{backgroundColor: "#253513", width: "100%", height: 400, marginTop: 13, marginBottom: 10}}>
            <Box flexDirection="column" xs={5} sx={{marginLeft: "5%", width: "45%"}}>
                <Typography sx={{font:"bold", fontWeight: 100, marginTop: 10}} variant="h6">Our Reach</Typography>
                <Typography variant="p" sx={{marginTop: 2}}>
                In keeping with its philosophy of 'Real Work Real Change', Smile Foundation , an NGO in Delhi, India to support the underserved, has taken its intervention into the interiors of India, reaching the unreached in the remotest of rural areas and urban slums with our services and making this helping foundation in India, the best NGO in India.
                </Typography>
                <Grid container direction="row" justifyContent="space-between" sx={{marginTop: 5}}>
                    <Box flexDirection="column" >
                        <Typography variant='h2' sx={{font:"bold", fontFamily:"sans-serif"}}>25</Typography>
                        <Typography variant='h6'>States</Typography>
                    </Box>
                    <Divider orientation='vertical' style={{ background: 'green',height: 110, marginTop: 7, width: 3}} />
                    <Box flexDirection="column" >
                        <Typography variant='h2' sx={{font:"bold", fontFamily:"sans-serif"}}>400+</Typography>
                        <Typography variant='h6'>Projects</Typography>
                    </Box>
                    <Divider orientation='vertical' style={{ background: 'green',height: 110, marginTop: 7, width: 3}} />
                    <Box flexDirection="column" >
                        <Typography variant='h2' sx={{font:"bold", fontFamily:"sans-serif"}}>2000+</Typography>
                        <Typography variant='h6'>Villages & Slums</Typography>
                    </Box>
                </Grid>
            </Box>
            <Box xs={7} sx={{width: "50%"}}>
                <img src={IndianMap} style={{height: 600, width: "90%", marginTop: -100}}/>
            </Box>

        </Box>
    </div>
  )
}

export default Reach