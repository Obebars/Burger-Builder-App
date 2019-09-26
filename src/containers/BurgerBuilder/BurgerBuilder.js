import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICE ={
  salad:0.3,
  cheese:0.5,
  bacon:0.8,
  meat:1
};
/* you typically name constants you wanna use as global
constants in all capital characters*/

class BurgerBuilder extends Component {

  state={
    ingredients:{
        salad:0,
        cheese: 0,
        bacon: 0,
        meat:0
    },
    // P.S. we can't create an array to render from a negative value (ex: -1)
    totalPrice: 5,
    purchased: false,
    ordered: false,
  };

  purchasedHandler=(ingredients)=>{
    const purchasedItems = Object.keys(ingredients)
      .map(ingKey =>{
        return ingredients[ingKey]})
      .reduce ((sum, el) =>{
        return sum + el
      }, 0)
        /* here we use reduce() not to flatten the array but to turn it
        into a single number, the sum of all ingrdients, for that we have
        a starting number of 0 and then we have a function which is executed
        on each element in this mapped array.
        keep in mind sum (which is the new sum) is simply the constantly
        updated current sum up until the current iteration where this
        function is executed, and once this funtcion is executed on all
        array elements sum is the final result.
        Also keep in mind that el is a number because it is the value
        we accessed in the ingredients[ingKey]*/
      this.setState({purchased: purchasedItems>0})
  };
  /* here i want to add the above method at the end of the add and remove
  ingredient handlers to then simply check whether we should turn the
  purchased state to true or if it remains false by default*/

  addIngredientHandler=(type)=>{
    const ingredientValue = this.state.ingredients[type];
    const addedIngredient = ingredientValue + 1;
    const updatedIngredients={
      ...this.state.ingredients
    };
    updatedIngredients[type] = addedIngredient;
    const basicPrice = this.state.totalPrice;
    const priceAddition= INGREDIENT_PRICE[type];
    const finalPrice = basicPrice + priceAddition;

    this.setState({ingredients: updatedIngredients, totalPrice:finalPrice})
    this.purchasedHandler(updatedIngredients)
  };

  removeIngredientHandler = (type) =>{
    const ingredientValue = this.state.ingredients[type];
    /*if(ingredientValue <=0){
      return null;
    };*/
    const removedIngredient = ingredientValue - 1;
    const updatedIngredients={
      ...this.state.ingredients
    };
    updatedIngredients[type] = removedIngredient;
    const basicPrice = this.state.totalPrice;
    const priceDeduction= INGREDIENT_PRICE[type];
    const finalPrice = basicPrice - priceDeduction;

    this.setState({ingredients: updatedIngredients, totalPrice:finalPrice})
    this.purchasedHandler(updatedIngredients)
  };

  orderedHandler =() =>{
    this.setState({ordered: true})
  };

  orderCancelHandler = () =>{
    this.setState({ordered: false})
  };

  orderContinueHandler = () =>{
    alert('Happy Meal! Your order checkout page is loading...')
  };

  render() {
    let disabled = {
      ...this.state.ingredients
    }
    let key;
    for (key in disabled){
      disabled[key] = disabled[key] <= 0
    };
    /*{salad: true, cheese: false, ...}, if true, it should be disabled,
    so here we need to access the information of a given type and we
    will do so in the buildcontrols component where we have access
    to the above ingredients*/
    return(
      <Aux>
        <Modal  show={this.state.ordered}
                modalClosed={this.orderCancelHandler}>
          <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                orderCancelled={this.orderCancelHandler}
                orderContinued={this.orderContinueHandler}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledItem ={disabled}
          price={this.state.totalPrice}
          purchased={this.state.purchased}
          ordered={this.orderedHandler}/>
      </Aux>
    );
  };

};

export default BurgerBuilder;
