import React, { Component } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilliary/Auxilliary'

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.show !== this.props.show ||
           nextProps.children !== this.props.children
    //so that it does update if it gets new children (<Spinner/>)
  }
  componentDidUpdate(){
    console.log('Modal [DidUpdate]')
  }
  render(){
    return(
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div className={classes.Modal}
             style={{
              transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            // 0 is the position defined in the Modal.css file
            /* vh is a special unit that refers to the viewport height, so it
            will slowly slide it outside of the screen*/

              opacity: this.props.show ? '1' : '0'
            }}>
            {this.props.children}
        </div>
      </Aux>
    );
  };

};

export default Modal;
