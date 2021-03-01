import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
const StyledSpan = styled.span`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${props => (props.active ? 'black' : 'white')};
`;

const Dot = ({ active }) => <StyledSpan active={active} />;
Dot.propTypes = {
  active: PropTypes.bool,
};
export default Dot;
