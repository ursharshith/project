import React, { useState } from 'react'
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const defaultTheme = createTheme();

function UserSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const handleUserRegister =()=>{
        navigate("/user-registration");
  }

  localStorage.setItem("userSignIn", false);

  const handleSignIn =(e) =>{
    e.preventDefault();
    axios.post('http://localhost:8080/user-signin', {email, password})
    .then(result => {console.log(result)
      if(result.data === "Success"){
        navigate("/user-portal")
        localStorage.setItem("userSignIn", true);
        localStorage.setItem("userEmail", email);
      }
      else {
        setLoginError(true);
        setTimeout(() => {
          setLoginError(false);
        }, 5000);
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            {loginError && (
                <Grid container justifyContent="flex-start">
                  <Grid item><p style={{color:"red", fontSize:"14px", marginTop:"5px"}}>Id or Password miss match</p></Grid>
                </Grid>
              )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                New User?<Button onClick={handleUserRegister}>Register</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  )
}

export default UserSignIn