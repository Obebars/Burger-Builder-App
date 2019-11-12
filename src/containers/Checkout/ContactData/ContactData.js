import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state={
    name:'',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }
  orderHandler=(event)=>{
    event.preventDefault();
    console.log(this.props.ingredients)

    this.setState({ loading: true });
    const order ={
      ingredients: this.props.ingredients,
      customerData:{
        name: 'Omar Bebars',
        address: '33B, Canal, Maadi',
        deliveryMethod: 'fastest'
      },
      price: this.props.price
    };
    /*on a real production app you'd reclaculate the price on the server
      to make sure the user didn't manipilate the price before it's fetched
      to the server*/

    axios.post('/orders.json', order)
    .then(response=> {
      this.setState({ loading: false });
      this.props.history.push('/');
    } )
    .catch(error => {
      this.setState({ loading: false })
    })
    /* we set loading to false in case of an errror so that the user
      wouldn't think it's still loading when something went wrong */
  }
  render(){
    let form = (
      <form>
        <input className={classes.Input} type='text' name='name' placeholder='Your Name'/>
        <input className={classes.Input} type='email' name='email' placeholder='Your Mail'/>
        <input className={classes.Input} type='text' name='street' placeholder='Street'/>
        <input className={classes.Input} type='text' name='postal' placeholder='Postal Code'/>
        <Button btnType='Success' clicked={this.orderHandler}> ORDER </Button>
      </form>
    );
    if (this.state.loading){
      form = <Spinner/>;
    }
    return(
      <div className={classes.ContactData}>
        <h4> Enter your Contact Data </h4>
        {form}
      </div>
    )
  }
}

export default ContactData;
