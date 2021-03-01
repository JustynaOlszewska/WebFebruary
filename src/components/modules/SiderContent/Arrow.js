import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import arrowLeft from '../../../images/arrowLeft.png';
import arrowRight from '../../../images/arrowRight.png';

const StyledArrow = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${props => (props.direction === 'right' ? `right: 25px` : `left: 25px`)};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(${props => (props.direction === 'left' ? '-2px' : '2px')});
    &:focus {
      outline: 0;
    }
  }
`;

const Arrow = ({ direction, handleClick }) => {
  return (
    <StyledArrow onClick={handleClick} direction={direction}>
      {direction === 'right' ? (
        <img src={arrowRight} alt="arrowRight" />
      ) : (
        <img src={arrowLeft} alt="arrowLeft" />
      )}
    </StyledArrow>
  );
};
Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
export default Arrow;
