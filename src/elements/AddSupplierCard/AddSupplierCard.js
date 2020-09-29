import React from 'react'
import {Grid,FormGroup} from '@material-ui/core'
import styles from './AddSupplierCard.module.css'
import MyInputField from './../../elements/Input/MyInputField'
import MyButton from './../Button/Button'
import AddSupplierCardState from './AddSupplierCardState'

const initialValues = {
    supplierName: '',
    supplierEmail: '',
    supplierContactNumber: '',
    productName: ''
}


function AddSupplierCard() {
    const {values,setValues,changeHandler } = AddSupplierCardState(initialValues);
    return (
        <Grid container direction="row" justify="space-around" className={styles.maincontainer}>
            <Grid item xs={4} container spacing={2} className={styles.division1} >
                <Grid item xs={6}><MyInputField type="text" label="Supplier name" name="supplierName" value={values.supplierName} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={6}/>
                <Grid item xs={7}><MyInputField type="text" label="Product name" name="productName" value={values.productName} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={5} />
            </Grid>
            <Grid item xs={4} container spacing={2} className={styles.division2}>
                <Grid item xs={6}><MyInputField type="email" label="Email" name="supplierEmail" value={values.supplierEmail} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={6} />
                <Grid item xs={7}><MyInputField type="number" label="Contact number" name="supplierContactNumber" value={values.supplierContactNumber} onChange={changeHandler} fullWidth={true} /></Grid><Grid item xs={4} />
            </Grid>
            <Grid item xs={2} container alignItems="flex-end" className={styles.division3}>
                <Grid item xs={12}><MyButton variant="body1">Add Supplier</MyButton></Grid>
            </Grid>
        </Grid>
    )
}

export default AddSupplierCard