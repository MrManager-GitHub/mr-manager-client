import React from 'react'
import {Grid,FormGroup} from '@material-ui/core'
import styles from './CreateProjectCard.module.css'
import MyInputField from './../../elements/Input/MyInputField'
import InputDate from './../Input/InputDate'
import MyButton from './../Button/Button'
import CreateProjectCardState from './CreateProjectCardSate';
import MyCheckbox from './../Input/MyCheckbox'

const initialValues = {
    projectName: '',
    projectCity: '',
    projectAddress: '',
    projectArea: '',
    projectValuation: '',
    projectSratingDate: '',
    projectEndingDate: '',
    housingCheckbox: true,
    plottingCheckbox: false,
    flatsCheckbox: true,
    shoppingComplexCheckbox: false,
    otherCheckbox: false,
}

function CreateProjectCard() {
    
    const {values,setValues,changeHandler } = CreateProjectCardState(initialValues);

   
    return (
        <Grid container direction="row" justify="space-around" className={styles.maincontainer}>
            <Grid item xs={4} container className={styles.division1} >
                <Grid item xs={5}><MyInputField type="text" label="Project name" name="projectName" value={values.projectName} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={7}/>
                <Grid item xs={7}><MyInputField type="text" label="City" name="projectCity" value={values.projectCity} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={4} />
                <Grid item xs={9}><MyInputField type="text" label="Address" name="projectAddress" value={values.projectAddress} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={3} />
            </Grid>
            <Grid item xs={4} container className={styles.division2}>
                <Grid item xs={5}><MyInputField type="text" label="Area (sqrft)" name="projectArea" value={values.projectArea} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={7} />
                <Grid item xs={7}><MyInputField type="text" label="Project valuation (Cr)" name="projectValuation" value={values.projectValuation} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={4} />
                <Grid item xs={12}>
                    <FormGroup row>
                        <MyCheckbox label="Housing" name="housingCheckbox" value={values.housingCheckbox} onChange={changeHandler} />                            
                        <MyCheckbox label="Plotting" name="plottingCheckbox" value={values.plottingCheckbox} onChange={changeHandler} />                            
                        <MyCheckbox label="Shopping Complex" name="shoppingComplexCheckbox" value={values.shoppingComplexCheckbox} onChange={changeHandler} />                            
                        <MyCheckbox label="Flats" name="flatsCheckbox" value={values.flatsCheckbox} onChange={changeHandler} />                            
                        <MyCheckbox label="Other" name="otherCheckbox" value={values.otherCheckbox} onChange={changeHandler} />                            
                    </FormGroup>
                </Grid>
            </Grid>
            <Grid item xs={2} container className={styles.division3}>
                <Grid item xs={12}><InputDate label="Starting date"/></Grid>
                <Grid item xs={12}><InputDate label="Ending date"/></Grid>
                <Grid item xs={12}><MyButton variant="body1">Add Project</MyButton></Grid>
            </Grid>
        </Grid>
    )
}

export default CreateProjectCard


