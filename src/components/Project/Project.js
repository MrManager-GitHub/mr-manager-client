import React, { Component } from 'react'
import { Grid,Typography } from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CreateProjectCard from './../../elements/CreateProjectCard/CreateProjectCard'

import styles from './Project.module.css'
class Project extends Component {
    state = {
        isExpand: false,
    }
    toggleFormHandler = () => {
        this.setState(prevState => ({
            isExpand: !prevState.isExpand,
        }));
    }
    render() {
        return (
            <Grid container direction="row" className={styles.maincontainer}>
                <Grid item xs={12} align="right">
                    <Typography variant="h3" onClick={this.toggleFormHandler}>
                        <AddIcon fontSize="inherit" className={this.state.isExpand ? styles.closeicon : styles.addicon} />
                    </Typography>
                    {
                        this.state.isExpand ?
                            <div className={styles.formcontainer}>
                                <CreateProjectCard />
                            </div>
                        :
                        null    
                    }
                </Grid>
            </Grid>
        )
    }
}

export default Project
