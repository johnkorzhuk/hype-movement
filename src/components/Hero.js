import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Container from '../components/Container';
import Nav from '../components/Nav';

import bgImage from '../assets/img/bg.jpg';
import shirt1 from '../assets/img/Shirt-1.png';
import shirt2 from '../assets/img/Shirt-2.png';
import shirt3 from '../assets/img/Shirt-3.png';
import shoe1 from '../assets/img/Shoe-1.png';
import shoe2 from '../assets/img/Shoe-2.png';
import Poly1 from './icons/Polygon1';
import Poly2 from './icons/Polygon2';
import Poly3 from './icons/Polygon3';

const getItemTopPos = (type, pos) => {
  switch (pos) {
    case 0:
      if (type === 'shirt') return 170;
      else if (type === 'shoe') return 280;
      break;
    case 1:
      if (type === 'shirt') return 80;
      else if (type === 'shoe') return 200;
      break;

    case 2:
      return 15;
    default:
      break;
  }
};

const getItemLeftXPos = (type, pos) => {
  switch (pos) {
    case 0:
      if (type === 'shirt') return -60;
      else if (type === 'shoe') return -110;
      break;

    case 1:
      if (type === 'shirt') return 0;
      else if (type === 'shoe') return 100;
      break;

    case 2:
      return 55;
    default:
      break;
  }
};

const MainContainer = styled.div`
  background-color: #3c3c3c;
  background: url(${bgImage}) no-repeat;
  background-size: cover;
  background-position: 40% 75%;
  position: relative;
  height: 800px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const Shirt = styled.img`
  position: absolute;
  z-index: ${({ pos }) => pos + 10};
  top: ${({ pos }) => `${getItemTopPos('shirt', pos)}px`};
  left: 50%;
  height: ${({ large }) => (large ? '70vw' : '60vw')};
  max-height: ${({ large }) => (large ? '420px' : '350px;')};
  transform: ${({ pos }) =>
    `translateX(calc(-50% + ${getItemLeftXPos('shirt', pos)}%));`};
`;

const Shoe = styled.img`
  z-index: 14;
  position: absolute;
  top: ${({ pos }) => `${getItemTopPos('shoe', pos)}px`};
  left: 50%;
  height: ${({ large }) => (large ? '50vw' : '36vw')};
  max-height: ${({ large }) => (large ? '300px' : '240px')};
  transform: ${({ pos }) => `translateX(calc(-50% + ${getItemLeftXPos('shoe', pos)}%));`};
`;

const PolyContainer = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  top: 15%;
  height: 82%;
`;

const polyStyles = css`
  position: absolute;
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
  z-index: ${({ zIndex }) => zIndex};
`;

const StyledPoly1 = styled(Poly1)`
  ${() => polyStyles};
`;

const StyledPoly2 = styled(Poly2)`
  ${() => polyStyles};
`;

const StyledPoly3 = styled(Poly3)`
  ${() => polyStyles};
`;

const Hero = () => (
  <MainContainer>
    <PolyContainer>
      <StyledPoly1
        color="#D8D8D8"
        width={50}
        blur={3}
        height={80}
        top={20}
        left={10}
        rotation={0}
        zIndex={10}
      />

      <StyledPoly1
        color="#D8D8D8"
        width={20}
        height={30}
        blur={1}
        top={70}
        left={55}
        rotation={100}
        zIndex={12}
      />

      <StyledPoly1
        color="#696767"
        width={40}
        height={40}
        blur={1}
        top={10}
        left={90}
        rotation={200}
        zIndex={11}
      />

      <StyledPoly2
        color="#D8D8D8"
        width={80}
        height={80}
        blur={1}
        top={15}
        left={30}
        rotation={0}
        zIndex={16}
      />

      <StyledPoly2
        color="#696767"
        width={70}
        height={70}
        blur={0}
        top={73}
        left={80}
        rotation={20}
        zIndex={0}
      />

      <StyledPoly3
        color="#696767"
        width={170}
        height={170}
        blur={2}
        top={-10}
        left={70}
        rotation={300}
        zIndex={16}
      />

      <StyledPoly3
        color="#D8D8D8"
        width={50}
        height={50}
        blur={3}
        top={65}
        left={20}
        rotation={300}
        zIndex={12}
      />

      <StyledPoly3
        color="#696767"
        width={40}
        height={40}
        blur={1}
        top={80}
        left={5}
        rotation={200}
        zIndex={0}
      />
    </PolyContainer>
    <Container>
      <Nav />
      <ItemContainer>
        <Shoe src={shoe1} alt="Black shoe" pos={0} />
        <Shoe src={shoe2} alt="Black shoe" pos={1} />
        <Shirt src={shirt1} alt="Grey Ultra shirt" pos={0} />
        <Shirt src={shirt2} alt="Black Ultra shirt" pos={1} large />
        <Shirt src={shirt3} alt="Light Grey Ultra shirt" pos={2} />
      </ItemContainer>
    </Container>
  </MainContainer>
);

// Hero.propTypes = {
// };

export default Hero;
