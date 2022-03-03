import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { CardHeader, Avatar } from '@mui/material';

const Task = ({task}) => {

  
  return (
    <Box sx={{ minWidth: 275 }}>
    <Card variant="outlined">
    <React.Fragment>
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {task.taskName.substring(0,1)}
          </Avatar>
        }
        
        title={task.taskName}
        subheader="September 14, 2021"
      />
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {task.taskDescription}
      </Typography>
      
    </CardContent>
    
  </React.Fragment>
    </Card>
  </Box>
  )
}

export default Task