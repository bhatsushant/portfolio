import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Particle from './components/Particle';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Particle></Particle>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Work></Work>
      <Contact></Contact>
    </Container>
  );
}

export default App;
