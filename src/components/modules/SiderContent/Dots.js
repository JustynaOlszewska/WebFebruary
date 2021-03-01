import React from 'react';
import PropTypes from 'prop-types';

import Dot from '../../modules/SiderContent/Dot';
import styled from 'styled-components';
const StyledDots = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dots = ({ slides, activeIndex }) => (
  <StyledDots>
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </StyledDots>
);
Dots.propTypes = {
  slides: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
};
export default Dots;
