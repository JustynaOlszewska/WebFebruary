import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSlide = styled.div`
  height: 'auto';
  width: ${props => props.imagesLength + '%'};
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Slide = ({ content, imagesLength }) => (
  <StyledSlide
    style={{
      backgroundImage: `url(${content})`,
    }}
    content={content}
    imagesLength={100 / `${imagesLength}`}
  />
);

Slide.propTypes = {
  content: PropTypes.string.isRequired,
  imagesLength: PropTypes.number.isRequired,
};

export default Slide;
