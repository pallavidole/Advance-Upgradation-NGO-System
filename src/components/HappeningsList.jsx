import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Box, Typography , Button, Snackbar, Alert} from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Happenings from './Happenings';

const BASE_URL = "http://localhost:8000/api/v1";

const HappeningsList = () => {

    const happeningsList = [
        {
            "happeningsId": 1,
            "happeningsTitle": "Child Rights",
            "happeningsDescription": "When organizing a house cleaning schedule some chores are meant to be done more frequently than others. For example, dirty dishes should be cleaned every day, floors should be swept, and bedding should be straightened out. These are daily chores that require constant attention because ignoring them can lead to frustration and disorder. In the same way, there are other chores that require less frequent care and can be done once a week. You can always decide what day of the week to complete them.A cleaning company in London can assist you in maintaining order by completing these weekly cleaning activities. It saves you time, worry, and energy.",
            "place": "Delhi"
        },
        {
            "happeningsId": 2,
            "happeningsTitle": "Social Injustice",
            "happeningsDescription": "When organizing a house cleaning schedule some chores are meant to be done more frequently than others. For example, dirty dishes should be cleaned every day, floors should be swept, and bedding should be straightened out. These are daily chores that require constant attention because ignoring them can lead to frustration and disorder. In the same way, there are other chores that require less frequent care and can be done once a week. You can always decide what day of the week to complete them.A cleaning company in London can assist you in maintaining order by completing these weekly cleaning activities. It saves you time, worry, and energy."
            ,"place": "Delhi"
        },
        {
            "happeningsId": 3,
            "happeningsTitle": "Child Rights",
            "happeningsDescription": "When organizing a house cleaning schedule some chores are meant to be done more frequently than others. For example, dirty dishes should be cleaned every day, floors should be swept, and bedding should be straightened out. These are daily chores that require constant attention because ignoring them can lead to frustration and disorder. In the same way, there are other chores that require less frequent care and can be done once a week. You can always decide what day of the week to complete them.A cleaning company in London can assist you in maintaining order by completing these weekly cleaning activities. It saves you time, worry, and energy."
            ,"place": "Delhi"
        },
        {
            "happeningsId": 4,
            "happeningsTitle": "Child Rights",
            "happeningsDescription": "When organizing a house cleaning schedule some chores are meant to be done more frequently than others. For example, dirty dishes should be cleaned every day, floors should be swept, and bedding should be straightened out. These are daily chores that require constant attention because ignoring them can lead to frustration and disorder. In the same way, there are other chores that require less frequent care and can be done once a week. You can always decide what day of the week to complete them.A cleaning company in London can assist you in maintaining order by completing these weekly cleaning activities. It saves you time, worry, and energy."
            ,"place": "Delhi"
        },
        {
            "happeningsId": 5,
            "happeningsTitle": "Child Rights",
            "happeningsDescription": "When organizing a house cleaning schedule some chores are meant to be done more frequently than others. For example, dirty dishes should be cleaned every day, floors should be swept, and bedding should be straightened out. These are daily chores that require constant attention because ignoring them can lead to frustration and disorder. In the same way, there are other chores that require less frequent care and can be done once a week. You can always decide what day of the week to complete them.A cleaning company in London can assist you in maintaining order by completing these weekly cleaning activities. It saves you time, worry, and energy."
            ,"place": "Delhi"
        },
        {
            "happeningsId": 6,
            "happeningsTitle": "Child Rights",
            "happeningsDescription": "When creating a house cleaning schedule some chores are meant to be done more frequently than others. For example, dirty dishes should be cleaned every day, floors should be swept, and bedding should be straightened out. These are daily chores that require constant attention because ignoring them can lead to frustration and disorder. In the same way, there are other chores that require less frequent care and can be done once a week. You can always decide what day of the week to complete them.A cleaning company in London can assist you in maintaining order by completing these weekly cleaning activities. It saves you time, worry, and energy."
            ,"place": "Delhi"
        }
    ]

    const role = localStorage.getItem("role")

    const [happeningsData, setHappeningsData] = useState(null)
    const [ happeningsTitle, setHappeningsTitle] = useState(null)
    const [happeningsDescription, setHappeningsDescription] = useState(null)
    const [happeningsDate, setHappeningsDate] = useState(null)
    const [ place, setPlace] = useState(null)
    const[openFormDialog, setOpenFormDialog] = useState(false)

    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [openSnackBarError, setOpenSnackBarError] = useState(false);

    useEffect(()=> {
        loadHappeningData()
    }, [])

    const loadHappeningData = async()=> {
        try{
            const response = await axios({
                method: "get",
                url: BASE_URL + "/happenings/",
                headers: {
                  "Content-Type": "application/json",
             
              }
              });

              console.log("happening data", response.data)

              if(response.status===200){
                  setHappeningsData(response.data)  
              }
        }catch(err){
            console.log(err)
        }
    }

    const organizeHappening = async ()=> {

        const happening = {
            "happeningsTitle": happeningsTitle,
            "happeningsDescription": happeningsDescription,
            "place": place,
            "happeningDate": happeningsDate
        }

        try{
            if(happeningsTitle && happeningsDescription && place){
                const response = await axios({
                    method: "post",
                    url: BASE_URL + "/happenings/organize",
                    data: JSON.stringify(happening),
                    headers: {
                      "Content-Type": "application/json",
                      Authorization : `Bearer ${localStorage.getItem("token")}`
                  }
                  });

                  if(response.status===200){
                    setOpenSnackBar(true)
                }else{
                    throw "Error Occured";
                }
            }else{
                throw "Error Occured";
            }
            
        }catch(err){
            console.log(err)
            setOpenSnackBarError(true)
        }

        setOpenFormDialog(false)
    }

  return (
    <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: 50}}>
        <Box display="flex" sx={{}}>
        <Typography variant='h4' sx={{flex: 1}}>Happenings</Typography>
        {role==="ADMIN" && <Button onClick={()=>setOpenFormDialog(true)} variant="contained">Organize Heappenings</Button>}
        </Box>
        
        {happeningsData && <Box display="flex" flexDirection="row" style={{maxHeight: '100vh', overflow: 'auto', marginTop: 20}}>
                {happeningsData.map(happenings=> <div style={{marginRight: 30}}>
                    <Happenings key={happenings.happeningsId} happenings={happenings}/>
                </div>)}
        </Box>}
        <Dialog open={openFormDialog} onClose={()=> setOpenFormDialog(false)}>
        <DialogTitle>Organize Happenings</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="happeningsTitle"
            label="Happenings Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=> setHappeningsTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="happDesc"
            label="Happenings Place"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=> setPlace(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="happDesc"
            label="Happenings Date"
            type="date"
            fullWidth
            variant="standard"
            onChange={(e)=> setHappeningsDate(e.target.value)}
          />
          <TextField
            autoFocus
            multiline
            margin="dense"
            id="taskDesc"
            label="Happenings Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=> setHappeningsDescription(e.target.value)}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={()=> setOpenFormDialog(false)}>Cancel</Button>
          <Button onClick={organizeHappening}>Organize Happenings</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={()=> setOpenSnackBar(false)}>
        <Alert onClose={()=> setOpenSnackBar(false)} severity="success" sx={{ width: '100%' }}>
          Happening organized Successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={openSnackBarError} autoHideDuration={6000} onClose={()=> setOpenSnackBarError(false)}>
        <Alert onClose={()=> setOpenSnackBarError(false)} severity="error" sx={{ width: '100%' }}>
          Error occured while organizing happening!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default HappeningsList