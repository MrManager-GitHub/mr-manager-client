import React from 'react'
import { Grid, FormGroup } from '@material-ui/core'

import MyInputField from './../../elements/Input/MyInputField'
import MyButton from './../Button/Button'
import styles from './CreatePurchaseOrderCard.module.css'
import CreatePurchaseOrderCardState from './CreatePurchaseOrderCardState'
import Stepper from './../Stepper/Stepper'

const initialValues = {
  supplierName: '',
  supplierEmail: '',
  supplierContactNumber: '',
  productName: ''
}

function CreatePurchaseOrderCard() {
  const { values, setValues, changeHandler } = CreatePurchaseOrderCardState(initialValues);
  return (
    <Grid container direction="row" alignItems="center" justify="center" className={styles.maincontainer}>
      {/* <Grid item xs={4} container spacing={2} className={styles.division1} >
                <Grid item xs={6}><MyInputField type="text" label="Supplier name" name="supplierName" value={values.supplierName} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={6}/>
                <Grid item xs={7}><MyInputField type="text" label="Product name" name="productName" value={values.productName} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={5} />
            </Grid>
            <Grid item xs={4} container spacing={2} className={styles.division2}>
                <Grid item xs={6}><MyInputField type="email" label="Email" name="supplierEmail" value={values.supplierEmail} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={6} />
                <Grid item xs={7}><MyInputField type="number" label="Contact number" name="supplierContactNumber" value={values.supplierContactNumber} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={4} />
            </Grid>
            <Grid item xs={2} container alignItems="flex-end" className={styles.division3}>
                <Grid item xs={12}><MyButton variant="body1">Add Supplier</MyButton></Grid>
            </Grid> */}
      <Stepper firstStepTitle="Select Supplier" />
    </Grid>
  )
}

export default CreatePurchaseOrderCard
