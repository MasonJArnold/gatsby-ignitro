import React from 'react';
import '../css/footer.css';

import Logo from '../components/logo';
import Social from '../components/socialmedia';
import Address from '../components/address';
import Copyright from '../components/copyright';


function Footer() {
  return (
    <React.Fragment>
      <div className="footerFluid">
        <div className="container">
          <div className="grid">
            <div className="col-sm-6">
              <Logo 
                className="footerLogo flex-img" 
              />
              <Address />
            </div>
            <div className="col-sm-6">
              <Social />
            </div>
          </div>
        </div>
      </div>
      <div className="footerFluid2">
        <div className="container">
          <div className="grid">
            <div className="col-sm-12">
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;