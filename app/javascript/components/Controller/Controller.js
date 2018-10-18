import React from 'react';
import Draggable from 'react-draggable';
import BgOptions from './BgOptions';
import ThemeOptions from './ThemeOptions';

class Controller extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bg_btn_toggle: false,
      theme_btn_toggle: false
    }
    this.handleToggleForBg = this.handleToggleForBg.bind(this)
    this.handleToggleForTheme = this.handleToggleForTheme.bind(this)
  }
  handleToggleForBg(){
    this.setState({bg_btn_toggle: !this.state.bg_btn_toggle})
    this.setState({theme_btn_toggle: false})
  }
  handleToggleForTheme(){
    this.setState({theme_btn_toggle: !this.state.theme_btn_toggle})
    this.setState({bg_btn_toggle: false})
  }
  render(){
    return(
      <div>
        <Draggable>
          <div className = 'controller'>
            <span className="close" onClick = {this.props.toggle}></span>
            <button onClick = {(e) => {this.handleToggleForBg()}} className = "bg_btn">Background</button>
            <BgOptions bg_btn_toggle = {this.state.bg_btn_toggle} changeStyle = {this.props.changeStyle} toggle = {this.props.toggle}/>
            <button onClick = {(e) => {this.handleToggleForTheme()}} className = "bg_btn">Theme</button>
          <ThemeOptions theme_btn_toggle = {this.state.theme_btn_toggle} changeThemeToDark = {this.props.changeThemeToDark} changeThemeToDefault = {this.props.changeThemeToDefault}/>
           </div>
        </Draggable>
      </div>
    )
  }
}
export default Controller;
