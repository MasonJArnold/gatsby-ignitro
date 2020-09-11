import React from 'react';
import { scaleRotate as Menu } from 'react-burger-menu'
// import Menu from 'react-burger-menu/lib/menus/scaleRotate'
import '../css/hamburger.css';
import Logo from '../components/logo';

class Hamburger extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
     <div class="hamburgerWrap">
      <Menu disableAutoFocus pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
       <div className="hamburgerLogoWrap">
       <Logo 
       className="hamburgerLogo flex-img" 
        />
        </div>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item" href="">Settings</a>
      </Menu>
     </div>
    );
  }
}

export default Hamburger