import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  constructor(props){
    super(props)
    this.state={
      ingredients:{},
      totalPrice: null
    };
    const query= new URLSearchParams(this.props.location.search);
    for (let param of query.entries()){
      if(param[0] ==='price'){
        this.state.totalPrice= param[1]
      }else{
        this.state.ingredients[param[0]] = +param[1];
      }
      }
      /* param[0] === 'price' price is the param I set up in my
      queryParams in the BurgerBuilder Component and since price
      isn't part of the ingredients we're looping through here, we
      render it separately thus conditionally*/
    /*Here each entry will have this format ['salad' , '1'],
    so i want to turn this into this object format so param[0] is
    then used as a property name and added to that ingredients object*/
  };
  /*Here we don't use componentDidMount because we extract ingredients here
  in the checkout component but we actually do this when we initialize the
  state in which the initial ingredients are null and if we pass that to
  ContactData and we try to render the Burger there it won't work with
  ingredients null. Thus we use the constructor instead before we render
  the child component so we do this at the point of time where we don't
  render children so we can set up the state prior to rendering the
  children*/

  checkoutCancelHandler =()=>{
    this.props.history.goBack();
  }
  checkoutContinueHandler =()=>{
    this.props.history.replace('/checkout/contact-data');
  }
  render(){

    return(
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelHandler}
          checkoutContinued={this.checkoutContinueHandler}/>
        <Route path={this.props.match.url + '/contact-data'}
               render={(props)=> (<ContactData
                                ingredients={this.state.ingredients}
                                price={this.state.totalPrice}
                                {...props}/>)} />
            {/*Here we pass the props mannually to get access to the
              history object and/or other bojects available in there
              (in this route props) then we distribute them to the ContactData
              component with the spread operator, otherwise we can wrap
              the child components with withRouter to pass such props*/}
      </div>
    )
  }
}

export default Checkout;
