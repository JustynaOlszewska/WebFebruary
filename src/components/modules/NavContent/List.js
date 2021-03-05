import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navList } from '../../../constant/navList';
import {
  StyledLi,
  StyledUl,
} from '../../../styles/styleComponents/StyleNav/StyledList';

const List = ({ nav: { open } }) => {
  return (
    <StyledUl open={open}>
      {navList.map(element => (
        <StyledLi key={element}>{element}</StyledLi>
      ))}
    </StyledUl>
  );
};

List.propTypes = {
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.navReducer,
});

export default connect(mapStateToProps)(List);
