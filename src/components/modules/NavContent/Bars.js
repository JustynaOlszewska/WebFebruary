import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledIconBars,
  StyledIconTimes,
} from '../../../styles/styleComponents/StyleNav/StyledBars';

const Bars = ({ handleClick, open }) => {
  return (
    <>
      <StyledIconBars
        onClick={handleClick}
        open={open}
        className="fas fa-bars"
      ></StyledIconBars>
      <StyledIconTimes
        onClick={handleClick}
        open={open}
        className="fas fa-times"
      ></StyledIconTimes>
    </>
  );
};

Bars.propTypes = {
  handleClick: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

export default Bars;
