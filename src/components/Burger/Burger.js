import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) =>  {

  let ingredients = Object.keys(props.ingredients)
    .map(ingKey =>{
        return [...Array(props.ingredients[ingKey])].map((_, i)=>{
          /*here i use the underscore as an argument name to
          indicate that it's a blank*/
            return <BurgerIngredients
              type={ingKey}
              key={ingKey + i}/>
            } );
    })
    /* Here instead of checking the value in each array in the ingredients
     array, we can pull out the values of these inner arrays and trade one 
     array only which contains all these values. We can do so by using the
    reduce() method to flatten these arrays to one array*/
    .reduce((arr, el) =>{
        return arr.concat(el)
    });
/*arr here is the root arrray i want to return in the end, so
concat(el) will simply take the given element (el) on which we're
looping and added to this array */
  console.log(ingredients);

  if (ingredients.length === 0){
       ingredients = <p> Please select ingredients </p>
  };

return (<div className={classes.Burger}>
              <BurgerIngredients type="bread-top"/>
                  {ingredients}
              <BurgerIngredients type="bread-bottom"/>
          </div>
      );

};


export default burger;
