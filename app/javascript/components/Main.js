import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard';
import Expense from './Expense/Expense';
import Income from './Income/Income';
import Footer from './Footer/Footer';

class Main extends React.Component {
  render(){
    const side_on = "col-sm-9 col-lg-10"
    const side_off ="col-sm-10 col-lg-12"
    const right = {}
    const center = { margin:'0 auto', marginTop: '80px' }
    const position = this.props.sidebarOn ? side_on : side_off
    const position2 = this.props.sidebarOn ? right : center

    return (
      <div className = {position} id = "main" style = {position2}>
        <Switch>
          <Route exact path = '/' render = { () => <Dashboard /> }></Route>
          <Route exact path = '/Dashboard' render = { () => <Dashboard /> }></Route>
          <Route path = '/Expense' component = { Expense }></Route>
          <Route path = '/Income' component = { Income }></Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}


export default Main;
