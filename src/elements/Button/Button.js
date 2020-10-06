import React from 'react'
import { Typography } from '@material-ui/core'
import styles from './Button.module.css'

const Button = props => (
  <div className={styles.circleScaleBtn} onClick={props.click}>
    <Typography component="span" variant={props.variant} align="center">{props.children}</Typography>
    {props.isLoading ? <div className={styles.donutSpinner}></div> : null}
  </div>
);

export default Button
