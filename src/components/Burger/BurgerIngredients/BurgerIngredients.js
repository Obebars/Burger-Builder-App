import React from 'react';

import classes from './BurgerIngredients.css';

import PropTypes from 'prop-types';

const burgerIngredients = (props) =>{

    let ingredient = null;

    switch(props.type){
      case('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        /*the paranthesis here after ingredient for returning
        multiple jsx lines*/
        break;
      case('meat'):
        ingredient = <div className={classes.Meat}></div>;
        break;
      case('cheese'):
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case('salad'):
        ingredient = <div className={classes.Salad}></div>;
        break;
      case('bacon'):
        ingredient = <div className={classes.Bacon}></div>;
        break;
      default:
        ingredient = null;
  };

    return ingredient;
};

burgerIngredients.propTypes ={
  type: PropTypes.string.isRequired,
  /*here we chain another condition which is isRequired condition for if we ever
   try to use the ingredient component without passing a type,
   we will get an error*/
};

export default burgerIngredients;
