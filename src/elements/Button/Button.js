import React from 'react'
import {Typography} from '@material-ui/core'
import styles from './Button.module.css'

const Button = props => {
    return (
        <div className={styles.circleScaleBtn}>
            <Typography component="span" variant={props.variant} align="center">{props.children}</Typography>
        </div>
    )
}

export default Button
