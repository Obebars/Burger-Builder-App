import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (


    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact> BurgerBuilder </NavigationItem>
        <NavigationItem link='/orders'> Orders </NavigationItem>
    </ul>
    /* if we know that the exact key word for a prefix link will be needed
    for a specific route, we could simply pass the exact property as shown
    here, a new property we just defined to NavigationItem, and in NavigationItem
    component we can now bind the exact prop of NavLink to props.exact so to the
    one you're passing from outside, now this will actually only be used on the
    first link with just '/' and not on the second with '/orders'*/

    /* link here is used as props passed to the NavigationItem component*/
);


  export default navigationItems;
