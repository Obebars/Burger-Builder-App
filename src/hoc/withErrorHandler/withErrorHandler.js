import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxilliary/Auxilliary';

const withErrorHandler = ( WrappedComponent, axios ) =>{
  return class extends Component {

    constructor(props) {
        super(props);
        this.state = {error: null};
        this.reqInterceptor = axios.interceptors.request.use(req =>{
          this.setState({error: null})
          return req;
        })
        /*here am not interseted in the req but there is one thing i want
        to do here, i want to call setState and clear any errors so whenever
         i send a req i don't have my error set up anymore, so i definitely
         clear it here with setState*/
        this.resInterceptor = axios.interceptors.response.use( res => res,
          error =>{
          console.log(error.message);
          return   this.setState({error: error})
      });
    };

    /*componentWillMount () {

  };*/

  /* here we can use the constructor because the general idea here
  is that we execute this code when this component here gets created
  and with that i mean that component object. It's better than
  componentWillMount which will be eliminated in the future.
  Also we're not causing side effects here we're just registering the
  interceptors and we want to do that before the child components
  (<WrappedComponent/> here) are rendered to the DOM and their lifecycle
  hooks (including componentDidMount) finished*/

  componentWillUnmount () {
    //console.log('Will Unmount', this.reqInterceptor, this.resInterceptor)
    axios.interceptors.request.eject(this.reqInterceptor);
    axios.interceptors.response.eject(this.resInterceptor);
  };
  /* in componentWillUnmount console.log we used these two properties
  resInterceptor and reqInterceptor that we added to see if they are set at the
  beginning of componentWillUnmount because we're using them
  thereafter*/

  /* Now to be able to remove an interceptor here, we need to store
  a reference to the interceptors we create in properties of this class
  (the class returned by the withErrorHandler function).
   now we have the state property already, and now we can simply create
   a new property on the fly by using the 'this' keyword to refer to the
   class and then any name of your choice.
   So componentWillUnmount is a lifecycle method which is executed at the
   point of a time a component isn't required anymore, that's why we
   eject the interceptors using such method*/

  errorModalHandler = () => {
    this.setState({error: null})
  }
    render(){
      return (
        <Aux>

          <Modal show={this.state.error}
                  modalClosed={this.errorModalHandler}>
              {this.state.error ? this.state.error.message : null}

          </Modal>
          <WrappedComponent {...this.props}/>

        </Aux>
        /*the Modal component is always present even if we
        don't show it here, that's why we added a ternary expression
        to condition the error.message to when there is an error
        when error is true*/
      )
    }
    }
};

export default withErrorHandler;
