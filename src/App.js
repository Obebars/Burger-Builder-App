import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './hoc/Layout/Layout'
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';


class App extends Component {

  /*state={
    continue: false
  }*/

  /*state={
    show: true
  };
  componentDidMount () {
    setTimeout (() =>{
      this.setState({show: false})
    },5000)
  }*/
  render(){
      /*let checkout =null;
    if (this.state.continue){
      checkout= <Checkout/>
    }*/
  return (
    <div >
    <Layout>
      <Switch>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/' exact component={BurgerBuilder}/>
      </Switch>
    </Layout>

    </div>
  );
};
};

export default App;
