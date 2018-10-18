import React from 'react';

class BgOptions extends React.Component {
  render(){
    const block = {
      display: 'block'
    }
    const hidden = {
      display: 'none'
    }
    const bg_btn = this.props.bg_btn_toggle ? block : hidden
    return(
      <div style = {bg_btn} className = 'bg_options'>
        <button onClick = {(e) => { this.props.changeStyle("")}}>Default</button>
        <button onClick = {(e) => { this.props.changeStyle("https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?cs=srgb&dl=bright-countryside-dawn-302804.jpg&fm=jpg")}}>Nature</button>
        <button onClick = {(e) =>{ this.props.changeStyle("https://images.pexels.com/photos/164583/pexels-photo-164583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")}}>City</button>
      </div>
    )
  }
}

export default BgOptions;
