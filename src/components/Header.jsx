import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography, Dialog, DialogContent, DialogContentText, TextField, DialogActions, DialogTitle  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Logo from "../images/logo.png";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BASE_URL = "http://localhost:8000/api/v1";

const Header = () => {

  const token = localStorage.getItem("token")
  let loggedInUser = localStorage.getItem("loggedInUser")
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  const [contactDialogOpen, setContactDialogOpen] = useState(false)

  useEffect(()=> {
    loggedInUser = localStorage.getItem("loggedInUser")
  }, [])

  const navigate = useNavigate()

  const [money, setMoney] = useState(false);
  const [medicine, setMedicine] = useState(false);
  const [clothes, setClothes] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [donationType, setDonationType] = useState(null);
  const [courierTrackingId, setCourierTrackingId] = useState(null)
  const [amount, setAmount] = useState(null);
  const [clothesDescription, setClothesDescription] = useState(null);
  const [medicineName, setMedicineName] = useState(null);
  const [usedFor, setUsedFor] = useState(null);
  const [expiryDate, setExpiryDate] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [openSnackBarError, setOpenSnackBarError] = useState(false);
  const [logOutAnchorEl, setLogOutAnchorEl] = useState(null);
  
  const open = Boolean(anchorEl);

  const openLogout = Boolean(logOutAnchorEl);


  const handleDonateOnClick = (event) => {
    
    if(!isLoggedIn){
      navigate("/login-register")
    }else{
      console.log("setOpen dialog", openDialog)
      setAnchorEl(event.currentTarget);
    }
  };


  const handleDonateButtons = () => {
    setOpenDialog(true);
    setAnchorEl(null);
  };


  const handleDonate = async () => {

    const donationData = {
      donationType : donationType,
      donationAmount: amount,
      donatedClothesDescription: clothesDescription,
      medicineName: medicineName,
      usedFor: usedFor,
      expiryDate: expiryDate,
      courierTrackingId: courierTrackingId
    }

    try {
      const response = await axios({
        method: "post",
        url: BASE_URL + "/donation/donate",
        data: JSON.stringify(donationData),
        headers: {
          "Content-Type": "application/json",
          Authorization : `Bearer ${localStorage.getItem("token")}`
      }
      });

      console.log("Response donate", response.data)
    if(response.data){
      
      setOpenSnackBar(true)
          navigate("/")
      }
    } catch (err) {
      setOpenSnackBarError(true)
      console.log(err)
    }

    setAmount(null)
    setClothesDescription(null)
    setExpiryDate(null)
    setMedicineName(null)
    setUsedFor(null)
    setMoney(false)
    setMedicine(false)
    setClothes(false)
    setOpenDialog(false);
  };

  const handleCancel = () => {
    setMoney(false)
    setMedicine(false)
    setClothes(false)
    setOpenDialog(false);
  };

  return (
    <AppBar position="static" style={{ background: "#fff", margin: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Logo} style={{ width: 150 }} />
          
          {localStorage.getItem("role")!=="ADMIN" &&<Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "10%",
              marginTop: 7,
            }}
          >
            <Button onClick={()=> navigate("/")} sx={{ color: "#000" }}>Home</Button>
            <Button onClick={()=> window.location.replace("/#about")} sx={{ color: "#000" }}>About Us</Button>
            <Button onClick={()=> window.location.replace("/#happenings")} sx={{ color: "#000" }}>Happenings</Button>
            <Button onClick={()=> window.location.replace("/#reach")} sx={{ color: "#000" }}>Our Reach</Button>
            <Button onClick={()=> window.location.replace("/#work")} sx={{ color: "#000" }}>Our Work</Button>
            <Button onClick={()=> window.location.replace("/#task")} sx={{ color: "#000" }}>Tasks</Button>
            <Button onClick={()=> setContactDialogOpen(true)} sx={{ color: "#000" }}>Contact Us</Button>
            
            <Button
              id="donate-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleDonateOnClick}
              sx={{ color: "green" }}
            >
              Donate
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleDonateButtons}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={()=>{ 
                setMoney(true)
                setDonationType("MONEY")
                return handleDonateButtons()}}>Money</MenuItem>
              <MenuItem onClick={()=>{ 
                setMedicine(true)
                setDonationType("MEDICINE")
                return handleDonateButtons()}}>Medicine</MenuItem>
              <MenuItem onClick={()=>{ 
                setClothes(true)
                setDonationType("CLOTHES")
                return handleDonateButtons()}}>Clothes</MenuItem>
            </Menu>
            
          </Box>}
          <Box display="flex" sx={{flex: 1}}></Box>
          <Box sx={{ flexGrow: 0, marginTop: -5, float: "right" }}>
          {loggedInUser? <Box onClick={(event)=> setLogOutAnchorEl(event.currentTarget)} sx={{background:"red", paddingRight: 1, paddingLeft: 1, borderRadius:3}}> <Typography variant="h6" sx={{color: "ThreeDFace"}}> {loggedInUser}</Typography></Box>: <Button onClick={()=> navigate("/login-register")} sx={{ color: "blue" }}>Login</Button>}
          </Box>
        </Toolbar>
        <Menu
              id="basic-menu"
              anchorEl={logOutAnchorEl}
              open={openLogout}
              onClose={()=> setLogOutAnchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={()=> {
                localStorage.clear() 
                setLogOutAnchorEl(null)
                navigate("/")}}>Log Out</MenuItem>
            </Menu>
        <Dialog open={openDialog} onClose={handleDonate}>
        {money && <DialogTitle>Donate Money</DialogTitle>}
        {medicine && <DialogTitle>Donate Medicine</DialogTitle>}
        {clothes && <DialogTitle>Donate Clothes</DialogTitle>}
        <DialogContent>
          <DialogContentText>
            Helping Hand appreciate your effort. Thanks
          </DialogContentText>
           {money && <TextField
            autoFocus
            margin="dense"
            id="amount"
            label="Amount"
            type="number"
            fullWidth
            variant="filled"
            onChange={(e)=> setAmount(e.target.value)}
          />}
          {!money && <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Courier Tracking Id"
            type="text"
            fullWidth
            variant="filled"
            onChange={(e)=> setCourierTrackingId(e.target.value)}
          />}
           {medicine && <TextField
            autoFocus
            margin="dense"
            id="medicine_name"
            label="Medicine Name"
            type="text"
            fullWidth
            variant="filled"
            onChange={(e)=> setMedicineName(e.target.value)}
          />}
           {medicine && <TextField
            autoFocus
            margin="dense"
            id="used_for"
            label="Used For"
            type="text"
            fullWidth
            variant="filled"
            onChange={(e)=> setUsedFor(e.target.value)}
          />}
          {medicine && <TextField
            autoFocus
            margin="dense"
            id="expiry_date"
            label="Expiry Date"
            type="date"
            fullWidth
            variant="filled"
            onChange={(e)=> setExpiryDate(e.target.value)}
          />}
          {clothes && <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Clothes Description"
            type="text"
            fullWidth
            variant="filled"
            onChange={(e)=> setClothesDescription(e.target.value)}
          />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleDonate}>Donate</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={()=> setOpenSnackBar(false)}>
        <Alert onClose={()=> setOpenSnackBar(false)} severity="success" sx={{ width: '100%' }}>
          Donated Successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={openSnackBarError} autoHideDuration={6000} onClose={()=> setOpenSnackBarError(false)}>
        <Alert onClose={()=> setOpenSnackBarError(false)} severity="error" sx={{ width: '100%' }}>
          Error occured while donation!
        </Alert>
      </Snackbar>

      {/* contact us */}
      <Dialog
        open={contactDialogOpen}
        onClose={()=> setContactDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Contact Us
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Phone Number : +91 6756437890
            <br/>
            Phone Number : +91 6756437891
          </DialogContentText>
          <br/>
          <br/>
          <DialogContentText id="alert-dialog-description">
            Email : helpdesk@helpinghand.com
            <br/>
            Email : helpinghand@gmail.com
          </DialogContentText>
          <br/>
          <br/>
          <DialogContentText id="alert-dialog-description">
            Address: Road No. 420, Chor Mohalla, Pune-08
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> setContactDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      </Container>
    </AppBar>
  );
};
export default Header;


// {
//   "donationAmount": 500,
//   "donatedClothesDescription": "Clothes Description",
//   "medicineName": "Dexamethasone",
//   "usedFor": "Allergy",
//   "expiryDate": "25-07-2023"
// }