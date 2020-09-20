import React from 'react'
import {TextField} from '@material-ui/core'

import styles from './Input.module.css'

const CompanyNameInput = props => {
	return (
		<div className={styles.textfield}>
			<TextField id="input-with-icon-grid" type="text" color="primary" fullWidth={true} onchange={props.change} label="Company name" name="companyname" autoComplete="off" required />   
		</div>
	)
}

export default CompanyNameInput
