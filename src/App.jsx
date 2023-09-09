import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url('./public/img/bg.jpeg');
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero></Hero>
      <Who></Who>
      <Works></Works>
    </Container>
  );
}

export default App;
