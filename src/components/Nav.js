import React from 'react';
// import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import HypeLogo from './logos/Hype';

import InstagramLink from './links/Instagram';
import BuyNow from './links/BuyNow';

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;

  @media (min-width: 600px) {
    justify-content: space-between;
  }
`;

const Instagram = styled(InstagramLink)`
  display: none;

  @media (min-width: 600px) {
    display: flex;
  }
`;

const Buy = styled(BuyNow)`
  display: none;

  @media (min-width: 600px) {
    display: flex;
  }
`;

const InstagramLinkText = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
`;

const Nav = () => (
  <Container>
    <Instagram color="#fff">
      <InstagramLinkText>TheHypeMovement</InstagramLinkText>
    </Instagram>

    <h1 style={{ margin: 0 }}>
      <Link to="/">
        <HypeLogo color="#fff" />
      </Link>
    </h1>

    <Buy />
  </Container>
);

// Nav.propTypes = {};

export default Nav;
