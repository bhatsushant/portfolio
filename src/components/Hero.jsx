import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Role = styled.div`
  font-size: 44px;
  color: #da4ea2;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  margin-bottom: 0px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: lightgray;
  margin-top: 0%;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Line = styled.img`
  height: 5px;
`;

const Button = styled.div`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 900px;
  height: 550px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  /* animation: animate 2s infinite ease alternate; */

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  /* @keyframes animate {
    to {
      transform: translateY(20px);
    }
  } */
`;

const Hero = () => {
  return (
    <Section>
      <Navbar></Navbar>
      <Container>
        <Left>
          <Title>Sushant Bhat</Title>
          <Line src='./public/img/line.png'></Line>
          <Role>Full Stack Developer</Role>
          <Subtitle>
            Building Seamless Web Experiences from Front to Back
          </Subtitle>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src='./public/img/profile.jpg'></Img>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
