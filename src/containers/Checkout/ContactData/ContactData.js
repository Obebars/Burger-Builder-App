import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state={
    orderForm:{
      name: {
        elementType: 'input',
        elementConfig: {
          type:'text',
          placeholder: 'Your Name'
        },
        value:'',
        validation: {
          required: true
        },
        valid: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type:'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      zipCode:{
        elementType: 'input',
        elementConfig: {
          type:'text',
          placeholder: 'ZIP Code'
        },
        value:'',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5

        },
        valid: false
      },
      country:{
        elementType: 'input',
        elementConfig: {
          type:'text',
          placeholder: 'Country'
        },
        value:'',
        validation: {
          required: true
        },
        valid: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type:'email address',
          placeholder: 'Your E-mail'
        },
        value:'',
        validation: {
          required: true
        },
        valid: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options:[
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        }
      }
    },
    loading: false
  }
  /* here we have properties in the orderForm object where each property
  represents the input we want to create. the goal is then to define
  how this input should look like so we then really go through this object
  dynamically, that we could even add elements dynamically and create a
  fitting input element*/
  /*Inside elementConfig we want to set the default html attribute names
   that we will pass as props to distribute them on the input elements in
   the input.js file. That's why it's important that we use the default names
   for them to work as props received by our input elements */

  orderHandler=(event)=>{
    event.preventDefault();
    /* Here we prevent the default which is to automatically send an
      http request which will reload our page and we don't want that here,
      instead we now want to extract the data we want to submit, and the
      cool thing here is that the data is already managed in the state in
      our formObject which is updated all the time with 2 way binding.
      the value is updated atleast and the value is certainly what we're
      interested in */
    //console.log(this.props.ingredients)

    this.setState({ loading: true });
    const formData = {};
    for (let formElementId in this.state.orderForm){
            formData[formElementId] = this.state.orderForm[formElementId].value
    } ;
    /*here we simply created a key-value pair where we add a new property
    to formData (like name, email, ...) and make the value of that property
    not equal to an object but simply to the value the user entered */
    const order ={
      ingredients: this.props.ingredients,
      price: this.props.price,
      customerData: formData
    };
    /*on a real production app you'd reclaculate the price on the server
      to make sure the user didn't manipulate the price before it's fetched
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
  };

  checkValidity =(value,rules) => {

    let isValid= false;
      if (rules.required) {
        isValid= value.trim() !== ''
      }
      /* if isValid is not equal to an empty string, isValid is true,
      othewise, isValid is false by default*/

    if(rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
      }


      if(rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
      }

      return isValid;

};

  /* in checkValidity we want to return true or false to then in
  inputChangedHandler adjust this valid property too.*/

  inputChangedHandler = (event, inputId) =>{

    const updatedForm = {
      ...this.state.orderForm
    }
    const updatedFormElement= {
      ...updatedForm[inputId]
    }
    /*Here the updatedForm doesn't create a deep clone because in the orderForm
    object in the state we have more nested objects that won't be cloned deeply
    as we just copy the pointer to them and hence if we change something there
    we would still mutate the original state unfortunately because the object
    in my copied object and the object in the state would still be equal. thus
    we clone it deeply by copying the nested objects as well that are the
    properties inside the selected orderForm element*/
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid= this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

    updatedForm[inputId] = updatedFormElement;
    console.log(updatedFormElement);

    this.setState({orderForm: updatedForm})
  };
  render(){
    const orderFormArray = [];
    for (let key in this.state.orderForm){
          orderFormArray.push({
            id: key,
            config: this.state.orderForm[key]
          });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {orderFormArray.map(formElement =>(
           <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            notRequired={formElement.config.validation}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ))}
        <Button btnType='Success'> ORDER </Button>
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
