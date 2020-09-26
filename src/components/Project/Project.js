import React, { Component } from 'react'
import { Grid,Typography } from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CreateProjectCard from './../../elements/CreateProjectCard/CreateProjectCard'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './Project.module.css'
class Project extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isExpand: false,
            numberOfProject: ''
        }
    }

    toggleFormHandler = () => {
        this.setState(prevState => ({
            isExpand: !prevState.isExpand,
        }));
    }
    render() {
        return (
            <Grid container direction="row" className={styles.projectcontainer}>
                <Grid item xs={12} align="right" className={styles.addprojectcontainer}>
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
                <Grid item xs={12} container justify="center" alignItems="center" className={styles.projectCard}>
                    <Grid item xs={2}><Typography variant="h6" className={styles.projectTitle} align="center">Skyline</Typography></Grid>
                    <Grid item xs={8}/>
                    <Grid item xs={2}><Typography color="primary" align="center"><EditIcon className={styles.editIcon} /><DeleteIcon className={styles.deleteIcon} /></Typography></Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Project
