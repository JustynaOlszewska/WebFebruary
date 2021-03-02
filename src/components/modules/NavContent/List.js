import React from 'react';
import PropTypes from 'prop-types';
import { navList } from '../../../constant/navList';
import {
  StyledLi,
  StyledUl,
} from '../../../styles/styleComponents/StyleNav/StyledList';

const List = ({ open }) => {
  return (
    <StyledUl open={open}>
      {navList.map(element => (
        <StyledLi key={element}>{element}</StyledLi>
      ))}
    </StyledUl>
  );
};

List.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default List;
