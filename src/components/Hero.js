import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../components/Container';
import Nav from '../components/Nav';

import bgImage from '../assets/img/bg.jpg';
import shirt1 from '../assets/img/Shirt-1.png';
import shirt2 from '../assets/img/Shirt-2.png';
import shirt3 from '../assets/img/Shirt-3.png';
import shoe1 from '../assets/img/Shoe-1.png';
import shoe2 from '../assets/img/Shoe-2.png';

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
  top: ${({ pos }) => `${getItemTopPos('shirt', pos)}px`};
  left: 50%;
  height: ${({ large }) => (large ? '70vw' : '60vw')};
  max-height: ${({ large }) => (large ? '420px' : '350px;')};
  transform: ${({ pos }) =>
    `translateX(calc(-50% + ${getItemLeftXPos('shirt', pos)}%));`};
`;

const Shoe = styled.img`
  z-index: 10;
  position: absolute;
  top: ${({ pos }) => `${getItemTopPos('shoe', pos)}px`};
  left: 50%;
  height: ${({ large }) => (large ? '50vw' : '36vw')};
  max-height: ${({ large }) => (large ? '300px' : '240px;')};
  transform: ${({ pos }) => `translateX(calc(-50% + ${getItemLeftXPos('shoe', pos)}%));`};
`;

const Hero = () => (
  <MainContainer>
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
