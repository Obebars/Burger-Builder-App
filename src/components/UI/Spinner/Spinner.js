import React from 'react';

import classes from './Spinner.css'

const spinner = () => (
  <div className={classes.Loader}>Loading...</div>
)
/* the Loading... in between the div tags is like a fallback
in case the css isn't displayed then this will be shown */

export default spinner;
