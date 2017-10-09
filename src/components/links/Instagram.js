import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InstagramLogo from '../logos/Instagram';

const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;

const InstagramLink = ({
  color,
  link = 'https://www.instagram.com/thehypemovement/',
  children,
  ...props
}) => (
  <Container href={link} {...props}>
    <InstagramLogo color={color} size={35} />
    {children}
  </Container>
);

InstagramLink.propTypes = {
  color: PropTypes.string.isRequired,
  link: PropTypes.string,
  children: PropTypes.element
};

export default InstagramLink;
