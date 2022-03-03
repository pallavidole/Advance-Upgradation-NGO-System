import React from 'react'

import { Typography, Box, Button } from '@mui/material'
import StoryOfTheDayImg from "../images/storyoftheday.jpg"

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

const StoryOfTheday = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
        <Box flexDirection="column" display="flex" sx={{height: 370, width: "80%", border: "2px solid", borderRadius: 2}}>
            <Typography variant="h5" sx={{color:"green", marginLeft: "30%", marginTop: 1}}>Story of the Day</Typography>
            <img src={StoryOfTheDayImg} style={{marginLeft: "5%", marginRight: "5%", marginTop: 5}} />
            <Typography variant='p' sx={{ marginLeft: "5%", marginRight: "5%", marginTop: 1}}>
            Being aware about health is an important aspect of ensuring physical and mental well-being. For children, with lesser developed systems and lower immunity, it is even more important. More importantly, regular health check-ups of children are also essential.
            </Typography>
            <Button onClick={handleClickOpen} sx={{width: 125, marginLeft: "70%", height: 30}} variant="contained" color="success">
        Read More
      </Button>

        </Box>

        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Story of the Day
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Being aware about health is an important aspect of ensuring physical and mental well-being. For children, with lesser developed systems and lower immunity, it is even more important. More importantly, regular health check-ups of children are also essential.
          </Typography>
          <Typography gutterBottom>
          Towards this goal, the Mission Education team conducted a health awareness and check-up camp at Akkithimanahalli Government School. The project is supported by OpenText, Bangalore.
          </Typography>
          <Typography gutterBottom>
          During the camp, the health status of students was checked. They were also informed and guided about the maintenance of good health, hygiene practices, important of nutrition-rich foods and so on. A few parents from the community also participated in the event and walked out with fruitful information about their own health and their children’s.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

export default StoryOfTheday