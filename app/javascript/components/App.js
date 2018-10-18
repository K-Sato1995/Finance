import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';
import TopHeader from './Header/TopHeader';
import Controller from './Controller/Controller';
import Main from './Main';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      sidebar_on: true,
      style: "",
      theme: "",
      DarkTheme: false,
    }
    this.toggle = this.toggle.bind(this)
    this.changeStyle = this.changeStyle.bind(this)
    this.changeThemeToDark = this.changeThemeToDark.bind(this)
    this.changeThemeToDefault = this.changeThemeToDefault.bind(this)
  }
  toggle(){
    this.setState({sidebar_on: !this.state.sidebar_on})
    console.log(this.state.sidebar_on)
  }
  changeStyle(arg){
    this.setState({style: arg })
  }
  changeThemeToDark(){
    this.setState({DarkTheme: true})
  }
  changeThemeToDefault(){
    this.setState({DarkTheme: false})
  }
  render(){
    const BackImage = {
      backgroundImage: `url(${this.state.style})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

  const MainHeader = () => {
    if(this.state.sidebar_on){
      return <Header toggle = { this.toggle } sidebarOn = { this.state.sidebar_on } />
    }else{
      return <TopHeader toggle = { this.toggle } sidebarOn = { this.state.sidebar_on }/>
    }
  }
  const Default = 'default'
  const Dtheme = 'DarkTheme'
  const theme = this.state.DarkTheme ? Dtheme : Default

  return (
   <Router>
      <div className="container-fluid" style = { BackImage } id = { theme }>
          <Controller changeStyle = { this.changeStyle } toggle = { this.toggle } changeThemeToDark = { this.changeThemeToDark } changeThemeToDefault = { this.changeThemeToDefault }/>
        <div className="row">
          <MainHeader/>
        <Main sidebarOn = { this.state.sidebar_on }/>
        </div>
      </div>
    </Router>
    )
  }
}


export default App;
