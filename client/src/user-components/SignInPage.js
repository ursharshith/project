import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function SignInPage() {

  const navigate = useNavigate();

  const handleUserSignIn =()=>{
    navigate("/user-signin")
  }

  const handleAdminSignIn =()=>{
    navigate("/admin-signin")
  }

  return (
    <div>
        <Button color="inherit" onClick={handleUserSignIn}>user SignIn</Button>
        <Button color="inherit" onClick={handleAdminSignIn}>admin SignIn</Button>
    </div>
  )
}

export default SignInPage