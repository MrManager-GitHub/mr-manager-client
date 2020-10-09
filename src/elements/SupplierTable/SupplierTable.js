import React from 'react'
import { Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './SupplierTable.module.css'

function createData(name, email, contact, product) {
  return { name, email, contact, product };
}

const rows = [
  createData('ABC', 'ABC102@gmail.com', '9534126523', 'Cement'),
  createData('XYZ', 'XYZ521@yahoo.in', '9123654123', 'Marble,Break'),
  createData('PQR', 'PQRCorporation@gmail.com', '-', 'Steel'),
  createData('FGH', 'FGHPrivatelimited@gmail.com', '9123654120', 'ACC Blocks'),
  createData('BYG', 'BYG1011@gmail.com', '-', 'Wooden furniture'),
];

function SupplierTable(props) {
  return (
    <TableContainer className={styles.supplierTableContainer}>
      <Table>
        <TableHead className={styles.supplierTableHead}>
          <TableRow>
            <TableCell align="center"><Typography className={styles.header} variant="body1">Supplier</Typography></TableCell>
            <TableCell align="center"><Typography className={styles.header} variant="body1">Email</Typography></TableCell>
            <TableCell align="center"><Typography className={styles.header} variant="body1">Contact</Typography></TableCell>
            <TableCell align="center"><Typography className={styles.header} variant="body1">Product</Typography></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.suppliers.map(supplier => (
            <TableRow key={supplier.supplier_id}>
              <TableCell align="center"><Typography className={styles.data} variant="body1">{supplier.supplier_name}</Typography></TableCell>
              <TableCell align="center"><Typography className={styles.data} variant="body1">{supplier.supplier_email}</Typography></TableCell>
              <TableCell align="center"><Typography className={styles.data} variant="body1">{supplier.phone_number}</Typography></TableCell>
              <TableCell align="center"><Typography className={styles.data} variant="body1">{supplier.product}</Typography></TableCell>
              <TableCell align="center"><Typography className={styles.data} variant="body1"><EditIcon className={styles.editIcon} /><DeleteIcon className={styles.deleteIcon} /></Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SupplierTable
