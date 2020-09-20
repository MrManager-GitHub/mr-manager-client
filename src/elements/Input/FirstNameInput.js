import React from 'react'
import {TextField} from '@material-ui/core'

import styles from './Input.module.css'
const FirstNameInput = props => {
    return (
        <div className={styles.textfield}>
			<TextField id="input-with-icon-grid" type="text" color="primary" fullWidth={true} onchange={props.change} label="First name" name="fname" autoComplete="off" required />   
		</div>
    )
}

export default FirstNameInput
