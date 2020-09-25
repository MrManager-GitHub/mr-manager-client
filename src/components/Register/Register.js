import React, { Component } from 'react'
import { Grid, Button, Link,Typography} from '@material-ui/core'
import styles from './Register.module.css'

import MyInputField from './../../elements/Input/MyInputField'
import Logo from './../../elements/Logo/logo'
import MyButton from './../../elements/Button/Button'
import Stepper from './../../elements/Stepper/Stepper'

class Register extends Component {
    render() {
        return (
            <div>
                <Grid container justify="center" alignItems="center" alignItems="center" className={styles.maincontainer}>
                    <Grid container xs={6} className={styles.cardcontainer}>
                        <Grid item xs={12} container direction="row" className={styles.formcontainer}>
                            <Grid item xs={12}><Typography variant="h4" align="center" color="primary">Signup</Typography></Grid>
                            <Grid item xs={4}>
                                <MyInputField type="text" label="First name" name="fname"/>
                            </Grid>
                            <Grid item xs={2} />
                            <Grid item xs={4}>
                                <MyInputField type="text" label="Last name" name="lname"/>
                            </Grid>
                            <Grid item xs={2} />

                            <Grid item xs={4}>
                                {/* <PhoneNumberInput /> */}
                                <MyInputField type="number" label="Phone" name="phone"/>
                            </Grid>
                            <Grid item xs={2} />
                            <Grid item xs={4}>
                                <MyInputField type="email" label="Email" name="email"/>
                            </Grid>
                            <Grid item xs={2} />

                            <Grid item xs={5}>
                                <MyInputField type="text" label="Company name" name="companyName"/>
                            </Grid>
                            <Grid item xs={7} />

                            <Grid item xs={5}>
                                <MyInputField type="password" label="Password" name="password"/>
                            </Grid>
                            <Grid item xs={7} />

                            <Grid item xs={6}>
                                <MyInputField type="password" label="Password" name="password"/>
                            </Grid>
                            <Grid item xs={6} />
                            {/* <Grid  item xs={3} />
                            <Grid item xs={3} className="buttoncontainer">
                                <MyButton variant="h6">Submit</MyButton>
                            </Grid> */}
                            <Grid item container direction="row" xs={12}>
                                <Typography variant="subtitle2" color="textPrimary">
								    Already have an account?
								    <Link component="button" variant="body2" onClick={() => {this.props.history.push('/login')}}>Login</Link>
							    </Typography>
                                <Grid item xs={9}/>
                                <Grid item xs={3} className="buttoncontainer">
                                    <MyButton variant="h6">Submit</MyButton>
                                </Grid>
                            </Grid>
                            {/* <Stepper /> */}
                        </Grid>
                        {/* <Grid xs={4} className={styles.picturecontainer}>
                            <img src="./../../elements/Images/Big bang.jpg" width="100%" height="100%" alt=""/>
                        </Grid> */}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Register
