import React from 'react';
import classes from './Button.css';

const button = (props) =>(
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    /*in the className we always need to pass a sting at the end,
    so without the join method it's an array of strings and
    that's why we add the join method with a whitespace to have
    a list of classes which is a string at the end*/
    onClick={props.clicked}>
     {props.children}
  </button>
);

export default button;
