import React from 'react';
import Logo from '../components/logo';
<<<<<<< HEAD
import Nav from '../components/nav';
import PhoneIcon from '../components/phoneIcon';

import Nav from '../components/nav';

import '../css/header.css';

function Header() {
  return (
    <React.Fragment>
      <div className="mobileFluid">
        <div className="container">
          <div className="grid">
            <div className="col-8 offset-2">
              <Logo 
                className="mobileLogo flex-img" 
              />
            </div>
          </div>
         </div>
          <PhoneIcon />
            <div class="col-2">
              Phone ICON
            </div>
          </div>
         </div>
      </div>
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
            <div className="col-sm-12 headerNavColumn">
               <Nav />
            </div>
          </div>
         </div>
      </div>
    </React.Fragment>
  );
}
export default Header;