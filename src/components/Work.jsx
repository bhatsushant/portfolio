import React, { useState } from 'react';
import styled from 'styled-components';
import Development from './Development';
import WebDesign from './WebDesign';
import { Link } from 'react-scroll';

const data = [
  'Web Development',
  'Backend Development',
  'Full Stack Development',
  'Software Development',
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: '${(props) => props.text}';
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
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
`;

const Work = () => {
  const [work, setWork] = useState('Web Development');
  return (
    <Section id='work'>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
            <Button>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to='contact'
              >
                Contact
              </Link>
            </Button>
          </List>
        </Left>
        <Right>
          {work === 'Web Development' || work === 'Full Stack Development' ? (
            <Development />
          ) : (
            <WebDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Work;
