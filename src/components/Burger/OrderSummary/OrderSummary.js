import React from 'react';
import Aux from '../../../hoc/Auxilliary/Auxilliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
  let ingredientsSummary = Object.keys(props.ingredients)
    .map(ingKey =>{
      return (
        <li key={ingKey}>
        <span style={{textTransform: 'capitalize'}}>
        {ingKey} </span> : {props.ingredients[ingKey]}
        </li>
      )
    });
  return(
    <Aux>
      <h3 style={{textAlign:'center'}}> Order Summary </h3>
        <p> A delicious burger with the following ingredients: </p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p> Total Price: <strong> {props.price.toFixed(2)} $</strong></p>
        <p> Proceed to Checkout ? </p>
        <Button
          clicked={props.orderCancelled}
          btnType='Danger'> CANCEL </Button>
        <Button
          clicked={props.orderContinued}
          btnType='Success'> CONTINUE </Button>
    </Aux>

  );
};

export default orderSummary;
