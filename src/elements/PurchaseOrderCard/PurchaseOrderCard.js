import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import styles from './PurchaseOrderCard.module.css'

function createData(PONumber, projectName, supplierName, materialName, quantity, amount) {
  return { PONumber, projectName, supplierName, materialName, quantity, amount };
}

const rows = [
  createData('1', 'Project 1', 'Supplier 1', 'ACC Block', '10', '50', '500'),
];

function PurchaseOrderCard(props) {
  return (
    <Grid item xs={12} container justify="flex-start" alignItems="center" className={styles.purchaseOrderCard}>
      <TableContainer className={styles.POTableContainer}>
        <Table>
          <TableHead className={styles.POTableHead}>
            <TableRow>
              <TableCell align="center"><Typography className={styles.header} variant="body1">PO No.</Typography></TableCell>
              <TableCell align="center"><Typography className={styles.header} variant="body1">Project</Typography></TableCell>
              <TableCell align="center"><Typography className={styles.header} variant="body1">Supplier</Typography></TableCell>
              <TableCell align="center"><Typography className={styles.header} variant="body1">Material</Typography></TableCell>
              <TableCell align="center"><Typography className={styles.header} variant="body1">Quantity</Typography></TableCell>
              <TableCell align="center"><Typography className={styles.header} variant="body1">PO Amount</Typography></TableCell>
              <TableCell align="center"><Typography className={styles.header} variant="body1"></Typography></TableCell>
              <TableCell align="center"><Typography className={styles.header} variant="body1"></Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} style={{ backgroundColor: 'white' }}>
                <TableCell align="center"><Typography className={styles.data} variant="body1">{row.PONumber}</Typography></TableCell>
                <TableCell align="center"><Typography className={styles.data} variant="body1">{row.projectName}</Typography></TableCell>
                <TableCell align="center"><Typography className={styles.data} variant="body1">{row.supplierName}</Typography></TableCell>
                <TableCell align="center"><Typography className={styles.data} variant="body1">{row.materialName}</Typography></TableCell>
                <TableCell align="center"><Typography className={styles.data} variant="body1">{row.quantity}</Typography></TableCell>
                <TableCell align="center"><Typography className={styles.data} variant="body1">{row.amount} INR.</Typography></TableCell>
                <TableCell align="center"><Typography className={styles.reviewDraft} variant="body1">Review Draft P.O.</Typography></TableCell>
                <TableCell align="center"><Typography className={styles.deleteIcon} variant="body1"><i class="far fa-trash-alt"></i></Typography></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}

export default PurchaseOrderCard
