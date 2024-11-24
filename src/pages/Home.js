import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleSuccess } from '../utils';

function Home() {
    const [loggedInUser, setloggedInUser]= useState('');

    const navigate= useNavigate();
    useEffect(()=>{
        setloggedInUser(localStorage.getItem('loggedInUser'));
    }, [])

    const handleLogout=(e)=>{
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout')
        setTimeout(() => {
            navigate('/login')
        }, 1000);
    }
  return (
    <div>

    <div>{loggedInUser}</div>
    <button onClick={handleLogout}>Logout</button>
    <ToastContainer/>
    </div>
  )
}

export default Home