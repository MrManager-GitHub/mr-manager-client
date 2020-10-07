import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
// import Navbar from './../../elements/Navbar/Navbar'
// import Sidebar from './../../elements/Sidebar/Sidebar'
import styles from './Dashboard.module.css'
// import Project from '../../containers/Project/Project'
import Site from './../../elements/Images/site2.png'
import Worker from './../../elements/Images/worker.png'
import Block from './../../elements/Images/block.png'
import { Redirect } from 'react-router-dom'
import LineChart from './../../elements/LineChart/LineChart'
import DoughnutChart from './../../elements/DoughnutChart/DoughnutChart'

class Dashboard extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/login" />
    }
    return (
      <Grid container direction="row" className={styles.dashboardcontainer}>
        <Grid item container xs={12} justify="space-between" className={styles.statisticCardContainer}>
          <Grid item container xs={3} className={styles.project}>
            <Grid item xs={8} className={styles.info}>
              <Typography variant="h4" color="inherit">05</Typography>
              <Typography variant="body1" color="inherit">Projects</Typography>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.siteImg}><img src={Site} width="100%" height="100%" alt="" /></div>
            </Grid>
            <Grid item xs={12} className={styles.createProject}>
              <Typography variant="subtitle2" color="inherit" align="center"><i class="fas fa-plus"></i> Create a new project</Typography>
            </Grid>
          </Grid>
          {/* <Grid item xs={1} /> */}
          <Grid item container xs={3} className={styles.po}>
            <Grid item xs={8} className={styles.info}>
              <Typography variant="h4" color="inherit">01</Typography>
              <Typography variant="body1" color="inherit">Pending Orders</Typography>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.siteImg}><img src={Block} width="100%" height="100%" alt="" /></div>
            </Grid>
            <Grid item xs={12} className={styles.purchaseOrder}>
              <Typography variant="subtitle2" color="inherit" align="center"><i class="fas fa-shopping-cart"></i> Purchase Order</Typography>
            </Grid>
          </Grid>
          <Grid item container xs={3} className={styles.worker}>
            <Grid item xs={8} className={styles.info}>
              <Typography variant="h4" color="inherit">105</Typography>
              <Typography variant="body1" color="inherit">Workers</Typography>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.siteImg}><img src={Worker} width="100%" height="100%" alt="" /></div>
            </Grid>
            <Grid item xs={12} className={styles.workerlist}>
              <Typography variant="subtitle2" color="inherit" align="center"><i class="fas fa-list"></i> Worker list</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justify="space-between" xs={12}>
          <Grid item xs={6} className={styles.lineChartContainer}>
            <Typography variant="h5" color="primary">Expenses</Typography>
            <LineChart />
          </Grid>
          <Grid item xs={5} className={styles.lineChartContainer}>
            <Typography variant="h5" color="primary">Type of Expense</Typography>
            <DoughnutChart />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Dashboard
