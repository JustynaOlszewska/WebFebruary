import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSpan = styled.span`
  padding: 3px;
  cursor: pointer;
  border-radius: 50%;
  background: ${props => (props.active ? '#ffcd19' : '#fff')};
  @media(min-width: 767px){
    padding: 6px;
  };
`;

const Dot = ({ active }) => <StyledSpan active={active} />;

Dot.propTypes = {
  active: PropTypes.bool,
};

export default Dot;
