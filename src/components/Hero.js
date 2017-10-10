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

const getShirtTopPos = pos => {
  switch (pos) {
    case 0:
      return 170;
    case 1:
      return 80;
    case 2:
      return 15;
    default:
      break;
  }
};

const getShirtLeftXPos = pos => {
  switch (pos) {
    case 0:
      return -60;
    case 1:
      return 0;
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

const ShirtContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const Shirt = styled.img`
  position: absolute;
  top: ${({ pos }) => `${getShirtTopPos(pos)}px`};
  left: 50%;
  height: ${({ large }) => (large ? '70vw' : '60vw')};
  max-height: ${({ large }) => (large ? '420px' : '350px;')};
  transform: ${({ pos }) => `translateX(calc(-50% + ${getShirtLeftXPos(pos)}%));`};
`;

const Hero = () => (
  <MainContainer>
    <Container>
      <Nav />
      <ShirtContainer>
        <Shirt src={shirt1} alt="Grey Ultra shirt" pos={0} />
        <Shirt src={shirt2} alt="Black Ultra shirt" pos={1} large />
        <Shirt src={shirt3} alt="Light Grey Ultra shirt" pos={2} />
      </ShirtContainer>
    </Container>
  </MainContainer>
);

// Hero.propTypes = {
// };

export default Hero;
