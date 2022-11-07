import React, { Component } from 'react';
import Navbar from './constuctor/Navbar.jsx'
import Header from './constuctor/header/Header.jsx'
import Section from './constuctor/section/Section.jsx'
import Foooter from './constuctor/footer/Footer.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Section/>
        <Foooter/>
      </div>
    );
  }
}

export default App;

