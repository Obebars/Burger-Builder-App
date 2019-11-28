import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) =>(

  <li className={classes.NavigationItem}>
    <NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>

  /* as every link has its own destination it should point to
   its own caption, we simply use the caption with props.children
   so we can actualy wrap the text we want to display with our own
   component and we can then set the href here dynamically with
   props.link */

);

export default navigationItem;
