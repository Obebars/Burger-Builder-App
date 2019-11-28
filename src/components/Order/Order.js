import React from 'react';

import classes from './Order.css';
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngredients';

const order = (props) => {


  let ingredients = Object.keys(props.ingredients)
    .map(ingName =>{
        return ({
          name: ingName,
          amount: props.ingredients[ingName]
        })
      });

        const ingredientOutput = ingredients.map(ig =>{
          return <span
                  style={{
                    textTransform:'capitalize',
                    display:'inline-block',
                    margin: '0 2px',
                    border: '1px solid #ccc',
                    padding: '10px'
                  }}
                  key={ig.name}> {ig.name} ({ig.amount}) </span>
        });

        /*const ingredients = [];
        for (let ingredientName in props.ingredients){
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]})
  }
  In a for/in loop the variable element is going to be the property name
  and since our properties are simply just ingredients representations,
  ingredientName makes sense.

  const ingredientOutput = ingredients.map(ig =>{
    return <span
            style={{
              textTransform:'capitalize',
              display:'inline-block',
              margin: '0 8px',
              border: '1px solid #ccc',
              padding: '10px'
            }}
            key={ig.name}> {ig.name} {ig.amount} </span>
  });*/

  return(
    <div className={classes.Order}>
       <p> ingredients: {ingredientOutput} </p>
       <p> Price: <strong> USD {Number.parseFloat(props.price).toFixed(2)} </strong> </p>
    </div>
  )
};
/*Number.parseFloat is to convert a string to a number and here price is stored
in firebase as a string so we need to convert it to a number to use the
toFixed() method */

export default order;
