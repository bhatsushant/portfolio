import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Link } from 'react-scroll';
import Cube from './Cube';
import LineImage from '../img/line.png';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: url('./public/img/bg.jpeg'); */

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

const Left = styled.div`
  flex: 1;

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
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
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

const About = () => {
  return (
    <Section id='about'>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </Left>
        <Right>
          <Title>Full Stack Developer</Title>
          <Line src={LineImage}></Line>
          {/* <Role>Full Stack Developer</Role> */}
          <Subtitle>
            Developing comprehensive applications with the MERN Stack: React,
            MongoDB, Express, Node.js. Experience working with additional
            technologies such as Redux, GraphQL, and Redis.
          </Subtitle>
          <Button>
            <Link spy={true} smooth={true} offset={50} duration={500} to='work'>
              Learn More
            </Link>
          </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
