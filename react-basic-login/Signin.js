import React, { useState } from 'react';
import swal from 'sweetalert';

async function loginUser(credentials) {
    return fetch('https://www.mecallapi.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
  
  export default function Signin() {
    const classes = useStyles();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      const response = await loginUser({
        username,
        password
      });
      if ('accessToken' in response) {
        swal("Success", response.message, "success", {
          buttons: false,
          timer: 2000,
        })
        .then((value) => {
          localStorage.setItem('accessToken', response['accessToken']);
          localStorage.setItem('user', JSON.stringify(response['user']));
          window.location.href = "/profile";
        });
      } else {
        swal("Failed", response.message, "error");
      }
    }


    return (
        <Grid container className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} md={7} className={classes.image} />
          <Grid item xs={12} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  onChange={e => setUserName(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      );
    }