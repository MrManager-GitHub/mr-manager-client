import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// import Avatar from '@material-ui/core/Avatar';
// import Chip from '@material-ui/core/Chip';
import InfoCard from './../InfoCard/InfoCard'

import styles from './ProjectCard.module.css'
function ProjectCard(props) {
  const { projectName, projectAddress, projectArea, projectValuation, projectStartingDate, projectEndingDate } = props
  return (
    <Grid item xs={12} container justify="flex-start" alignItems="center" className={styles.projectCard}>
      <Grid item xs={2}><Typography variant="h6" className={styles.projectTitle} align="center">{projectName}</Typography></Grid>
      <Grid item xs={8} />
      <Grid item xs={2}><Typography color="primary" align="center"><EditIcon className={styles.editIcon} /><DeleteIcon className={styles.deleteIcon} /></Typography></Grid>

      <Grid item xs={2} />
      <Grid item xs={2} align="center">
        <Typography variant="body1" color="primary"><i class="fas fa-map-marker-alt"> : {projectAddress}</i></Typography>
      </Grid>
      <Grid item xs={2} align="center">
        <Typography variant="body1" color="primary"><i class="fas fa-vector-square"> : {projectArea} ft<sup>2</sup></i></Typography>
      </Grid>
      <Grid item xs={1} align="center">
        <Typography variant="body1" color="primary"><i class="fas fa-rupee-sign"> : {projectValuation} Cr.</i></Typography>
      </Grid>
      <Grid item xs={3} align="center">
        <Typography variant="body1" color="primary"><i class="fas fa-calendar-alt"> : {projectStartingDate} to {projectEndingDate}</i></Typography>
      </Grid>
      <Grid item xs={2} />

      <div className={styles.cardContainer}>
        {props.house !== undefined ? <Grid item xs={1}>
          <InfoCard type="House" number={props.house} />
        </Grid> : null}
        {props.shop !== undefined ? <Grid item xs={1}>
          <InfoCard type="Shop" number={props.shop} />
        </Grid> : null}
        {props.plot !== undefined ? <Grid item xs={1}>
          <InfoCard type="Plot" number={props.plot} />
        </Grid> : null}
        {props.flat !== undefined ? <Grid item xs={1}>
          <InfoCard type="Flat" number={props.flat} />
        </Grid> : null}
        <Grid item xs={1}>
          <InfoCard type="Workers" number={props.workers} />
        </Grid>
      </div>
    </Grid>
  )
}

export default ProjectCard
