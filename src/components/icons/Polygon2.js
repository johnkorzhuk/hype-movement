import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
`;

const Polygon2 = ({ color, rotation = 0, blur = 0, width, height, ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 58 89"
    xmlns="http://www.w3.org/2000/svg"
    rotation={rotation}
    {...props}>
    <defs>
      <filter
        x="-17.6%"
        y="-7.9%"
        width="135.3%"
        height="115.8%"
        filterUnits="objectBoundingBox"
        id="a22z">
        <feGaussianBlur stdDeviation={blur} in="SourceGraphic" />
      </filter>
    </defs>
    <path
      filter="url(#a22z)"
      transform="rotate(-105 199.403 260.52)"
      d="M477 172l17-10.288661V134"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);

Polygon2.propTypes = {
  color: PropTypes.string.isRequired,
  rotation: PropTypes.number,
  blur: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Polygon2;
