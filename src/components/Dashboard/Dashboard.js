import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './Dashboard.module.css'

const dashboard = props => (
  <Grid container direction="row" className={styles.dashboardcontainer}>
    <Grid item>
      <h1>Dashboard</h1>
    </Grid>
  </Grid>
);

export default dashboard
