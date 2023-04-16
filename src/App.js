import './App.css';
import React from 'react';
import Nav from './Nav';
import Projects from './Projects/Projects';
import Home from './Home/Home';
import About from './About/About'
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <section id="home">
        <Home/>
      </section>
      <section id="abou">
        <About/>
      </section>
      <section id="proj">
        <Projects/>
      </section>
      <section id="con">
        <Contact/>
      </section>

    </div>
  );
}
export default App;