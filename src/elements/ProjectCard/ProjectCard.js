import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
// import Avatar from '@material-ui/core/Avatar';
// import Chip from '@material-ui/core/Chip';
import InfoCard from './../InfoCard/InfoCard'
import InputDate from './../Input/InputDate'

import styles from './ProjectCard.module.css'
import MyInputField from './../Input/MyInputField'
function ProjectCard(props) {
  const { projectName, projectAddress, projectArea, projectValuation, projectStartingDate, projectEndingDate, editMode, isEditing } = props
  return (
      <>
      {
        isEditing ? 
        <Grid item xs={12} container justify="flex-start" alignItems="center" className={styles.projectCard}>
            <Grid item xs={2}><Typography variant="h6" className={styles.projectTitle} align="center">{projectName}</Typography></Grid>
            <Grid item xs={8} />
            <Grid item xs={2}><Typography color="primary" align="center"><SaveIcon className={styles.editIcon} onClick={editMode} /></Typography></Grid>

            <Grid item xs={4} container className={styles.division1} >
              <Grid item xs={5}><MyInputField type="text" label="Project name" name="project_name" value={projectName} fullWidth={true} /></Grid><Grid item xs={7} />
              <Grid item xs={9}><MyInputField type="text" label="Address" name="address" value={projectAddress} fullWidth={true} /></Grid><Grid item xs={3} />
            </Grid>
            <Grid item xs={4} container className={styles.division2}>
              <Grid item xs={5}><MyInputField type="text" label="Area (sqrft)" name="area" value={projectArea} fullWidth={true} /></Grid><Grid item xs={7} />
              <Grid item xs={7}><MyInputField type="text" label="Project valuation (Cr)" name="project_valuation" value={projectValuation} fullWidth={true} /></Grid><Grid item xs={4} />
            </Grid>
            <Grid item xs={2} container className={styles.division3}>
              <Grid item xs={12}><InputDate selectedDate={projectStartingDate} label="Starting date" /></Grid>
              <Grid item xs={12}><InputDate selectedDate={projectEndingDate} label="Ending date" /></Grid>
            </Grid>
            <div className={styles.cardContainer}>
              {props.house !== undefined ? <Grid item xs={1}>
                {/* <InfoCard type="House" number={props.house} /> */}
                <MyInputField type="number" label="Houses" name="houses" value={props.house} fullWidth={true} />
              </Grid> : null}
              {props.shop !== undefined ? <Grid item xs={1}>
                {/* <InfoCard type="Shop" number={props.shop} /> */}
                <MyInputField type="number" label="Shop" name="shop" value={props.shop} fullWidth={true} />
              </Grid> : null}
              {props.plot !== undefined ? <Grid item xs={1}>
                <InfoCard type="Plot" number={props.plot} />
                <MyInputField type="number" label="Plot" name="plot" value={props.plot} fullWidth={true} />
              </Grid> : null}
              {props.flat !== undefined ? <Grid item xs={1}>
                {/* <InfoCard type="Flat" number={props.flat} /> */}
                <MyInputField type="number" label="Flat" name="flat" value={props.flat} fullWidth={true} />
              </Grid> : null}
              <Grid item xs={1}>
                {/* <InfoCard type="Workers" number={props.workers} /> */}
                <MyInputField type="number" label="Workers" name="workers" value={props.workers} fullWidth={true} />
              </Grid>
            </div>
        </Grid>
          :
          <Grid item xs={12} container justify="flex-start" alignItems="center" className={styles.projectCard}>
            <Grid item xs={2}><Typography variant="h6" className={styles.projectTitle} align="center">{projectName}</Typography></Grid>
            <Grid item xs={8} />
            <Grid item xs={2}><Typography color="primary" align="center"><EditIcon className={styles.editIcon} onClick={editMode} /><DeleteIcon className={styles.deleteIcon} /></Typography></Grid>

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
            <Grid item xs={5} align="center">
              <Typography variant="body1" color="primary"><i class="fas fa-calendar-alt"> : {projectStartingDate} to {projectEndingDate}</i></Typography>
            </Grid>
            <Grid item xs={0} />

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
      }
      </>
  )
}

export default ProjectCard
