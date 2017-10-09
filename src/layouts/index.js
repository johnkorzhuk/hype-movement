import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Container from '../components/Container';
import Nav from '../components/Nav';
import InstagramLink from '../components/links/Instagram';
import BuyNow from '../components/links/BuyNow';

import HypeLogo from '../components/logos/Hype';

import bgImage from '../assets/img/bg.jpg';

import './index.css';

const Hero = styled.div`
  background: url(${bgImage}) no-repeat;
  background-size: cover;
  background-position: 40% 75%;
  position: relative;
  height: 700px;
`;

const Foot = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  background: url(${bgImage}) no-repeat;
  background-size: cover;
  background-position: 40% 10%;
`;

const FooterContainer = Container.extend`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterItem = styled.div`
  order: ${({ order }) => order || 0};
  padding: 25px 0;

  @media (min-width: 600px) {
    order: 0;
  }
`;

const InstagramLinkText = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
`;

const Header = () => (
  <Hero>
    <Container>
      <Nav />
    </Container>
  </Hero>
);

const Footer = () => (
  <Foot>
    <FooterContainer>
      <FooterItem>
        <InstagramLink color="#fff">
          <InstagramLinkText>TheHypeMovement</InstagramLinkText>
        </InstagramLink>
      </FooterItem>
      <FooterItem order="-1">
        <HypeLogo color="#fff" />
      </FooterItem>
      <FooterItem>
        <BuyNow />
      </FooterItem>
    </FooterContainer>
  </Foot>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Hype Movement"
      meta={[
        { name: 'description', content: 'The Hype Movement' },
        { name: 'keywords', content: 'The Hype Movement, Hype Movement' }
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
