import React from 'react'
import {TextField} from '@material-ui/core'

import styles from './Input.module.css'

const EmailInput = props => {
	return (
		<div className={styles.textfield}>
			<TextField id="input-with-icon-grid" type="email" color="primary" fullWidth={true} onchange={props.change} label="Email" name="email" autoComplete="off" required />   
		</div>
	)
}

export default EmailInput
