import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = (props) =>(

  <li className={classes.NavigationItem}>
    <a
      href={props.link}
      className={props.active ? classes.active : null}
    >
      {props.children}
    </a>
  </li>

  /* as every link has its own destination it should point to and
   its own caption, we simply use the caption with props.children
   so we can actualy wrap the text we want to display with our own
   component and we can then set the href here dynamically with
   props.link */

);

export default navigationItem;
