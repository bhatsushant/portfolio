import React, { Suspense } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Link } from 'react-scroll';
import GitHubLogo from '../../public/img/github-icon.svg';
import LinkedInLogo from '../../public/img/linkedin-icon.svg';
import InstagramLogo from '../../public/img/instagram-icon.svg';
import TwitterLogo from '../../public/img/twitter-icon.svg';
import CV from '../../public/assets/sushant-bhat-resume.pdf';

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

const Anchor = styled.a`
  background-color: #da4ea2;
  height: 20px;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Icon = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
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
  width: 500px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

const Hero = () => {
  const gitHubUrl = 'https://github.com/bhatsushant';
  const linkedInUrl = 'https://www.linkedin.com/in/sushantbhat93/';
  const instagramUrl = 'https://www.instagram.com/sushantbhat_22/';
  const twitterUrl = 'https://twitter.com/sushantbhat_22';

  const handleGitHubIcon = () => window.open(gitHubUrl, '_blank');
  const handleLinkedInIcon = () => window.open(linkedInUrl, '_blank');
  const handleInstagramIcon = () => window.open(instagramUrl, '_blank');
  const handleTwitterIcon = () => window.open(twitterUrl, '_blank');

  return (
    <Section id='hero'>
      <Navbar></Navbar>
      <Container>
        <Left>
          <Title>Sushant Bhat</Title>
          <Line src='./public/img/line.png'></Line>
          <Role>Full Stack Developer</Role>
          <Subtitle>
            Building Seamless Web Experiences from Front to Back
          </Subtitle>
          <ButtonContainer>
            <Button>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to='about'
              >
                Learn More
              </Link>
            </Button>
            <Anchor href={CV} download=''>
              Download CV
            </Anchor>
          </ButtonContainer>
          <IconContainer>
            <Icon src={GitHubLogo} onClick={handleGitHubIcon}></Icon>
            <Icon
              src={LinkedInLogo}
              onClick={handleLinkedInIcon}
              className='tooltip'
            ></Icon>
            <Icon
              src={InstagramLogo}
              onClick={handleInstagramIcon}
              className='tooltip'
            ></Icon>
            <Icon
              src={TwitterLogo}
              onClick={handleTwitterIcon}
              className='tooltip'
            ></Icon>
          </IconContainer>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color='#3d1c56'
                  attach='material'
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src='./public/img/profile.jpg'></Img>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
