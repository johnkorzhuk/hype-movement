import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Arrows from '../icons/Arrows';

const Container = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 25px;
  border: 1px solid white;
  width: 200px;
  line-height: 34px;
  border-radius: 20px / 20px;
  text-align: center;
  color: white;
  cursor: pointer;
  text-decoration: none !important;
  font-family: Avenir, open-sans;
  font-weight: 400;
  letter-spacing: 1.62px;
  font-size: 16px;
`;

const BuyNow = props => (
  <Container href="#" {...props}>
    Buy Now
    <Arrows color="#fff" orientation="right" />
  </Container>
);

export default BuyNow;
