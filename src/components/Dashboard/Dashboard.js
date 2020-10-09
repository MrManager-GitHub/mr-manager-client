import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios';

import styles from './Dashboard.module.css'
import Site from './../../elements/Images/site2.png'
import Worker from './../../elements/Images/worker.png'
import Block from './../../elements/Images/block.png'
import LineChart from './../../elements/LineChart/LineChart'
import DoughnutChart from './../../elements/DoughnutChart/DoughnutChart'
import DonutSpinner from '../../elements/DonutSpinner/DonutSpinner';

class Dashboard extends Component {
  state = {
    projectCount: 0,
    workersCount: 0,
    isLoading: true
  }

  componentDidMount() {
    // Get project details
    axios.post('https://ervgglfmyi.execute-api.us-east-1.amazonaws.com/dev/projects', {
      token: localStorage.getItem('token')
    }).then(res => {
      console.log(res.data);
      const projectCount = res.data.Count;
      let workersCount = 0;

      res.data.Items.forEach(item => {
        workersCount += item.workers;
      });

      this.setState({
        projectCount: projectCount,
        workersCount: workersCount,
        isLoading: false
      });
    }).catch(err => {
      console.log(err);
      this.setState({
        isLoading: false
      });
    });
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/login" />
    }
    if (this.state.isLoading) {
      return <DonutSpinner style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    }
    return (
      <Grid container direction="row" className={styles.dashboardcontainer}>
        <Grid item container xs={12} justify="space-between" className={styles.statisticCardContainer}>
          <Grid item container xs={3} className={styles.project} onClick={() => this.props.history.push('/projects')}>
            <Grid item xs={8} className={styles.info}>
              <Typography variant="h4" color="inherit">{this.state.projectCount < 10 ? '0' + this.state.projectCount : this.state.projectCount}</Typography>
              <Typography variant="body1" color="inherit">Projects</Typography>
            </Grid>
            <Grid item xs={4}>
              <div className={styles.siteImg}><img src={Site} width="100%" height="100%" alt="" /></div>
            </Grid>
            <Grid item xs={12} className={styles.createProject}>
              <Typography variant="subtitle2" color="inherit" align="center"><i class="fas fa-plus"></i> Create a new project</Typography>
            </Grid>
          </Grid>
          <Grid item container xs={3} className={styles.po}>
            <Grid item xs={8} className={styles.info}>
              <Typography variant="h4" color="inherit">02</Typography>
              <Typography variant="body1" color="inherit">Purchase Orders</Typography>
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
              <Typography variant="h4" color="inherit">{this.state.workersCount < 10 ? '0' + this.state.workersCount : this.state.workersCount}</Typography>
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
        <Grid item container justify="space-between" xs={12} style={{ marginTop: '44px' }}>
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

export default withRouter(Dashboard);
