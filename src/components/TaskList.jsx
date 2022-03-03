import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Box, Typography , Button, Snackbar, Alert} from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Task from './Task';

const BASE_URL = "http://localhost:8000/api/v1";

const TaskList = () => {

    const role = localStorage.getItem("role")

    const [taskData, setTaskData] = useState(null)
    const [ taskName, setTaskName] = useState(null)
    const [taskDescription, setTaskDescription] = useState(null)
    const[openFormDialog, setOpenFormDialog] = useState(false)

    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [openSnackBarError, setOpenSnackBarError] = useState(false);

    useEffect(()=> {
        loadTaskData()
    }, [])

    const loadTaskData = async()=> {
        try{
            const response = await axios({
                method: "get",
                url: BASE_URL + "/tasks/",
                headers: {
                  "Content-Type": "application/json",
                 
              }
              });

              console.log("task data", response.data)

              if(response.status===200){
                  setTaskData(response.data)  
              }
        }catch(err){
            console.log(err)
        }
    }

    const createTask = async ()=> {

        const task = {
            "taskName": taskName,
            "taskDescription": taskDescription
        }

        try{
            if(taskName && taskDescription){
                const response = await axios({
                    method: "post",
                    url: BASE_URL + "/tasks/create",
                    data: JSON.stringify(task),
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
    

    const taskList = [
        {
            "taskId": 1,
            "taskName": "Cleaning ACtivity",
            "taskDescription": "When creating a house cleaning schedule some chores are meant to be done more frequently than others. For example, dirty dishes should be cleaned every day, floors should be swept, and bedding should be straightened out. These are daily chores that require constant attention because ignoring them can lead to frustration and disorder. In the same way, there are other chores that require less frequent care and can be done once a week. You can always decide what day of the week to complete them.A cleaning company in London can assist you in maintaining order by completing these weekly cleaning activities. It saves you time, worry, and energy."
        },
        {
            "taskId": 2,
            "taskName": "Teaching ACtivity",
            "taskDescription": "When creating a house cleaning schedule some chores are meant to be done more frequently than others. For example, dirty dishes should be cleaned every day, floors should be swept, and bedding should be straightened out. These are daily chores that require constant attention because ignoring them can lead to frustration and disorder. In the same way, there are other chores that require less frequent care and can be done once a week. You can always decide what day of the week to complete them.A cleaning company in London can assist you in maintaining order by completing these weekly cleaning activities. It saves you time, worry, and energy."
        },
        {
            "taskId": 3,
            "taskName": "Awareness ACtivity",
            "taskDescription": "When creating a house cleaning schedule some chores are meant to be done more frequently than others. For example, dirty dishes should be cleaned every day, floors should be swept, and bedding should be straightened out. These are daily chores that require constant attention because ignoring them can lead to frustration and disorder. In the same way, there are other chores that require less frequent care and can be done once a week. You can always decide what day of the week to complete them.A cleaning company in London can assist you in maintaining order by completing these weekly cleaning activities. It saves you time, worry, and energy."
        },
        {
            "taskId": 4,
            "taskName": "Childcare ACtivity",
            "taskDescription": "When creating a house cleaning schedule some chores are meant to be done more frequently than others. For example, dirty dishes should be cleaned every day, floors should be swept, and bedding should be straightened out. These are daily chores that require constant attention because ignoring them can lead to frustration and disorder. In the same way, there are other chores that require less frequent care and can be done once a week. You can always decide what day of the week to complete them.A cleaning company in London can assist you in maintaining order by completing these weekly cleaning activities. It saves you time, worry, and energy."
        },
        {
            "taskId": 5,
            "taskName": "Environmental ACtivity",
            "taskDescription": "When creating a house cleaning schedule some chores are meant to be done more frequently than others. For example, dirty dishes should be cleaned every day, floors should be swept, and bedding should be straightened out. These are daily chores that require constant attention because ignoring them can lead to frustration and disorder. In the same way, there are other chores that require less frequent care and can be done once a week. You can always decide what day of the week to complete them.A cleaning company in London can assist you in maintaining order by completing these weekly cleaning activities. It saves you time, worry, and energy."
        },
        {
            "taskId": 6,
            "taskName": "Plantation ACtivity",
            "taskDescription": "When creating a house cleaning schedule some chores are meant to be done more frequently than others. For example, dirty dishes should be cleaned every day, floors should be swept, and bedding should be straightened out. These are daily chores that require constant attention because ignoring them can lead to frustration and disorder. In the same way, there are other chores that require less frequent care and can be done once a week. You can always decide what day of the week to complete them.A cleaning company in London can assist you in maintaining order by completing these weekly cleaning activities. It saves you time, worry, and energy."
        },

    ]

  return (
    <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: 50}}>
        <Box display="flex" sx={{}}>
        <Typography variant='h4' sx={{flex: 1}}>Tasks</Typography>
        {role==="ADMIN" && <Button onClick={()=>setOpenFormDialog(true)} variant="contained">Create Task</Button>}
        </Box>
        
        {taskData && <Box display="flex" flexDirection="row" style={{maxHeight: '100vh', overflow: 'auto', marginTop: 20}}>
                {taskData.map(task=> <div style={{marginRight: 30}}>
                    <Task key={task.taskId} task={task}/>
                </div>)}
        </Box>}

        <Dialog open={openFormDialog} onClose={()=> setOpenFormDialog(false)}>
        <DialogTitle>Create Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="taskName"
            label="Task Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=> setTaskName(e.target.value)}
          />
          <TextField
            autoFocus
            multiline
            margin="dense"
            id="taskDesc"
            label="Task Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=> setTaskDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> setOpenFormDialog(false)}>Cancel</Button>
          <Button onClick={createTask}>Create Task</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={()=> setOpenSnackBar(false)}>
        <Alert onClose={()=> setOpenSnackBar(false)} severity="success" sx={{ width: '100%' }}>
          Task creted Successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={openSnackBarError} autoHideDuration={6000} onClose={()=> setOpenSnackBarError(false)}>
        <Alert onClose={()=> setOpenSnackBarError(false)} severity="error" sx={{ width: '100%' }}>
          Error occured while creating task!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default TaskList