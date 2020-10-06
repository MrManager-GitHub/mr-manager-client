import React, { Component } from 'react'
import { Grid, Button, Link,Typography} from '@material-ui/core'
import styles from './Register.module.css'

import MyInputField from './../../elements/Input/MyInputField'
import Logo from './../../elements/Logo/logo'
import MyButton from './../../elements/Button/Button'
import Stepper from './../../elements/Stepper/Stepper'
import img from './../../elements/Images/site.png'

class Register extends Component {
    render() {
        return (
            <div>
                <Grid container justify="center" alignItems="center" alignItems="center" className={styles.maincontainer}>
                    <Grid container xs={8} justify="center" className={styles.cardcontainer}>
                        <Grid item xs={11} container direction="row" spacing={2} className={styles.formcontainer}>
                            <Grid item xs={12} className={styles.inputcontainer}><Typography variant="h4" align="center" color="primary">Signup</Typography></Grid>
                            <Grid item xs={5}>
                                <MyInputField type="text" label="First name" name="fname"/>
                            </Grid>
                            <Grid item xs={2} />
                            <Grid item xs={5}>
                                <MyInputField type="text" label="Last name" name="lname"/>
                            </Grid>
                            {/* <Grid item xs={2} /> */}

                            <Grid item xs={5}>
                                {/* <PhoneNumberInput /> */}
                                <MyInputField type="number" label="Phone" name="phone"/>
                            </Grid>
                            <Grid item xs={2} />
                            <Grid item xs={5}>
                                <MyInputField type="email" label="Email" name="email"/>
                            </Grid>
                            {/* <Grid item xs={2} /> */}

                            <Grid item xs={6}>
                                <MyInputField type="text" label="Company name" name="companyName"/>
                            </Grid>
                            <Grid item xs={6} />

                            <Grid item xs={7}>
                                <MyInputField type="password" label="Password" name="password"/>
                            </Grid>
                            <Grid item xs={5} />

                            <Grid item xs={8}>
                                <MyInputField type="password" label="Password" name="password"/>
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
								    <Link component="button" variant="body2" onClick={() => {this.props.history.push('/login')}}>   Login</Link>
                                </Typography>
                                </Grid>
                                <Grid item xs={5}/>
                                <Grid item xs={2} className="buttoncontainer">
                                    <MyButton variant="h6">Submit</MyButton>
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

export default Register
