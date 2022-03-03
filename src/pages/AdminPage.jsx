import React, {useState, useEffect} from 'react'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import TaskList from '../components/TaskList';
import HappeningsList from '../components/HappeningsList';
import Donation from '../components/Donation';
import Footer from '../components/Footer'

const AdminPage = () => {

    const navigate = useNavigate()
    useEffect(()=> {
        if(localStorage.getItem("role")!=="ADMIN"){
          navigate("/")
        }
    }, [])
  return (
    <div>
        <Header/>
        <div>
            <TaskList/>
        </div>
        <div>
            <HappeningsList/>
        </div>
        <div style={{marginLeft:60, marginRight: 60, marginTop: 100}}>
        <Donation/>
        </div>
        <div>
          <Footer/>
        </div>

    </div>
  )
}

export default AdminPage