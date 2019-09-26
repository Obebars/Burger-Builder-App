import React, { Component } from 'react';
import classes from './Layout.css';
import Aux from'../Auxilliary/Auxilliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state={
    showSideDrawer: false
  };
  sideDrawerToggleHandler = () =>{
    this.setState((prevState) => {
    return {showSideDrawer: !prevState.showSideDrawer}
  } )
};
  sideDrawerClosedHandler=()=>{
    this.setState({showSideDrawer:  false})
  };

  render(){
    return(
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
          slide={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}/>
        <main className={classes.content}>
        {this.props.children}
        </main>
      </Aux>
    )
  };
};


export default Layout;
