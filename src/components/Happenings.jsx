import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { CardHeader, Avatar } from '@mui/material';

const Happenings = ({happenings}) => {
  return (
    <Box sx={{ minWidth: 275 }}>
    <Card variant="outlined">
    <React.Fragment>
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
            {happenings.happeningsTitle.substring(0,1)}
          </Avatar>
        }
        
        title={happenings.happeningsTitle}
        subheader="September 14, 2021"
      />
    <CardContent>

    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Place: {happenings.place}
      </Typography>
      <br/>
        <br/>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {happenings.happeningsDescription}
      </Typography>


      
    </CardContent>
    
  </React.Fragment>
    </Card>
  </Box>
  )
}

export default Happenings