import React from 'react';
import Logo from '../components/logo';
// import Hamburger from './header/hamburger';
// import Logo from './header/logo';
import Nav from '../components/nav';

import '../css/header.css';

function Header() {
  return (
    <React.Fragment>
      <div className="headerFluid">
        <div className="container">
          <div className="grid">
            <div className="col-sm-3">
              <Logo 
                className="mainLogo flex-img" 
              />
            </div>
            <div className="col-sm-9">
              CTAS Here
            </div>
          </div>
        </div>
      </div>
      <div className="headerFluidNav">
        <div className="container">
          <div className="grid">
            <div className="col-sm-12 header-nav-column">
               <Nav />
            </div>
          </div>
         </div>
      </div>
    </React.Fragment>
  );
}
export default Header;