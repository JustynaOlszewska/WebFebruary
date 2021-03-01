import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
  /* background-color: ${props => (props.name === 'forWhom' ? 'red' : 'yellow')}; */
`;

const MainContent = ({ element }) => {

  const { title, img, name, text, additionalText, additionalText2, list } = element;

  return (
    <StyledSection name={name}>
      <h1>{title}</h1>
      <p>{text}</p>
      {additionalText && additionalText}
      {additionalText2 && additionalText2}
      {<ul>{list && list.map(element => <li key={element}>{element}</li>)}</ul>}
      {name !== 'withWho' ? (
        <img width='100px' height='auto' src={img} alt={img} />
      ) : (
          <a href="!#">
            <img width='100px' height='auto' src={img} alt={img} />
          </a>
        )}
    </StyledSection>
  );
};

MainContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MainContent;
