import React from 'react';
import UWBialy from '../../images/UW-bialy.png';

const Nav = () => (
    <nav>
      <img src={UWBialy} alt="logo" />
      <ul>
        <li>I stopnia</li>
        <li>II stopnia</li>
        <li>Podyplomowe</li>
        <li>Szkolenia</li>
        <li>Usługi</li>
      </ul>
    </nav>
  );

export default Nav;
