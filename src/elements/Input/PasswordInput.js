import React from 'react'
import { TextField } from '@material-ui/core'

import styles from './Input.module.css'

const PasswordInput = props =>{
    return (
        <div className={styles.textfield}>
            <TextField id="input-with-icon-grid" type="Password" fullWidth={true} color="primary" onchange={props.change} label="Password" name="password" required />   
        </div>
    )
}

export default PasswordInput
