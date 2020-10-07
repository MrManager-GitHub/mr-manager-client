import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import styles from './Project.module.css'
import ProjectCard from '../../elements/ProjectCard/ProjectCard'
import CreateProjectCard from '../../elements/CreateProjectCard/CreateProjectCard'

class Project extends Component {
  state = {
    isExpand: false,
    numberOfProject: '1',
    projects: []
  }

  toggleFormHandler = () => {
    this.setState(prevState => ({
      isExpand: !prevState.isExpand,
    }));
  }

  projectSubmitHandler = () => {
    console.log('project submitted');
    axios.post('https://ervgglfmyi.execute-api.us-east-1.amazonaws.com/dev/projects', {
      token: localStorage.getItem('token')
    }).then(res => {
      console.log(res.data);
      this.setState({
        projects: res.data.Items
      });
    });
  }

  componentDidMount() {
    axios.post('https://ervgglfmyi.execute-api.us-east-1.amazonaws.com/dev/projects', {
      token: localStorage.getItem('token')
    }).then(res => {
      console.log(res.data);
      this.setState({
        projects: res.data.Items
      });
    });
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
                <CreateProjectCard submit={this.projectSubmitHandler} />
              </div>
              :
              this.state.numberOfProject == '0' ?
                <div className={styles.arrow}>
                </div>
                :
                null
          }
        </Grid>
        {this.state.projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.project_name}
            projectAddress={project.address}
            projectArea={project.area}
            projectValuation={project.project_valuation}
            projectStartingDate={project.start_date}
            projectEndingDate={project.end_date}
            house={project.house}
            shop={project.shop}
            plot={project.plot}
            flat={project.flat}
            workers={project.workers}
          />
        ))}
      </Grid>
    )
  }
}

export default Project
