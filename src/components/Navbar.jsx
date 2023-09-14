import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import PhoneIcon from '../img/phone-icon.png';

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  background-color: black;
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding-top: 15px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    /* flex-direction: column; */
    align-items: center;
    justify-content: flex-start;
    padding-top: 15px;
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    /* flex-direction: column; */
    width: 100vw;
    justify-content: center;
    align-items: center;
    z-index: 99; /* Ensure the menu is above other content */
    pointer-events: none; /* Initially not clickable */
    transition: opacity 0.3s ease-in-out;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 20px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px; /* Space between stacked links */
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

const Navbar = () => {
  return (
    <Section>
      <List>
        <ListItem>
          <Link spy={true} smooth={true} offset={-70} duration={500} to='hero'>
            Home
          </Link>
        </ListItem>
        <Link spy={true} smooth={true} offset={50} duration={500} to='about'>
          <ListItem>About</ListItem>
        </Link>
        <Link spy={true} smooth={true} offset={-70} duration={500} to='work'>
          <ListItem>Work</ListItem>
        </Link>
        <Link spy={true} smooth={true} offset={50} duration={500} to='contact'>
          <ListItem>Contact</ListItem>
        </Link>
        <Button>{/* <Icon src={PhoneIcon} /> */}</Button>
      </List>
    </Section>
  );
};

export default Navbar;
