import React from 'react'
import {TextField} from '@material-ui/core'

import styles from './Input.module.css'
const MyInputField = props => {
    return (
        <div className={styles.textfield}>
            <TextField type={props.type} color={props.color} fullWidth={true} onChange={props.onChange} value={props.value} label={props.label} name={props.name} autoComplete="off" required />   
		</div>
    )
}

export default MyInputField
