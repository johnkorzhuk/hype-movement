import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getAngle = orientation => {
  switch (orientation) {
    case 'down':
      return 0;
    case 'left':
      return 90;
    case 'up':
      return 180;
    case 'right':
      return 270;
    default:
  }
};

const Container = styled.svg`
  transform: rotate(${({ orientation }) => getAngle(orientation)}deg);
`;

const Arrows = ({ color, orientation = 0, ...props }) => (
  <Container
    {...props}
    orientation={orientation}
    width="17"
    height="22"
    viewBox="0 0 17 22"
    xmlns="http://www.w3.org/2000/svg">
    <g strokeWidth="2.16" stroke={color} fill="none" fillRule="evenodd">
      <path d="M15.9573873 12.4078288l-7.3785055 7.3785055-7.5362696-7.5362696M15.957388 1.7499353L8.5788822 9.128441 1.0426127 1.592171" />
    </g>
  </Container>
);

Arrows.propTypes = {
  color: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['up', 'right', 'down', 'left'])
};

export default Arrows;
