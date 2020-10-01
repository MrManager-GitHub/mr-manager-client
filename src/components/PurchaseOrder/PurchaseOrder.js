import React, { Component } from 'react'
import { Grid,Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import styles from './PurchaseOrder.module.css'
import CreatePurchaseOrderCard from './../../elements/CreatePurchaseOrderCard/CreatePurchaseOrderCard'
import PurchaseOrderCard from './../../elements/PurchaseOrderCard/PurchaseOrderCard'
class PurchaseOrder extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isExpand: false,
            numberOfPurchaseOrder: '1'
        }
    }

    toggleFormHandler = () => {
        this.setState(prevState => ({
            isExpand: !prevState.isExpand,
        }));
    }
    render() {
        return (
            <Grid container direction="row" className={styles.purchaseOrdercontainer}>
                <Grid item xs={12} align="right" className={styles.createpurchaseordercontainer}>
                    <Typography variant="h3" display="inline" onClick={this.toggleFormHandler}>
                        <AddIcon fontSize="inherit" className={this.state.isExpand ? styles.closeicon : styles.addicon} />
                    </Typography>
                    {
                        this.state.isExpand ?
                            <div className={styles.formcontainer}>
                                <CreatePurchaseOrderCard />
                            </div>
                        :
                            this.state.numberOfPurchaseOrder == '0' ?
                                <div className={styles.arrow}>
                                </div>
                            :
                                null
                    }
                </Grid>
                <PurchaseOrderCard />
            </Grid>
        )
    }
}

export default PurchaseOrder

