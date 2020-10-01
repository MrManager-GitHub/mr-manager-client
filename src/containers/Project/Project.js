import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import styles from './Project.module.css'
import ProjectCard from '../../elements/ProjectCard/ProjectCard'
import CreateProjectCard from '../../elements/CreateProjectCard/CreateProjectCard'

class Project extends Component {
  state = {
    isExpand: false,
    numberOfProject: '1'
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
          <Typography variant="h3" display="inline" onClick={this.toggleFormHandler}>
            <AddIcon fontSize="inherit" className={this.state.isExpand ? styles.closeicon : styles.addicon} />
          </Typography>
          {
            this.state.isExpand ?
              <div className={styles.formcontainer}>
                <CreateProjectCard />
              </div>
              :
              this.state.numberOfProject == '0' ?
                <div className={styles.arrow}>
                </div>
                :
                null
          }
        </Grid>
        <ProjectCard projectName="Skyline" projectAddress="221B Baker Street" projectArea="300000" projectValuation="15" projectStartingDate="30/10/2020" projectEndingDate="25/05/2022" />
        <ProjectCard projectName="Silver Heights" projectAddress="15 Wall Street" projectArea="150000" projectValuation="48" projectStartingDate="28/9/2020" projectEndingDate="15/07/2023" />
      </Grid>
    )
  }
}

export default Project
