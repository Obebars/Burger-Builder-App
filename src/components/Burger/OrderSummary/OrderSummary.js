import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilliary/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  render(){
    let ingredientsSummary = Object.keys(this.props.ingredients)
      .map(ingKey =>{
        return (
          <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>
          {ingKey} </span> : {this.props.ingredients[ingKey]}
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
          <p> Total Price: <strong> {this.props.price.toFixed(2)} $</strong></p>
          <p> Proceed to Checkout ? </p>
          <Button
            clicked={this.props.orderCancelled}
            btnType='Danger'> CANCEL </Button>
          <Button
            clicked={this.props.orderContinued}
            btnType='Success'
          > CONTINUE
          </Button>
      </Aux>
    )
  }
}

export default OrderSummary;
