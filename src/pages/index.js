import React, { Component } from "react";
// import Link from 'gatsby-link';
import styled from "styled-components";
import { Animate } from "react-move";

import Hero from "../components/Hero";
import Container from "../components/Container";
import Reserve from "../components/links/Reserve";
import InstagramLink from "../components/links/Instagram";
import HypeLogo from "../components/logos/Hype";

import Arrows from "../components/icons/Arrows";

import Ted1Small from "../assets/img/Ted1Small.jpg";
import Ted1Large from "../assets/img/Ted1Large.jpg";
import Luke1Small from "../assets/img/Luke1Small.jpg";
import Luke1Large from "../assets/img/Luke1Large.jpg";
import Dave1Small from "../assets/img/Dave1Small.jpg";
import Dave1Large from "../assets/img/Dave1Large.jpg";

const Skewed = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -150px;
  background: #fff;
`;

const Main = styled.main`
  position: relative;
`;

const ReserveContainer = Container.extend`
  position: relative;
  top: -200px;
  display: flex;
  justify-content: center;
  padding: 0;

  @media (min-width: 600px) {
    top: -150px;
  }
`;

const About = Container.withComponent("section").extend`
  position: relative;
  max-width: 800px;
  text-align: center;
  padding-top: 0;
  margin-top: -50px;

  & p {
    font-size: 14px;
    font-family: avenir, open-sans;
    margin-top: 30px;
    color: #3C3C3C;
  }
`;

const Supply = Container.withComponent("section").extend`
  position: relative;
  text-align: center;
  text-transform: uppercase;

  & h3 {
    font-family: avenir, open-sans;
    font-size: 1rem;
    letter-spacing: 1px;
    color: #7B7166;
    margin-bottom: 10px;
  }
`;

const PhotoContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;

  @media (min-width: 600px) {
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 955px) {
    justify-content: space-between;
  }
`;

const SmallPhoto = styled.img`
  margin: 0;
  padding-bottom: 18px;

  @media (min-width: 600px) {
    display: none;
  }
`;

const LargePhoto = styled.img`
  display: none;
  margin: 0;
  padding-bottom: 18px;
  padding-left: ${({ leftPad }) => (leftPad ? "20px" : 0)};
  height: 100%;
  width: ${({ full, half }) => (full ? "100%" : half ? "50%" : "auto")};

  @media (min-width: 600px) {
    display: inline-block;
  }
`;

const StyledInstagramLink = styled(InstagramLink)`
  justify-content: center;
  margin-top: 30px;
  width: 100%;

  @media (min-width: 955px) {
    width: auto;
    position: absolute;
    right: 140px;
    bottom: 80px;
  }
`;

const InstagramLinkContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7b7166;

  & span {
    font-weight: 500;
    padding: 3px 30px 0 10px;
    text-transform: uppercase;
  }
`;

class IndexPage extends Component {
  state = {
    hovered: false,
    scrollY: 0,
    skew: -8
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({
      skew: (window.scrollY - this.hero.offsetHeight) / 100
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { skew } = this.state;
    this.setState({
      scrollY: window.scrollY
    });
    if (window.scrollY - this.hero.offsetHeight < -241) {
      if (skew > 0 && skew < 1) {
        this.setState({
          skew: 0
        });
      } else {
        this.setState({
          skew: (window.scrollY - this.hero.offsetHeight) / 100
        });
      }
    }
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
    const { hovered, scrollY, skew } = this.state;

    return (
      <div>
        <Hero
          scrollY={scrollY}
          innerRef={node => {
            this.hero = node;
          }}
        />
        <Main>
          <Skewed
            innerRef={node => {
              this.skewed = node;
            }}
            style={{
              transform: `skewY(${skew}deg)`
            }}
          />
          <ReserveContainer>
            <Reserve text="BUY NOW" />
          </ReserveContainer>

          <About>
            <HypeLogo color="#3C3C3C" />
            <p>
              The Hype Movement is a streetwear brand created for the hype
              beasts and the sneaker enthusiasts. For the ones that live for
              hype. We wanted to bring this culture into our apparel where the
              hype isn’t only around the sneakers, but in the clothes as well.
              To curate designs specific for certain sneaker releases and to
              provide our customers with the current trends in the streetwear
              community.
            </p>
          </About>

          <Supply>
            <h3>Check out our supply</h3>
            <Arrows color="#7B7166" />

            <PhotoContainer>
              <SmallPhoto src={Ted1Small} alt="Ted wearing Hype clothing" />
              <SmallPhoto src={Luke1Small} alt="Luke wearing Hype clothing" />
              <SmallPhoto src={Dave1Small} alt="Dave wearing Hype clothing" />

              <LargePhoto
                src={Ted1Large}
                alt="Ted wearing Hype clothing"
                full
              />

              <LargePhoto
                src={Luke1Large}
                alt="Luke wearing Hype clothing"
                half
              />
              <LargePhoto
                src={Dave1Large}
                alt="Dave wearing Hype clothing"
                half
                leftPad
              />

              <StyledInstagramLink color="#7b7166">
                <Animate
                  duration={500}
                  data={{
                    arrowPos: hovered ? 10 : 0
                  }}
                >
                  {data => (
                    <InstagramLinkContent
                      onMouseEnter={this.handleMouseIn}
                      onMouseLeave={this.handleMouseOut}
                    >
                      <span>peep the gram</span>
                      <Arrows
                        color="#7B7166"
                        orientation="right"
                        style={{
                          left: data.arrowPos
                        }}
                      />
                    </InstagramLinkContent>
                  )}
                </Animate>
              </StyledInstagramLink>
            </PhotoContainer>
          </Supply>
        </Main>
      </div>
    );
  }
}

export default IndexPage;
