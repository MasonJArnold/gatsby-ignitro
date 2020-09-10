import React from 'react';

import '../css/nav.css';

function Nav() {
  return (
<ul className="main-navigation">
  <li><a href="https://www.yahoo.com">Home</a></li>
  <li><a href="https://www.yahoo.com">Front End Design</a>
    <ul className="dropdown-menu">
      <li><a href="https://www.yahoo.com">HTML dasfdf fdas</a></li>
      <li><a href="https://www.yahoo.com">CSS</a></li>
    </ul>
  </li>
  <li><a href="https://www.yahoo.com">WordPress Development</a>
    <ul className="dropdown-menu">
      <li><a href="https://www.yahoo.com">Themes</a></li>
      <li><a href="https://www.yahoo.com">Plugins</a>
      <ul className="dropdown-menu">
            <li><a href="https://www.yahoo.com">Themes Themes</a></li>
            <li><a href="https://www.yahoo.com">Plugins</a></li>
       </ul>
      </li>
      <li><a href="https://www.yahoo.com">Custom Post Types</a></li>
      <li><a href="https://www.yahoo.com">Options</a></li>
    </ul>
  </li>
  <li><a href="https://www.yahoo.com">About Us</a></li>
</ul>
  );
}
export default Nav;