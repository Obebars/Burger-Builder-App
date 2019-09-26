import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

  const buildControls = (props) =>{

    let controls = [
      {label:'Salad', type:'salad'},
      {label:'Cheese', type:'cheese'},
      {label:'Bacon', type:'bacon'},
      {label:'Meat', type:'meat'},
    ]
    /* you can hard code the above controls but having an array
    where you can loop through these controls is more convenient*/
    return (

      <div className={classes.BuildControls}>
        <p> Current Price: <strong> {props.price.toFixed(2)} $</strong></p>
        {controls.map(ctrl =>{
          return  <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
              /* in the BurgerBuilder i passed an argument to the
              addIngredientHandler method which is the type of ingredient
              that's why i passed it as an argument here in this component
              to keep track of the added or removed type*/
                    disabled={props.disabledItem[ctrl.type]}/>
              /*here we just need to access the right disabled info so am
              not passing type as an argument instead am using it to
              access the right ingredient's value to check if it's true
              (<=0) to disbale the related Less button in the buildControl
              component*/
              })
        }
        <button
          className={classes.OrderButton}
          disabled={!props.purchased}
          onClick={props.ordered}
        > ORDER NOW </button>

      </div>
    );
  };


export default buildControls;
