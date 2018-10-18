import React from 'react';

class ThemeOptions extends React.Component {
  render(){
    const block = {
      display: 'block'
    }
    const hidden = {
      display: 'none'
    }
    const theme_btn = this.props.theme_btn_toggle ? block : hidden
    return(
      <div style = {theme_btn}  className = 'theme_options'>
        <button onClick = {(e) => { this.props.changeThemeToDefault() }}>Default</button>
        <button onClick = {(e) => { this.props.changeThemeToDark() }}>Dark</button>
      </div>
    )
  }
}

export default ThemeOptions;
