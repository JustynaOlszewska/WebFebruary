import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dot from '../../modules/SiderContent/Dot';

const StyledDots = styled.div`
  position: absolute;
  height: 15%;
  top: 41%;
  right: 0;
  width: 13%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Dots = ({ slides, activeIndex }) => (
  <StyledDots>
    {slides.map((slide, i) => (
      <Dot key={slide + i} active={activeIndex === i} />
    ))}
  </StyledDots>
);

Dots.propTypes = {
  slides: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default Dots;
