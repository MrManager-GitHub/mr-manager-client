import React, { Component } from 'react'
import { Grid, Button, Link, Typography, Paper, Box } from '@material-ui/core'
import axios from 'axios';

import styles from './Login.module.css'
import MyButton from './../../elements/Button/Button'
import MyInputField from './../../elements/Input/MyInputField'
import Logo from './../../elements/Logo/logo'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    token: '',
    isAuthenticated: this.props.isAuthenticated,
    email: '',
    password: '',
    error: ''
  }

  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmitHandler = () => {
    // Validation is left
    axios.post('https://ervgglfmyi.execute-api.us-east-1.amazonaws.com/dev/login', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      console.log(res);
      if (res.data !== null && res.data.token !== undefined) {
        this.props.onAuth(res.data.token);
        this.setState({
          isAuthenticated: true
        });
      } else {
        this.setState({
          error: 'Email or Password was wrong',
          isAuthenticated: false,
          email: '',
          password: ''
        });
      }
    }).catch(err => {
      console.log(err);
      this.setState({
        error: 'Something went wrong!'
      });
    });
  }

  render() {
    if (this.state.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Grid container direction="row" className={styles.main}>
          <Grid item lg={8} md={7} sm={6} xs={0} className={styles.picturecontainer} >
            <Logo layout="1" />
          </Grid>
          <Grid item lg={4} md={5} sm={6} xs={12} container direction="column" justify="center" alignItems="center" className={styles.logincontainer}>
            <Grid item className={styles.contentcontainer1}>
              <Typography variant="h3" color="primary">Login</Typography>
            </Grid>
            <Grid item className={styles.contentcontainer2}>
              <Typography variant="subtitle2" color="textPrimary">
                Don't have an account?
								<Link component="button" variant="body2" onClick={() => { this.props.history.push('/register') }}>Signup</Link>
              </Typography>
            </Grid>
            <br />
            <Grid item className={styles.inputcontainer}>
              <MyInputField change={this.inputChangeHandler} type="email" value={this.state.email} label="Email" name="email" />
            </Grid>
            <Grid item className={styles.inputcontainer}>
              <MyInputField change={this.inputChangeHandler} type="password" value={this.state.password} label="Password" name="password" />
            </Grid>
            <br />
            <Grid item className={styles.buttoncontainer}>
              {/* <Button variant="contained" fullWidth color="primary">
								Login
							</Button> */}
              <MyButton variant="h6" click={this.onSubmitHandler}>Login</MyButton>
            </Grid>
            <p>{this.state.error}</p>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Login
