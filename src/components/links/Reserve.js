import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Animate } from 'react-move';

import Arrows from '../icons/Arrows';

const Container = styled.div`
  position: relative;
  cursor: pointer;
  box-shadow: 0px 10px 45px 2px rgba(0, 0, 0, 0.15);
  height: 70px;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0px 10px 45px 2px rgba(0, 0, 0, 0.25);
  }
`;

const StyledArrows = styled(Arrows)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(270deg);
  right: 30px;
`;

class Reserve extends Component {
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
    const { text } = this.props;
    const { hovered } = this.state;
    return (
      <Animate
        duration={500}
        data={{
          pimaryColor: hovered ? '#BBBBBB' : '#937758',
          secondaryColor: hovered ? '#937758' : '#BBBBBB',
          arrowPos: hovered ? 23 : 33
        }}>
        {data => (
          <Container onMouseEnter={this.handleMouseIn} onMouseLeave={this.handleMouseOut}>
            <svg
              width="329"
              height="70"
              viewBox="0 0 329 70"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <path id="a" d="M0 0h329v70H0z" />
              </defs>
              <g fill="none" fillRule="evenodd">
                <g>
                  <mask id="b" fill="#fff">
                    <use xlinkHref="#a" />
                  </mask>
                  <use fill={data.secondaryColor} xlinkHref="#a" />
                  <path
                    d="M329 70.0343043v-69.875h-56.589719c-16.209886 16.2098863-39.501553 39.501553-69.875 69.875H329z"
                    fill="#3C3C3C"
                    mask="url(#b)"
                  />
                  <path
                    fill={data.pimaryColor}
                    mask="url(#b)"
                    d="M204.5.1312968l59.5 70.115729H-.25V.131297"
                  />
                </g>
                <text
                  fontFamily="Avenir, open-sans"
                  fontSize="14"
                  fontWeight="700"
                  letterSpacing="1.75"
                  fill="#FFF">
                  <tspan x="43" y="41">
                    {text}
                  </tspan>
                </text>
              </g>
            </svg>
            <StyledArrows
              orientation="right"
              color="#fff"
              style={{
                right: data.arrowPos
              }}
            />
          </Container>
        )}
      </Animate>
    );
  }
}

Reserve.propTypes = {
  text: PropTypes.string
};

export default Reserve;
