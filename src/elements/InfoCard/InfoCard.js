import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import styles from './InfoCard.module.css'
function InfoCard(props) {
  const { type, number } = props
  return (
    <Grid container xs={12} className={styles.infoCard}>
      <Typography variant="h4" align="center" color="inherit" className={styles.statistic}>{number}</Typography>
      <Typography align="center" className={styles.title}>{type}</Typography>
    </Grid>
  )
}

export default InfoCard
