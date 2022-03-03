import React, {useState, useEffect } from 'react'
import axios from 'axios'

import { Box, Typography } from "@mui/material"


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BASE_URL = "http://localhost:8000/api/v1";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const Donation = () => {

    const [donationData, setDonationData] = useState(null)

    useEffect(()=> {
        loadDonationData()
    }, [])

    const loadDonationData = async()=> {
        try{
            const response = await axios({
                method: "get",
                url: BASE_URL + "/donation/",
                headers: {
                  "Content-Type": "application/json",
                  Authorization : `Bearer ${localStorage.getItem("token")}`
              }
              });

              if(response.status===200){
                  setDonationData(response.data)  
              }
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <Box display="flex" style={{marginBottom: 30}}>
            <Typography variant='h5'>Donations</Typography>
        </Box>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Donation Type</StyledTableCell>
            <StyledTableCell align="right">Donation Id</StyledTableCell>
            <StyledTableCell align="right">Courier Tracking Id</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Medicine Name</StyledTableCell>
            <StyledTableCell align="right">Expiry Date</StyledTableCell>
            <StyledTableCell align="right">Used For</StyledTableCell>
            <StyledTableCell align="right">Clothes Description</StyledTableCell>
          </TableRow>
        </TableHead>
        {donationData && <TableBody>
          {donationData.map((row) => (
            <StyledTableRow key={row.donationId}>
              <StyledTableCell component="th" scope="row">
                {row.donationType}
              </StyledTableCell>
              <StyledTableCell align="right">{row.donationId}</StyledTableCell>
              <StyledTableCell align="right">{row.courierTrackingId}</StyledTableCell>
              <StyledTableCell align="right">{row.donationAmount}</StyledTableCell>
              <StyledTableCell align="right">{row.medicineName}</StyledTableCell>
              <StyledTableCell align="right">{row.usedFor}</StyledTableCell>
              <StyledTableCell align="right">{row.expiryDate}</StyledTableCell>
              <StyledTableCell align="right">{row.donatedClothesDescription}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>}
      </Table>
    </TableContainer>

    </div>
  )
}

export default Donation