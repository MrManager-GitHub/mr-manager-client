import React, { Component } from 'react'
import { Grid, Link, Typography } from '@material-ui/core'
import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';

import styles from './Register.module.css'
import MyInputField from './../../elements/Input/MyInputField'
// import Logo from './../../elements/Logo/logo'
import MyButton from './../../elements/Button/Button'
// import Stepper from './../../elements/Stepper/Stepper'
// import img from './../../elements/Images/site.png'

class Register extends Component {
  state = {
    token: '',
    isAuthenticated: this.props.isAuthenticated,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    error: '',
    isLoading: false
  }

  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmitHandler = () => {
    this.setState({
      isLoading: true
    });
    axios.post('https://ervgglfmyi.execute-api.us-east-1.amazonaws.com/dev/register', {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      user_email: this.state.email,
      user_password: this.state.password,
      company_name: this.state.companyName,
      user_phone_number: parseInt(this.state.phone)
    }).then(res => {
      if (res.data !== null && res.data.token !== undefined) {
        this.props.onRegister();
        const tokenDetails = JSON.parse(window.atob(res.data.token.split('.')[1]));
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('email', tokenDetails.user_email);
        localStorage.setItem('id', tokenDetails.user_id);
        localStorage.setItem('firstName', tokenDetails.first_name);
        localStorage.setItem('lastName', tokenDetails.last_name);
        localStorage.setItem('subscription', tokenDetails.subscription);
        localStorage.setItem('expiryTime', tokenDetails.exp);
        this.setState({
          isAuthenticated: true,
          isLoading: false
        });
      } else {
        this.setState({
          error: 'Please fill up proper details',
          isAuthenticated: false,
          email: '',
          password: '',
          isLoading: false
        });
      }
    }).catch(err => {
      console.log(err);
      this.setState({
        error: 'Something went wrong!',
        isLoading: false
      });
    });
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Grid container justify="center" alignItems="center" alignItems="center" className={styles.maincontainer}>
          <Grid container xs={8} justify="center" className={styles.cardcontainer}>
            <Grid item xs={11} container direction="row" spacing={2} className={styles.formcontainer}>
              <Grid item xs={12} className={styles.inputcontainer}><Typography variant="h4" align="center" color="primary">Signup</Typography></Grid>
              <Grid item xs={5}>
                <MyInputField change={this.inputChangeHandler} type="text" label="First name" name="firstName" />
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={5}>
                <MyInputField change={this.inputChangeHandler} type="text" label="Last name" name="lastName" />
              </Grid>
              {/* <Grid item xs={2} /> */}

              <Grid item xs={5}>
                {/* <PhoneNumberInput /> */}
                <MyInputField change={this.inputChangeHandler} type="number" label="Phone" name="phone" />
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={5}>
                <MyInputField change={this.inputChangeHandler} type="email" label="Email" name="email" />
              </Grid>
              {/* <Grid item xs={2} /> */}

              <Grid item xs={6}>
                <MyInputField change={this.inputChangeHandler} type="text" label="Company name" name="companyName" />
              </Grid>
              <Grid item xs={6} />

              <Grid item xs={7}>
                <MyInputField change={this.inputChangeHandler} type="password" label="Password" name="password" />
              </Grid>
              <Grid item xs={5} />

              <Grid item xs={8}>
                <MyInputField change={this.inputChangeHandler} type="password" label="Confirm Password" name="confirmPassword" />
              </Grid>
              <Grid item xs={4} />
              {/* <Grid  item xs={3} />
                            <Grid item xs={3} className="buttoncontainer">
                                <MyButton variant="h6">Submit</MyButton>
                            </Grid> */}
              <Grid item container direction="row" xs={12}>
                <Grid item xs={5}>
                  <Typography variant="subtitle2" color="textPrimary">
                    Already have an account?
								    <Link component="button" variant="body2" onClick={() => { this.props.history.push('/login') }}>   <strong>&nbsp;Login</strong></Link>
                  </Typography>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={3} className={styles.buttonContainer}>
                  <MyButton click={this.onSubmitHandler} isLoading={this.state.isLoading} variant="h6">Submit</MyButton>
                  <p>{this.state.error}</p>
                </Grid>
              </Grid>
              {/* <Stepper /> */}
            </Grid>
            {/* <Grid xs={3} className={styles.picturecontainer}>
                            <img src={img} width="100%" height="100%" alt=""/>
                        </Grid> */}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withRouter(Register);
