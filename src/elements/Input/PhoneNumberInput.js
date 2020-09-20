import React from 'react'
import {TextField} from '@material-ui/core'

import styles from './Input.module.css'
  
const PhoneNumberInput = props => {
    return (
        <div className={styles.textfield}>
			<TextField id="input-with-icon-grid" type="number" color="primary" fullWidth={true} onchange={props.change} label="Phone numer" name="phonenumber" autoComplete="off" required />   
		</div>
    )
}

export default PhoneNumberInput
