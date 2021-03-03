import React from 'react';
import Bars from '../modules/NavContent/Bars';
import List from '../modules/NavContent/List';
import UWBialy from '../../images/UW-bialy.png';
import {
  StyledNav,
  StyledLogo,
} from '../../styles/styleComponents/StyleNav/StyledNav';

const Nav = () => {

  return (
    <StyledNav>
      <StyledLogo src={UWBialy} alt="logo" />
      <Bars />
      <List />
    </StyledNav>
  );
};

export default (Nav);
