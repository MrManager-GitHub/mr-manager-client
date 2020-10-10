import React from 'react'
import { Grid, FormGroup } from '@material-ui/core'
import styles from './CreateProjectCard.module.css'
import MyInputField from './../../elements/Input/MyInputField'
import InputDate from './../Input/InputDate'
import MyButton from './../Button/Button'
import CreateProjectCardState from './CreateProjectCardState';
import MyCheckbox from './../Input/MyCheckbox'

const initialValues = {
  token: localStorage.getItem('token'),
  project_name: '',
  city: '',
  address: '',
  area: 0,
  project_valuation: 0,
  start_date: new Date(),
  end_date: new Date(),
  house: false,
  plot: true,
  flat: false,
  shop: false,
  otherCheckbox: false,
  isLoading: false
}

function CreateProjectCard(props) {

  const { values, setValues, changeHandler, startingDateChangeHandler, endingDateChangeHandler, submitHandler,isEditing } = CreateProjectCardState(initialValues, props);

  return (
    <Grid container direction="row" justify="space-around" className={styles.maincontainer}>
      <Grid item xs={4} container className={styles.division1} >
        <Grid item xs={5}><MyInputField type="text" label="Project name" name="project_name" value={values.project_name} change={changeHandler} fullWidth={true} /></Grid><Grid item xs={7} />
        <Grid item xs={7}><MyInputField type="text" label="City" name="city" value={values.city} change={changeHandler} fullWidth={true} /></Grid><Grid item xs={4} />
        <Grid item xs={9}><MyInputField type="text" label="Address" name="address" value={values.address} change={changeHandler} fullWidth={true} /></Grid><Grid item xs={3} />
      </Grid>
      <Grid item xs={4} container className={styles.division2}>
        <Grid item xs={5}><MyInputField type="text" label="Area (sqrft)" name="area" value={values.area} change={changeHandler} fullWidth={true} /></Grid><Grid item xs={7} />
        <Grid item xs={7}><MyInputField type="text" label="Project valuation (Cr)" name="project_valuation" value={values.project_valuation} change={changeHandler} fullWidth={true} /></Grid><Grid item xs={4} />
        <Grid item xs={12}>
          <FormGroup row>
            <MyCheckbox label="Housing" name="house" value={values.house} onChange={changeHandler} />
            <MyCheckbox label="Plotting" name="plot" value={values.plot} onChange={changeHandler} />
            <MyCheckbox label="Shopping Complex" name="shop" value={values.shop} onChange={changeHandler} />
            <MyCheckbox label="Flats" name="flat" value={values.flat} onChange={changeHandler} />
            <MyCheckbox label="Other" name="otherCheckbox" value={values.otherCheckbox} onChange={changeHandler} />
          </FormGroup>
        </Grid>
      </Grid>
      <Grid item xs={2} container className={styles.division3}>
        <Grid item xs={12}><InputDate onChange={startingDateChangeHandler} selectedDate={values.start_date} label="Starting date" /></Grid>
        <Grid item xs={12}><InputDate onChange={endingDateChangeHandler} selectedDate={values.end_date} label="Ending date" /></Grid>
        <Grid item xs={12}><MyButton isLoading={values.isLoading} click={submitHandler} variant="body1">Add Project</MyButton></Grid>
      </Grid>
    </Grid>
  )
}

export default CreateProjectCard
