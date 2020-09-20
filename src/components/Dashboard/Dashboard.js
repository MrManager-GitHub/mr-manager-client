import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import Navbar from './../../elements/Navbar/Navbar'
import Sidebar from './../../elements/Sidebar/Sidebar'
import styles from './Dashboard.module.css'
class Dashboard extends Component {
    render() {
        return (
            <Grid container direction="row" className={styles.dashboardcontainer}>
                <Grid item container lg={2} mid={3} sm={4} xs={0}>
                    <Sidebar />
                </Grid>
                <Grid item container lg={10} mid={9} sm={8} xs={0}>
                    <Navbar />
                </Grid>
            </Grid>
        )
    }
}

export default Dashboard
