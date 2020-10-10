import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import styles from './Project.module.css'
import ProjectCard from '../../elements/ProjectCard/ProjectCard'
import CreateProjectCard from '../../elements/CreateProjectCard/CreateProjectCard'
import DonutSpinner from '../../elements/DonutSpinner/DonutSpinner';

class Project extends Component {
  state = {
    isExpand: false,
    numberOfProject: '1',
    projects: [],
    isLoading: true,
    isEditing: false,
  }

  toggleFormHandler = () => {
    this.setState(prevState => ({
      isExpand: !prevState.isExpand,
    }));
  }

  projectSubmitHandler = () => {
    this.setState(prevState => ({
      isExpand: !prevState.isExpand,
    }));
    console.log('project submitted');
    axios.post('https://ervgglfmyi.execute-api.us-east-1.amazonaws.com/dev/projects', {
      token: localStorage.getItem('token')
    }).then(res => {
      console.log(res.data);
      this.setState({
        projects: res.data.Items,
        isLoading: false
      });
    }).catch(err => {
      console.log(err);
      this.setState({
        isLoading: false
      });
    });
  }

  componentDidMount() {
    axios.post('https://ervgglfmyi.execute-api.us-east-1.amazonaws.com/dev/projects', {
      token: localStorage.getItem('token')
    }).then(res => {
      this.setState({
        projects: res.data.Items,
        isLoading: false
      });
    }).catch(err => {
      console.log(err);
      this.setState({
        isLoading: false
      });
    });
  }

  editModeHandler = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
    }));
  }

  render() {
    if (this.state.isLoading) {
      return <DonutSpinner style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    }
    return (
      <Grid container direction="row" className={styles.projectcontainer}>
        <Grid item xs={12} align="right" className={styles.addprojectcontainer}>
          <Typography variant="h3" display="inline" onClick={this.toggleFormHandler}>
            <AddIcon fontSize="inherit" className={this.state.isExpand ? styles.closeicon : styles.addicon} />
          </Typography>
          {
            this.state.isExpand ?
              <div className={styles.formcontainer}>
                <CreateProjectCard isEditing={this.isEditing} submit={this.projectSubmitHandler} />
              </div>
              :
              this.state.projects.length == 0 ?
                <div className={styles.arrow}>
                </div>
                :
                null
          }
        </Grid>
        {this.state.projects.map(project => (
          
          <ProjectCard
            key={project.project_id}
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
            editMode={this.editModeHandler}
            isEditing={this.state.isEditing}
          />
        ))}
      </Grid>
    )
  }
}

export default Project
