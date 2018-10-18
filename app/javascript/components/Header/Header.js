import React from 'react';
import { NavLink } from  'react-router-dom';

class Header extends React.Component {
  render(){
        const img1 = (
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" id = 'title-img'/>
        )
       const image = {
         backgroundImage: `url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
       }

       const link_list = {
         position: 'fixed',
         top: '90px',
         marginLeft: '-30px',
         display: 'block',
       }

       const hidden_links = {
        display: 'none'
       }

       const hidden = {
         display: 'none',
       }

       const links = this.props.sidebarOn ? link_list : hidden_links
       const navbar = this.props.sidebarOn ? image : hidden

    return (
      <div className="col-sm-3 col-lg-2">
        <nav className="navbar .navbar-inverse navbar-fixed-left" style = {navbar}>
          <div className = 'layer'>
             <h3 className="navbar-brand">{img1}家計簿</h3>
              <ul className="link-list" style = {links}>
                <li className = 'nav-item'><NavLink activeClassName="active" to = '/Dashboard'>ダッシュボード</NavLink></li>
                <li className = 'nav-item'><NavLink activeClassName="active" to = '/Expense'>支出</NavLink></li>
                <li className = 'nav-item'><NavLink activeClassName="active" to = '/Income'>収入</NavLink></li>
              </ul>
          </div>
        </nav>
     </div>
    )
  }
}


export default Header;
