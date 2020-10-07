import React from 'react';
import '../css/footer.css';

import Logo from '../components/logo';

function Footer() {
  return (
    <React.Fragment>
      <div className="footerFluid">
        <div className="container">
          <div className="grid">
            <div className="col-sm-4">
              <Logo 
                className="footerLogo flex-img" 
              />
            </div>
            <div className="col-sm-4">
              MENU HERE
            </div>
            <div className="col-sm-4">
              MENU HERE
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;