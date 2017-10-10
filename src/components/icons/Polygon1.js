import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Arrows = ({ color, rotation = 0, ...props }) => (
  <svg
    width="58"
    height="89"
    viewBox="0 0 58 89"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <defs>
      <filter
        x="-28.6%"
        y="-16.4%"
        width="157.1%"
        height="132.9%"
        filterUnits="objectBoundingBox"
        id="a">
        <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
      </filter>
    </defs>
    <path
      filter="url(#a)"
      d="M125 226.976752L167 256l-10.687535-29.023248L167 183"
      transform="translate(-117 -175)"
      fill="#D8D8D8"
      fillRule="evenodd"
    />
  </svg>
);

Arrows.propTypes = {
  color: PropTypes.string.isRequired,
  rotation: PropTypes.number
};

export default Arrows;
