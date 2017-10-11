import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  opacity: 0.6;
`;

const Polygon3 = ({ color, rotation = 0, blur = 0, width, height, ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 58 89"
    xmlns="http://www.w3.org/2000/svg"
    rotation={rotation}
    {...props}>
    <defs>
      <filter
        x="-24.5%"
        y="-27.9%"
        width="149.0%"
        height="155.8%"
        filterUnits="objectBoundingBox"
        id="filter-1">
        <feGaussianBlur stdDeviation={blur} in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Hype-Website" transform="translate(-453.000000, -611.000000)" fill={color}>
        <polygon
          id="Path-6-Copy-2"
          filter="url(#filter-1)"
          transform="translate(478.500000, 647.500000) rotate(-105.000000) translate(-478.500000, -647.500000) "
          points="454 662.321026 503 669 466.731662 626"
        />
      </g>
    </g>
  </Svg>
);

Polygon3.propTypes = {
  color: PropTypes.string.isRequired,
  rotation: PropTypes.number,
  blur: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default Polygon3;
