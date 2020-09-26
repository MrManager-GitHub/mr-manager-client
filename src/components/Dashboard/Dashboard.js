import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import Navbar from './../../elements/Navbar/Navbar'
import Sidebar from './../../elements/Sidebar/Sidebar'
import styles from './Dashboard.module.css'
import Project from './../Project/Project'
class Dashboard extends Component {
    render() {
        return (
            <Grid container direction="row" className={styles.dashboardcontainer}>
                <Grid item>
                    <h1>Dashboard</h1>
                </Grid>
            </Grid>
        )
    }
}

export default Dashboard
