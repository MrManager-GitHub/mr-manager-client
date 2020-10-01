import React, { useState } from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyInput from './../Input/MyInputField'
import styles from './Stepper.module.css'
import SupplierTable from './../SupplierTable/SupplierTable'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MyInputField from './../Input/MyInputField'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function createData(projectName, supplierName, materialName, quantity, rate, amount) {
  return { projectName, supplierName, materialName, quantity, rate, amount };
}

const rows = [
  createData('Project 1', 'Supplier 1', 'ACC Block', '10', '50', '500'),
];

function getSteps() {
  return ['Select Supplier', 'Project & Material', 'Add Quantity'];
}

function getStepContent(stepIndex) {

  switch (stepIndex) {
    case 0:
      return (
        <Grid item container justify="center" alignItems="center" xs={12} className={styles.stepInstructionContainer}>
          {/* <Grid item xs={1} /> */}
          <Grid item xs={4}>
            <FormControl className={styles.formControl}>
              <InputLabel id="demo-simple-select-label">Select Supplier</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select">
                <MenuItem value={10}>Supplier 1</MenuItem>
                <MenuItem value={20}>Supplier 2</MenuItem>
                <MenuItem value={30}>Supplier 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5} />
          <Grid item xs={3}>
            <Typography color="primary" className={styles.addSupplier}><i class="fas fa-user-plus"></i> Add Supplier</Typography>
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Grid container justify="center" alignItems="center" xs={12} className={styles.stepInstructionContainer}>
          <Grid item xs={3}>
            <MyInputField type="text" name="material" label="Material name" />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={2}>
            <MyInputField type="number" name="quantity" label="Quantity" />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={2}>
            <MyInputField type="number" name="rate" label="Rate" />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={2}>
            <FormControl className={styles.formControl}>
              <InputLabel id="demo-simple-select-label">Select Project</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select">
                <MenuItem value={10}>Project 1</MenuItem>
                <MenuItem value={20}>Project 2</MenuItem>
                <MenuItem value={30}>Project 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid >
      );
    case 2:
      return (
        <Grid container justify="center" alignItems="center" xs={12} className={styles.stepInstructionContainer}>
          <Grid item container justify="center" alignItems="center" xs={12}>
            <TableContainer className={styles.supplierTableContainer}>
              <Table>
                <TableHead className={styles.supplierTableHead}>
                  <TableRow>
                    <TableCell align="center"><Typography className={styles.header} variant="body1">Project</Typography></TableCell>
                    <TableCell align="center"><Typography className={styles.header} variant="body1">Supplier</Typography></TableCell>
                    <TableCell align="center"><Typography className={styles.header} variant="body1">Material</Typography></TableCell>
                    <TableCell align="center"><Typography className={styles.header} variant="body1">Quantity</Typography></TableCell>
                    <TableCell align="center"><Typography className={styles.header} variant="body1">Rate</Typography></TableCell>
                    <TableCell align="center"><Typography className={styles.header} variant="body1">Amount</Typography></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="center"><Typography className={styles.data} variant="body1">{row.projectName}</Typography></TableCell>
                      <TableCell align="center"><Typography className={styles.data} variant="body1">{row.supplierName}</Typography></TableCell>
                      <TableCell align="center"><Typography className={styles.data} variant="body1">{row.materialName}</Typography></TableCell>
                      <TableCell align="center"><Typography className={styles.data} variant="body1">{row.quantity}</Typography></TableCell>
                      <TableCell align="center"><Typography className={styles.data} variant="body1">{row.rate}</Typography></TableCell>
                      <TableCell align="center"><Typography className={styles.data} variant="body1">{row.amount}</Typography></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid >
      );
    default:
      return 'Something went wrong!!!';
  }
}

export default function HorizontalLabelPositionBelowStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      {/* <Gird item /> */}
      <Grid item xs={12}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item xs={12} container justify="center" alignItems="center">
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <Grid item container xs={8} justify="center" alignItems="center">
              {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
              {getStepContent(activeStep)}

              <Grid item container xs={12}>
                <Grid item xs={1}>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
                    Back
                </Button>
                </Grid>
                <Grid item xs={9} />
                <Grid item xs={2}>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Create P.O.' : 'Next'}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
      </Grid>
    </Grid>
  );
}
