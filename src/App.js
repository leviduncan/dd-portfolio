import './App.css';
import Head from './components/Head';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About'
import Connect from './components/Contact';

function App() {
  return (
    <div className="App">
      <Head />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;
