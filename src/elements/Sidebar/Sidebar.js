import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import TimelineIcon from '@material-ui/icons/Timeline';

import styles from './Sidebar.module.css';
import Logo from './../../elements/Logo/logo';

const sideBar = props => (
  <Grid container direction="column" alignItems="center" className={styles.sidebarcontainer}>
    <Grid item align="center" className={styles.logocontainer}>
      <Logo layout="2" />
    </Grid>
    <Grid item className={styles.linkcontainer}>
      <ul>
        <NavLink exact to="/"><Typography component="li" variant="h6"><div className={styles.iconcontainer}><DashboardRoundedIcon /></div>Dashboard</Typography></NavLink>
        <NavLink to="/projects"><Typography component="li" variant="h6"><div className={styles.iconcontainer}><i class="fas fa-shapes"></i></div>Projects</Typography></NavLink>
        {/* <NavLink to="/analysis"><Typography component="li" variant="h6"><div className={styles.iconcontainer}><TimelineIcon /></div>Analysis</Typography></NavLink> */}
        <NavLink to="/purchaseOrder"><Typography component="li" variant="h6"><div className={styles.iconcontainer}><i class="fas fa-file-invoice-dollar"></i></div>Purchase Order</Typography></NavLink>
        <NavLink to="/supplier"><Typography component="li" variant="h6"><div className={styles.iconcontainer}><i class="fas fa-user-tie"></i></div>Supplier</Typography></NavLink>
        <NavLink to="/globalStore"><Typography component="li" variant="h6"><div className={styles.iconcontainer}><i class="fas fa-warehouse"></i></div>Global store</Typography></NavLink>
      </ul>
    </Grid>
  </Grid>
);

export default sideBar;
