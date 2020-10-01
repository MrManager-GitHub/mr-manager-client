import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import styles from './Supplier.module.css'
import SupplierTable from './../../elements/SupplierTable/SupplierTable'
import AddSupplierCard from './../../elements/AddSupplierCard/AddSupplierCard'

class Supplier extends Component {
  state = {
    isExpand: false,
    numberOfSupplier: '1'
  }

  toggleFormHandler = () => {
    this.setState(prevState => ({
      isExpand: !prevState.isExpand,
    }));
  }

  render() {
    return (
      <Grid container direction="row" className={styles.suppliercontainer}>
        <Grid item xs={12} align="right" className={styles.addsuppliercontainer}>
          <Typography variant="h3" display="inline" onClick={this.toggleFormHandler}>
            <AddIcon fontSize="inherit" className={this.state.isExpand ? styles.closeicon : styles.addicon} />
          </Typography>
          {
            this.state.isExpand ?
              <div className={styles.formcontainer}>
                <AddSupplierCard />
              </div>

              :
              this.state.numberOfSupplier == '0' ?
                <div className={styles.arrow}>
                </div>
                :
                null
          }
        </Grid>
        <SupplierTable />
      </Grid>
    )
  }
}

export default Supplier
