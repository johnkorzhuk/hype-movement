import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Animate } from 'react-move';

import Arrows from '../icons/Arrows';

const Container = styled.a`
  display: flex;
  justify-content: space-around;
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

class BuyNow extends Component {
  state = {
    hovered: false
  };

  handleMouseIn = () => {
    this.setState({
      hovered: true
    });
  };

  handleMouseOut = () => {
    this.setState({
      hovered: false
    });
  };

  render() {
    const { hovered } = this.state;

    return (
      <Animate
        duration={500}
        data={{
          bgc: hovered ? '#fff' : 'transparent',
          color: hovered ? '#3C3C3C' : '#fff',
          arrowPos: hovered ? 10 : 0
        }}>
        {data => (
          <Container
            href="#"
            style={{
              backgroundColor: data.bgc,
              color: data.color
            }}
            {...this.props}
            onMouseEnter={this.handleMouseIn}
            onMouseLeave={this.handleMouseOut}>
            Buy Now
            <Arrows
              color={data.color}
              orientation="right"
              style={{
                left: data.arrowPos
              }}
            />
          </Container>
        )}
      </Animate>
    );
  }
}

export default BuyNow;
