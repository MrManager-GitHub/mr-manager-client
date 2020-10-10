import React, { Component } from 'react'
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import styles from './Supplier.module.css'
import SupplierTable from '../../elements/SupplierTable/SupplierTable'
import AddSupplierCard from '../../elements/AddSupplierCard/AddSupplierCard'
import DonutSpinner from '../../elements/DonutSpinner/DonutSpinner';

class Supplier extends Component {
  state = {
    isExpand: false,
    numberOfSupplier: '1',
    suppliers: [],
    isLoading: false,
    isSubmittingSupplier: false
  }

  toggleFormHandler = () => {
    this.setState(prevState => ({
      isExpand: !prevState.isExpand,
    }));
  }

  addSupplierHandler = values => {
    this.setState({ isSubmittingSupplier: true });
    axios.post('https://ervgglfmyi.execute-api.us-east-1.amazonaws.com/dev/supplier', {
      token: localStorage.getItem('token'),
      supplier_name: values.supplierName,
      supplier_email: values.supplierEmail,
      product: values.productName,
      phone_number: parseInt(values.supplierContactNumber)
    }).then(res => {
      this.setState({
        isSubmittingSupplier: false
      });
      axios.post('https://ervgglfmyi.execute-api.us-east-1.amazonaws.com/dev/suppliers', {
        token: localStorage.getItem('token')
      }).then(res => {
        this.setState({
          suppliers: res.data.Items
        });
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
      console.log(err);
      this.setState({
        isSubmittingSupplier: false
      });
    });
    this.setState(prevState => ({
      isExpand: !prevState.isExpand,
    }));
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.post('https://ervgglfmyi.execute-api.us-east-1.amazonaws.com/dev/suppliers', {
      token: localStorage.getItem('token')
    }).then(res => {
      this.setState({
        suppliers: res.data.Items,
        isLoading: false
      });
    }).catch(err => {
      console.log(err);
      this.setState({ isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <DonutSpinner style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    }
    return (
      <Grid container direction="row" className={styles.suppliercontainer}>
        <Grid item xs={12} align="right" className={styles.addsuppliercontainer}>
          <Typography variant="h3" display="inline" onClick={this.toggleFormHandler}>
            <AddIcon fontSize="inherit" className={this.state.isExpand ? styles.closeicon : styles.addicon} />
          </Typography>
          {
            this.state.isExpand ?
              <div className={styles.formcontainer}>
                <AddSupplierCard isSubmittingSupplier={this.state.isSubmittingSupplier} onAddSupplier={this.addSupplierHandler} />
              </div>

              :
              this.state.suppliers.length == 0 ?
                <div className={styles.arrow}>
                </div>
                :
                null
          }
        </Grid>
        <SupplierTable suppliers={this.state.suppliers} />
      </Grid>
    )
  }
}

export default Supplier
