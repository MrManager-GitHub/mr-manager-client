import React, { Component } from 'react'
import { Grid,Typography,Link } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import TimelineIcon from '@material-ui/icons/Timeline';
import Logo from './../../elements/Logo/logo'

import styles from './Sidebar.module.css'

class Sidebar extends Component {
    render() {
        return (
            <Grid container direction="column" alignItems="center" className={styles.sidebarcontainer}>
                <Grid item align="center" className={styles.logocontainer}>
                    <Logo layout="2" />
                </Grid>    
                <Grid item className={styles.linkcontainer}>
                    <ul>
                        <Link href="/dashboard" underline="none"><Typography component="li" variant="h6"><div className={styles.iconcontainer}><DashboardRoundedIcon /></div>Dashboard</Typography></Link>
                        <Link href="/projects" underline="none"><Typography component="li" variant="h6"><div className={styles.iconcontainer}><i class="fas fa-shapes"></i></div>Projects</Typography></Link>
                        <Link href="/analysis" underline="none"><Typography component="li" variant="h6"><div className={styles.iconcontainer}><TimelineIcon /></div>Analysis</Typography></Link>
                        <Link href="/purchaseOrder" underline="none"><Typography component="li" variant="h6"><div className={styles.iconcontainer}><i class="fas fa-file-invoice-dollar"></i></div>Purchase Order</Typography></Link>
                        <Link href="supplier" underline="none"><Typography component="li" variant="h6"><div className={styles.iconcontainer}><i class="fas fa-user-tie"></i></div>Supplier</Typography></Link>
                        <Link href="/globalStore" underline="none"><Typography component="li" variant="h6"><div className={styles.iconcontainer}><i class="fas fa-warehouse"></i></div>Global store</Typography></Link>
                    </ul>
                </Grid>
            </Grid>
        )
    }
}

export default Sidebar
