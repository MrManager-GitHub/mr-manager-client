import React from 'react';

import styles from './DonutSpinner.module.css';

const donutSpinner = props =>
  <div className={styles.donutSpinner} style={{ ...props.style }}></div>;

export default donutSpinner;
