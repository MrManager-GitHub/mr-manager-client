import React, { Component } from 'react'
import { Grid, Button, Link,Typography} from '@material-ui/core'
import styles from './Register.module.css'

import FirstNameInput from './../../elements/Input/FirstNameInput'
import LastNameInput from './../../elements/Input/LastNameInput'
import PhoneNumberInput from './../../elements/Input/PhoneNumberInput'
import EmailInput from './../../elements/Input/EmailInput'
import PasswordInput from './../../elements/Input/PasswordInput'
import Logo from './../../elements/Logo/logo'
import MyButton from './../../elements/Button/Button'
import Stepper from './../../elements/Stepper/Stepper'
import CompanyNameInput from './../../elements/Input/CompanyNameInput'

class Register extends Component {
    render() {
        return (
            <div>
                <Grid container justify="center" alignItems="center" alignItems="center" className={styles.maincontainer}>
                    <Grid container xs={6} className={styles.cardcontainer}>
                        <Grid item xs={12} container direction="row" className={styles.formcontainer}>
                            <Grid item xs={12}><Typography variant="h4" align="center" color="primary">Signup</Typography></Grid>
                            <Grid item xs={4}>
                                <FirstNameInput />
                            </Grid>
                            <Grid item xs={2} />
                            <Grid item xs={4}>
                                <LastNameInput />
                            </Grid>
                            <Grid item xs={2} />

                            <Grid item xs={4}>
                                <PhoneNumberInput />
                            </Grid>
                            <Grid item xs={2} />
                            <Grid item xs={4}>
                                <EmailInput />
                            </Grid>
                            <Grid item xs={2} />

                            <Grid item xs={5}>
                                <CompanyNameInput />
                            </Grid>
                            <Grid item xs={7} />

                            <Grid item xs={5}>
                                <PasswordInput />
                            </Grid>
                            <Grid item xs={7} />

                            <Grid item xs={6}>
                                <PasswordInput />
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
