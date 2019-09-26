import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (


    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active> BurgerBuilder </NavigationItem>
        <NavigationItem link='/'> Checkout </NavigationItem>

    </ul>
    /* link should just lead to the starting page because we
    dont have routing for now so we don't have real links.
    since active is a boolean value we don't have to set it
    equal to true, as boolean props can be set up like this  */
);


  export default navigationItems;
