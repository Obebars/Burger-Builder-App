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
    /*Here each entry will have this format ['salad' , '1'],
    so i want to turn this into this object format so param[0] is
    then used as a property name and added to that ingredients object*/
  };

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
      </div>
    )
  }
}

export default Checkout;
