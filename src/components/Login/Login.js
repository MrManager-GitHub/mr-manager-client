import React, { Component } from 'react'
import { Grid,Button,Link,Typography,Paper,Box } from '@material-ui/core'

import styles from './Login.module.css'
import MyButton from './../../elements/Button/Button'
import EmailInput from './../../elements/Input/EmailInput'
import PasswordInput from './../../elements/Input/PasswordInput'
import Logo from './../../elements/Logo/logo'

class Login extends Component {
	render() {
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
								<Link component="button" variant="body2" onClick={() => {this.props.history.push('/register')}}>Signup</Link>
							</Typography>
						</Grid>
						<br/>
						<Grid item className={styles.inputcontainer}>
							<EmailInput />
						</Grid>
						<Grid item className={styles.inputcontainer}>
							<PasswordInput />
						</Grid>
						<br/>
						<Grid item className={styles.buttoncontainer}>
							{/* <Button variant="contained" fullWidth color="primary">
								Login
							</Button> */}
							<MyButton variant="h6">Login</MyButton>
						</Grid>
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default Login
