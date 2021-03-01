import React, { useEffect, useState } from 'react';

import Slide from '../modules/SiderContent/Slide';
import Arrow from '../modules/SiderContent/Arrow';
import Dots from '../modules/SiderContent/Dots';
import Text from '../modules/SiderContent/Text';
import Buttons from '../modules/SiderContent/Buttons';
import styled from 'styled-components';
import school from '../../images/school.jpg';
import cw1 from '../../images/cw1.jpg';
import cw31 from '../../images/cw31.jpg';
import gabkaprzem from '../../images/gabkaprzem.jpg';

const StyledSlider = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const StyledSliderContent = styled.div`
  transform: translateX(-${(props) => props.translate + 'px'});
  transition: transform ease-out ${(props) => props.transition + 's'};
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
`;

const images = [school, cw1, cw31, gabkaprzem];
const Slider = () => {
  const [resize, setResize] = useState(window.innerWidth);

  const getWidth = () => setResize(window.innerWidth);

  useEffect(() => {
    getWidth();
  }, [resize]);

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * resize,
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (images.length - 1) * resize,
        activeIndex: images.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * resize,
    });
  };

  return (
    <StyledSlider>
      <StyledSliderContent
        translate={translate}
        transition={transition}
        width={resize * images.length}
      >
        {images.map((slide, i) => (
          <Slide key={slide + i} content={slide} imagesLength={images.length} />
        ))}
        <p>{resize}</p>
      </StyledSliderContent>
      <Text />
      <Buttons />
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Dots slides={images} activeIndex={activeIndex} />
    </StyledSlider>
  );
};
export default Slider;
