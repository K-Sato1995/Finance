import React from 'react';
import { NavLink } from  'react-router-dom';

class TopHeader extends React.Component {
  render(){
    const img1 = (
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" id = 'title-img'/>
    )
    
   const blockImage = {
     backgroundImage: `url(https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg?cs=srgb&dl=architecture-bay-bridge-356830.jpg&fm=jpg)`,
     backgroundPosition: 'center',
     backgroundSize: 'cover',
   }

   const hiddenImage = {
     display: 'none'
   }

    const top_nav = this.props.sidebarOn ? 'hidden_top' : 'block_top'
    const image = this.props.sidebarOn ? hiddenImage : blockImage

    return(
      <div className = {top_nav} style = {image}>
        <div className = 'layer'>
        <h3 className="navbar-top-brand">{img1}家計簿</h3>
         <ul className="link-list-top" >
              <li className = 'nav-item'><NavLink activeClassName="active" to = '/Dashboard'>ダッシュボード</NavLink></li>
              <li className = 'nav-item'><NavLink activeClassName="active" to = '/Expense'>支出</NavLink></li>
              <li className = 'nav-item'><NavLink activeClassName="active" to = '/Income'>収入</NavLink></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default TopHeader;
