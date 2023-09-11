import './App.css';
import styled from 'styled-components';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Particle from './components/Particle';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  /* overflow-y: auto; */
  scrollbar-width: none;
  color: white;
  /* background-color: #171717; */
  /* background: url('./public/img/bg.jpeg'); */
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Particle></Particle>
      <Hero></Hero>
      <About></About>
      <Work></Work>
      <Contact></Contact>
    </Container>
  );
}

export default App;
