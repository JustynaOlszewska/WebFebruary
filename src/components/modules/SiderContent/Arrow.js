import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrowLeft from '../../../images/arrowLeft.png';
import arrowRight from '../../../images/arrowRight.png';

const StyledArrow = styled.div`
  display: flex;
  position: absolute;
  width: 73%;
  bottom: 24%;
  transform: translateX(-50%);
  left: ${props => (props.direction === 'right' ? `53%` : `49%`)};
  cursor: pointer;
  @media(min-width: 767px) {
    left: ${props => (props.direction === 'right' ? `54%` : `49%`)};
    bottom: 5%;

    };
  @media(min-width: 1024px) {
    left: ${props => (props.direction === 'right' ? `54%` : `49%`)};
    };
    @media(min-width: 1400px) {
    left: ${props => (props.direction === 'right' ? `52%` : `49%`)};
    bottom: 14%;

    };
`;

const StyledImgRight = styled.img`
  width: 11px;
  color: #fff;
  @media(min-width: 767px) {
    width: 31px;
    };
`;

const StyledImgLeft = styled(StyledImgRight)`
  transform: rotate(180deg);    
`;

const Arrow = ({ direction, handleClick }) => (
  <StyledArrow onClick={handleClick} direction={direction}>
    {direction === 'right' ? (
      <StyledImgRight src={arrowRight} alt='arrowRight' />
    ) : (
      <StyledImgLeft src={arrowLeft} alt='arrowLeft' />
    )}
  </StyledArrow>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Arrow;
