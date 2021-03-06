import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
`;

const Polygon1 = ({ color, rotation = 0, blur = 0, width, height, ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 58 89"
    xmlns="http://www.w3.org/2000/svg"
    rotation={rotation}
    {...props}>
    <defs>
      <filter
        x="-28.6%"
        y="-16.4%"
        width="157.1%"
        height="132.9%"
        filterUnits="objectBoundingBox"
        id="a11z">
        <feGaussianBlur stdDeviation={blur} in="SourceGraphic" />
      </filter>
    </defs>
    <path
      filter="url(#a11z)"
      d="M125 226.976752L167 256l-10.687535-29.023248L167 183"
      transform="translate(-117 -175)"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

Polygon1.propTypes = {
  color: PropTypes.string.isRequired,
  rotation: PropTypes.number,
  blur: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Polygon1;
