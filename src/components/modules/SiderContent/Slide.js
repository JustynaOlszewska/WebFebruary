import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSlide = styled.div`
  /* background-image: url(${props => props.content}); */

  height: 'auto';
  width: ${props => props.imagesLength + '%'};
  width: 25%;
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Slide = ({ content, imagesLength }) => {
  return (
    <StyledSlide
      style={{
        backgroundImage: `url(${content})`,
      }}
      content={content}
      imagesLength={100 / `${imagesLength}`}
    />
  );
};
Slide.propTypes = {
  content: PropTypes.string.isRequired,
  imagesLength: PropTypes.number.isRequired,
};
export default Slide;
