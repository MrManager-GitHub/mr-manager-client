import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styles from './GlobalStore.module.css'

function createData(nameOfMaterial, quantity, projectName) {
  return {nameOfMaterial, quantity, projectName};
}

const rows = [
  createData('ACC Block', '1500', 'Project 1'),
  createData('Cement', '500', 'Project 2'),
  createData('Bricks', '2000', 'Project 1'),
];
const globalStore = () => (
  <Grid container direction="row" className={styles.GScontainer}>
    {/* <Grid item xs={2}>
      <FormControl className={styles.formControl}>
              <InputLabel id="demo-simple-select-label">Select project</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select">
                <MenuItem value={10}>Project 1</MenuItem>
                <MenuItem value={20}>Project 2</MenuItem>
                <MenuItem value={30}>Project 3</MenuItem>
              </Select>
      </FormControl>
    </Grid>
    <Grid item xs={8} /> */}
    <Grid item xs={12} className={styles.GSCardContainer}>
    <TableContainer className={styles.GSTableContainer}>
      <Table>
          <TableHead className={styles.GSTableHead}>
              <TableRow>
                  <TableCell align="center"><Typography className={styles.header} variant="body1">Material Name</Typography></TableCell>
                  <TableCell align="center"><Typography className={styles.header} variant="body1">Available Stock</Typography></TableCell>
                  <TableCell align="center"><Typography className={styles.header} variant="body1">Project</Typography></TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="center"><Typography className={styles.data} variant="body1">{row.nameOfMaterial}</Typography></TableCell>
                    <TableCell align="center"><Typography className={styles.data} variant="body1">{row.quantity}</Typography></TableCell>
                    <TableCell align="center"><Typography className={styles.data} variant="body1">{row.projectName}</Typography></TableCell>
                  </TableRow>
              ))}
          </TableBody>
      </Table>
      </TableContainer>
    </Grid>
  </Grid>
);

export default globalStore;
