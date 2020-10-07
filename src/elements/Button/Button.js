import React from 'react'
import { Typography } from '@material-ui/core'

import styles from './Button.module.css'
import DonutSpinner from '../DonutSpinner/DonutSpinner';

const Button = props => (
  <div className={styles.circleScaleBtn} onClick={props.click}>
    <Typography component="span" variant={props.variant} align="center">{props.children}</Typography>
    {props.isLoading ? <DonutSpinner /> : null}
  </div>
);

export default Button
