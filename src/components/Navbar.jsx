import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li``;
const Icon = styled.img``;
const Button = styled.button``;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
