import React from 'react';
import classes from './Backdrop.css';

const backDrop = (props) =>(
  props.show ?  <div
                  className={classes.Backdrop}
                  onClick={props.clicked}>
                </div> : null
);
/*you may return null in components that's okay. it means
nothing gets rendered*/

export default backDrop;
