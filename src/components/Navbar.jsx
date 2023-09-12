import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import PhoneIcon from '../img/phone-icon.png';

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 90%; /* Adjust the width for smaller screens */
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

// const Logo = styled.img`
//   height: 50px;
// `;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    flex-direction: column; /* Stack the links vertically on smaller screens */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff; /* Background color for mobile menu */
    justify-content: center;
    align-items: center;
    z-index: 1; /* Ensure the menu is above other content */
    opacity: 0; /* Initially hidden */
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

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 20px;
    right: 20px;
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
      <Container>
        <Links>
          {/* <Logo src=""></Logo> */}
          <List>
            <ListItem>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='hero'
              >
                Home
              </Link>
            </ListItem>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to='about'
            >
              <ListItem>About</ListItem>
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to='work'
            >
              <ListItem>Work</ListItem>
            </Link>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Button>
            <Icon src={PhoneIcon} />
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
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
