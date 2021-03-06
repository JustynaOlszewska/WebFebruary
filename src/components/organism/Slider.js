import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slide from '../modules/SiderContent/Slide';
import Arrow from '../modules/SiderContent/Arrow';
import Dots from '../modules/SiderContent/Dots';
import Text from '../modules/SiderContent/Text';
import Buttons from '../modules/SiderContent/Buttons';
import { images } from '../../constant/imageToSlider';

const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  max-width: 1600px;
  left: 50%;
  transform: translate(-50%);
  height: 30vh;
  color: #fff;
  overflow: hidden;
   @media(min-width:424px ) {
    height:40vh;
  };
  @media(min-width:767px ) {
    height: 100vh;
  };
 
`;

const StyledSliderContent = styled.div`
  transform: translateX(-${props => props.translate + 'px'});
  transition: transform ease-out ${props => props.transition + 's'};
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
`;

const Slider = () => {
  const [resize, setResize] = useState(window.innerWidth);

  useEffect(() => {
    setResize(window.innerWidth);
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
